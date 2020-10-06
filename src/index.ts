import bottleneck from 'bottleneck';

const minTime = 10;
const throttle = new bottleneck({maxConcurrent: 1, minTime});

export const returnNumber = async (num: number): Promise<number> => {
  console.log(`Returning number: '${num}'`);
  return num;
};

export const throttleFunction = async (): Promise<number> => {
  console.log('Scheduling returnNumber()');
  return throttle.schedule(returnNumber, 34);
};