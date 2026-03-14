src
 ├── components
 │   ├── project
 │   ├── task
 │   ├── comment
 │   └── layout
 │
 ├── hooks
 │   ├── useProjects.ts
 │   ├── useTasks.ts
 │   ├── useComments.ts
 │   └── useActivity.ts
 │
 ├── context
 │   └── AppProvider.tsx
 │
 ├── reducers
 │   ├── projectReducer.ts
 │   ├── taskReducer.ts
 │   └── commentReducer.ts
 │
 ├── types
 │   └── models.ts
 │
 ├── utils
 │   └── normalize.ts
 │
 └── pages
     ├── Dashboard.tsx
     └── ProjectPage.tsx


A project management dashboard where teams create projects, tasks, comments, and assign members.

=> So we need to have types for;
1. Projects => an array of tasks, members, activity log
    => Activity Log should track actions like;
        1. John moved Task A to In Progress
        2. Sarah commented on Task B
        3. Mike created Project Z

2. Task => id, title, description, priority, status, due date, assignee, comments.
    => Priority = "Low" | "Medium" | "High"
    => Status = "Backlog" | "Todo" | "In Progress" | "Review" | "Done"

3. Comments => id, description, createdBy, createdAt
4. Members => {User} => id, name, 

=> Users can;
1. Create a Project
2. Create tasks
3. Assign tasks
4. Move tasks btwn statuses
5. Comment on tasks
6. Track Activity
7. Edit project
8. Archive a project
9. View project details

