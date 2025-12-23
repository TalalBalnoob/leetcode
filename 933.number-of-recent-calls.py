class RecentCounter:

    req = []

    def __init__(self):
        self.req = []

    def ping(self, t: int) -> int:
        self.req.append(t)
        values = [x for x in self.req if  t-3000 <= x < t]
        return len(values)


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)


recentCounter = RecentCounter()
testNumber = 0
for number in numbers:
		recentCounter.ping(number[0])
		testNumber += 1

print("done")
print(testNumber)