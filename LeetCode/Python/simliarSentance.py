




'''
Input: list of strings
Output: true if contains the same words, false otherwise
Caveat: all characters are lowercase

Questions: Is it a set of the same words? How to handle empty string

Algorithms

   Brute Force O(N^2)
      pop each word off s1 O(N)
         search and remove the word from s2 O(N)

   Optimization use dictionary
      Add each word in s1 to a dictionary O(N)

      for each word in s2 search and remove that key O(N)
         if word not found return false

      return true
'''
def similarSentence(s1: str, s2: str):
   s1Dict = {}
   s1 = s1.lower()
   s2 = s2.lower()
   for word in s1.split(sep=' '):
      s1Dict[word] = True
   
   for word in s2.split(sep=' '):
      if not s1Dict.pop(word, False):
         return False

   if len(s1Dict) == 0:
      return True 
   return False

def similarSentenceUnitTests():
   tests = [('hello world', 'world hello', True),
            ('upper CASE test', 'Upper Case TEST', True),
            ('hello test world', 'hello world', False)
            ]
   for (s1, s2, expected) in tests:
      assert(similarSentence(s1,s2) == expected)

similarSentenceUnitTests()