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

function(){ // Returns a Full C Date with Milliseconds
    var now=new Date(); // New Date Object
    var cdate={ // TimeZone Object
         'month': now.getMonth()+1 // Month
        ,'day': now.getDate() // Days
        ,'hours': now.getHours() // Hours
        ,'minutes': now.getMinutes() // Minutes
        ,'seconds': now.getSeconds() // Seconds
        ,'ms': now.getMilliseconds() // Milliseconds
        ,'offset': -now.getTimezoneOffset() // TimeZone Offset (inverted)
        ,'diff': "+" // TimeZone Sign (GMT)
        ,'zhour': 0 // TimeZone Hours
        ,'zmins': 0 // TimeZone Minutes
    };

	// Check TimeZone Polarity
    if(cdate['offset']<0){cdate['diff']="-";};
    cdate['zhour']=Math.abs(Math.floor(cdate['offset'] / 60));
    cdate['zmins']=Math.abs(Math.floor(cdate['offset'] % 60));

	// Check Formatting
    if(cdate['month']<10){cdate['month']="0"+cdate['month'];};
    if(cdate['day']<10){cdate['day']="0"+cdate['day'];};
    if(cdate['hours']<10){cdate['hours']="0"+cdate['hours'];};
    if(cdate['minutes']<10){cdate['minutes']="0"+cdate['minutes'];};
    if(cdate['seconds']<10){cdate['seconds']="0"+cdate['seconds'];};
    if(cdate['ms']<10){cdate['ms']="0"+cdate['ms'];};
    if(cdate['zhour']<10){cdate['zhour']="0"+cdate['zhour'];};
    if(cdate['zmins']<10){cdate['zmins']="0"+cdate['zmins'];};

	// Assemble Local Time
    return now.getFullYear()
        +'-'+cdate['month']
        +'-'+cdate['day']
        +'T'+cdate['hours']
        +':'+cdate['month']
        +':'+cdate['seconds']
        +'.'+cdate['ms']
            +cdate['diff']
            +cdate['zhour']
        +':'+cdate['zmins']
}
