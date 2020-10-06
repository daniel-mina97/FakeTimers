import FakeTimers from '@sinonjs/fake-timers';
import { throttleFunction } from '../src/index';

let clock: any;

// Timestamps that work:
// const timestamp = 160148896900;
// const timestamp = 16014889690000;

// Timestamps that DO NOT work:
const timestamp = 1601488969000;

describe('Test Suite', () => {
  beforeAll(() => {
    clock = FakeTimers.install({ now: timestamp, shouldAdvanceTime: true });
  });

  afterAll(() => {
    clock.uninstall();
  });

  test('Actual Test', async () => {
    const result = await throttleFunction();
    expect(result).toBe(34);
  });
});