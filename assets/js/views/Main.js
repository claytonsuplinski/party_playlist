MIA.content.views.main = {};

MIA.content.views.main.fade = function( p ){
	$( p.id ).animate( { volume : p.val }, p.duration || 5000, p.callback ); 
};

MIA.content.views.main.get_next_index = function(){
	return ( this.curr_song + 1 ) % MIA.config.songs.length;
};

MIA.content.views.main.transition_to_next_song = function(){
	var self = this;
	this.is_transitioning = true;
	var curr_id = "#song-" + this.curr_song;
	var next_id = "#song-" + this.get_next_index();
	$( next_id )[0].play();
	this.fade({ id : curr_id, val : 0, duration : 10000 });
	this.fade({ id : next_id, val : 1, callback : function(){
		self.curr_song = self.get_next_index();
		self.is_transitioning = false;
	} });
};

MIA.content.views.main.get_curr_time = function(){
	var curr_time = 0;
	$( ".songs-list audio" ).each(function( i ){
		if( this.currentTime ) curr_time += this.currentTime - ( i ? 10 : 0 );
	});
	return curr_time;
};

MIA.content.views.main.get_total_time = function(){
	var total_time = 0;
	$( ".songs-list audio" ).each(function( i ){
		total_time += this.duration - ( i ? 10 : 0 );
	});
	return total_time;
};

MIA.content.views.main.set_song = function( idx ){
	var id = "#song-" + idx;
	$( "audio" ).stop();
	$( "audio" ).each(function( i, audio ){
		audio.pause();
		audio.currentTime = 0;
		audio.volume      = 0;
	});
	var selected_audio = $( id )[0];
	selected_audio.play();
	selected_audio.volume = 1;
	this.curr_song = idx;
};

MIA.content.views.main.update = function(){
	var self = this;
	if( !this.total_time ){
		this.total_time = MIA.content.views.main.get_total_time();
		$( "#total-time" ).html( MIA.functions.get_hr_duration( this.total_time ) );
	}

	if( this.curr_song === undefined ){
		this.curr_song = 0;
		this.set_song( this.curr_song );
	}
	else{
		var curr_id = "#song-" + this.curr_song;
		var curr_song = $( curr_id )[0];
		var time_remaining = curr_song.duration - curr_song.currentTime;
		if( time_remaining <= 10 && !this.is_transitioning ) this.transition_to_next_song();

		this.curr_time = MIA.content.views.main.get_curr_time();
		$( "#curr-time" ).html( MIA.functions.get_hr_duration( this.curr_time ) );
		$( "#completion-percentage" ).html( ( 100 * this.curr_time / this.total_time ).toFixed(1) + '%' );
	}
};

MIA.content.views.main.get_content = function( self, p ){
	var _this = this;

	var p = p || {};
	this.params = $.extend( {}, p );
	
	var data = self.data.slice();

	this.update_interval = setInterval(function(){ _this.update(); }, 500);

	return '<div id="progress">' + 
			'<div id="curr-time"></div> / ' + 
			'<div id="total-time"></div> | ' +
			'<div id="completion-percentage"></div>' +
		'</div>' +
		'<table class="songs-list">' +
			MIA.config.songs.map(function( song, idx ){
				return '<tr>' +
					'<td class="label" onclick="MIA.content.views.main.set_song(' + idx + ');">' + song.name + '<hr></td>' +
					'<td class="audio"><audio id="song-' + idx + '" src="./assets/data/' + MIA.config.songs[ idx ].filename + '" controls></audio></td>' +
				'</tr>';
			}).join('') +
		'</table>';
};