// Step 1 - initial setup

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

var b1 = new Bar("b1");
b1.speak(); // alerts "Hello, I am b1."