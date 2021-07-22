

'''
Hamaltonian Path: visits every vertex exactly once
Eulerian Path: visits every edge exactly once
	Undirected
		Path: all D(v) == even | E, x,y st only D(x) AND D(y) == odd
		Circut: All D(v) == Even
	Directed
		Path: E,v st D(vOut) - D(vIn) = 1 and E,a st D(aIn) - D(aOut) = 1 and all other verticies in == out
		Circut: Every vertex has equal in and outdegree 

Algorithm
	Node | In | Out


'''
from collections import defaultdict
from typing import List, Tuple
from typing import Dict






class Solution:
   def findItinerary(self, tickets):
      print(tickets)
      ticketGraph = self.buildTicketGraph(tickets)
      itinerary = [] 
      # Run dfs on the graph to find a Euler pathb 
      def dfs(ticketGraph):
         pass

   # Return a ticket graph dict(src, [dst]) dsts are sorted reversed  
   def buildTicketGraph(self, tickets):
      pass









      # ticketMap = defaultdict(list)
      # for src, dst in sorted(tickets, reverse=True):
      #    ticketMap[src].append(dst)
      # route = []
      # def visit(airport):
      #    while ticketMap[airport]:
      #       visit(ticketMap[airport].pop()) 
      #    route.append(airport)
      # visit('JFK')
      # return route[::-1]

   # def __init__(self, start = 'JFK'):
   #    self.start = start

   # def findItinerary(self, tickets: List[List[str]]) -> List[str]:
   #    adjList = self.buildAdjList(tickets)
   #    sortedDestinationAdjList = self.sortDestinations(adjList)
   #    return self.findEulerPath(sortedDestinationAdjList)

   # def buildAdjList(self, tickets: List[List[str]]) -> Dict[str, List[str]]:
   #    adjList = defaultdict(list)
   #    for (src, dst) in tickets:
   #       adjList.setdefault(src,[]).append(dst)
   #    return adjList

   # def sortDestinations(self, adjList: Dict[str, List[str]]) -> Dict[str, List[str]]:
   #    for src, destinations in adjList.items():
   #       adjList[src] = sorted(destinations,reverse=True)
   #    return adjList

   # def findEulerPath(self, graph: Dict[str, List[str]]) -> List[str]:
   #    def dfs(src):
   #       destinations = graph[src]
   #       # print(f'Source = {src} Dest = {destinations}')
   #       while len(destinations) != 0:
   #          dfs(destinations.pop())
   #       # print(f' Source = {src} Dest = {destinations}, path = {path}')
   #       path.append(src) 
   #    path = []
   #    dfs(self.start)
   #    return path[::-1]

def dfs():
   pass
tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]

tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]
solution = Solution()
print(solution.findItinerary(tickets))


# a = 'abc'

# b = defaultdict(list)

# b['a'] += a

# print(b)
