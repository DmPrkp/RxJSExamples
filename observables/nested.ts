import { interval } from "rxjs";

const observable1 = interval(500)
const observable2 = interval(400)

const subscription = observable1.subscribe(x => console.log('This is first: ' + x));
const childSubscription = observable2.subscribe(x => console.log('This is second: ' + x))

subscription.add(childSubscription);

setTimeout(() => { subscription.unsubscribe(); }, 1000)