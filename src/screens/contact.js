import { Button, TextField } from "@mui/material";
import Navbar from "../components/navbar/navbar";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const nameInput = useRef(null);
  const [counter, setCounter] = useState(0);

  function resetForm() {
    // document.getElementById("form").reset();
    // formRef.current.reset();
    // console.log(nameInput);
    // nameInput.current.focus();
  }
  function printConsole(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const date = Object.fromEntries(formData);
    console.log(date);
  }
  function increase() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Navbar />
      <form
        ref={formRef}
        className="column form form-container"
        onSubmit={printConsole}
      >
        <input ref={nameInput} type="text" label="Name" />
        <TextField type="text" label="Phone" />
        <h1>{counter}</h1>
        <div className="row">
          <Button type="submit" variant="outlined">
            Contact
          </Button>
          <Button variant="outlined" onClick={increase}>
            Increase
          </Button>
        </div>
      </form>
    </div>
  );
}
