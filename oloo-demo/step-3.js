// Step 3 - get rid of references to Bar.prototype
// 			Bar has a capital for consistency
//			Bar is now just an object that we can add methods to

function Foo(who){
	this.me = who;
}

Foo.prototype.identify = function(){
	return "I am " + this.me;
};

var Bar = Object.create(Foo.prototype);
Bar.init = function(who){
	Foo.call(this, who);
};

Bar.speak = function(){
	alert("Hello, " + this.identify() + ".");
};

var b1 = Object.create(Bar);
b1.init("b1");
b1.speak(); // alerts "Hello, I am b1."