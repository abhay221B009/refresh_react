// // todays agenda: useEffect, useCallback, useMemo, custom hooks, Prop drilling
// import React from "react";
// import { useState, useEffect } from "react";

// const App2 = () => {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3000/todos").then(async (res) => {
//       const json = await res.json();
//       console.log("fetched todos from server: ", JSON.stringify(json));
//       setTodos(json.todos);
//     });
//   }, []);
//   return (
//     <div>
//       {todos && todos.length > 0 ? (
//         todos.map((todo) => (
//           <Todo
//             key={todo.id} // ✅ use _id if MongoDB
//             title={todo.title}
//             description={todo.description}
//           />
//         ))
//       ) : (
//         <p>No todos found</p>
//       )}
//     </div>
//   );
// };

// const Todo = ({ title, description }) => {
//   return (
//     <>
//       <div>
//         <h1>{title}</h1>
//         <h2>{description}</h2>
//       </div>
//     </>
//   );
// };

// export default App2;
