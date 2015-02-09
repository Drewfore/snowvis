var map;
var snow_2014,snow_2013,snow_2012;
var currentYear, currentDay, maxDay;
var snowCover,snowStyle;
$(document).ready(function(){
	//Leaflet Map
	L.mapbox.accessToken = 'pk.eyJ1Ijoic2hsIiwiYSI6InpLdDM0U1EifQ.jIwjCpwbf4XuIMoKnA4-Gg';
	
	//Bounding box - setting the outter most limit for viewing.
	var southWest = L.latLng(-37.428,146.771),northEast = L.latLng(-34.442,150.736),bounds = L.latLngBounds(southWest, northEast);
	var iSouthWest = L.latLng(-36.637,148.066),iNorthEast = L.latLng(-35.495,148.879),iBounds = L.latLngBounds(iSouthWest, iNorthEast);
	
	//Create map
	map = L.map('map',{maxZoom:12,minZoom:8,maxBounds:bounds});
	map.addLayer(L.mapbox.tileLayer('shl.l0177j0a').setOpacity(0.6));
	map.addLayer(L.mapbox.tileLayer('shl.catchment'), 'Catchment', 2);
	
	//Fit bounds
	map.fitBounds(iBounds);
	currentYear = snow_2014;
	currentDay = 0;
	setSnow(currentYear,currentDay);	
});

snowStyle = {
		color: "#ffffff",
		weight: 0.5,
		opacity: 0,
		fillOpacity: 0.6,
		fillColor: "#3bb2d0"
};

function setSnow(year,day){	
	maxDay = year.features.length;
	currentYear = year;
	currentDay = day;
	
	if (currentDay < maxDay){
		if (map.hasLayer(snowCover) == true){
			map.removeLayer(snowCover);
		}	

		$("#title").html(year.features[day].properties.title);
		$("#area").html(year.features[day].properties.area_sqkm + " km<sup>2</sup>");
		snowCover = L.geoJson(year.features[day], {style: snowStyle});
		map.addLayer(snowCover);	
	}	
}

function checkRed(){
	var isRed = $("#title").hasClass("red");
	if (isRed == true){
		$("#title").removeClass("red");
		$("#area").removeClass("red");	
	}
}

function goForward(){
	var maxOffset = maxDay - 2;	
	if (currentDay <= maxOffset){
		var newDay = currentDay + 1;
		setSnow(currentYear,newDay);
	}else if(currentDay > maxOffset){
		$("#title").addClass("red");
		$("#area").addClass("red");		
		$("#area").html("was the last day");
	}
}

function goBack(){
	if (currentDay > 0){
		var newDay = currentDay - 1;
		setSnow(currentYear,newDay);
	}
	checkRed();
}
$("#back").click(function(){
	goBack();
});

$("#next").click(function(){
	goForward();
});

$("#season").click(function(){
	$("#showSeason").slideToggle();
});

$("#2012").click(function(){
	checkRed();
	$("#2012").addClass("active");
	$("#2013").removeClass("active");
	$("#2014").removeClass("active");
	$("#showSeason").slideToggle();
	setSnow(snow_2012,0);
});

$("#2013").click(function(){
	checkRed();
	$("#2012").removeClass("active");
	$("#2013").addClass("active");
	$("#2014").removeClass("active");
	$("#showSeason").slideToggle();
	setSnow(snow_2013,0);
});

$("#2014").click(function(){
	checkRed();
	$("#2012").removeClass("active");
	$("#2013").removeClass("active");
	$("#2014").addClass("active");
	$("#showSeason").slideToggle();
	setSnow(snow_2014,0);	
});

//Capture the forward and back keystrokes to scroll through the snow days.
//Ripped directly off stack exchange -- track down and credit this code.
document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
        case 37: 
	        goBack();
        break;

        case 39: 
			goForward();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};