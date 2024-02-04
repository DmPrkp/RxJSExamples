import { interval, of, timer } from 'rxjs';
import { count, debounce, take } from 'rxjs/operators';

const example1 = of('1', '2', '3', '4', '5', '6', '7', '8', '9', '10');

const debounceExample1 = example1.pipe(
      debounce(() => timer(3 * 1000)),
      count()
);
debounceExample1.subscribe(x => console.log(x))

const example2 = interval(1000);

const debounceExample2 = example2.pipe(
      take(15),
      debounce(val => timer(val * 200)),
);
debounceExample2.subscribe(x => console.log(x, new Date().getSeconds()))


