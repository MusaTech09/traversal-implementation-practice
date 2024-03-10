//Create Graph

const graph = {
    A: new Set(['B', 'C', 'E']), //directed B && C; undirected(bidirectional) E
    B: new Set([]),
    C: new Set(['B', 'D']),
    D: new Set([]),
    E: new Set([A]), //undirected(bidirectional) edge
    F: new Set([E]), //directed edge
}

module.exports = graph;
