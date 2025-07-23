# 🎨 Background Changer App

This is a simple React project that allows users to dynamically change the background color of the entire webpage by clicking buttons.

## 🚀 Features
- Interactive buttons to change background color
- Uses `useState` to manage color state
- `useEffect` ensures the background updates with each color change
- Clean and minimal interface for testing and learning React hooks

## 🛠️ Technologies Used
- React (Functional Components)
- Hooks: `useState`, `useEffect`
- JavaScript, HTML, CSS

## 💡 How It Works
- The app maintains a `color` state using React's `useState`.
- When a user clicks a button, the `color` state is updated.
- The `useEffect` hook listens for changes in the `color` state (included in its dependency array).
- Whenever `color` changes, the background of the `document.body` updates to match the new color.

```jsx
useEffect(() => {
  document.body.style.backgroundColor = color;
}, [color]);
```

## 🖱️ Usage
Just click on one of the buttons labeled with color names, and watch the background change accordingly!

## 🧑‍💻 Author
Your Name – Pranav Joshi

## 📄 License
This project is licensed under the MIT License.
