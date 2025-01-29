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


# How to Run the Project

**Step 1: Install Apache Maven**

Before running the project, ensure that Apache Maven is installed on your system. If Maven is not installed, follow these steps:

1) Install Maven:
Download Apache Maven from official Maven website.
Extract the ZIP file to a location like C:\Program Files\Apache\Maven.

2)Set Up Environment Variables:
MAVEN_HOME → Set it to your Maven installation path (e.g., C:\Program Files\Apache\Maven\apache-maven-3.9.6).
Add Maven’s bin directory to the PATH environment variable:
Example: C:\Program Files\Apache\Maven\apache-maven-3.9.6\bin.

3)Verify Maven Installation:
Open Command Prompt (cmd) and run:
mvn -v

If Maven is installed correctly, you will see the Maven version and Java version.

**Step 2: Clone the Repository**

Clone the repository from GitHub:
git clone https://github.com/yourusername/pathfinding-visualizer.git

Navigate to the project folder:
cd pathfinding-visualizer

**Step 3: Build and Run the Project (Backend)**

Install dependencies:
mvn clean install

Run the Spring Boot application:
mvn spring-boot:run

The application will run on port **http://localhost:9090/**.
