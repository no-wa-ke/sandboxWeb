var $, app;

function button(y_) {
	var e = document.createElement('input');
	e.type = 'checkbox';	
	this.element = e;
	this.y = y_;
	
	this.play = function() {
		var self = this;
		if (this.element.checked) {
			this.element.disabled = true;
			sounds.stop(this.y);
			sounds.play(this.y);
			setTimeout(function() {
				self.element.disabled = false;
			}, 300);
		}
	};
	
	return this;
}

function slider(e, v, w) {
	this.element = e;
	this.value = v;
	this.label = $('label');
	this.min = 80;
	this.max = 188;
	this.width = w;
	
	var s = this;
	observe(this.element, 'scroll', function() {
		s.update();
	});
	
	this.update = function() {
		var n = this.norm(this.element.scrollLeft, 0, 3000, 0, 1);
		this.value = Math.round(this.norm(n, 0, 1, this.min, this.max));
		this.label.value = this.value;
		app.bpm = this.value;
	};
	
	this.set = function() {
		var n = this.norm(this.value, this.min, this.max, 0, 1);
		this.element.scrollLeft = n * 3000;
	};
	
	this.norm = function(value, istart, istop, ostart, ostop) {
		return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
	};
	
	return this;
}

function $(id) {
	return document.getElementById(id);
}

var sounds = {
	init: function() {
		var test = new Audio("audio"),
			mp3 = test.canPlayType("audio/mpeg") !== "";
		
		this.loaded = 0;
		this.tunes = [];
		
		for (var i=1; i<17; i++) {
			var tune = document.createElement('audio');
			tune.setAttribute('preload', true);
			tune.src = 'sounds/' + i + (mp3 ? '.mp3' : '.ogg');
			if (window.navigator.vendor.indexOf('Apple') == 0) {
				tune.src = tune.src.replace('.mp3', '.m4a');
			}
			observe(tune, 'load', function() {sounds.onload();});
			document.body.appendChild(tune);
			this.tunes.push(tune);
		}
	},
	onload: function() {
		sounds.loaded++;
	},
	play: function(id) {
		this.tunes[id].play();
	},
	stop: function(id) {
		this.tunes[id].currentTime = 0;
		this.tunes[id].pause();
	}
};

var app = {
	init: function() {
		sounds.init();
		
		var button_size = 22, pad_size = 16,
			buttons = [], b, bpm = 120,
			container = $('tenori'), s, dimensions;
		
		dimensions = pad_size * button_size;
		
		s = new slider($('slider'), bpm, dimensions);
		s.element.style.width = dimensions + 'px';
		s.element.style.top = 20 + dimensions + 'px';
		s.label.style.top = 80 + dimensions + 'px';
		s.set();
		
		for (var x=0; x<pad_size; x++) {
			for (var y=0; y<pad_size; y++) {
				b = new button(y);
				b.element.style.left = x * button_size + 'px';
				b.element.style.top = y * button_size + 'px';
				container.appendChild(b.element);
				buttons.push(b);
			}
		}		
		
		this.slider = s;
		this.button_size = button_size;
		this.pad_size = pad_size;
		this.step = 0;
		this.bpm = bpm;
		this.timeout = null;
		this.buttons = buttons;
		this.tick();
	},
	tick: function() {
		for (var y=0; y<this.pad_size; y++) {
			this.buttons[this.step * this.pad_size + y].play();
		}
		
		this.step = this.step + 1 < this.pad_size ? this.step + 1 : 0;
		setTimeout(function() {
			app.tick();
		}, this.bpm_to_mspb(this.bpm));
	},
	bpm_to_mspb: function(bpm) {
		return (60 / bpm) * 1000 / 4;
	}
};

function observe(element, name, handler) {
	if (element.addEventListener) {
		element.addEventListener(name, handler, false);
	} else {
		element.attachEvent("on" + name, handler);
	}
}

observe(window, 'load', function() {
	sounds.init();
	app.init();
});
