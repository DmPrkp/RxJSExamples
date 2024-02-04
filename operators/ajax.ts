import { fromFetch } from "rxjs/fetch"
import { ajax } from "rxjs/ajax"
import { catchError, map } from "rxjs/operators"

const obs1$ = fromFetch('https://yandex.com/').pipe(
      map((x) => { console.log(x); return x }),
      catchError(async (err) => console.log('ERROR from Ajax', err))
)

obs1$.subscribe({
      next(x) { console.log(x) },
      error(err) { console.log("ERROR from Observable: ", err) }
})

const obs2$ = ajax('https://yandex.com/').pipe(
      map((x) => { console.log(x); return x }),
      catchError(async (err) => console.log('ERROR from Ajax', err))
)

obs2$.subscribe({
      next(x) { console.log(x) },
      error(err) { console.log("ERROR from Observable: ", err) }
})

