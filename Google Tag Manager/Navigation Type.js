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

function(){ // Returns Navigation Type (navigate, reload, back_forward)
	if ((typeof window.performance=="object")&&(window.performance!==null)) { // Performance Is Ready
		if (typeof performance.navigation=="object") { // Navigation Is Declared
			if (typeof performance.navigation.type=="number") { // We Have An Answer
				switch(performance.navigation.type){case "0": return 'navigate';
				break;case "1": return 'reload';
				break;case "2": return 'back_forward';
				};
			}
		}; // Fallback when Performance.Navigation depreciated
		if (typeof performance.getEntriesByType=="function") { // PerformanceNavigationTiming Supported
			return performance.getEntriesByType("navigation")[0].type.toLowerCase();
		}
	}
}