/* ============================================================================
    SuccessEvents is a free and open-source data layer designed to streamline
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

	See more documentation at SuccessEvents.dev, for more information please
	contact me at andy@successevents.dev
============================================================================ */

function(){ // Count The Number Of Times Clicks
	// Check For Any Special Conditions First
	switch({{Container Version}}){case "QUICK_PREVIEW": // Found Returning "User"
		return -1; // Not Availible In GTM Preview Mode
	}

	// Get Page Level Storage (if Availible)
	switch(typeof window.sessionStorage){case null: // Ignore
	break;case "object": // Session Storage Enabled
		var _CL={'icks': {{Default - Cookie - Click Count}} }; // Get Variables
		if(_CL['icks']){ // Does Click Count Exisit?
			return parseInt(sessionStorage.getItem(_CL['icks']));
		}
	}

	// Not Availible
	return -1;
}
