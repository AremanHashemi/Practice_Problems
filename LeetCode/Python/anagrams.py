'''
Anagram solver: Given an array of words print the words that are anagrams of each other



'''
'''
isAnagram(w1,w2)
   returns true if w1 is an anagram of w2
   anagram meaning w2 is the same characters as w1 in any order


Ideas
   Brute force
      Iterate over each character of w1, remove the character from w2      O(N*M) for n=len(w1), m=len(w2)
      if in the end you have two empty strings then return true else false O(1)

   Improved Brute force O(N)
      Turn each character into a numeric value ASCII value
      for char in w1 add to sum
      for char in w2 sub from sum
      if sum = 0 return true else false

   We can turn words into a hash compare hashed values 
      This wont work because
         1) Some Hash algorithms don't gaurante uniqueness
         2) Will take order into effect

   
'''
from collections import defaultdict


def isAnagram(w1, w2):
   if len(w1) != len(w2): return False
   sum = 0
   for i in range(len(w1)):
      sum += ord(w1[i])
      sum -= ord(w2[i])
   return True if sum == 0 else False

def isAnagramUnitTests():
   tests = [
      (('hello', 'hello'), True),
      (('h','h'), True),
      (('h','e'), False),
      (('' ,''), True),
      (('anagram', 'gramana'), True),
      (('anagram', 'graman'), False)
   ]
   for (w1,w2), expected in tests:
      assert(isAnagram(w1,w2) == expected)

'''
findAllAnagagrams(words)
Given a list of words find all words that are anagrams

Brute force O(N^2)
   for each word O(N)
      call is Anagram O(N)


Improvement O(N)
   Turn all words into ascii values by adding them O(N) * O(len(N))
   for each ascii value word get all similar values O(N)
'''
def findAllAnagrams(words):
   # returns the ascii sum of the word
   def getOrd(word):
      sum = 0
      for x in word:
         sum += ord(x)
      return sum
   
   wordMap = defaultdict(list)
   for word in words:
      wordMap[getOrd(word)].append(word)

   solution = []
   for words in wordMap.values():
      if len(words) > 1:
         solution.append(words)
   return solution

def findAllAnagramUnitTest():
   tests = [
      (['a','a'], [['a','a']]),
      (['ana', 'naa', 'b', 'ba', 'ab'], [['ana','naa'],['ab','ba']])
   ]
   for wordList, expected in tests:
      # assert(set(findAllAnagrams(wordList)) == set(expected))
      print(findAllAnagrams(wordList), " | ", expected,'\n')

isAnagramUnitTests()
findAllAnagramUnitTest()