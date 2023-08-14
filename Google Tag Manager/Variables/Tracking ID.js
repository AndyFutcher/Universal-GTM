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

function(){ // Collect Page Level Tracking ID
	var _GAobj=document.head.querySelector('meta[property="ga:trackingId"]');

	// Try Metadata Value
	if((typeof _GAobj=="object")&&(_GAobj!==null)){ // Has Meta Tag
		if(typeof _GAobj.content=="string"){ // Has Meta Tag
			var _GAid=_GAobj.content.toUpperCase();
		}
	}

	// Lets Resolve TID From Sources
	if(	// Valid UA-
		  (typeof _GAid=="string") // Is Set
		&&(_GAid.substr(0,3)=="UA-") // Starts with UA-
	){	// Is Valid & Return
		return _GAid;
	}else{ // Else Fallback (Call Variable|Case Undefined)
		return undefined;
	}
}
