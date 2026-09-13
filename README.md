Technology Stack Explorer
A simple and responsive React project where users can explore different technologies and build their own technology stack by selecting technologies from different categories.
Technologies Used
•	React
•	TypeScript
•	Tailwind CSS
•	React Toastify
•	Vite
•	JavaScript / JSX
•	JSON Data
Features
1. Explore Technologies
Users can browse different technologies with their name, category, difficulty level, rating, and description.
2. Build Your Own Stack
Users can add technologies to their personal stack and remove individual technologies whenever they want.
3. Toast Notifications
The project uses React Toastify to show notifications when a technology is added, a duplicate technology is selected, or technologies are removed.
________________________________________
React Questions & Answers
1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to make the UI easier to write and understand.
2. What is the difference between props and state?
Props are used to pass data from a parent component to a child component.
State is data managed inside a component that can change over time.
3. What does the useState hook do, and where did you use it in this project?
useState lets us create and manage changing data inside a React component.
In this project, I used useState to store and update the selected technologies in the user's stack.
4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs code after a component renders.
I used useEffect to load the technology data from the JSON file when the component starts.
5. Why does every item in a .map() list need a unique key prop?
React uses the key to identify each item in a list. A unique key helps React efficiently update the correct item when the list changes.
6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition.
I used it in the Your Stack section:
{selectedTechs.length === 0 ? (
  <p>No technology selected</p>
) : (
  selectedTechs.map((tech) => (
    // selected technology
  ))
)}
When no technology is selected, it shows "No technology selected". Otherwise, it shows the selected technologies.
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent sends data to a child using props.
A child can send information back to the parent by calling a function that the parent passes through props.
For example:
<Child onSelect={handleSelect} />
The child can then call:
onSelect(data);
This allows the child to communicate with the parent.

