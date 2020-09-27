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

function(){ // Resolve Visitor Scale
	var _VS={ver:"{{Container Version}}" // Container Version
		,name:{{Cookie - Visitor Scale}} // ~"_gaq"
		,scale:parseInt({{Visitor Scale}}) // Scale Placeholder, Default to Previous
		,target:50 // New Target Scale
		,persist:true // Use Local Storage (FALSE disables persistence)
		,local:0 // Persistenty Stored Scale
		,define:"employee" // Default for Scale Name
	};

	// Check For Overrides (staff member)
	if(_VS['ver']=="QUICK_PREVIEW"){
		return _VS['define'];
	}

	// Parse Scale Values
	var _VSobj="{{Default - Visitor Scale}}";_VSobj=_VSobj.split(','); // Collect & Explode Scale
	var _VSi=0,_VSkey=Object.keys(_VSobj),_VSc=_VSkey.length,_VSobjs={}; // Prepare Entries
	for (_VSi=0; _VSi<_VSc; _VSi++){ // Check All Scales
		_VSobj[_VSi]=_VSobj[_VSi].split(':'); // Explode Keys & Values
		_VSobjs[_VSobj[_VSi][0]]=_VSobj[_VSi][1]; // Construct Object
	}

	// Check For Persistent Previous Scale
	if(	// Validate Persistence
		  (_VS['persist']) // Is Enabled
		&&(typeof window.localStorage==="object") // Is Availible
		&&(window.localStorage!==null) // No Weird Declarations
	){	// LocalStorage Is Availible
		_VS['local']=parseInt(localStorage.getItem(_VS['name'])); // Query Local
	}else{_VS['persist']=false; // LocalStorage Disabled
	}

	// Special Conditions...
	if((_VS['scale']==0)&&(_VS['local']==10)){ // Found Returning "User"
		_VS['target']=20; // Then Is "Active User"
	};

	// Resolve Local vs Layer Privileges
	if(Math.abs(_VS['scale'])<Math.abs(_VS['local'])){ // LocalStorage Escalates
		_VS['scale']=_VS['local']; // Replace Previous Scale with Local
	}

	// Check For Scale Escalation
	_VS['target']=parseInt(_VS['target']); // Resolve Target Data Type
	if(Math.abs(_VS['scale'])<Math.abs(_VS['target'])){ // Is Escalated
		if((_VS['persist'])){ // LocalStorage Is Availible
			localStorage.setItem(_VS['name'],_VS['target']); // Store Target Updated
			_VS['scale']=_VS['target']; // Replace Previous Scale with Local
		}
	}

	// Resolve Visitor Scale Name
	_VS['scale']=parseInt(_VS['scale']); // Resolve Scale Data Type
	if(typeof _VSobjs[_VS['scale']]=="string"){ // Validate Definition
		_VS['define']=_VSobjs[_VS['scale']]; // Set Definition
	}

	// Update Datalayer Variable & Return Visitor Scale
	dataLayer.push({'visitor-scale':_VS['scale']});return _VS['define'];
}
