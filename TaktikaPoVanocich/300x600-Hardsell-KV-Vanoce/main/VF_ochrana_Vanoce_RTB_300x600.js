(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,900);


(lib.gula1 = function() {
	this.initialize(img.gula1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,1318);


(lib.gula2 = function() {
	this.initialize(img.gula2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,631);


(lib.gula3 = function() {
	this.initialize(img.gula3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,630);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Doplnění3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYEWQgfgKgagWQgagVgPghQgPggAAgsQAAhRA8gtQA7gwBKgLQBJgMA1AAIAAgIQAAhFgdgeQgcgfg1ABQgkAAgnAOQglAPgkAcIgchAQAdgYAtgUQAsgUBBAAQBYAAAyAvQAwAwAABvIAAFoIhNAAIgEgvQgbAdgkAPQgkAQgqAAQgiAAghgMgAgKAEQg2ANgZAdQgaAeAAAqQAAAlAVAZQAWAaAWAGIAnAFQAlAAAhgRQAggRAbgXIAAirQhLACg1ANg");
	this.shape.setTransform(-231.2,11.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjLEVIAAhXIE4mJIktAAIAAhJIGEAAIAABcIk6GEIFCAAIAABJg");
	this.shape_1.setTransform(-280.475,11.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307.3,-66.9,105.80000000000001,133.9);


(lib.Doplnění2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABMEkIAAlSQAAgtgSgZQgSgYgjAAQgYAAgVAMIgkAZIAAGLIjCAAIAAo6ICrAAIAIAxQAbgZAogSQAogTA0AAQBaAAA5A3QA4A2AAByIAAFog");
	this.shape.setTransform(107.575,10.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3ETQg0gXgkgnQglgpgTg3QgUg2AAhBQAAhgAqhIQArhHBBgcQBAgcBFAAQBjAABBAvQBDAuAaBGQAbBGAAA+QAABBgTA2QgUA3gkApQglAng0AXQg1AXhDgBQhDABg0gXgAhEhrQgXAnAABCQAABFAWApQAXApAuAAQAwAAAWgpQAWgpAAhFQAAhCgXgnQgXgoguAAQgtAAgXAog");
	this.shape_1.setTransform(42.275,10.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiPGKIAAmqIhJAAIAAiPIBJAAIAAgOQAAhjA3g0QA3g1BdAAQA0AAApAKIBAATIgUCEIglgNIgtgEQhBgBAAA/IAAAMIBxAAIAACPIhxAAIAAGqg");
	this.shape_2.setTransform(-7.05,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhhEYQg0gTgmglQgnglgVg3QgVg4AAhMQAAhjArhKQArhJBCgZQA+gaA7AAQB5ABBHBTQBHBTABCqIlcAAQACA1AfAbQAeAcA6AAQAyAAAggSQAggSAggaIA5CIQgZAYgqAUQgqATgtAGIhNAGQg7AAg0gRgABXhDQgBgsgXgcQgXgcgiAAQgiAAgXAbQgXAbgEAuIClAAIAAAAg");
	this.shape_3.setTransform(-59.65,10.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhqFhQgpgnAAhXIAApqIDBAAIAAJKQAAAXAHAMQAIAKAWAAQAQABAYgKIAZCLIg2AOQgmAJgrgBQhOAAgpgng");
	this.shape_4.setTransform(-106.2,1.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhhEYQg0gTgmglQgmglgWg3QgVg4AAhMQAAhjArhKQArhJBBgZQA/gaA8AAQB4ABBHBTQBHBTABCqIldAAQADA1AfAbQAfAcA5AAQAyAAAggSQAhgSAegaIA5CIQgXAYgrAUQgrATgsAGIhMAGQg9AAgzgRgABXhDQgCgsgWgcQgXgcgiAAQgjAAgWAbQgXAbgFAuICmAAIAAAAg");
	this.shape_5.setTransform(-156.8,10.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhdE8QgqgtgBhQIAAkNIhMAAIAAiPIBMAAIAAiLIDAAAIAACLIB9AAIAACPIh9AAIAADxQAAAbALALQAKALAYAAQAfAAAlgcIAsB/QghAWgrAPQgrANg+gBQhTAAgqgsg");
	this.shape_6.setTransform(-209,4.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.2,-66.9,376,133.9);


(lib.Doplnění1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiuDlQgvg1AAhtIAAldIBVAAIAAFiQAABJAfAhQAhAhA+AAQAoAAAogSQAogSAZgZIAAmwIBXAAIAAIoIhPAAIgGgrQgfAagmAPQgmAPg2AAQhoAAgug2g");
	this.shape.setTransform(37.95,12.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACLEbIAAlZQgBhGgdgnQgegohDAAQgqABgnASQgoATgdAXIAAGxIhUAAIAAooIBNAAIAGAtQAggaArgRQArgQAuAAQBuAAAsA4QAsA3AABwIAAFXg");
	this.shape_1.setTransform(-21.15,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AivDlQgug1AAhtIAAldIBVAAIAAFiQAABJAgAhQAgAhA+AAQAoAAAogSQAogSAagZIAAmwIBWAAIAAIoIhOAAIgGgrQghAaglAPQgmAPg2AAQhoAAgvg2g");
	this.shape_2.setTransform(-80.9,12.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiHEbIAAooIBNAAIAIA3QAfgdAhgTQAjgVAnAAIAwAGIgLBSIgqgEQgkAAgkAVQgiAWgbAaIAAGdg");
	this.shape_3.setTransform(-123.375,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhqEIQgugYgegpQgfgpgPg1QgQg1AAg2QAAhSAihIQAihIA5gfQA7geA8AAQBWAAA6AxQA6AxAVBEQAWBFAAA2QAABVglBKQgkBIg4AdQg3Aeg9AAQg8AAgugagAhiizQgnAngMAyQgLAwAAAoQAABBAXA3QAXA4AlAWQAmAWAnAAQA3AAAngmQAoglANg0QAOg0AAgnQAAhAgXg2QgYg3gmgXQgkgWgoAAQg6AAgoAng");
	this.shape_4.setTransform(-174.025,11.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB7GDIg/iaIgnhRQgNgVgUgJQgXgJgZAAIhHAAIAAESIhVAAIAAsFIBVAAIAAGpIA4AAQAhAAAZgRQAZgRAYg1IA0h2IBbAAIg6CAQgSAogVAaQgSAbgYAJQAgAKAUATQAUATAQAoIBdDrg");
	this.shape_5.setTransform(-226.45,0.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.8,-66.9,327.70000000000005,133.9);


(lib.over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.over, new cjs.Rectangle(0,0,300,600), null);


(lib.Doplnění4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkoGBQA+AAAxgQQAxgQAYgmIjRo/IDWAAIB1GcQAmhgAdhrIA0jRIDBAAQgeCEg3CSQg1CUg5BxQgXAugaAkIg1BEQg0A7hSAdQhRAehaABgAhkmNIDmiWIBFCAIj+Bpg");
	this.shape.setTransform(-11.225,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABMGDIAAlSQAAgxgTgVQgSgXgeAAQgZAAgWAMIglAYIAAGLIjCAAIAAsGIDCAAIAADsQAZgSAigNQAigNAwAAQBnAAAyA6QAzA6AABoIAAFqg");
	this.shape_1.setTransform(-75.575,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjXDrQg3g4AAhtIAAlpIDEAAIAAFRQAAAsAPAYQAQAZAjgBQAdAAAUgKIAjgXIAAmMIDCAAIAAI6IipAAIgLgvQgcAagoARQgnARgxAAQhfAAg2g5g");
	this.shape_2.setTransform(-141.85,11.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjCEhIAAo5ICsAAIALA6QATgYAhgVQAigWAwAAIAnADIAhAJIgYCfQgfgJgeAAQgjAAgdAUQgeAVgQATIAAFkg");
	this.shape_3.setTransform(-194.25,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ak8GDIAAsGID8AAQAyABAwAIQAxALAqATQBJAhAuBGQAuBGAOBBQANBCAAArQAABzgxBeQgwBehiAuQgnASguALQguAKg0AAgAh2DRIAyAAQBBAAAogeQAmgaAUgvQAUguAAg7QAAg5gSguQgSgvgjgaQgXgQgbgJQgdgIggAAIgzAAg");
	this.shape_4.setTransform(-254.875,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296.2,-66.9,320,133.9);


(lib.Doplnění3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.instance = new lib.gula2();
	this.instance.setTransform(-48.55,-123.05,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-123,97.1,246.1);


(lib.Doplnění2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.instance = new lib.gula3();
	this.instance.setTransform(-49.6,-126,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.6,-126,99.2,252);


(lib.Doplnění1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.instance = new lib.gula1();
	this.instance.setTransform(-111.8,-283.35,0.43,0.43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.8,-283.3,223.6,566.7);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3301D").s().p("AgKA+IAAhYIAVAAIAABYgAgIgoQgEgDAAgGQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFQAAAGgEADQgDADgGAAQgFAAgDgDg");
	this.shape.setTransform(93.075,559.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3301D").s().p("AgQApQgKgFgFgLQgGgJAAgPQAAgQAGgJQAGgLAJgFQAKgGAKAAQAKAAAHAEQAGADAEAFQAFAFACAFIgQAKQgDgGgEgDQgEgEgHAAQgHAAgGAHQgFAHAAANQAAANAGAIQAGAHAJAAQAHAAAFgDQAGgCAEgEIAHASQgFADgIADQgIAEgLAAQgKAAgKgGg");
	this.shape_1.setTransform(86.675,561.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3301D").s().p("AARA9IAAg2QgBgRgPAAQgHAAgKAHIAABAIgWAAIAAh5IAWAAIAAAnQAMgIAMAAQAfAAAAAiIAAA4g");
	this.shape_2.setTransform(77.35,559.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3301D").s().p("AgQApQgKgFgFgLQgGgJAAgPQAAgQAGgJQAGgLAJgFQAKgGAKAAQAKAAAHAEQAGADAEAFQAFAFACAFIgQAKQgDgGgEgDQgEgEgHAAQgHAAgGAHQgFAHAAANQAAANAGAIQAGAHAJAAQAHAAAFgDQAGgCAEgEIAHASQgFADgIADQgIAEgLAAQgKAAgKgGg");
	this.shape_3.setTransform(68.175,561.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D3301D").s().p("AgVAoQgJgGgGgKQgFgLAAgNQAAgNAFgKQAGgLAJgGQAKgFALgBQANABAJAFQAKAGAFALQAFAKAAANQAAANgFALQgFAKgKAGQgJAGgNABQgLgBgKgGgAgNgUQgFAIAAAMQAAANAFAIQAGAHAHABQAJgBAFgHQAGgIAAgNQgBgMgFgIQgFgHgJgBQgIABgFAHg");
	this.shape_4.setTransform(56.6,561.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3301D").s().p("AgLA9IAAhjIghAAIAAgWIBaAAIAAAWIgiAAIAABjg");
	this.shape_5.setTransform(47.8,559.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKA+IAAhYIAVAAIAABYgAgIgoQgEgDAAgGQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFQAAAGgEADQgDADgGAAQgFAAgDgDg");
	this.shape_6.setTransform(93.075,559.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQApQgKgFgFgLQgGgJAAgPQAAgQAGgJQAGgLAJgFQAKgGAKAAQAKAAAHAEQAGADAEAFQAFAFACAFIgQAKQgDgGgEgDQgEgEgHAAQgHAAgGAHQgFAHAAANQAAANAGAIQAGAHAJAAQAHAAAFgDQAGgCAEgEIAHASQgFADgIADQgIAEgLAAQgKAAgKgGg");
	this.shape_7.setTransform(86.675,561.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARA9IAAg2QgBgRgPAAQgHAAgKAHIAABAIgWAAIAAh5IAWAAIAAAnQAMgIAMAAQAfAAAAAiIAAA4g");
	this.shape_8.setTransform(77.35,559.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQApQgKgFgFgLQgGgJAAgPQAAgQAGgJQAGgLAJgFQAKgGAKAAQAKAAAHAEQAGADAEAFQAFAFACAFIgQAKQgDgGgEgDQgEgEgHAAQgHAAgGAHQgFAHAAANQAAANAGAIQAGAHAJAAQAHAAAFgDQAGgCAEgEIAHASQgFADgIADQgIAEgLAAQgKAAgKgGg");
	this.shape_9.setTransform(68.175,561.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAoQgJgGgGgKQgFgLAAgNQAAgNAFgKQAGgLAJgGQAKgFALgBQANABAJAFQAKAGAFALQAFAKAAANQAAANgFALQgFAKgKAGQgJAGgNABQgLgBgKgGgAgNgUQgFAIAAAMQAAANAFAIQAGAHAHABQAJgBAFgHQAGgIAAgNQgBgMgFgIQgFgHgJgBQgIABgFAHg");
	this.shape_10.setTransform(56.6,561.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLA9IAAhjIghAAIAAgWIBaAAIAAAWIgiAAIAABjg");
	this.shape_11.setTransform(47.8,559.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// Vrstva_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AnfCvQgZAAgSgSQgRgRAAgZIAAjlQAAgZARgSQASgRAZAAIO/AAQAZAAASARQARATAAAYIAADlQAAAZgRARQgSASgZAAg");
	this.shape_12.setTransform(71.4484,560.3575,0.9102,0.9661);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#90389B").s().p("AnfCvQgZAAgSgSQgRgRAAgZIAAjlQAAgZARgSQASgRAZAAIO/AAQAZAAASARQARATAAAYIAADlQAAAZgRARQgSASgZAAg");
	this.shape_13.setTransform(71.3984,560.3575,0.9102,0.9661);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12,p:{scaleX:0.9102,x:71.4484,y:560.3575}}]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12,p:{scaleX:0.9101,x:71.4476,y:560.3072}}]},2).wait(1));

	// Vrstva_2
	this.instance = new lib.over();
	this.instance.setTransform(150.1,300.1,0.9799,0.99,0,0,0,150.1,300.1);
	this.instance.alpha = 0.0117;
	this.instance.compositeOperation = "darken";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,294,594);


// stage content:
(lib.VF_ochrana_Vanoce_RTB_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [189];
	// timeline functions:
	this.frame_189 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==3){
		this.stop();
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(189).call(this.frame_189).wait(46));

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E60000").s().p("AjEEvQhehegBiPQAAhfAvhdQAshXBHg7QBDg3BUghQBXggBSAAQATgBATAFQhLAQgwA8QgxA7gBBMIABAJQB2AdA8BHQA4BDABBnQAAB2hUBSQhTBTh1AAIgCAAIgBAAQhyAAhXhWg");
	this.shape.setTransform(252.2124,555.1803,0.4196,0.4196);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al2F3QibibAAjcQAAjaCbicQCcibDaAAQDcAACaCbQCcCcAADaQAADcicCbQiaCbjcAAQjaAAicibg");
	this.shape_1.setTransform(252.0873,558.9478,0.4196,0.4196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(235));

	// btn
	this.instance = new lib.btn();
	this.instance.setTransform(54,17.5,1,1,0,0,0,54,17.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(235));

	// tx4
	this.instance_1 = new lib.Doplnění1("synched",0);
	this.instance_1.setTransform(396.55,502.75,0.3657,0.3657,0,0,0,1.8,0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({regX:2.2,x:206.45},13,cjs.Ease.backOut).to({startPosition:0},20).to({startPosition:0},9).to({regX:0.8,regY:0.6,scaleX:0.4022,scaleY:0.4022,x:209.4},5).to({regX:2.2,regY:0.7,scaleX:0.3657,scaleY:0.3657,x:206.45},5).to({startPosition:0},37).to({startPosition:0},9).to({regX:0.8,regY:0.6,scaleX:0.4022,scaleY:0.4022,x:209.4},5).to({regX:2.2,regY:0.7,scaleX:0.3657,scaleY:0.3657,x:206.45},5).to({startPosition:0},25).to({startPosition:0},9).to({regX:0.8,regY:0.6,scaleX:0.4022,scaleY:0.4022,x:209.4},5).to({regX:2.2,regY:0.7,scaleX:0.3657,scaleY:0.3657,x:206.45},5).to({startPosition:0},41).to({x:401.95},7,cjs.Ease.cubicInOut).to({_off:true},1).wait(8));

	// tx3
	this.instance_2 = new lib.Doplnění3("synched",0);
	this.instance_2.setTransform(71.1,502.8,0.3657,0.3657,0,0,0,1,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({regX:1.1,x:177.3},13,cjs.Ease.backOut).to({startPosition:0},24).to({startPosition:0},6).to({scaleX:0.4023,scaleY:0.4023,x:186.65},5).to({scaleX:0.3657,scaleY:0.3657,x:177.3},5).to({startPosition:0},40).to({startPosition:0},6).to({scaleX:0.4023,scaleY:0.4023,x:186.65},5).to({scaleX:0.3657,scaleY:0.3657,x:177.3},5).to({startPosition:0},28).to({startPosition:0},6).to({scaleX:0.4023,scaleY:0.4023,x:186.65},5).to({scaleX:0.3657,scaleY:0.3657,x:177.3},5).to({startPosition:0},43).to({x:62.3},7,cjs.Ease.cubicInOut).to({_off:true},1).wait(9));

	// tx2
	this.instance_3 = new lib.Doplnění2("synched",0);
	this.instance_3.setTransform(420.05,447.9,0.528,0.528,0,0,0,1.1,1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({x:172.7},13,cjs.Ease.backOut).to({x:173.8},28).to({startPosition:0},3).to({regX:0.8,regY:1.1,scaleX:0.5808,scaleY:0.5808,x:176.05},5).to({regX:1.1,regY:1,scaleX:0.528,scaleY:0.528,x:173.8},5).to({startPosition:0},43).to({startPosition:0},3).to({regX:0.8,regY:1.1,scaleX:0.5808,scaleY:0.5808,x:176.05},5).to({regX:1.1,regY:1,scaleX:0.528,scaleY:0.528,x:173.8},5).to({startPosition:0},31).to({startPosition:0},3).to({regX:0.8,regY:1.1,scaleX:0.5808,scaleY:0.5808,x:176.05},5).to({regX:1.1,regY:1,scaleX:0.528,scaleY:0.528,x:173.8},5).to({startPosition:0},44).to({x:430.65},7,cjs.Ease.cubicInOut).to({_off:true},1).wait(11));

	// tx1
	this.instance_4 = new lib.Doplnění4("synched",0);
	this.instance_4.setTransform(-10.3,384.95,0.528,0.528,0,0,0,0.3,1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({regX:0.8,x:220.05},13,cjs.Ease.backOut).to({x:221.65},32).to({regX:0.7,regY:0.8,scaleX:0.5809,scaleY:0.5809,x:228.85,y:384.85},5).to({regX:0.8,regY:1,scaleX:0.528,scaleY:0.528,x:221.65,y:384.95},5).to({startPosition:0},46).to({regX:0.7,regY:0.8,scaleX:0.5809,scaleY:0.5809,x:228.85,y:384.85},5).to({regX:0.8,regY:1,scaleX:0.528,scaleY:0.528,x:221.65,y:384.95},5).to({startPosition:0},34).to({regX:0.7,regY:0.8,scaleX:0.5809,scaleY:0.5809,x:228.85,y:384.85},5).to({regX:0.8,regY:1,scaleX:0.528,scaleY:0.528,x:221.65,y:384.95},5).to({startPosition:0},45).to({x:-16.55},7,cjs.Ease.cubicInOut).to({_off:true},1).wait(13));

	// gula1
	this.instance_5 = new lib.Doplnění1_1("synched",0);
	this.instance_5.setTransform(151.8,-573.85,1,1,0,0,0,0,-283.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({y:-229.6},15,cjs.Ease.cubicOut).to({regX:0.1,rotation:2.7226,x:151.9,y:-229.65},33,cjs.Ease.quadInOut).to({rotation:-3.0203},38,cjs.Ease.quadInOut).to({rotation:2.7226},38,cjs.Ease.quadInOut).to({rotation:-3.0203},49,cjs.Ease.quadInOut).wait(1).to({regX:0,regY:0,rotation:-3.0098,x:166.6984,y:53.3565},0).wait(1).to({rotation:-2.9927,x:166.6141,y:53.3612},0).wait(1).to({rotation:-2.9688,x:166.4957,y:53.3678},0).wait(1).to({rotation:-2.9376,x:166.3417,y:53.3762},0).wait(1).to({rotation:-2.8989,x:166.1504,y:53.3866},0).wait(1).to({rotation:-2.8524,x:165.9203,y:53.3989},0).wait(1).to({rotation:-2.7976,x:165.6497,y:53.4132},0).wait(1).to({rotation:-2.7343,x:165.3369,y:53.4294},0).wait(1).to({rotation:-2.6622,x:164.9802,y:53.4473},0).wait(1).to({rotation:-2.5809,x:164.5783,y:53.4671},0).wait(1).to({rotation:-2.4901,x:164.1296,y:53.4884},0).wait(1).to({rotation:-2.3897,x:163.6329,y:53.5113},0).wait(1).to({rotation:-2.2793,x:163.0872,y:53.5353},0).wait(1).to({rotation:-2.159,x:162.4919,y:53.5604},0).wait(1).to({rotation:-2.0285,x:161.8468,y:53.5861},0).wait(1).to({rotation:-1.8881,x:161.1523,y:53.6122},0).wait(1).to({rotation:-1.7379,x:160.4093,y:53.6381},0).wait(1).to({rotation:-1.5783,x:159.6196,y:53.6636},0).wait(1).to({rotation:-1.4098,x:158.7859,y:53.6882},0).wait(1).to({rotation:-1.2331,x:157.9118,y:53.7112},0).wait(1).to({rotation:-1.0492,x:157.0018,y:53.7324},0).wait(1).to({rotation:-0.8592,x:156.0616,y:53.7512},0).wait(1).to({rotation:-0.6643,x:155.0974,y:53.7672},0).wait(1).to({rotation:-0.4661,x:154.1165,y:53.7802},0).wait(1).to({rotation:-0.266,x:153.1263,y:53.7898},0).wait(1).to({rotation:-0.0657,x:152.1349,y:53.796},0).wait(1).to({rotation:0.1333,x:151.1499,y:53.7987},0).wait(1).to({rotation:0.3295,x:150.179,y:53.798},0).wait(1).to({rotation:0.5215,x:149.229,y:53.7942},0).wait(1).to({rotation:0.708,x:148.3062,y:53.7874},0).wait(1).to({rotation:0.8879,x:147.4158,y:53.7779},0).wait(1).to({rotation:1.0604,x:146.5624,y:53.7663},0).wait(1).to({rotation:1.2247,x:145.7493,y:53.7528},0).wait(1).to({rotation:1.3804,x:144.9792,y:53.7379},0).wait(1).to({rotation:1.527,x:144.2537,y:53.7219},0).wait(1).to({rotation:1.6644,x:143.5738,y:53.7052},0).wait(1).to({rotation:1.7926,x:142.9401,y:53.6883},0).wait(1).to({rotation:1.9114,x:142.3525,y:53.6712},0).wait(1).to({rotation:2.021,x:141.8103,y:53.6544},0).wait(1).to({rotation:2.1216,x:141.3128,y:53.6381},0).wait(1).to({rotation:2.2133,x:140.8591,y:53.6225},0).wait(1).to({regX:0.1,regY:-283.4,rotation:2.2965,x:151.85,y:-229.6},0).wait(1).to({regX:0,regY:0,rotation:2.372,x:140.0189,y:53.5372,alpha:0.8228},0).wait(1).to({rotation:2.4394,x:139.6789,y:53.5203,alpha:0.6647},0).wait(1).to({rotation:2.499,x:139.3782,y:53.505,alpha:0.5248},0).wait(1).to({rotation:2.5511,x:139.1153,y:53.4914,alpha:0.4025},0).wait(1).to({rotation:2.596,x:138.8887,y:53.4795,alpha:0.2971},0).wait(1).to({rotation:2.634,x:138.6969,y:53.4693,alpha:0.2079},0).wait(1).to({rotation:2.6654,x:138.5385,y:53.4608,alpha:0.1342},0).wait(1).to({rotation:2.6905,x:138.4122,y:53.4539,alpha:0.0754},0).wait(1).to({rotation:2.7095,x:138.3165,y:53.4486,alpha:0.0309},0).wait(1).to({regX:0.1,regY:-283.4,rotation:2.7226,x:151.9,y:-229.65,alpha:0},0).to({_off:true},1).wait(8));

	// gula3
	this.instance_6 = new lib.Doplnění2_1("synched",0);
	this.instance_6.setTransform(75.6,-276,1,1,0,0,0,0,-126);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({y:-138},15,cjs.Ease.cubicOut).to({regX:0.1,regY:-126.1,rotation:2.9992,x:75.7,y:-138.1},33,cjs.Ease.quadInOut).to({regY:-126,scaleX:0.9998,scaleY:0.9998,rotation:-2.8124,y:-137.95},39,cjs.Ease.quadInOut).to({regY:-126.1,scaleX:1,scaleY:1,rotation:2.9992,y:-138.1},37,cjs.Ease.quadInOut).to({regY:-126,scaleX:0.9998,scaleY:0.9998,rotation:-2.8124,y:-137.95},51,cjs.Ease.quadInOut).wait(1).to({regX:0,regY:0,rotation:-2.8014,x:81.7759,y:-12.149},0).wait(1).to({rotation:-2.7831,x:81.7362,y:-12.1473},0).wait(1).to({rotation:-2.7572,x:81.6801,y:-12.1449},0).wait(1).to({rotation:-2.7235,x:81.6069,y:-12.1418},0).wait(1).to({rotation:-2.6816,x:81.5158,y:-12.138},0).wait(1).to({rotation:-2.631,x:81.4059,y:-12.1335},0).wait(1).to({rotation:-2.5714,x:81.2764,y:-12.1284},0).wait(1).to({rotation:-2.5024,x:81.1266,y:-12.1226},0).wait(1).to({rotation:-2.4236,x:80.9555,y:-12.1162},0).wait(1).to({rotation:-2.3348,x:80.7625,y:-12.1092},0).wait(1).to({rotation:-2.2356,x:80.5469,y:-12.1019},0).wait(1).to({rotation:-2.1257,x:80.3081,y:-12.0941},0).wait(1).to({rotation:-2.0049,x:80.0457,y:-12.0862},0).wait(1).to({rotation:-1.8732,x:79.7595,y:-12.0781},0).wait(1).to({rotation:-1.7306,x:79.4495,y:-12.0702},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1.5772,x:79.1161,y:-12.0625},0).wait(1).to({rotation:-1.4134,x:78.7601,y:-12.0552},0).wait(1).to({rotation:-1.2397,x:78.3825,y:-12.0487},0).wait(1).to({rotation:-1.0569,x:77.9851,y:-12.0431},0).wait(1).to({rotation:-0.866,x:77.5699,y:-12.0386},0).wait(1).to({rotation:-0.6681,x:77.1397,y:-12.0354},0).wait(1).to({rotation:-0.4648,x:76.6975,y:-12.0337},0).wait(1).to({rotation:-0.2576,x:76.2469,y:-12.0336},0).wait(1).to({rotation:-0.0482,x:75.7916,y:-12.0351},0).wait(1).to({rotation:0.1615,x:75.3355,y:-12.0384},0).wait(1).to({rotation:0.3698,x:74.8826,y:-12.0433},0).wait(1).to({rotation:0.5749,x:74.4364,y:-12.0497},0).wait(1).to({rotation:0.7754,x:74.0006,y:-12.0576},0).wait(1).to({rotation:0.9697,x:73.578,y:-12.0667},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.1567,x:73.1714,y:-12.0768},0).wait(1).to({rotation:1.3354,x:72.7828,y:-12.0877},0).wait(1).to({rotation:1.5051,x:72.4138,y:-12.0992},0).wait(1).to({rotation:1.6653,x:72.0656,y:-12.1111},0).wait(1).to({rotation:1.8155,x:71.739,y:-12.1232},0).wait(1).to({rotation:1.9557,x:71.4343,y:-12.1352},0).wait(1).to({regX:0.1,regY:-126.1,rotation:2.0857,x:75.85,y:-138.1},0).wait(1).to({regX:0,regY:0,rotation:2.2104,x:70.8601,y:-12.112,alpha:0.8388},0).wait(1).to({rotation:2.3247,x:70.5944,y:-12.1262,alpha:0.691},0).wait(1).to({rotation:2.4289,x:70.3522,y:-12.1396,alpha:0.5563},0).wait(1).to({rotation:2.5233,x:70.1328,y:-12.1521,alpha:0.4342},0).wait(1).to({rotation:2.6082,x:69.9356,y:-12.1636,alpha:0.3245},0).wait(1).to({rotation:2.6839,x:69.7598,y:-12.1741,alpha:0.2266},0).wait(1).to({rotation:2.7507,x:69.6045,y:-12.1836,alpha:0.1403},0).wait(1).to({rotation:2.809,x:69.469,y:-12.192,alpha:0.0649},0).wait(1).to({regX:0.1,regY:-126.2,rotation:2.8592,x:75.75,y:-138.2,alpha:0},0).to({_off:true},1).wait(6));

	// gula2
	this.instance_7 = new lib.Doplnění3_1("synched",0);
	this.instance_7.setTransform(232.55,-272,1,1,0,0,0,0,-123);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(22).to({_off:false},0).to({y:-111},13,cjs.Ease.cubicOut).to({regX:0.1,rotation:-1.9991,x:232.6,y:-111.05},27,cjs.Ease.quadInOut).to({regX:0.2,rotation:1.9982,x:232.65},39,cjs.Ease.quadInOut).to({regX:0.1,rotation:-1.9991,x:232.6},38,cjs.Ease.quadInOut).to({regX:0.2,rotation:1.9982,x:232.65},52,cjs.Ease.quadInOut).wait(1).to({regX:0,regY:0,rotation:1.9902,x:228.1675,y:11.8527},0).wait(1).to({rotation:1.9768,x:228.1968,y:11.8536},0).wait(1).to({rotation:1.9578,x:228.2384,y:11.855},0).wait(1).to({rotation:1.9329,x:228.2929,y:11.8567},0).wait(1).to({rotation:1.9018,x:228.361,y:11.8589},0).wait(1).to({rotation:1.8642,x:228.4432,y:11.8614},0).wait(1).to({rotation:1.8199,x:228.5403,y:11.8643},0).wait(1).to({rotation:1.7685,x:228.6528,y:11.8676},0).wait(1).to({rotation:1.7097,x:228.7813,y:11.8713},0).wait(1).to({rotation:1.6434,x:228.9266,y:11.8752},0).wait(1).to({rotation:1.5693,x:229.0889,y:11.8795},0).wait(1).to({rotation:1.4871,x:229.2688,y:11.8839},0).wait(1).to({rotation:1.3969,x:229.4664,y:11.8885},0).wait(1).to({rotation:1.2984,x:229.6819,y:11.8932},0).wait(1).to({rotation:1.192,x:229.915,y:11.8979},0).wait(1).to({rotation:1.0776,x:230.1654,y:11.9024},0).wait(1).to({rotation:0.9558,x:230.4321,y:11.9067},0).wait(1).to({rotation:0.827,x:230.7142,y:11.9106},0).wait(1).to({rotation:0.692,x:231.0099,y:11.914},0).wait(1).to({rotation:0.5516,x:231.3173,y:11.9169},0).wait(1).to({rotation:0.407,x:231.6341,y:11.919},0).wait(1).to({rotation:0.2593,x:231.9576,y:11.9204},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.1099,x:232.2848,y:11.921},0).wait(1).to({rotation:-0.0398,x:232.6127,y:11.9207},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.1885,x:232.9382,y:11.9197},0).wait(1).to({rotation:-0.3347,x:233.2586,y:11.9178},0).wait(1).to({rotation:-0.4774,x:233.571,y:11.9152},0).wait(1).to({rotation:-0.6154,x:233.8733,y:11.9119},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.7478,x:234.1633,y:11.9082},0).wait(1).to({rotation:-0.8739,x:234.4395,y:11.9039},0).wait(1).to({regX:0.2,regY:-123,rotation:-0.9933,x:232.7,y:-111.1},0).wait(1).to({regX:0,regY:0,rotation:-1.1098,x:234.894,y:11.8434,alpha:0.8373},0).wait(1).to({rotation:-1.2186,x:235.1219,y:11.8364,alpha:0.6854},0).wait(1).to({rotation:-1.3196,x:235.3333,y:11.8296,alpha:0.5445},0).wait(1).to({rotation:-1.4127,x:235.5284,y:11.823,alpha:0.4144},0).wait(1).to({rotation:-1.4981,x:235.7073,y:11.8166,alpha:0.2952},0).wait(1).to({rotation:-1.576,x:235.8702,y:11.8106,alpha:0.1866},0).wait(1).to({rotation:-1.6464,x:236.0176,y:11.8049,alpha:0.0883},0).wait(1).to({regX:0.2,regY:-123,rotation:-1.7096,x:232.7,y:-111.15,alpha:0},0).to({_off:true},1).wait(4));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.setTransform(0,0,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(235));

	// stageBackground
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgY/gwbMAx/AAAMAAABg3Mgx/AAAg");
	this.shape_2.setTransform(150,300);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgY/AwcMAAAhg3MAx/AAAMAAABg3g");
	this.shape_3.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(235));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-273.8,528.6999999999999,873.8);
// library properties:
lib.properties = {
	id: 'DBFDE7F8118D4D3292EE7678ACA7C909',
	width: 300,
	height: 600,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/gula1.png", id:"gula1"},
		{src:"images/gula2.png", id:"gula2"},
		{src:"images/gula3.png", id:"gula3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DBFDE7F8118D4D3292EE7678ACA7C909'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;