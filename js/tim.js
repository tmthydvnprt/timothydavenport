/*!
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * asset tim.js combined on 2016-12-29T08:19:46-08:00
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
$(document).ready(function() { $.getJSON("json/tim.json", function(data) { var headspin=$('#headspin'), i=0, L=data.length; window.setInterval(function() { headspin.text(data[i]); i=(i + 1) % L; }, 20); }); } );