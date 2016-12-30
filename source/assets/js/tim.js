$(document).ready(function() {
    // Set up elements
    var all = $('*'),
        headspin = $('#headspin'),
        fourOhfour = $('#fourOhfour'),
        ascii_vid_path = '',
        elem = null;

    // Decide which to use
    if (headspin.length) {
        ascii_vid_path = "json/tim.json";
        ascii_elem = headspin;
    } else {
        ascii_vid_path = "json/404.json";
        ascii_elem = fourOhfour;
    }

    // Load ASCII "video"
    $.getJSON(ascii_vid_path, function(data) {
        var pause = false,
            a = '',
            i = 0,
            h = 0,
            L = data.length;

        // Setup interval to draw each frame
        window.setInterval(function() {
            if (!pause) {
                h = (i + Math.floor(L / 2)) % L;
                a = (headspin.length) ? data[i] : [data[i], data[h], data[i], data[h], data[i]].join('\n');
                ascii_elem.text(a);
                i = (i + 1) % L;
            }
        }, 20);

        // Toggle pause
        all.on('click', function() {
            pause = !pause;
        });
    });
} );
