



def be_polite(fn):
	def wrapper():
		print("what a pleasure")
		fn()
		print("have a good day!")
	return wrapper

# Decorator means be_polite(greet)
@be_polite
def greet():
	print("my name is matt")

greet()