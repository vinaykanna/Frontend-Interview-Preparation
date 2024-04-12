export default class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    const listeners = this.events[eventName] || [];
    listeners.push(listener);
    this.events[eventName] = listeners;

    return this;
  }

  off(eventName, listener) {
    const listeners = this.events[eventName] || [];
    const index = listeners.indexOf(listener);

    if (index > -1) {
      listeners.splice(index, 1);
      this.events[eventName] = listeners;
    }

    return this;
  }

  emit(eventName, ...args) {
    if (!Object.hasOwn(this.events, eventName)) return false;

    const listeners = this.events[eventName] || [];

    listeners.forEach((listener) => {
      listener(...args);
    });

    return !!listeners.length;
  }
}
