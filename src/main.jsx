import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{
      background: 'black',
      color: 'white',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1>🚀 WorkerBeeOS is coming soon</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
