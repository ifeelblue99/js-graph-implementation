function Graph() {
  this.vertices = new Set()
  this.edges = new Map()
  
  this.addVertex = function(vert) {
    this.vertices.add(vert)
  }
  this.addEdge = function(vertFrom, vertTo) {
    if (this.edges[vertFrom] === undefined) {
      return this.edges[vertFrom] = [vertTo]
    }
    this.edges[vertFrom] = [...this.edges[vertFrom], vertTo]
  }
  this.getEdges = function() {
    return this.edges
  }
  this.getVertices = function() {
    return this.vertices
  }
}
// graph set up
const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "A")

// driver code
console.log(graph.getEdges())
console.log(graph.getVertices())
