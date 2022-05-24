import Graph from "./lib/graphs";

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 5)
graph.addEdge('A', 'C', 3)
graph.addEdge('A', 'F', 7)
graph.addEdge('B', 'C', 6)
graph.addEdge('B', 'D', 2)
graph.addEdge('B', 'E', 4)
graph.addEdge('D', 'E', 2)
graph.addEdge('D', 'C', 3)
graph.addEdge('F', 'C', 8)

console.log(graph.adjacencyList)

// graph.display()