/* ============================================================================
    SuccessEvents is a free and open-source data layer designed to streamline
    & enhance the accuracy of your website digital analytics and PWA tracking.
    Copyright (C) 2020  Andy Futcher

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
============================================================================ */

function(){ // Page Time in Milliseconds
  if (window.performance) {return Math.round(performance.now());}
}
