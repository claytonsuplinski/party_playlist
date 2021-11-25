MIA.functions = {};

MIA.functions.get_image = function(dir, name){
	return './assets/img/'+dir+'/'+name.toLowerCase().replace(/[.,\/#!$%?\^&\*;:{}=\-\[\]_`~()\']/g, "").replace(/ /g, '')+'.jpg';
};

MIA.functions.get_rating_name = function(name){
	return name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

MIA.functions.get_rank_class = function(rank){
	switch(rank){
		case 1: return 'gold';
		case 2: return 'silver';
		case 3: return 'bronze';
	};
	return '';
};

MIA.functions.get_hr_duration = function( t, as_string ){
	var values = [
		{ unit : 'h', factor : 3600 },
		{ unit : 'm', factor :   60 },
		{ unit : 's', factor :    1 },
	];
	var time = t;
	values.forEach(function( v ){
		v.val = Math.floor( time / v.factor );
		time -= v.val * v.factor;
	});

	if( as_string ) return values.filter( v => v.val ).map(function( v) { return v.val + v.unit; }).join(' ') || '0s';
	return values.map(function( v ){ return MIA.functions.pad( v.val, 2 ); }).join(':');
};

MIA.functions.get_rating_color = function(rating){
	var r = 0, g = 0, b = 50;
	if(rating < 5){
		var a = 1 - (5 - rating) / 5;
		r = 255;
		g = a * 255;
	}
	else{
		var a = 1 - (rating - 5) / 5;
		r = a * 255;
		g = 255;
	}
	return 'rgb(' + [r,g,b].join(', ') + ')';
};

MIA.functions.get_diff_color = function( diff ){
	var r = 30, g = 30, b = 30;
	if( diff < 0 ){
		r += 50;
		r += -10 * diff;
	}
	else{
		g += 50;
		g +=  10 * diff;
	}
	return 'rgb(' + [r,g,b].join(', ') + ')';
};

MIA.functions.pad = function(num, decimal_place, delimiter){
	var delimiter = delimiter || '0';
	var num = num + '';
	return num.length >= decimal_place ? num : new Array(decimal_place - num.length + 1).join(delimiter) + num;
};

MIA.functions.get_view_key = function(str){
	return str.toLowerCase().split(' ').join('_');
};

MIA.functions.capitalize = function(str){
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};