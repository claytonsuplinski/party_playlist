MIA.playlist = function( p ){
	this.init( p || {} );
};

MIA.playlist.prototype.init = function( p ){
	// TODO : Set songs / other config info fot the playlist here.
	this.songs = p.songs;
};

MIA.playlist.prototype.init_analysis = function(){
	var self = this;

	var audio_context = new AudioContext();
	this.analyser            = audio_context.createAnalyser();
	this.analyser.source     = audio_context.createBufferSource();
	this.analyser.volume     = audio_context.createGain();
	this.analyser.js         = audio_context.createScriptProcessor( 1024, 1, 1 );
	this.analyser.amplitudes = new Uint8Array( this.analyser.frequencyBinCount );

	this.analyser.volume.gain.value = 0;

	this.analyser.source.connect( this.analyser );
	this.analyser.source.connect( this.analyser.volume );

	this.analyser.connect( this.analyser.js );

	this.analyser.volume.connect( audio_context.destination );

	this.analyser.js.connect( audio_context.destination );

	this.analyser.js.onaudioprocess = function () {
		self.analyser.getByteTimeDomainData( self.analyser.amplitudes );
	}

	var request = new XMLHttpRequest();
	request.open( 'GET', './assets/data/' + this.songs[0].filename, true );
	request.responseType = 'arraybuffer';
	request.onload = function () {
		audio_context.decodeAudioData( request.response, function( buffer ){
			self.analyser.source.buffer = buffer;
			self.analyser.source.start( 0 );
			self.analyser.volume.gain.value = 0;
		});
	}
	request.send();
};

MIA.playlist.prototype.fade = function( p ){
	$( p.id ).animate( { volume : p.val }, p.duration || 5000, p.callback ); 
};

MIA.playlist.prototype.get_next_index = function(){
	return ( this.curr_song + 1 ) % this.songs.length;
};

MIA.playlist.prototype.transition_to_next_song = function(){
	var self = this;
	this.is_transitioning = true;
	var curr_id = "#song-" + this.curr_song;
	var next_id = "#song-" + this.get_next_index();
	$( next_id )[0].play();
	this.fade({ id : curr_id, val : 0, duration : MIA.config.transition_length * 1000 });
	this.fade({ id : next_id, val : 1, duration : MIA.config.transition_length * 1000, callback : function(){
		var next_index = self.get_next_index();
		if( next_index == 0 ){
			$( "audio" ).each(function( i, audio ){
				if( i ){
					audio.pause();
					audio.currentTime = 0;
					audio.volume      = 0;
				}
			});
		}
		self.curr_song = next_index;
		   $( ".songs-list td.index" ).removeClass(                  'active' );
		$( $( ".songs-list td.index" )[ self.curr_song ] ).addClass( 'active' );
		self.is_transitioning = false;
	} });
};

MIA.playlist.prototype.get_curr_time = function(){
	var curr_time = 0;
	$( ".songs-list audio" ).each(function( i ){
		if( this.currentTime ) curr_time += this.currentTime - ( i ? MIA.config.transition_length : 0 );
	});
	return curr_time;
};

MIA.playlist.prototype.get_total_time = function(){
	var total_time = 0;
	$( ".songs-list audio" ).each(function( i ){
		total_time += this.duration - ( i ? MIA.config.transition_length : 0 );
	});
	return total_time;
};

MIA.playlist.prototype.set_song = function( idx ){
	var id = "#song-" + idx;
	$( "audio" ).stop();
	$( "audio" ).each(function( i, audio ){
		audio.pause();
		audio.currentTime = ( i >= idx ? 0 : audio.duration );
		audio.volume      = 0;
	});
	var selected_audio = $( id )[0];
	selected_audio.play();
	selected_audio.volume = 1;
	this.curr_song = idx;
	   $( ".songs-list td.index" ).removeClass(                  'active' );
	$( $( ".songs-list td.index" )[ this.curr_song ] ).addClass( 'active' );
};

MIA.playlist.prototype.update = function(){
	var self = this;
	if( !this.total_time ){
		this.total_time = this.get_total_time();  
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
		if( time_remaining <= MIA.config.transition_length && !this.is_transitioning ) this.transition_to_next_song();

		this.curr_time = this.get_curr_time();
		$( "#curr-time" ).html( MIA.functions.get_hr_duration( this.curr_time ) );
		$( "#completion-percentage" ).html( ( 100 * this.curr_time / this.total_time ).toFixed(1) + '%' );
		// console.log( this.analyser.amplitudes.filter(function( x,i,arr ){ return arr.indexOf(x) == i; }) );
	}
};

MIA.playlist.prototype.get_content = function( self, p ){
	var _this = this;

	var p = p || {};
	this.params = $.extend( {}, p );
	
	var data = self.data.slice();

	// this.init_analysis();

	this.update_interval = setInterval(function(){ _this.update(); }, 500);

	return '<div id="progress">' + 
			'<div class="songs-info wide">' + 
				'<div id="curr-time"></div> / ' + 
				'<div id="total-time"></div>' +
			'</div>' +
			'<div class="songs-info" id="completion-percentage"></div>' +
		'</div>' +
		'<table class="songs-list">' +
			this.songs.map(function( song, idx ){
				return '<tr>' +
					'<td class="index">' + ( idx + 1 ) + '</td>' +
					'<td class="label" onclick="MIA.content.views.main.set_song(' + idx + ');">' + song.name + '<hr></td>' +
					'<td class="audio"><audio id="song-' + idx + '" src="./assets/data/' + _this.songs[ idx ].filename + '" controls></audio></td>' +
				'</tr>';
			}).join('') +
		'</table>';
};