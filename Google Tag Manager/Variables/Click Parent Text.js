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

function(){ // Collect Clicked Parent Rendered Text
	var _CLobj={{Click Element}}; // Store Clicked Object

	if(	// Validate Object
		  (typeof _CLobj=="object") // Is Declared
		&&(typeof _CLobj.tagName=="string") // Has Tag Name
	){	// Were Good To Query
		switch(_CLobj.tagName.toLowerCase()){ // Test Tag Name
			case "input": // Is Flexible Input Tag
			switch(_CLobj.type.toLowerCase()){ // Test Input Types
				case "button":
				case "submit":
				case "reset": // Are Button Types
					return _CLobj.value.substr(0,100);
			}
		break; // OR
			case "img": // Is Image
				return _CLobj.alt.substr(0,100);
		break; // OR
			default: // Is Not A Special Condition, Get Both Parent & Element innerText
			switch(_CLobj.parentElement.tagName.toLowerCase()){ // Depends On Tag Type
				case null: // Ignore Parent Node When Tag Matches These Types
				case "html":
				case "body":
				case "iframe":
					return _CLobj.innerText.substr(0,100);
			break; // Else:
				default: // Any Other Element Type Is Valid Parent
					return _CLobj.parentElement.innerText.substr(0,100);
			}
		}
	}
}
