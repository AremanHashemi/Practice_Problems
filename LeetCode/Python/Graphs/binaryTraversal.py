





from collections import deque


class Solution:
   def levelOrder(self, root: TreeNode) -> List[List[int]]:
      ans = []
      level = [root]

      while root and level:
         currentNodes = []
         nextLevel = []
         for node in level:
            currentNodes.append(node.val)
            if node.left:
               nextLevel.append(node.left)
            if node.right:
               nextLevel.append(node.right)
         ans.append(currentNodes)
         level = nextLevel


   # def levelOrder(self, root: TreeNode) -> List[List[int]]:
   #    ans, level = [], [root]
   #    while root and level:
   #       ans.append([node.val for node in level])
   #       LRpair = [(node.left, node.right) for node in level]
   #       level = [leaf for LR in LRpair for leaf in LR if leaf]
   #    return ans

        

