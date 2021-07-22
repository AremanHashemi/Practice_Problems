

from collections import defaultdict, deque


class Graph:
   def __init__(self):
      self.graph = defaultdict(list)

   def addEdge(self, u, v):
      self.graph[u].append(v)

   def dfs(self, s):
      visited = {key: False for key in self.graph.keys()}
      queue = deque([])
      queue.append(s)
      while len(queue) != 0:
         node = queue.pop()
         visited[node] = True
         print(node)
         for edge in self.graph[node]:
            if not visited[edge]:
               queue.append(edge)




g = Graph()
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 2)
g.addEdge(2, 0)
g.addEdge(2, 3)
g.addEdge(3, 3)
g.dfs(2)