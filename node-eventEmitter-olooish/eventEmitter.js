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