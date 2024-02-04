import { Subject, Observable, of } from "rxjs";

const subject = new Subject()

subject.subscribe(console.log)
subject.subscribe(console.log)

subject.next(Math.random())

const obs$ = new Observable(subscriber => {
      subscriber.next(Math.random())
})

obs$.subscribe(console.log)
obs$.subscribe(console.log)

