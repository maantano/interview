class Subject {
  constructor() {
    this.observers = [];
  }
  getObserversList() {
    return this.observers;
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notifyAll() {
    this.observers.forEach((subscriber) => {
      try {
        subscriber.update(this.constructor.name);
      } catch (e) {
        console.log("err : ", err);
      }
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(subj) {
    console.log(`${this.name} : notified from ${subj} class`);
  }
}

const subj = new Subject();

const a = new Observer("A");
const b = new Observer("B");
const c = new Observer("C");

subj.subscribe(a);
subj.subscribe(b);
subj.subscribe(c);

console.log(subj.observers);

subj.notifyAll();

subj.unscribe(c);

console.log();
subj.notifyAll();
