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

function(){ // Page Time in Milliseconds
	if (typeof window.performance=="object") { // Performance Declared
		_ET={now:window.performance.now() // Page Time
			,offset:{{Engagement Time - Offset}} // Any Offset Timer
			,div:1 // Divisor (1=ms,1000=seconds)
		};

		// Parse Values
		_ET['now']=parseInt(_ET['now']);
		_ET['offset']=parseInt(_ET['offset']);

		// Check for Offset Timer
		if(_ET['now']>=_ET['offset']){ // Has Valid Offset
			return ((_ET['now']-_ET['offset'])/_ET['div']);
		}

		// Return Only NOW
		return (_ET['now']/_ET['div']);
	}
}
