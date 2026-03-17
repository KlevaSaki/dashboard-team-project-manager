Dashboard - Team Project Manager

A modern project management application inspired by tools like Jira, Linear, and Trello — built to demonstrate advanced React architecture, normalized state management, and scalable frontend design.

Overview

Team Project Manager is a Kanban-style task management app that allows users to:

Create and manage projects, Add and organize tasks, Move tasks across workflow stages, Add comments to tasks, Track activity within projects

This project focuses on real-world frontend engineering practices, not just UI.

This app was built to practice and showcase:

- Advanced React Patterns - useReducer for complex state management - useContext for global state - Custom hooks (useProjects, useTasks, useComments) - Component-based architecture - Normalized State (Relational Data)

The app uses a database-like structure:

{ 
  projects: Record<ID, Project>
  tasks: Record<ID, Task>
  comments: Record<ID, Comment>

  projectTasks: Record<ProjectId, TaskId[]>
  taskComments: Record<TaskId, CommentId[]> 
}

This improves:

- scalability, performance, maintainability

=> Performance Optimization was achieved by implementing;

- Selector pattern for efficient data access, Minimal re-renders through structured state usage

=> Scalable Architecture was achieved by implementing;

- Feature-based folder structure and Separation of concerns:

- UI → Components

- Logic → Hooks

- State → Reducers + Context

Features
- Project Management
. Create new projects
. View all projects in a dashboard

- Task Management
. Create tasks within projects

- Organize tasks by status:
. Backlog
. Todo
. In Progress
. Review
. Done


- Comments System
. Add comments to tasks
. View task discussions

- Persistence
. State is saved using localStorage


=> Tech Stack
. React 19.2
. TypeScript
. TailwindCSS
. React Router
. dnd-kit
. UUID


- Project Structure
src
 ├── components      # UI components
 ├── hooks           # Custom hooks
 ├── context         # Global state provider
 ├── reducers        # State logic
 ├── selectors       # Optimized state access
 ├── pages           # Application pages
 ├── types           # TypeScript models

Getting Started

1. Clone the repo
git clone https://github.com/your-KlevaSaki/team-project-manager.git

cd team-project-manager

2. Install dependencies
npm install

3. Run the app
npm run dev

-Example Workflow

. Create a project
. Open the project
. Add tasks
. Move tasks across columns
. Add comments
. Track progress


=> This project helped me deeply understand:

. Managing complex relational state in React
. Structuring apps for scalability
. Writing clean, reusable hooks
. Building interactive UIs with real-world patterns
. Using TypeScript effectively in large apps

=> Future Improvements

. Undo/Redo functionality
. Command palette (Ctrl + K)
. Keyboard shortcuts
. IndexedDB persistence
. Real-time collaboration (WebSockets)
. Authentication & backend integration


💡 Author

A journey into advanced React and frontend engineering.