import React, { useState } from "react";

export default function TextForm(props) {
  let upperCase = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };

  let lowerCase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };

  let clearText = () => {
    let clrText = "";
    setText(clrText);
  };

  let valueChange = (e) => {
    setText(e.target.value);
  };

  let Revbo = {
    border: "solid lightblue 5px",
  };

  let [Text, setText] = useState("");

  return (
    <>
      <div
        className="container my-5 "
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#050316",
          color: props.mode === "light" ? "white" : "#050316",
        }}
      >
        <div className="form-floating">
          <h2 style={{
            
            color: props.mode === "light" ? "#050316" : "white",
          }}>{props.heading}</h2>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={Text}
              onChange={valueChange}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#050316",
                color: props.mode === "light" ? "#050316" : "white",
              }}
              id="textArea"
              rows="8"
            ></textarea>
          </div>
        </div>
        <button className="btn btn-success mx-1" onClick={upperCase}>
          UpperCase
        </button>
        <button className="btn btn-info" onClick={lowerCase}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          ClearText
        </button>

        <div
          className="container my-3"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#050316",
            color: props.mode === "light" ? "#050316" : "white",
          }}
        >
          <h2>Summary of the Text is Below</h2>
          <p>Number of characters = {Text.length}</p>
          <p>Number of Words = {Text.split(" ").length}</p>
          <p>No of Sentences = {Text.split(/[.?!]/).filter(Boolean).length}</p>
          <h2>Review</h2>
          <div>
            <p style={Revbo}>
              {Text.length > 0
                ? Text
                : "Enter the Text in the Text Area above to Preview it here"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
