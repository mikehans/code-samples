// Step 2 - get rid of "class-oriented thinking"
//			new Bar() has to go

function Foo(who){
	this.me = who;
}

Foo.prototype.identify = function(){
	return "I am " + this.me;
};

function Bar(who){
	Foo.call(this, who);
}
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function(){
	alert("Hello, " + this.identify() + ".");
};

// Turn the new Bar into 2 lines (for now it looks worse)
var b1 = Object.create(Bar.prototype);
Bar.call(b1, "b1");
b1.speak(); // alerts "Hello, I am b1."