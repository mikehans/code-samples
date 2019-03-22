const EventEmitter = require('events');

let myEvent = Object.create(EventEmitter.prototype);
myEvent.init = function(){
	EventEmitter.call(this);
}

myEvent.showMe = function(){
	console.log('I am here!');
};

let m = Object.create(myEvent);
m.init();

m.on('execute', ()=> console.log('Executing'));

m.emit('execute');
m.showMe();
console.log('Run complete');

class MyEvent2 extends EventEmitter{
	showMe(){
		console.log("event2 here");
	}
}

const myEvent2 = new MyEvent2();
myEvent2.on('execute', ()=> console.log('Executing event 2'));

myEvent2.emit('execute');
myEvent2.showMe();
console.log("run complete again");