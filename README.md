*Project Name
DevStack - Tech Stack Builder

*Description
DevStack is a simple and modern web application that helps developers explore different technologies and build their own development stack by selecting the technologies they want to use.

*Technologies Used
React
TypeScript
Tailwind CSS
DaisyUI
React Icons
React Toastify
Vite

* Features
1. Explore different frontend, backend, database, and development tools.
2. Add technologies to your personal stack.
3. Remove individual technologies or clear the entire stack.

*Answer
1. JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React UI code easier to write and understand.

2. Props are data passed from a parent to a child component. State is data managed inside a component that can change over time.

3. useState is used to create and manage changing data in a component. I used it in App.tsx to store the selected technologies in the stack.

4. useEffect is used to perform side effects such as fetching data. In this project, I did not use useEffect to load JSON data. I used fetch(), a Promise, use(), and Suspense instead.

5. A unique key helps React identify each item in a list and efficiently update the UI when the list changes.

6. Conditional rendering means showing different UI based on a condition. I used it to show an empty-stack message when no technology is selected.

7. A parent passes data to a child using props. A child can communicate with the parent by calling a callback function passed through props.