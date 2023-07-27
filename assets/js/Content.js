MIA.content = {
	views  : {},
	_views : [
		{ name : 'Home' },
	].concat( MIA.config.playlists.slice() ),
};

MIA.content.load = function(){
	this.select_view( 'Home' );

	MIA.pages = new JL.pages({
		container        : '#pages',
		entries_per_page : 60,
		on_change        : function(){ MIA.content.draw(); }
	});

	this.data = [];

	this.draw();
};

MIA.content.get_view = function( view ){
	return this._views.find(function( v ){
		return v.name == view;
	});
};

MIA.content.select_view = function( view ){
	var matching_view = this.get_view( view );
	console.log( view, matching_view );
	if( matching_view ){
		this.view = view;
		this.view_key = MIA.functions.get_view_key( view );
		this.curr_view = this.views[ this.view_key ];
		if( !this.curr_view && matching_view.songs ){
			this.curr_view = new MIA.playlist( matching_view );
		}
	}
};

MIA.content.set_view = function( view ){
	this.select_view( view );
	this.draw();
};

MIA.content.draw = function( p ){
	var self = this;

	var p = p || {};
	
	var data = this.data.slice();

	$("#content").html(
		'<div id="view-content">' +
			this.curr_view.get_content( this, p ) +
		'</div>'
	);
	$( 'audio' ).each(function( i, ele ){ ele.volume = 0.0; });
	setTimeout(function(){ $("#content").focus(); }, 1);  // Need the timeout here, otherwise it won't run synchronously.
	if( !p.preserve_scroll ) $("#content").scrollTop(0);

	MIA.navbar = new JL.navbar({
		title          : '<div class="logo"><img src="./assets/img/logo.png"/></div> Party Playlist',
		dropdown       : 'click',
		not_responsive : true,
		options        : [
			{
				options    : self._views.map(function( option ){
					return {
						name     : option.name,
						value    : option.name,
						selected : ( option.name == self.view )
					};
				}),
				attributes : {
					id       : 'views-dropdown',
					onchange : 'MIA.content.set_view( this.value );',
				}
			},
		]
	});

	$( '#navbar-title' ).click(function(){
		self.set_view( 'Home' );
	});
};