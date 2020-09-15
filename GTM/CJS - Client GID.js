function(){ // Get Client GID (24hr clientId)
	// Declare Environment
	var _GA={env:-1	// -1=unknown,0=default,1+=known secondary
		,get:"_gid"
		,name:"_gid"	// cookieName="_gid"
		,from:"{{LT - Tracking ID}}"	// TrackingId
		,cache:true	// Session Storage Cache
		,gid:""	// Placeholder
	};

	// Load From Session Cache (Performance Mode)
	if(	// Enabled?
		  (_GA['cache']) // Use Session Storage
		&&(typeof window.sessionStorage==="object")	//
	){	// Is Valid!
		_GA['gid']=sessionStorage.getItem(_GA['name']);
		if( // Validate Client GID
			  (typeof _GA['gid']=="string") // Is Set
			&&(_GA['gid'].length>=20) // Meets Minimum Length
		){ // Is Valid!
			return _GA['gid'];
		}
	}

	// Find Google Analytics Objects
	if(typeof ga==="function"){	// GA Is Declared
		var _GAobj=ga.getAll();	// Load Tracker Objects
		if(_GA['env']==-1){	// Find Matching Tracker
			var _GAlen=_GAobj.length-1;	// Tracker Count
			for (i=0;i<=_GAlen;i++){	// Find TrackingId
				if(_GAobj[i].get('trackingId')==_GA['from']){_GA['env']=i;break;};
			}
		}; // Returning Valid GA Reference
		if(_GA['env']>-1){	// Has Valid Tracking Id
			_GA['gid']=_GAobj[_GA['env']].get(_GA['get']); // Get Client Id
		}
	}

	// Check If We Found Valid Client ID
	if( // Validate Client Id
		  (typeof _GA['gid']=="string") // Is Set
		&&(_GA['gid'].length>=20) // Meets Minimum Length
	){ // Is Valid!
		if(typeof window.sessionStorage==="object"){	// Is Availible
			if(_GA['cache']){sessionStorage.setItem(_GA['name'],_GA['gid']);};	// Save Cache (if True)
		}; // Return GID
		return _GA['gid'];
	}
}
