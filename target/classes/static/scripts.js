window.onload = function () {
    document.getElementById("bfs-btn").addEventListener("click", runBFS);
    document.getElementById("dfs-btn").addEventListener("click", runDFS);
    document.getElementById("greedy-btn").addEventListener("click", runGreedy);
    document.getElementById("a-star-btn").addEventListener("click", runAStar);

    // Initialize grid (30x30)
    let grid = [];
    let gridContainer = document.getElementById('grid-container');

    for (let row = 0; row < 30; row++) {
        grid[row] = [];
        for (let col = 0; col < 30; col++) {
            let cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = row;
            cell.dataset.col = col;
            gridContainer.appendChild(cell);
            grid[row].push(cell);
        }
    }

    // BFS Algorithm Implementation
    function runBFS() {
        let start = grid[0][0];
        let end = grid[29][29];
        let queue = [start];
        let visited = new Set();

        start.style.backgroundColor = 'green';
        end.style.backgroundColor = 'red';

        while (queue.length > 0) {
            let current = queue.shift();
            current.style.backgroundColor = 'blue';

            if (current === end) {
                alert('Path found!');
                return;
            }

            let neighbors = getNeighbors(current);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                    neighbor.style.backgroundColor = 'lightblue';
                }
            }
        }
    }

    // DFS Algorithm Implementation
    function runDFS() {
        let start = grid[0][0];
        let end = grid[29][29];
        let stack = [start];
        let visited = new Set();

        start.style.backgroundColor = 'green';
        end.style.backgroundColor = 'red';

        function dfsStep() {
            if (stack.length === 0) return;

            let current = stack.pop();
            current.style.backgroundColor = 'blue';

            if (current === end) {
                alert('Path found!');
                return;
            }

            let neighbors = getNeighbors(current);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                    neighbor.style.backgroundColor = 'lightblue';
                }
            }

            setTimeout(dfsStep, 50);
        }

        dfsStep();
    }

    // Greedy Best-First Search Implementation
    function runGreedy() {
        let start = grid[0][0];
        let end = grid[29][29];
        let openList = [start];
        let visited = new Set();

        start.style.backgroundColor = 'green';
        end.style.backgroundColor = 'red';

        function heuristic(node) {
            return Math.abs(node.dataset.row - end.dataset.row) + Math.abs(node.dataset.col - end.dataset.col);
        }

        function greedyStep() {
            if (openList.length === 0) return;

            openList.sort((a, b) => heuristic(a) - heuristic(b));

            let current = openList.shift();
            current.style.backgroundColor = 'blue';

            if (current === end) {
                alert('Path found!');
                return;
            }

            let neighbors = getNeighbors(current);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    openList.push(neighbor);
                    neighbor.style.backgroundColor = 'lightblue';
                }
            }

            setTimeout(greedyStep, 50);
        }

        greedyStep();
    }

    // A* Search Algorithm Implementation
    function runAStar() {
        let start = grid[0][0];
        let end = grid[29][29];
        let openList = [{ node: start, g: 0, h: heuristic(start) }];
        let visited = new Set();

        start.style.backgroundColor = 'green';
        end.style.backgroundColor = 'red';

        function heuristic(node) {
            return Math.abs(node.dataset.row - end.dataset.row) + Math.abs(node.dataset.col - end.dataset.col);
        }

        function aStarStep() {
            if (openList.length === 0) return;

            openList.sort((a, b) => (a.g + a.h) - (b.g + b.h));

            let current = openList.shift().node;
            current.style.backgroundColor = 'blue';

            if (current === end) {
                alert('Path found!');
                return;
            }

            let neighbors = getNeighbors(current);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    let g = current.g + 1;
                    let h = heuristic(neighbor);
                    openList.push({ node: neighbor, g, h });
                    neighbor.style.backgroundColor = 'lightblue';
                }
            }

            setTimeout(aStarStep, 50);
        }

        aStarStep();
    }

    // Helper function to get neighbors of a cell
    function getNeighbors(cell) {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        const neighbors = [];

        if (row > 0) neighbors.push(grid[row - 1][col]);
        if (row < 29) neighbors.push(grid[row + 1][col]);
        if (col > 0) neighbors.push(grid[row][col - 1]);
        if (col < 29) neighbors.push(grid[row][col + 1]);

        return neighbors;
    }
};
