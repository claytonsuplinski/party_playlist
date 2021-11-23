MIA.content = { views : {} };

MIA.content.load = function(){
	this.select_view( 'Main' );

	MIA.pages = new JL.pages({
		container        : '#pages',
		entries_per_page : 60,
		on_change        : function(){ MIA.content.draw(); }
	});

	this.data = [];

	this.draw();
};

MIA.content.select_view = function( view ){
	this.view = view;
	this.view_key = MIA.functions.get_view_key( view );
	this.curr_view = this.views[ this.view_key ];
};

MIA.content.set_view = function( view ){
	this.select_view( view );
	this.table_sort = 'Total';
	this.table_sort_reversed = false;
	this.draw();
};

MIA.content.draw = function( p ){
	var self = this;

	var p = p || {};
	
	var data = this.data.slice();
	
	this.view_names = [ 'Main' ];

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
				options    : MIA.content.view_names.map(function( option ){
					return {
						name     : option + ' View',
						value    : option,
						selected : ( option == self.view )
					};
				}),
				attributes : {
					id       : 'views-dropdown',
					onchange : 'MIA.content.set_view( this.value );',
				}
			},
		]
	});
};