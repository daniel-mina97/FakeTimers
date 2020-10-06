# FakeTimers

By swapping the timestamp in the test, you can see that for some timestamps the tests will exectute and finish, and for other timestamps the tests will hang and never complete.

Also, if you move lines 3 & 4 in index.ts to be inside of 'throttleFunction', the problem goes away.... That leads me to believe this could be an issue with either the bottleneck library or @sinonjs/fake-timers 
