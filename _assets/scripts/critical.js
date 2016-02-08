//= require vendors/fontfaceobserver.min
//= require vendors/instantclick.min

/*
	Fonts are loaded through @font-face rules in the CSS whenever an element references them.
	FontFaceObserver creates a referencing element to trigger the font request, and lsisten for font load events.
	When all 3 fonts are loaded, we enable them by adding a class to the html element
*/
(function( w ){
	// if the class is already set, we're good.
	if( w.document.documentElement.className.indexOf( "fonts-loaded" ) > -1 ){
		return;
	}
	var fontA = new w.FontFaceObserver( "PT Sans", {
		weight: 400
	});

	var fontB = new w.FontFaceObserver( "PT Sans", {
		weight: 700
	});

	w.Promise
		.all([fontA.check(), fontB.check()])
		.then(function(){
			w.document.documentElement.className += " fonts-loaded";
		});
}( this ));

InstantClick.init();
