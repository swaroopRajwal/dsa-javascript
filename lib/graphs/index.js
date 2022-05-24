class Vertex {
  constructor(key) {
    this.key = key;
    this.connections = [];
  }
}

class Graph {
  constructor () {
    this.adjacencyList = {};
  }

  addVertex (key) {
    if(!this.adjacencyList[key]) {
      const vertex = new Vertex(key);
      this.adjacencyList[key] = vertex;
      return true;
    }
    return false;
  }

  addEdge(keyOne, keyTwo, cost) {
    if(this.adjacencyList[keyOne] && this.adjacencyList[keyTwo]) {
      this.adjacencyList[keyOne].connections.push({key: keyTwo, cost: cost});
      this.adjacencyList[keyTwo].connections.push({key: keyOne, cost: cost});
      return true;
    }
    return false;
  }

  display() {
    for(let i in this.adjacencyList) {
      console.log(`${i} => ${this.adjacencyList[i].connections.map(item => item.key)}`);
    }
  }
}

export default Graph;