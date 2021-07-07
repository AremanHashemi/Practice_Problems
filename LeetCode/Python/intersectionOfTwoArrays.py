

"""
Given two integers arrays num1 and num2 
return an araray of their intersection
Each element in the result must appear as many times as it shows in both arrays
may return result in any order
"""

"""
Possible solutions

#Using sorting O(NlogN)
	Sort O(NlogN)
	itterate through both arrays O(N)
		if the elements are equal add to solution
		if not increment the smaller value

#Use hashing O(N)
Create a hashtable O(1)
Iterate through the first array for each key count number of keys O(N)
Iterate through the second array for each value check the table, if exists remove decrement add to solution O(N)
"""
from typing import List

def intersect(nums1: List[int], nums2: List[int]) -> List[int]:
	numDict = {} 
	intersectArray = []
	
	for num in nums1:
		numDict[num] = numDict.get(num,0) + 1

	for num in nums2:
		if num in numDict:
			intersectArray.append(num)
			newCount = numDict[num] - 1
			if newCount != 0:
				numDict[num] = newCount
			else:
				del numDict[num]

	return intersectArray

def runTests():
	tests  = [ ([1,2,2,1], [2,2], [2,2]), ([4,9,5], [9,4,9,8,4], [4,9])]
	for test in tests:
		result  = intersect(test[0],test[1])
		print(f"Input: {test[0]}, {test[1]}, expected: {test[2]} result: {result}")
		try :
			assert(set(test[2]) == set(result))
		except AssertionError:
			print(f"Failed on test {test}")

runTests()