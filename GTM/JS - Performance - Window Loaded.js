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

// Pass Page Dependencies To GA
if (window.performance) { // Performance Supported
	var resources=performance.getEntriesByType("resource"),resourceVar='',resourceValue=0,resourceLabel={{Page Navigation}};
	for (var resource=0;resource<resources.length;resource++) {
		resourceVar=resources[resource].name.split(';')[0]; // Strip Code/BASE64
		resourceVar=resourceVar.split('?')[0]; // Strip Parameters
		resourceValue=resources[resource].responseEnd-resources[resource].startTime;
		if (resourceValue>0) { // Not Cached (Dont Round)
			dataLayer.push({
				 'event':'timing'
				,'EventCategory':resources[resource].initiatorType
				,'EventVar':resourceVar
				,'EventValue':parseInt(resourceValue)
				,'EventLabel':resourceLabel
			});
		}
	}
}
