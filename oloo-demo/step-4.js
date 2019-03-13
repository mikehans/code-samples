// Step 4 - get rid of references to Foo.prototype
// 			Foo has a capital for consistency
//			Foo is now just an object that we can add methods to
// 			Bar.init got lifted up to Foo because it was delegating to Foo anyway
// 			Foo could be a generic utility object doing things like logging / authentication

var Foo = {
	init: function(who){
		this.me = who;
	},
	identify: function(){
		return "I am " + this.me;
	}
}

var Bar = Object.create(Foo);

Bar.speak = function(){
	alert("Hello, " + this.identify() + ".");
};

var b1 = Object.create(Bar);
b1.init("b1");
b1.speak(); // alerts "Hello, I am b1."