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

function(){ // Checks for Persistent Visitor Scale QA
	// Declare Environment
	var _QA={set:"0"
		,name:"_qa" // Record Name="_qa"
		,persist:true // Enabled Persistence
		,scale:"" // QA Scale Placeholder
	};

	/* QA Visitor Scale
	<=	-2		:unknown bot
	=	-1		:known bot
	=	0		:unknown
	=	1-10	:visitor
	=	11-49	:user
	>=	50		:customer
	*/

	// Load From Local Storage (for Persistent)
	if(	// Enabled?
		  (_QA['persist']) // Use Local Storage
		&&(typeof window.localStorage==="object") // Is Availible
	){	// Is Valid!
		var _QA['scale']=localStorage.getItem(_QA['name']);
		if( // Validate QA Scale
			(typeof _QA['scale']=="string") // Is Set
		){	// Is Valid!
			return _QA['scale'];
		}; // Is Valid!
		if(_QA['persist']){localStorage.setItem(_QA['name'],_QA['set']);}; // Save Current QA Scale
	}

	// Return Set Value
	return _GA['set'];
}
