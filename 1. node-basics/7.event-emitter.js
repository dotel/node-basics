// The EventEmitter class provides a way to create custom events and handle them with event listeners. 
// You can define and emit your own events, allowing different parts of your code to communicate and react to specific events.

// A lot of libraries use events. You may have seen events code like addEventListener in browser as well. Similar concept.
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Register an event listener
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
myEmitter.emit('greet', 'John');
