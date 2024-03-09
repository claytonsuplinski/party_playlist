MIA = {};

MIA.config = {};

MIA.config.document_title = 'Party Playlist';

MIA.config.transition_length = 5;

MIA.config.playlists = [
	{
		name  : 'Walk Up - Everyone except bride',
		songs : [
			{ filename : 'aotc.mp3', name : 'Across the Stars -  John Williams' },
		],
		notes : [
			'Click <button><i class="fa fa-play" /></button> when signaled by the officiant.',
			'Click <button>Fade Out</button> once the wedding party and groom is in position at the front of the room.',
			'Click <button>Next Playlist</button> after the audio finishes fading out.',
		],
	},
	{
		name  : 'Walk Up - Bride only',
		songs : [
			{ filename : 'aty.mp3', name : 'A Thousand Years - Christina Perri', end_early : 10, volume : 0.7 },
		],
		notes : [
			'Click <button><i class="fa fa-play" /></button> right away.',
			'Click <button>Fade Out</button> once Jenni is in position at the front of the room.',
			'Click <button>Next Playlist</button> after the audio finishes fading out.',
		],
	},
	{
		name  : 'Ceremony Walk Out',
		songs : [
			{ filename : 'swmt.mp3', name : 'Star Wars Main Theme' }
		],
		notes : [
			'Click <button><i class="fa fa-play" /></button> during / after clapping at the end of the ceremony.',
			'Click <button>Next Playlist</button> after the audio finishes.',
		],
	},
	{
		name  : 'First Dance - Couple',
		songs : [
			{ filename : 'iris.mp3', name : 'Iris - Goo Goo Dolls', end_early : 170 },
		],
		notes : [
			'Click <button><i class="fa fa-play" /></button> when couple is in position (after the announcement).',
			'This song should automatically fade out at <button>2:01</button>.',
			'Click <button>Next Playlist</button> after the audio finishes fading out.',
		],
	},
	{
		name  : 'Mother / Son Dance',
		songs : [
			{ filename : 'col.mp3', name : 'Circle of Life - Elton John', end_early : 179 },
		],
		notes : [
			'Click <button><i class="fa fa-play" /></button> when mother/son are in position (after the announcement).',
			'This song should automatically fade out at <button>1:56</button>.',
			'Click <button>Next Playlist</button> after the audio finishes fading out.',
		],
	},
	{
		name  : 'Father / Daughter Dance',
		songs : [
			{ filename : 'db.mp3', name : 'Daydream Believer - The Monkees', end_early : 61 },
		],
		notes : [
			'Click <button><i class="fa fa-play" /></button> after father says: <br>"It\'s cause I\'m short, I know".',
			'This song should automatically fade out at <button>1:46</button>.',
			'Click <button>Next Playlist</button> after the audio finishes fading out.',
		],
	},
	{
		name  : 'Reception',
		songs : [
			{ filename : 'iwitw.mp3', name : 'I Want It That Way - Backstreet Boys'           , end_early :  3 },
			{ filename :   'ccs.mp3', name : 'Cha Cha Slide'                                  , end_early : 20 },
			{ filename :    'cc.mp3', name : 'Chasing Cars - Snow Patrol'                     , end_early :  4 },
			{ filename :  'dgfl.mp3', name : 'DJ Got Us Fallin In Love - Usher'               , end_early :  3 },
			{ filename :   'lir.mp3', name : 'Let It Rock - Kevin Rudolf'                     , end_early :  3 },
			{ filename :  'atst.mp3', name : 'All The Small Things - Blink 182'               , end_early :  0 },
			{ filename :  'ngyu.mp3', name : 'Never Gonna Give You Up - Rick Astley'          , end_early :  0 },
			{ filename :    'tp.m4a', name : 'Turning Page - Sleeping At Last'                , end_early :  0 },
			{ filename :   'coe.mp3', name : 'Come On Eileen - Dexys Midnight Runners'        , end_early :  0 },
			{ filename :   'afr.mp3', name : 'Africa - Toto'                                  , end_early :  9 },
			{ filename :  '1985.mp3', name : '1985 - Bowling for Soup'                        , end_early :  2 },
			{ filename :  'wmyb.mp3', name : 'What Makes You Beautiful - One Direction'       , end_early :  0 },
			{ filename :  'dymt.mp3', name : 'Dynamite - Taio Cruz'                           , end_early :  0 },
			{ filename :   'hym.m4a', name : 'Hear You Me - Jimmy Eat World'                  , end_early :  0 },
			{ filename :    'br.mp3', name : 'Bad Romance - Lady Gaga'                        , end_early :  0 },
			{ filename :   'cej.mp3', name : 'Cotton Eye Joe - Rednex'                        , end_early :  0 },
			{ filename : 'immoy.mp3', name : 'I\'ll Make a Man Out of You - Donny Osmond'     , end_early :  0 },
			{ filename :   'otf.m4a', name : 'On the Floor - Jennifer Lopez'                  , end_early :  0 },
			{ filename :  'tmid.mp3', name : 'The Middle - Jimmy Eat World'                   , end_early :  3 },
			{ filename : 'cupid.mp3', name : 'Cupid Shuffle'                                  , end_early :  0 },
			{ filename :   'tik.mp3', name : 'Tik Tok - Kesha'                                , end_early :  0 },
			{ filename :   'hss.mp3', name : 'Hey Soul Sister - Train'                        , end_early :  0 },
			{ filename :   'icy.mp3', name : 'I Choose You - Sara Bareilles'                  , end_early :  0 },
			{ filename :    'sl.mp3', name : 'Single Ladies - Beyonce'                        , end_early :  0 },
			{ filename :  'temp.mp3', name : 'Temperature - Sean Paul'                        , end_early :  0 },
			{ filename :   'way.mp3', name : 'We Are Young - fun'                             , end_early :  0 },
			{ filename :   'wil.mp3', name : 'What Is Love - Haddaway'                        , end_early :  0 },
			{ filename :   'atm.mp3', name : 'A Thousand Miles - Vanessa Carlton'             , end_early :  0 },
			{ filename :  'sysm.mp3', name : 'Stacys Mom - Fountains of Wayne'                , end_early :  3 },
			{ filename : 'sudwm.mp3', name : 'Shut Up and Dance - Walk the Moon'              , end_early :  0 },
			{ filename :    'td.mp3', name : 'Teenage Dream - Katy Perry'                     , end_early :  2 },
			{ filename :    'sv.mp3', name : 'Sweet Victory - David Glen Eisley'              , end_early :  0 },
			{ filename :   'cmm.mp3', name : 'Call Me Maybe - Carly Rae Jepsen'               , end_early :  9 },
			{ filename : 'idwmt.mp3', name : 'I Don\'t Want to Miss a Thing - Aerosmith'      , end_early : 11 },
			{ filename :  'yeah.mp3', name : 'Yeah - Usher'                                   , end_early :  0 },
			{ filename :  'loap.mp3', name : 'Livin On A Prayer - Bon Jovi'                   , end_early :  0 },
			{ filename :  'looh.mp3', name : 'Locked out of Heaven - Bruno Mars'              , end_early :  0 },
			{ filename :   'gns.mp3', name : 'Ghosts n Stuff - deadmau5'                      , end_early :  3 },
			{ filename :  'stgr.mp3', name : 'Stronger - Kanye West'                          , end_early :  0 },
			{ filename :    'ff.m4a', name : 'Fireflies - Owl City'                           , end_early : 11 },
			{ filename :   'aom.mp3', name : 'All of Me - John Legend'                        , end_early :  2 },
			{ filename :   'stm.mp3', name : 'Somebody Told Me - The Killers'                 , end_early :  0 },
			{ filename :   'ryg.mp3', name : 'Raise Your Glass - Pink'                        , end_early :  0 },
			{ filename :   'ctm.mp3', name : 'Cooler Than Me - Mike Posner'                   , end_early :  0 },
			{ filename :  'clks.m4a', name : 'Clocks - Coldplay'                              , end_early :  0 },
			{ filename : 'chfil.mp3', name : 'Cant Help Falling In Love - Ingrid Michaelson'  , end_early :  3 },
			{ filename :   'cyj.mp3', name : 'Check Yes Juliet - We The Kings'                , end_early :  7 },
			{ filename :  'gdlf.mp3', name : 'Good Life - Kanye West'                         , end_early :  2 },
			{ filename :   'tge.mp3', name : 'The Great Escape - Boys Like Girls'             , end_early :  7 },
			{ filename : 'yglbn.mp3', name : 'You Give Love A Bad Name - Bon Jovi'            , end_early :  0 },
			{ filename :  'tumh.mp3', name : 'Tearin Up My Heart - NSYNC'                     , end_early :  0 },
			{ filename :  'iits.mp3', name : 'Island In The Sun - Weezer'                     , end_early :  0 },
			{ filename :    'iy.mp3', name : 'I\'m Yours - Jason Mraz'                        , end_early :  0 },
			{ filename :    'jd.m4a', name : 'Just Dance - Lady Gaga'                         , end_early :  0 },
			{ filename :  'glam.mp3', name : 'Glamorous - Fergie'                             , end_early :  0 },
			{ filename :   'iml.mp3', name : 'It\'s My Life - Bon Jovi'                       , end_early :  2 },
			{ filename :   'fwk.mp3', name : 'Firework - Katy Perry'                          , end_early :  0 },
			{ filename :   'iab.mp3', name : 'I\'m A Believer - Smash Mouth'                  , end_early :  0 },
			{ filename :   'igf.m4a', name : 'I Gotta Feeling - Black Eyed Peas'              , end_early :  0 },
			{ filename :  'btdr.mp3', name : 'Bartender - T-Pain'                             , end_early :  2 },
			{ filename :  'tubt.mp3', name : 'Tubthumping - Chumbawamba'                      , end_early :  0 },
			{ filename :  'swbl.mp3', name : 'She Will Be Loved - Maroon 5'                   , end_early :  0 },
			{ filename :   'hly.mp3', name : 'Heart Like Yours - Willamette Stone'            , end_early :  0 },
			{ filename :  'sowk.m4a', name : 'Somewhere Only We Know - Keane'                 , end_early :  7 },
			{ filename :  'higa.mp3', name : 'Here It Goes Again - OK Go'                     , end_early :  0 },
			{ filename :  'twia.mp3', name : 'The Way I Are - Timbaland'                      , end_early :  0 },
			{ filename : 'iwdws.mp3', name : 'I Wanna Dance With Somebody - Whitney Houston'  , end_early :  0 },
			{ filename :  'cycl.mp3', name : 'Cyclone - T-Pain'                               , end_early :  0 },
			{ filename :    'ai.mp3', name : 'American Idiot - Green Day'                     , end_early :  0 },
			{ filename :   'siy.mp3', name : 'Still Into You - Paramore'                      , end_early :  0 },
			{ filename :  'swsw.mp3', name : 'Swing Swing - All American Rejects'             , end_early : 11 },
			{ filename :  'ebdy.mp3', name : 'Everybody - Ingrid Michaelson'                  , end_early :  0 },
			{ filename :   'wbt.mp3', name : 'We Belong Together - Mariah Carey'              , end_early :  0 },
			{ filename :    'cg.mp3', name : 'Country Grammar - Nelly'                        , end_early :  3 },
			{ filename :    'as.mp3', name : 'All Star - Smash Mouth'                         , end_early :  7 },
			{ filename :   'etd.mp3', name : 'Evacuate The Dancefloor - Cascada'              , end_early :  0 },  // Possible last song of the night
			{ filename :   'dsb.mp3', name : 'Dont Stop Believin - Journey'                   , end_early :  0 },
			{ filename :    'bh.mp3', name : 'Buddy Holly - Weezer'                           , end_early :  2 },
			{ filename :    'dy.mp3', name : 'Die Young - Kesha'                              , end_early :  3 },
			{ filename :    'mc.mp3', name : 'Midnight City - M83'                            , end_early :  0 },
			{ filename :    'fl.mp3', name : 'Flashing Lights - Kanye West'                   , end_early :  0 },
			{ filename :  'frvr.mp3', name : 'Forever - Chris Brown'                          , end_early :  0 },
			{ filename :   'lyl.mp3', name : 'Live Your Life - T.I.'                          , end_early :  0 },
			{ filename :    '22.mp3', name : '22 - Taylor Swift'                              , end_early :  0 },
			{ filename :    'sm.mp3', name : 'Sunday Morning - Maroon 5'                      , end_early :  0 },

			// Examples:
			// { filename :   'ctm.mp3', name : 'Cooler Than Me - Mike Posner'                    , transition_out : 10 },
			// { filename :    'dy.mp3', name : 'Die Young - Kesha'                               , end_early      : 10 },
			// { filename :    'sm.mp3', name : 'Sunday Morning - Maroon 5'                       , transition_out :  0 },
		],
		notes : [
			'Click <button><i class="fa fa-play" /></button> after announcement for everyone else to join dance floor.',
		],
	},
];