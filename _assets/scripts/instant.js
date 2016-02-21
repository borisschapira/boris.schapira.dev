//= require vendors/instantclick.min

//= require vendors/touchtap-event.js
//= require vendors/abbr-touch.js

InstantClick.init(50);

InstantClick.on('change', onChange);

function onChange(isInitialChange){
    abbrTouch();
}
