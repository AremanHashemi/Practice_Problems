# traveler in a 2d grid
# Begin in top left try to end in bottom left
# How many ways can you reach the end only going down and right

class Memoize:
  def __init__(self, fn):
      self.fn = fn
      self.memo = {}

  def __call__(self, *args):
      if args not in self.memo:
          self.memo[args] = self.fn(*args)
      return self.memo[args]

@Memoize
def gridTraveler(m,n):
  if m == 1 and n == 1:
    return 1
  if m == 0 or n == 0:
    return 0
  return gridTraveler(m-1,n) + gridTraveler(m, n-1)

# Stack depth = n+m
# runtime = O(2^n+m)
# Space   = O(n+m)
print(gridTraveler(3,3))
print(gridTraveler(18,18))