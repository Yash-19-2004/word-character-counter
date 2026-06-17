import { useState } from "react";
import "./App.css";

function App(){

  const[text,setText] =useState("");

  return(

      <div className="container">
    <h1>Word & Character Counter</h1>

    <textarea
    placeholder="Type here..."
    value={text}
    onChange={(e) => setText(e.target.value)}>
    </textarea>

    <h2>Characters: {text.length}</h2>

    <h2>
        Words:{" "}
        {text.trim() === ""
          ? 0
          : text.trim().split(/\s+/).length}
      </h2>

      <div className="footer">
        <h3>Yash Jaswal</h3>
        <p>jaswalyash5@gmail.com</p>

        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
        >
          <button>Built for Digital Heroes</button>
        </a>

      </div>
  </div>
  );
}

export default App;