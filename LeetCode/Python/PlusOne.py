"""
Given a non empty array of decimal digits non negative
Increment one to the integer

Algorithm
Start at end while carry flag
	increment by 1 + carry flag
	if new result is > 9
		result =% 10 
		raise carry flag

"""
from typing import List
def plusOne(digits: List[int]) -> List[int]:
	end = len(digits) - 1
	carryFlag = 1
	while carryFlag == 1 and end >= 0:
		digits[end] += carryFlag
		if digits[end] > 9:
			digits[end] %= 10
			print(digits)
			end -= 1
		else:
			carryFlag = 0
	if end < 0 and carryFlag:
		digits.insert(0,1)
	return digits

print(plusOne([9]))