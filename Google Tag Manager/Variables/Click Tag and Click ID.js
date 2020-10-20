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
		var _CLtag=_CLobj.tagName.toLowerCase(); // Get Tag Name
		var _CLid=_CLobj.id; // Get Tag Name
		if(_CLid){_CLid='#'+_CLid;}; // Prefix ID Selector
		switch(_CLtag){ // Test Tag Name
			case "input": // Is Flexible Input Tag
				return _CLtag+'[type='+_CLobj.type+']'+_CLid; // Return CSS Style Tag Name
		break; // OR
			default: // Is Not A Special Condition
				return _CLtag+_CLid; // Return Tag Type
		}
	}
}
