** Keys in react **
Keys in react are used to
keys are unique identifiers used in React to keep track of items in a list.

Why they matter
Performance: They help React identify exactly which items changed, were added, or were removed, preventing unnecessary re-renders of the entire list.

State Integrity: They ensure that component state (like text in an input field) stays attached to the correct item even if the list is reordered.

Quick Rules
Be Unique: A key must be unique among its siblings (it doesn't have to be globally unique).

Be Stable: Use permanent IDs from your data (like post.id) rather than temporary values like Math.random().

Avoid Indexes: Don't use array indexes (0, 1, 2...) as keys if the list order can change, as this can cause UI bugs.

JavaScript
// ✅ Best Practice: Using a unique ID

<!-- <ul>
  {items.map(item => <li key={item.id}>{item.text}</li>)}
</ul> -->
