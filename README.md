# [SNOWVIS](http://drewfore.github.io/snowvis)

SNOWVIS is a web interface for viewing snow cover over the Snowy Water Catchment. 
The Snowy Water Catchment (shown in the app as the black dotted line) is the water 
catchment defined for the Snowy Mountains Hydro Electric Scheme, base in the NSW 
apline region of Australia.

The snow areas are created by classifying snow cover areas using MODIS Terra 
(EOS AM) satellite imagery, and the Normalised Difference Snow Index (NDSI) 
algorithm.

This project is a experimental way of delivering seasonal snow cover information, 
as an alternative to asking users to view it in QGIS. The NDSI algorithm is automated 
in the QGIS processing toolbox model builder, however not all people in our business 
are QGIS users.

* Demo: [http://drewfore.github.io/snowvis](http://drewfore.github.io/snowvis)
* NDSI - QGIS use case: [QGIS Use case - 'Using the processing toolbox to automate snow classification'](https://docs.google.com/document/d/1Pg4WdYmAD-UT0NiYjBNyt_OpsZ0ugf6VXHW0mY7eBwA/edit?usp=sharing)
* twitter: [@drewfore](http://twitter.com/drewfore)
* MODIS imagery: [http://e4ftl01.cr.usgs.gov/MOLT/MOD09GA.005/](http://e4ftl01.cr.usgs.gov/MOLT/MOD09GA.005/)

## About the Snowy Mountains Hydro Electric Scheme

Snowy Hydro Limited (SHL) is a peak electricity generator based in the Snowy Mountains of New South Wales, Australia. Despite owning a variety of generation assets across the country, Snowy Hydro Limited is best known for the custodianship of an iconic piece of Australian infrastructure, the Snowy Mountains Hydro Electric Scheme. 

The Snowy Mountains Hydro Electric Scheme, is made possible by seasonal snow falls in the New South Wales alpine region. Water from the spring snow melt is used to generate electricity addressing peak demand in the national electricity market, while also diverting water to the drier inland areas of South Eastern Australia for irrigation and agriculture.

For more information of the Snowy Mountains Hydro Electric Scheme and Snowy Hydro Limited please visit [http://www.snowyhydro.com.au](http://www.snowyhydro.com.au)

## Demo and How to

Access the demo [http://drewfore.github.io/snowvis](http://drewfore.github.io/snowvis).

How to:

1. Scroll through available snowdays by pressing the "Next" or "Back" buttons or using the 
   forward and back buttons on the keyboard.	

2. Animate the season by clicking on the "Play" button. This will scroll through each day 
   classified in the season at 2 second intervals. Press "Pause" to stop on any day or "Reset" 
   to go back to the first day in the season.


## Features

Not yet mobile phone friendly with a map, but is still usable across all devices. At this stage on a mobile you will still see the date, stats and be able to select a season. In the future it will be nice to still scroll through the days with a map interface front and centre.


## FYI

These snow covered areas are estimates derived from the best available information. 
They are by no means an exact representation of the snow cover at any point during the 
season, and have been derived entirely for purposes used by Snowy Hydro Limited. Feel 
free to view and share this information but be aware that Snowy Hydro Limited takes no 
responsibiliy for the accuracy, completeness or quality of this data..