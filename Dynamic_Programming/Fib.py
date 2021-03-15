import time

# Fib without DP
# O(n^2) time & space
def fib(n):
  if n <= 1:
    return n
  return fib(n-1) + fib(n-2)

# 0 1 2 3 4 5 6 7
# 0 1 1 2 3 5 8 13 

start = time.time()
assert 1 == fib(1)
assert 1 == fib(2)
assert 2 == fib(3)
assert 3 == fib(4)
assert 5 == fib(5)
assert 8 == fib(6)
assert 13 == fib(7)
assert 21 == fib(8)
assert 144 == fib(12)
assert 2584 == fib(18)
# assert 125862690254 == fib(50)
end = time.time()
print(f"passed all assertions. Time = {end-start}")

# O(n) space & time complexity
# Fib with DP
def fib2(n, mem=None):
  # Only gets called on first function call
  if(mem is None): 
    mem = [None] * (n+1)
  # Base condition
  if n <= 2:
    return 1
  # Checking against memory
  if mem[n] is not None:
    return mem[n]
  # Otherwise do the calculation and save it
  mem[n] = fib2(n-1, mem) + fib2(n-2, mem)
  return mem[n]

# 0 1 2 3 4 5 6 7
# 0 1 1 2 3 5 8 13 
start = time.time()
assert 1 == fib2(1)
assert 1 == fib2(2)
assert 2 == fib2(3)
assert 3 == fib2(4)
assert 5 == fib2(5)
assert 8 == fib2(6)
assert 13 == fib2(7)
assert 21 == fib2(8)
assert 144 == fib2(12)
assert 2584 == fib2(18)
assert 12586269025 == fib2(50)

end = time.time()
print(f"passed all assertions. Time = {end-start}")

# Memoize with wrapper function
def memoize(f):
  memo = {}
  def helper(x):
    if x not in memo:
      memo[x] = f(x)
    return memo[x]
  return helper

@memoize
def fib3(n):
  if n <= 1:
    return n
  return fib3(n-1) + fib3(n-2)

start = time.time()
assert 1 == fib3(1)
assert 1 == fib3(2)
assert 2 == fib3(3)
assert 3 == fib3(4)
assert 5 == fib3(5)
assert 8 == fib3(6)
assert 13 == fib3(7)
assert 21 == fib3(8)
assert 144 == fib3(12)
assert 2584 == fib3(18)
assert 12586269025 == fib3(50)
end = time.time()
print(f"passed all assertions. Time = {end-start}")

