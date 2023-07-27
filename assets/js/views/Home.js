MIA.content.views.home = {};

MIA.content.views.home.get_content = function( self, p ){
	return '<div class="header">Playlists <hr></div>' +
		MIA.config.playlists.map(function( playlist ){
			return '<div class="home-button" onclick="MIA.content.set_view(\'' + playlist.name + '\');">' +
				playlist.name +
			'</div>';
		}).join('');
};