const graph = {
    A: new Set(['B', 'C', 'E']);
    B: new Set([]);
    C: new Set(['B', 'D']);
    D: new Set([]);
    E: new Set([A]);
    F: new Set([E]);
}

module.exports = graph;
