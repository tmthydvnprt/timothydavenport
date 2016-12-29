/*!
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * asset tim.js combined on 2016-12-29T12:28:24-08:00
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
$(document).ready(function() { $.getJSON("json/tim.json", function(data) { var all=$('*'), headspin=$('#headspin'), i=0, L=data.length, pause=false; window.setInterval(function() { if (!pause) { headspin.text(data[i]); i=(i + 1) % L; } }, 20); all.on('click', function() { pause=!pause; }); }); } );