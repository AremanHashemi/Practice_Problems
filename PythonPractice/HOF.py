def sum(n, func):
	total = 0
	for num in range(n):
		total += func(num)
	return total

def square(x):
	return x*x

def cube(x):
	return x*x*x

x = sum(3, square)
print(x)


# Nested functions
from random import choice
def greet(person):
	def get_mood():
		msg = choice(('Hello there ', 'Go away ', 'I love you '))
		return msg
	
	result = get_mood() + person
	return result

print(greet("toby"))

def make_laugh():
	def get_laugh():
		l = choice(("HAHAHAAH", "lol", "tehehe"))
		return l
	return get_laugh

laugh =  make_laugh()
print(laugh())