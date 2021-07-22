import random
from warnings import catch_warnings

def startGame(maxValue):

	def verify(guess: int) -> int:
		if guess > secretInt:
			return 1
		elif guess < secretInt:
			return -1
		else:
			return 0

	print("Welcome to the guessing game")
	secretInt = random.randint(1, maxValue)

	for i in range(1,51):
		guess = 0
		while guess < 1 or guess > maxValue:
			print(f'Please enter your guess between 1 and {maxValue}, guess number: {i}')
			try:
				guess = int(input())
			except ValueError:
				print('Error: Invalid type!')
		
		verification = verify(guess)	
		if verification == 0:
			print(f'Congrats {guess} is correct you win!')
			break
		else:
			if verification == 1:
				print(f'Your guess: {guess} is greater than the secret value')
			else:
				print(f'Your guess: {guess} is less than the secret value')
	
startGame(100)
