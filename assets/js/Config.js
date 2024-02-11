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
			{ filename : 'iris.mp3', name : 'Iris - Goo Goo Dolls', end_early : 10 },
		],
		notes : [
			'Click <button><i class="fa fa-play" /></button> when couple is in position (after the announcement).',
			'Click <button>Next Playlist</button> after the audio finishes fading out.',
		],
	},
	{
		name  : 'Mother / Son Dance',
		songs : [
			{ filename : 'col.mp3', name : 'Circle of Life - Elton John' },
		],
		notes : [
			'Click <button><i class="fa fa-play" /></button> when mother/son are in position (after the announcement).',
			'Click <button>Next Playlist</button> after the audio finishes fading out.',
		],
	},
	{
		name  : 'Father / Daughter Dance',
		songs : [
			{ filename : 'db.mp3', name : 'Daydream Believer - The Monkees' },
		],
		notes : [
			'Click <button><i class="fa fa-play" /></button> after father says: <br>"It\'s cause I\'m short, I know".',
			'Click <button>Next Playlist</button> after the audio finishes fading out.',
		],
	},
	{
		name  : 'Reception',
		songs : [
			{ filename :  '1985.mp3', name : '1985 - Bowling for Soup'                        },
			{ filename :    '22.mp3', name : '22 - Taylor Swift'                              },
			{ filename :   'atm.mp3', name : 'A Thousand Miles - Vanessa Carlton'             },
			{ filename :   'afr.mp3', name : 'Africa - Toto'                                  },
			{ filename :   'aom.mp3', name : 'All of Me - John Legend'                        },
			{ filename :    'as.mp3', name : 'All Star - Smash Mouth'                         },
			{ filename :  'atst.mp3', name : 'All The Small Things - Blink 182'               },
			{ filename :    'ai.mp3', name : 'American Idiot - Green Day'                     },
			{ filename :    'br.mp3', name : 'Bad Romance - Lady Gaga'                        },
			{ filename :  'btdr.mp3', name : 'Bartender - T-Pain'                             },
			{ filename :    'bh.mp3', name : 'Buddy Holly - Weezer'                           },
			{ filename :   'cmm.mp3', name : 'Call Me Maybe - Carly Rae Jepsen'               },
			{ filename : 'chfil.mp3', name : 'Cant Help Falling In Love - Ingrid Michaelson'  },
			{ filename :   'ccs.mp3', name : 'Cha Cha Slide'                                  },
			{ filename :    'cc.mp3', name : 'Chasing Cars - Snow Patrol'                     },
			{ filename :   'cyj.mp3', name : 'Check Yes Juliet - We The Kings'                },
			{ filename :  'clks.m4a', name : 'Clocks - Coldplay'                              },
			{ filename :   'coe.mp3', name : 'Come On Eileen - Dexys Midnight Runners'        },
			{ filename :   'ctm.mp3', name : 'Cooler Than Me - Mike Posner'                    , transition_out : 10 },
			{ filename :   'cej.mp3', name : 'Cotton Eye Joe - Rednex'                        },
			{ filename :    'cg.mp3', name : 'Country Grammar - Nelly'                        },
			{ filename : 'cupid.mp3', name : 'Cupid Shuffle'                                  },
			{ filename :  'cycl.mp3', name : 'Cyclone - T-Pain'                               },
			{ filename :    'dy.mp3', name : 'Die Young - Kesha'                               , end_early      : 10 },
			{ filename :  'dgfl.mp3', name : 'DJ Got Us Fallin In Love - Usher'               },
			{ filename :   'dsb.mp3', name : 'Dont Stop Believin - Journey'                   },
			{ filename :  'dymt.mp3', name : 'Dynamite - Taio Cruz'                           },
			{ filename :   'etd.mp3', name : 'Evacuate The Dancefloor - Cascada'              },  // Possible last song of the night
			{ filename :  'ebdy.mp3', name : 'Everybody - Ingrid Michaelson'                  },
			{ filename :    'ff.m4a', name : 'Fireflies - Owl City'                           },
			{ filename :   'fwk.mp3', name : 'Firework - Katy Perry'                          },
			{ filename :    'fl.mp3', name : 'Flashing Lights - Kanye West'                   },
			{ filename :  'frvr.mp3', name : 'Forever - Chris Brown'                          },
			{ filename :    'gl.mp3', name : 'Get Low - Lil Jon'                              },
			{ filename :   'gns.mp3', name : 'Ghosts n Stuff - deadmau5'                      },
			{ filename :  'glam.mp3', name : 'Glamorous - Fergie'                             },
			{ filename :  'gdlf.mp3', name : 'Good Life - Kanye West'                         },
			{ filename :   'hym.m4a', name : 'Hear You Me - Jimmy Eat World'                  },
			{ filename :   'hly.mp3', name : 'Heart Like Yours - Willamette Stone'            },
			{ filename :  'higa.mp3', name : 'Here It Goes Again - OK Go'                     },
			{ filename :   'hss.mp3', name : 'Hey Soul Sister - Train'                        },
			{ filename :   'icy.mp3', name : 'I Choose You - Sara Bareilles'                  },
			{ filename : 'idwmt.mp3', name : 'I Don\'t Want to Miss a Thing - Aerosmith'      },
			{ filename :   'igf.m4a', name : 'I Gotta Feeling - Black Eyed Peas'              },
			{ filename : 'iwitw.mp3', name : 'I Want It That Way - Backstreet Boys'           },  // Possible first song for everyone to dance to
			{ filename : 'iwdws.mp3', name : 'I Wanna Dance With Somebody - Whitney Houston'  },
			{ filename : 'immoy.mp3', name : 'I\'ll Make a Man Out of You - Donny Osmond'     },
			{ filename :   'iab.mp3', name : 'I\'m A Believer - Smash Mouth'                  },
			{ filename :    'iy.mp3', name : 'I\'m Yours - Jason Mraz'                        },
			{ filename :  'iits.mp3', name : 'Island In The Sun - Weezer'                     },
			{ filename :   'iml.mp3', name : 'It\'s My Life - Bon Jovi'                       },
			{ filename :    'jd.m4a', name : 'Just Dance - Lady Gaga'                         },
			{ filename :   'lir.mp3', name : 'Let It Rock - Kevin Rudolf'                     },
			{ filename :   'lyl.mp3', name : 'Live Your Life - T.I.'                          },
			{ filename :  'loap.mp3', name : 'Livin On A Prayer - Bon Jovi'                   },
			{ filename :  'looh.mp3', name : 'Locked out of Heaven - Bruno Mars'              },
			{ filename :    'mc.mp3', name : 'Midnight City - M83'                            },
			{ filename :  'ngyu.mp3', name : 'Never Gonna Give You Up - Rick Astley'          },
			{ filename :   'otf.m4a', name : 'On the Floor - Jennifer Lopez'                  },
			{ filename :   'ryg.mp3', name : 'Raise Your Glass - Pink'                        },
			{ filename :  'swbl.mp3', name : 'She Will Be Loved - Maroon 5'                   },
			{ filename : 'sudwm.mp3', name : 'Shut Up and Dance - Walk the Moon'              },
			{ filename :    'sl.mp3', name : 'Single Ladies - Beyonce'                        },
			{ filename :   'stm.mp3', name : 'Somebody Told Me - The Killers'                 },
			{ filename :  'sowk.m4a', name : 'Somewhere Only We Know - Keane'                 },
			{ filename :  'sysm.mp3', name : 'Stacys Mom - Fountains of Wayne'                },
			{ filename :   'siy.mp3', name : 'Still Into You - Paramore'                      },
			{ filename :  'stgr.mp3', name : 'Stronger - Kanye West'                          },
			{ filename :    'sm.mp3', name : 'Sunday Morning - Maroon 5'                       , transition_out :  0 },
			{ filename :  'swsw.mp3', name : 'Swing Swing - All American Rejects'             },
			{ filename :  'tumh.mp3', name : 'Tearin Up My Heart - NSYNC'                     },
			{ filename :    'td.mp3', name : 'Teenage Dream - Katy Perry'                     },
			{ filename :  'temp.mp3', name : 'Temperature - Sean Paul'                        },
			{ filename :   'tge.mp3', name : 'The Great Escape - Boys Like Girls'             },
			{ filename :   'tik.mp3', name : 'Tik Tok - Kesha'                                },
			{ filename :  'tmid.mp3', name : 'The Middle - Jimmy Eat World'                   },
			{ filename :  'twia.mp3', name : 'The Way I Are - Timbaland'                      },
			{ filename :  'tubt.mp3', name : 'Tubthumping - Chumbawamba'                      },
			{ filename :    'tp.m4a', name : 'Turning Page - Sleeping At Last'                },
			{ filename :   'way.mp3', name : 'We Are Young - fun'                             },
			{ filename :   'wbt.mp3', name : 'We Belong Together - Mariah Carey'              },
			{ filename :   'wil.mp3', name : 'What Is Love - Haddaway'                        },
			{ filename :  'wmyb.mp3', name : 'What Makes You Beautiful - One Direction'       },
			{ filename :  'yeah.mp3', name : 'Yeah - Usher'                                   },
			{ filename : 'yglbn.mp3', name : 'You Give Love A Bad Name - Bon Jovi'            },
		],
		notes : [
			'Click <button><i class="fa fa-play" /></button> after announcement for everyone else to join dance floor.',
		],
	},
];