# Fib without DP
def fib(n):
  if n <= 1:
    return n
  return fib(n-1) + fib(n-2)
# 0 1 2 3 4 5 6 7
# 0 1 1 2 3 5 8 13 
assert 1 == fib(1)
assert 1 == fib(2)
assert 2 == fib(3)
assert 3 == fib(4)
assert 5 == fib(5)
assert 8 == fib(6)
assert 13 == fib(7)
assert 21 == fib(8)
print("passed all assertions")

# Fib with DP
def fib(n, mem=None):
  if(mem is None):
    mem = [None] * (n + 1)
  if n <= 2:
    return 1
  if mem[n] is not None:
    return mem[n]
  return fib(n-1) + fib(n-2)
# 0 1 2 3 4 5 6 7
# 0 1 1 2 3 5 8 13 
assert 1 == fib(1)
assert 1 == fib(2)
assert 2 == fib(3)
assert 3 == fib(4)
assert 5 == fib(5)
assert 8 == fib(6)
assert 13 == fib(7)
assert 21 == fib(8)
print("passed all assertions")

