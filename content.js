var booleanFromToggleWeWillNeverHave = true; //RIP
var elm;

// $('#toggleHoverShit').change(function() {
    // booleanFromToggleWeWillNeverHave = !booleanFromToggleWeWillNeverHave;
    if (booleanFromToggleWeWillNeverHave) {
        $('*').mouseenter(function(el) {
            elm = el;
            console.log(el.target);
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var color = "rgb(" + r + "," + g + "," + b + ")";
            var bColor = "rgb(" + b + "," + r + "," + g + ")";
            el.target.style.color = color;
            el.target.style.backgroundColor = bColor;
            console.log(color);
        });
        $('*').mouseleave(function() {
            $('*').unbind('keypress');
        });
        $(document).keydown(function(e) {
            console.log('deleteme daddy OwO');
            if(e.which == 46) {
                console.log('pressed delet daddy ');
                elm.target.parentElement.removeChild(elm.target);
            }
        });
    } else {
        $('*').unbind('mouseenter mouseleave');
    }
// });
//"content_security_policy": "script-src 'self' 'sha256-Q2bW3UTLYaxRrDcGIx1T5eEOeSAeThHWF7akXNOiN7Q='",