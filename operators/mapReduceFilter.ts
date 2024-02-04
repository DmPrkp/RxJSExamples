import { of } from "rxjs";
import { map, reduce, filter } from 'rxjs/operators'

let test1 = of(1, 2, 3, 4, 5, 6)
let case1 = test1.pipe(
      filter(x => x % 2 === 0),
      map(x => x + 1),
      reduce((acc, one) => acc + one, 0)
)

case1.subscribe(x => console.log(x))

let test2 = of({ a: 1, b: 2, c: 3 }, 'test')
let case2 = test2.pipe(
      filter(key => key instanceof Object)
)

case2.subscribe(obj => console.log(obj))