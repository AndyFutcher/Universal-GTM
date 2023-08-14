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

function(){ // Returns Navigation Type (landing, navigate, reload, back_forward)
	_NT={ref:"{{Referrer}}" // Any Referrer
		,host:"{{Hostname}}" // Hostname
		,nav:"navigate" // Output & Default
	};

	if ((typeof window.performance=="object")&&(window.performance!==null)) { // Performance Is Ready
		if (typeof performance.navigation=="object") { // Navigation Is Declared
			if (typeof performance.navigation.type=="number") { // We Have An Answer
				switch(parseInt(performance.navigation.type)){case 1: _NT['nav']='reload';
				break;case 2: _NT['nav']='back_forward';
				break;case 0:default: _NT['nav']='navigate';
				};
			}
		}; // Fallback when Performance.Navigation depreciated
		if (typeof performance.getEntriesByType=="function") { // PerformanceNavigationTiming Supported
			if (typeof performance.getEntriesByType("navigation")[0]=="object") { // Navigation Type Supported
				_NT['nav']=performance.getEntriesByType("navigation")[0].type.toLowerCase(); // Has Value
			}else{ // If Object Does Not Exist Then Navigate
				_NT['nav']='navigate';
			}
		}
	}

	// Fallbacks
	switch(_NT['nav']){case "":case false:case null:case undefined: _NT['nav']='navigate'; // Empty Override
	break;default: // Ignore
	}

	// Check for Overrides
	if(_NT['nav']=="navigate"){ // Is Navigation Insight
		_NT['host']=_NT['host'].replace('www.',""); // Excude WWW Prefix from Test
		if(_NT['ref'].search(_NT['host'])==-1){_NT['nav']='landing';}; // No Matching Referrer
	}

	// Return Output
	return _NT['nav'];
}
