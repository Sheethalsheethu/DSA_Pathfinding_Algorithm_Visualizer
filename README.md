# DSA_Pathfinding_Algorithm_Visualizer

The Pathfinding Algorithm Visualizer is a web-based tool that helps users visualize different pathfinding algorithms in a 30x30 grid environment. This interactive tool animates the execution of various search algorithms in real time, allowing users to see how each algorithm explores the grid and reaches its goal.


# Algorithms Used
This project implements the following pathfinding algorithms:

**Breadth-First Search (BFS):**
Explores all neighbor nodes level by level, guaranteeing the shortest path in an unweighted grid.

**Depth-First Search (DFS):**
Explores as far as possible along each branch before backtracking, which is more efficient in certain scenarios but may not always find the shortest path.

**Greedy Best-First Search:**
Uses a heuristic to always move towards the goal, prioritizing nodes that appear to be closer to the target.

***A Search (A-Star)**:**
Combines the path cost and heuristic to efficiently find the shortest path. This algorithm is widely used for its accuracy and speed in various applications.


The project is built using the following technologies:

**Frontend:**

HTML: Structure of the web page.
CSS: Styling and layout design.
JavaScript: Logic implementation and algorithm execution.

**Backend:**

Spring Boot: Used for the backend implementation, providing REST APIs and server-side logic.
