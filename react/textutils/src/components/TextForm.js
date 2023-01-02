import { useState } from "react";

export default function TextForm(props) {
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Narration has started" ,"success");
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // hooks
  const [text, setText] = useState("");
  // text = "new text"; //wrong way to change the state
  // setText = "new text"; //correct way to change the state
  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            // passing object 2 currly braces for that
            style={{
              backgroundColor: props.mode === "dark" ? "#404040" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>
          Convert to Lower case
        </button>
        <button type="submit" onClick={speak} className="btn btn-warning ">
          Speak
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter your text above to preview here"}
        </p>
      </div>
    </>
  );
}
