import FakeTimers from '@sinonjs/fake-timers';
import { throttleFunction } from '../src/index';

let clock: any;

describe('Test Suite', () => {
  beforeAll(() => {
    clock = FakeTimers.install({ now: 1601488969000, shouldAdvanceTime: true });
  });

  afterAll(() => {
    clock.uninstall();
  });

  test('Actual Test', async () => {
    const result = await throttleFunction();
    expect(result).toBe(34);
  });
});