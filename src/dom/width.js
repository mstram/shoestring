//>>excludeStart("exclude", pragmas.exclude);
define([ "shoestring", "dom/dimension" ], function(){
//>>excludeEnd("exclude");

	shoestring.fn.width = function( num ){
		return _dimension( this, "width", num );
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");