# Find the length of the longest substring without repeating characters
'''
Brute force
For each starting point
find the longest substring using a hashtable 

def lengthOfLongestSubstring(s: str) -> int:
	if len(s) == 0:
		return 0
	charsSeen = {}
	localLongest = 0
	for count,char in enumerate(s,1):
		if (charsSeen.get(char)):
			break
		else:
			charsSeen[char] = True
		localLongest = count
	return max(localLongest, lengthOfLongestSubstring(s[1:]))
'''

'''
Improvement sliding window
while start != end of string
	grab next char
		if the char is not in hashtble add it with its index
			increment localLongest
		if the char is in the hashtble
			if the local max is larger than the max save it
			we need to remove the chars at and before the current hashtble value

''' 


def lengthOfLongestSubstring(s: str) -> int:
	longest_len = 0
	start = end = 0
	chrMap = {}
	while end != len(s):
		curr_char = s[end]
		curr_char_in_map = chrMap.get(curr_char)
		if curr_char in chrMap and curr_char_in_map >= start:
			current_chain = (end) - (start) 
			longest_len = max(longest_len, current_chain)
			start = curr_char_in_map + 1
		chrMap[curr_char] = end
		end += 1
	return max(longest_len, (end) - start)


# Exampe aabedfer
def runTests():
	tests  = [("au",2), ("pwwkew",3), (" ", 1), ("abcabcbb", 3), ("aa",1), ("afcabca", 4)]
	for test in tests:
		result  = lengthOfLongestSubstring(test[0])
		print(f"Input: {test[0]}, expected: {test[1]} result: {result}")
		try :
			assert(test[1] == result)
		except AssertionError:
			print(f"Failed on test {test}")

print(lengthOfLongestSubstring("abcabcbb"))
runTests()