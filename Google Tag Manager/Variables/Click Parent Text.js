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

function(){ // Collect Clicked Parent Rendered Text
	switch({{Click Element}}.parentElement.tagName){ // Depends On Tag Type
		case null: // Ignore Parent Node When Tag Matches These Types
		case "HTML":
		case "BODY":
		case "IFRAME":
			return {{Click Element}}.innerText;
	break; // Else:
		default: // Any Other Element Type Is Valid Parent
			return {{Click Element}}.parentElement.innerText;
	}
}
