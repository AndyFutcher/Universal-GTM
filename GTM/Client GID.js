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

function(){ // Get Client GID (24hr clientId)
	// Declare Environment
	var _GID={env:-1 // -1=unknown,0=default,1+=known secondary
		,get:"_gid"
		,name:"_gid" // cookieName="_gid"
		,from:"{{Tracking ID}}" // TrackingId
		,cache:true // Session Cache (Performance)
		,gid:"" // GID Placeholder
	};

	// Load From Session Cache (Performance Mode)
	if(	// Enabled?
		  (_GID['cache']) // Use Session Storage
		&&(typeof window.sessionStorage==="object")	//
	){	// Is Valid!
		_GID['gid']=sessionStorage.getItem(_GID['name']);
		if( // Validate Client GID
			  (typeof _GID['gid']=="string") // Is Set
			&&(_GID['gid'].length>=20) // Meets Minimum Length
		){	// Is Valid!
			return _GID['gid'];
		}
	}

	// Find Google Analytics Objects
	if(typeof ga==="function"){ // GA Is Declared
		var _GIDobj=ga.getAll(); // Load Tracker Objects
		if(_GID['env']==-1){ // Find Matching Tracker
			var _GIDlen=_GIDobj.length-1; // Tracker Count
			for (i=0;i<=_GIDlen;i++){ // Find TrackingId
				if(_GIDobj[i].get('trackingId')==_GID['from']){_GID['env']=i;break;};
			}
		}; // Returning Valid GA Reference
		if(_GID['env']>-1){ // Has Valid Tracking Id
			_GID['gid']=_GIDobj[_GID['env']].get(_GID['get']); // Get Client Id
		}
	}

	// Check If We Found Valid Client ID
	if( // Validate Client Id
		  (typeof _GID['gid']=="string") // Is Set
		&&(_GID['gid'].length>=20) // Meets Minimum Length
	){	// Is Valid!
		if(typeof window.sessionStorage==="object"){ // Storage Is Availible
			if(_GID['cache']){sessionStorage.setItem(_GID['name'],_GID['gid']);}; // Save Reported Client GID (if Eanbled)
		}; // Return GID
		return _GID['gid'];
	}
}
