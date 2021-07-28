




'''
Brute force Approach

O(N^2)
iterate through the string
   check if either sides of the character are the same
      while they are the same keep going until you find the max length
   return the max length

fadfaabaa

'''

class Solution:
    def longestPalindrome(self, s: str) -> str:
        (longestIndex, longestLen) = ((0,0), 0)
        for i in range(0,len(s)):
            oddMiddle  = self.checkPalindrome(s,i,i)
            evenMiddle = self.checkPalindrome(s,i,i+1)

            oddLength = oddMiddle[1] - oddMiddle[0]
            evenLength = evenMiddle[1] - evenMiddle[0]

            (localLongestIndex, localLen) = (oddMiddle, oddLength) if oddLength > evenLength else (evenMiddle, evenLength)
            (longestIndex, longestLen) = (localLongestIndex, localLen) if localLen > longestLen else (longestIndex, longestLen)

        return s[longestIndex[0]:longestIndex[1]+1]

    def checkPalindrome(self, s, lower, upper):
        localLongest = (lower,lower)
        while lower >= 0 and upper < len(s) and s[lower] == s[upper]:
            localLongest = (lower,upper) 
            lower -= 1
            upper += 1
        return localLongest


    def testPalindrome(self):
        tests = [ 
            ("aba", 3),
                  ("a", 1),
                  ("", 0),
                  ("fadfaabaa",5),
                  ("cbbd",0)]
        for test, expected in tests:
            print("\n result = ", self.longestPalindrome(test))

s = Solution()
s.testPalindrome()