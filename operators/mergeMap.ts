import { of, mergeMap, map, EMPTY, from, mergeAll, first, finalize } from "rxjs";

const arr1 = [1, 2, 3]
const arr2 = ['test1', 'test2']
const $obs1 = of(...arr1)
const $obs2 = from(arr2)

const result1 = $obs1.pipe(
    map(x => x + 2),
    mergeMap(x => 
        $obs2.pipe(
            map(i => x + i)
        )
    ),
    mergeAll()
)
result1.subscribe(console.log)

const $obs3 = from([1,2,3])

const result2 = $obs3.pipe(
    // first(),
    finalize(console.log)
)

result2.subscribe(console.log)

