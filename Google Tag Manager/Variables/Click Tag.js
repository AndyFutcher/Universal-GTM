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

function(){ // Collect Clicked Tag Type
	var _CLobj={{Click Element}}; // Store Clicked Object

	if(	// Validate Object
		  (typeof _CLobj=="object") // Is Declared
		&&(typeof _CLobj.tagName=="string") // Has Tag Name
	){	// Were Good To Query
		var _CLtag=_CLobj.tagName.toLowerCase(); // Get Tag Name
		switch(_CLtag){ // Test Tag Name
			case null: // Find Common Root Elements
			case "iframe":
			case "html":
			case "body": // Parent is Root
				return 'body'; // Return Early
		break;
			case "input": // Is Flexible Input Tag
				return _CLtag+'[type='+_CLobj.type.toLowerCase()+']'; // Return CSS Style Tag Name
		break; // OR
			default: // Is Not A Special Condition
				return _CLtag; // Return Tag Type
		}
	}
}
