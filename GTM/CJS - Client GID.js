function(){ // Get Client GID (24hr clientId)
	// Declare Environment
	var _GA={env:-1	// -1=unknown,0=default,1+=known secondary
		,get:"_gid"
		,name:"_gid"	// cookieName="_gid"
		,from:"{{LT - Tracking ID}}"	// TrackingId
	};

	// Find Google Analytics Objects
	if(typeof ga==="function"){	// GA Is Declared
		var _GAobj=ga.getAll();	// Load Tracker Objects
		if(_GA['env']==-1){	// Find Matching Tracker
			for (i=0;i<=_GAobj.length;i++){	// Find Matching TrackingId
				if(_GAobj[i].get('trackingId')==_GA['from']){_GA['env']=i;break;};
			}
		}; // Now Return
		if(_GA['env']>-1){	// Has Valid Tracker Index
			return _GAobj[_GA['env']].get(_GA['name']); // Get Client Id
		}
	}
}
