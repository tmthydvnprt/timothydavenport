$(document).ready(function() {
    // Load ascii "video"
    $.getJSON("json/tim.json", function(data) {
        // Set up
        var all = $('*'),
            headspin = $('#headspin'),
            i = 0,
            L = data.length,
            pause = false;
        // Setup interval to draw each frame
        window.setInterval(function() {
            if (!pause) {
                headspin.text(data[i]);
                i = (i + 1) % L;
            }
        }, 20);
        // Toggle pause
        all.on('click', function() {
            pause = !pause;
        });
    });
} );
