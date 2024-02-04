import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

// case 1
const observable = new Observable(subscriber => {
      subscriber.next(10);
      subscriber.next(20);
      subscriber.next(30);
      setTimeout(() => {
            subscriber.next(40);
            subscriber.complete();
      }, 1000);
}).pipe(
      filter(val => Number(val) % 20 === 0)
);

console.log('These are the values just before subscribe');
observable.subscribe({
      next(x) { console.log('We have got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('Done successfully'); }
});
console.log('This value is just after subscribe');



// case 2
const arr = [1, 2, 3]
const obs$2 = of(...arr)

obs$2.subscribe((x) => { arr.push(x + 3); console.log(x) })
obs$2.subscribe(console.log)

const obs$3 = of(...arr)
obs$3.subscribe(console.log)