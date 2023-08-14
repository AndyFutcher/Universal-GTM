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

function(){ // Returns The Destination Type; internal or outbound
	_CL={host: {{Hostname}}
		,clicked: {{Click Element}}.href // The Clicked Element
		,parent: {{Click Element}}.parentElement.href // ...and Its Parent
		,output: '' // Placeholder
	};

	// Determine Valid Return by Heirarchy
	CL['host']=CL['host'].toLowerCase(); // Check Hostname Case
	if(typeof _CL['clicked']=="string"){_CL['output']=_CL['clicked'].toLowerCase(); // Has Valid Click Value
    }else if(typeof _CL['parent']=="string"){CL['output']=_CL['parent'].toLowerCase(); // Has Valid Parent Value
	}else{return ""; // Is Not A Link
	}

	// Test For Internal Link? https://github.com/SuccessEvents
	if(	// Check
		  (CL['output'].search('://')>-1) // Has Protocol
		&&(CL['output'].search(CL['host'])==-1) // Missing Hostname?
	){	// Then Is Outbound Link
		return "outbound";
	}

	// Else Return Internal
	return "interval";
}
