// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor(){
        this.events = {}
    }
  // Register an event handler
  on(eventName, callback) {
      if(!this.events[eventName]){
        this.events[eventName] = []
      }
      this.events[eventName].push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
      let callbacks = this.events[eventName] || [];
      for(let callback of callbacks){
          callback()
      }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName]
  }
}

module.exports = Events;
