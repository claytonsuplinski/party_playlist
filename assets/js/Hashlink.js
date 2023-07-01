MIA.hashlinks = new JL.hashlinks({
	view : {},
});

MIA.hashlinks.on_start = function(){
	var view = this.params.view.value;

	document.title = MIA.config.document_title + ( view ? ' - ' +  view : '' );
	
	MIA.content.load();
};

MIA.hashlinks.start();