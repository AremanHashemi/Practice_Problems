/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
	const adjList = buildAdjList(tickets);
	const sortedAdjList = sortAdjList(adjList);
	const ticketIterator = sortedAdjList.get("JFK");
	const trip = [ticketIterator.pop()];
	while (adjList.size != 0) {
		const list = sortedAdjList.get(ticketIterator);
		if (list.length == 0) {
			sortedAdjList[]
		}
		trip.push(ticketIterator)
	}
	console.log(ticketIterator.pop())
};

const sortAdjList  = function(adjList) {
	adjList.forEach(
		(value, key, map) => {
			map.set(key, value.sort().reverse());
		}
	)
	return adjList
}
const buildAdjList = function(tickets) {
    return tickets.reduce((map, [src, dest]) => {
        map.set(src, map.has(src) ? [...map.get(src), dest] : [dest]);
        return map;
    }, new Map);
};

tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
findItinerary(tickets)


/**
 * List of tickets where 
 * ticket[i] = [fromi, toi]
 * 
 * reconstructor the iternary in order and return it
 * If multiple solutions build the smallest lexical order
 * 
 * Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
 * Output: ["JFK","MUC","LHR","SFO","SJC"]
 * 
 * Possible solutions
 * 
 * Graph
 * 	Adjacency List
 * 
 * Observation 
 * 	Tickets are only 1 way, graph is directed
 * 	Return route with smallest lexical order
 *  All the tickets form a valid route IE single component
 *  All trips start from JFK
 */

/**
 * Eulerian Path, visits every edge exactly once
 */