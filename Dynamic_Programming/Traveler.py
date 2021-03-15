# traveler in a 2d grid
# Begin in top left try to end in bottom left
# How many ways can you reach the end only going down and right
def gridTraveler(m,n,mem = {}):
  if m == 1 and n == 1:
    return 1
  if m == 0 or n == 0:
    return 0
  if (m,n) in mem:
    return mem[(m,n)]
  mem[(m,n)] = gridTraveler(m-1,n) + gridTraveler(m, n-1)
  return mem[(m,n)] 

# Stack depth = n+m
# runtime = O(2^n+m)
# Space   = O(n+m)
print(gridTraveler(3,3))
print(gridTraveler(18,18))