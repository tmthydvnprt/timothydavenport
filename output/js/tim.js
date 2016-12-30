/*!
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * asset tim.js combined on 2016-12-30T09:34:42-08:00
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
$(document).ready(function() { var all=$('*'), headspin=$('#headspin'), fourOhfour=$('#fourOhfour'), ascii_vid_path='', elem=null; if (headspin.length) { ascii_vid_path="json/tim.json"; ascii_elem=headspin; } else { ascii_vid_path="json/404.json"; ascii_elem=fourOhfour; } $.getJSON(ascii_vid_path, function(data) { var pause=false, a='', i=0, h=0, L=data.length; window.setInterval(function() { if (!pause) { h=(i + Math.floor(L / 2)) % L; a=(headspin.length) ? data[i]:[data[i], data[h], data[i], data[h], data[i]].join('\n'); ascii_elem.text(a); i=(i + 1) % L; } }, 20); all.on('click', function() { pause=!pause; }); }); } );