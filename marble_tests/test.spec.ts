import { TestScheduler } from 'rxjs/testing';
import { throttleTime } from 'rxjs';

const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toStrictEqual(expected);
});


it('generates the stream correctly', () => {
      testScheduler.run((helpers) => {
            const { cold, time, expectObservable, expectSubscriptions } = helpers;
            const e1 = cold(' -a--b--c---|');
            const e1subs = '  ^----------!';
            const t = time('   -----|       ');
            const expected = '-a-----c---|';

            expectObservable(e1.pipe(throttleTime(t))).toBe(expected);
            expectSubscriptions(e1.subscriptions).toBe(e1subs);
      });
});