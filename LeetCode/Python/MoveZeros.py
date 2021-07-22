


# Given array of nums move all 0s to the end while mainting order of non zero element
"""
Algorithm
Itterate through numbers
	If you find a zero increment zero count
	If you find a non-zero shift it to the left by zero count

	If index + zero count = end this is where we just put zeroes
"""

def moveZeroes(nums) -> None:
	zero_count = index = 0
	size = len(nums)

	for index, num in enumerate(nums):
		if nums[index] == 0:
			zero_count += 1
		else:
			nums[index - zero_count] = nums[index]
		if index >= size - zero_count:
			nums[index] = 0

	for i in range(size-zero_count, size):
		nums[i] = 0

	return nums

# print(moveZeroes([1,0,0,2]))

