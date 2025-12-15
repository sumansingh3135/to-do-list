# To-Do List Application ✔️  
A simple and interactive **To-Do List Application** built using **HTML, CSS, and JavaScript**.  
This project allows users to add tasks, mark them as completed, and delete them from the list.  
It is perfect for beginners to practice **DOM manipulation**, **event handling**, and **basic UI design**.

---

## 📁 Project Structure

to-do-list/
│── index.html
│── style.css
│── script.js
└── README.md

---

## 📌 Features

### ✔ Add Tasks  
- Users can type a task and click **Add Task** (or press Enter).  
- The task automatically appears in the list.

### ✔ Mark Tasks as Completed  
- Each task has a checkbox.  
- When checked, the task gets a **strikethrough** style.

### ✔ Delete Tasks  
- Each task includes a **Delete** button.  
- Clicking it removes the task from the list.

### ✔ Error Handling  
- If the user tries to add an empty task, an alert appears.

### ✔ Clean, Modern UI  
Styled using CSS with:
- Card-style container  
- Rounded buttons  
- Shadows and spacing  
- Minimal, user-friendly layout  

---

## ▶️ How to Run the Project

1. Download or clone the project:
   ```bash
   git clone <your-repo-link>
2. Open the project folder:
   cd to-do-list
3. Run the application by opening index.html in any browser:
     Double-click it
     Or drag it into Chrome, Firefox, Edge, etc.

## How It Works (Code Summary)
- HTML
Provides the structure:
input field → Add button → task list container

- CSS
Styles the layout
Visually differentiates completed tasks
Adds spacing, colors, alignment, and button styles

- JavaScript
Handles all functionality:
addTask() → Adds new tasks
Checkbox event → Marks tasks complete
Delete button event → Removes tasks
Input validation → Prevents empty tasks
Enter key support → Adds tasks quickly
