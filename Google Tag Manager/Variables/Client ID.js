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

function(){ // Collect Google Analytics Client Id (Heriachy)
	// Declare Environment(s)
	var _GA={cache:true // Session Cache (Performance)
		,env:-1 // -1=unknown,0=default,1+=known secondary
		,get:"clientId"
		,name:"{{Default - Cookie}}" // cookieName="_ga"
		,from:"{{Tracking ID}}" // TrackingId
		,sscid:"" // Cached Placeholder
		,gacid:"" // GA Placeholder
		,lscid:"" // LocalStorage Placeholder
		,cid:"" // Cookie Placeholder
		,sync:{{Session Start}} // Must Sync
	},_GID={cache:true // Session Cache (Performance)
		,get:"_gid"
		,name:"_gid" // cookieName="_gid"
		,gid:"" // GID Placeholder
	};

	// Load From Session Cache (Performance Mode)
	if(	// Enabled?
		  (_GA['cache']) // Use Session Storage
		&&(typeof window.sessionStorage==="object")	//
	){	// Is Valid!
		_GA['sscid']=sessionStorage.getItem(_GA['name']);
		if( // Validate Client GID
			  (typeof _GA['sscid']=="string") // Is Set
			&&(_GA['sscid'].length>=20) // Meets Minimum Length
		){	// Is Valid; Update cookieUpdate
			if(_GA['sync']){dataLayer.push({'session-start':false});}; // Disable Cookie Updates For This Session (Performance)
			// Return Session Client ID
			return _GA['sscid'];
		}
	}

	// Find Google Analytics Objects
	if(typeof ga==="function"){ // GA Is Declared
		var _GAobj=ga.getAll(); // Load Tracker Objects
		if(_GA['env']==-1){ // Find Matching Tracker
			var _GAlen=_GAobj.length-1; // Tracker Count
			for (i=0;i<=_GAlen;i++){ // Find TrackingId
				if(_GAobj[i].get('trackingId')==_GA['from']){_GA['env']=i;break;};
			}
		}; // Returning Valid GA Reference
		if(_GA['env']>-1){ // Has Valid Tracking Id
			_GA['gacid']=_GAobj[_GA['env']].get(_GA['get']); // Get Client Id
			_GID['gid']=_GAobj[_GA['env']].get(_GID['get']); // Get Client GID
		}
	}

	// Check Local Storage Availability
	if(typeof window.localStorage==="object"){var _LS=true; // Is Availible
		_GA['lscid']=localStorage.getItem(_GA['name']); // Query Local
	}else{var _LS=false;
	}; // Now Test Client Id Stoage State
	if(_GA['gacid']){ // Has Client Id
		if(_GA['lscid']){ // Has Local Backup
			if(_GA['lscid']!==_GA['gacid']){ // & They Mismatch?!?
				localStorage.setItem(_GA['name'],_GA['gacid']); // Update Client Id
				_GA['lscid']=_GA['gacid']; // Sync Records
			}
		}else{ // No Local Backup (First Time)
			if(_LS){localStorage.setItem(_GA['name'],_GA['gacid']);}; // Backup
		}
	}

	// Check If We Found Valid Client GID
	if( // Validate Client Id
		  (typeof _GID['gid']=="string") // Is Set
		&&(_GID['gid'].length>=20) // Meets Minimum Length
	){	// Is Valid!
		if(typeof window.sessionStorage==="object"){ // Storage Is Availible
			if(_GID['cache']){sessionStorage.setItem(_GID['name'],_GID['gid']);}; // Save Reported Client GID (if Eanbled)
		}
	}

	// Check If We Found Valid Client ID
	if( // Validate Reorted Client Id
		  (typeof _GA['gacid']=="string") // Is Set
		&&(_GA['gacid'].length>=20) // Meets Minimum Length
	){	// Is Valid!
		if(typeof window.sessionStorage==="object"){ // Storage Is Availible
			if(_GA['cache']){sessionStorage.setItem(_GA['name'],_GA['gacid']);}; // Save Returned Client Id (if Eanbled)
		}; // Return Client ID
		return _GA['gacid'];
	}else if( // Validate Local Storage Client Id
		  (typeof _GA['lscid']=="string") // Is Set
		&&(_GA['lscid'].length>=20) // Meets Minimum Length
	){	// Is Valid!
		return _GA['lscid']; // Return Local Backup
	}

	// Still Nothing, Check Cookie Client Id As Last-Resort
	var _CKgex=new RegExp('(?:(?:^|.*;\\s*)\\'+_GA['name']+'\\s*\\=\\s*([^;]*).*$)|^.*$'); // New RegEx Object
	var _CKobj=document.cookie.replace(_CKgex,"$1").split("."); // Parse & Explode Cookie
	if((typeof _CKobj=="object")&&(_CKobj!==null)){ // Valid Objects Found
		switch(_CKobj[0]){case "GA1": // Is Modern Client Id / AMP Id
			var _CKlen=_CKobj.length-1;_GA['cid']=_CKobj[2];
			for (i=3;i<=_CKlen;i++){_GA['cid']+="."+_CKobj[i];}; // Append Any Dates / Suffixes
		//break:case "1":case "2": // Ignore Legacy Client Id
		}
	}

	// Return (last)
	if( // Validate Cookie Client Id
		  (typeof _GA['cid']=="string") // Is Set
		&&(_GA['cid'].length>=20) // Meets Minimum Length
	){	// Is Valid!
		return _GA['cid'];
	}
}
