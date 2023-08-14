/* ============================================================================
    Universal-GTM is a free and open-source data layer designed to streamline
    & enhance the accuracy of your website digital analytics and PWA tracking.
    Copyright (C) 2020 Andy Xelancer Futcher

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

	See more documentation at andyfutcher.com/universal-gtm, or for more information
	reach out to me at andyfutcher.com
============================================================================ */

function() { // Mirror Action Events On Facebook
    if(typeof window.fbq=="function"){ // Check Facebook Pixel Is Declared (should always be based on GTM Setup Tag)
        var _FB={ver: "{{Container Version}}" // Container Version
            ,value: "{{Event Value}}"
			,currency: "{{Ecommerce - Transaction - Currency}}"
        };

        // Check For Any Special Conditions
        switch(_FB['ver']){case "QUICK_PREVIEW": // Found Returning "User"
            return false; // Not Availible In GTM Preview Mode
        }

		// Push Template Selection
		fbq('track', "Purchase", {value: _FB['value'], currency: _FB['currency']}); // Transaction

		// Template Choices
		//q('trackCustom', _FB['event'].replace(' ',''), {content_category: _FB['category'], content_name: _FB['label'], value: _FB['value']}); // Custom Events
		//fbq('trackCustom', _FB['event'].replace(' ','')); // Simple Custom Event
		//fbq('track', "AddToCart"); // Add To Cart
		//fbq('track', "InitiateCheckout"); // Initiate Checkout
		//fbq('track', "Contact"); // Contact Interaction
		//fbq('track', "CompleteRegistration"); // Complete Registration
		//fbq('track', "FindLocation"); // Find Location

        // Completed Successfully
        return true;
    }; // If Facebook Pixel Is NOT Loaded
	return false;
}
