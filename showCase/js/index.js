// html5media enables <video> and <audio> tags in all major browsers
// External File: http://api.html5media.info/1.1.8/html5media.min.js


// Add user agent as an attribute on the <html> tag...
// Inspiration: http://css-tricks.com/ie-10-specific-styles/
var b = document.documentElement;
b.setAttribute('data-useragent', navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);



// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {


	$('.head').blurjs({
		source: 'body',
		radius: 10,
		overlay: 'rgba(255,255,255,0.4)'

	});


	var supportsAudio = !!document.createElement('audio').canPlayType;
	if (supportsAudio) {
		var index = 0,
			playing = false;
		mediaPath = 'http://no-wa-ke.com/media/',
		extension = '',
		tracks = [{
				"track": 1,
				"name": "Monopo,Inc -- riff14(disco)",
				"length": "02:43",
				"file": "rockack04"
        }, {
				"track": 2,
				"name": "Monopo,Inc --I Know",
				"length": "08:30",
				"file": "rockakHouse"
        }, {
				"track": 3,
				"name": "Monopo,Inc -- Music Keeps Me Singing",
				"length": "05:01",
				"file": "rockakHopC"
        }, {
				"track": 4,
				"name": "Monopo,Inc -- riff14(remix)",
				"length": "08:32",
				"file": "rockakFirst"
        }, {
				"track": 5,
				"name": "Panasonic -- My Wonderful Wonder(ragtime ver)",
				"length": "05:05",
				"file": "ragtime"
        }, {
				"track": 6,
				"name": "Panasonic --riff5",
				"length": "02:49",
				"file": "appleLike"

		},
			{
				"track": 7,
				"name": "Panasonic --riff4",
				"length": "02:49",
				"file": "ChopinWaltz"
        },
				  {
				"track": 8,
				"name": "KANEBO --SALA",
				"length": "02:49",
				"file": "sala"
        },
				    {
				"track": 9,
				"name": "Ogido -- jazz4",
				"length": "02:49",
				"file": "ClarinetSad"
        },
				   {
				"track": 10,
				"name": "Ogido -- jazz5",
				"length": "02:49",
				"file": "JazzLike"
        },
				    {
				"track": 11,
				"name": "Ogido -- Theme of openStudio",
				"length": "02:49",
				"file": "LightsOut5"
        }
				 ],
		trackCount = tracks.length,
		npAction = $('#npAction'),
		npTitle = $('#npTitle'),
		audio = $('#audio1').bind('play', function () {
			playing = true;
			npAction.text('Now Playing...');
		}).bind('pause', function () {
			playing = false;
			npAction.text('Paused...');
		}).bind('ended', function () {
			npAction.text('Paused...');
			if ((index + 1) < trackCount) {
				index++;
				loadTrack(index);
				audio.play();
			} else {
				audio.pause();
				index = 0;
				loadTrack(index);
			}
		}).get(0),
		btnPrev = $('#btnPrev').click(function () {
			if ((index - 1) > -1) {
				index--;
				loadTrack(index);
				if (playing) {
					audio.play();
				}
			} else {
				audio.pause();
				index = 0;
				loadTrack(index);
			}
		}),
		btnNext = $('#btnNext').click(function () {
			if ((index + 1) < trackCount) {
				index++;
				loadTrack(index);
				if (playing) {
					audio.play();
				}
			} else {
				audio.pause();
				index = 0;
				loadTrack(index);
			}
		}),
		li = $('#plList li').click(function () {
			var id = parseInt($(this).index());
			if (id !== index) {
				playTrack(id);
			}
		}),
		loadTrack = function (id) {
			$('.plSel').removeClass('plSel');
			$('#plList li:eq(' + id + ')').addClass('plSel');
			npTitle.text(tracks[id].name);
			index = id;
			audio.src = mediaPath + tracks[id].file + extension;
		},
		playTrack = function (id) {
			loadTrack(id);
			audio.play();
		};
		extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
		loadTrack(index);




	}
});