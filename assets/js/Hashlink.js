MIA.hashlinks = new JL.hashlinks({
	view : {},
});

MIA.hashlinks.on_start = function(){
	var view = this.params.view.value;

	document.title = MIA.config.document_title + ( view ? ' - ' +  view : '' );
	
	MIA.content.load();
};

window.onhashchange = function(){ MIA.hashlinks.start(); };
window.onload       = function(){ MIA.hashlinks.start(); };