import { useState } from "react";
import "./App.css"
import Form from "./component/form/Form";
import Popup from "./component/Popup/Popup";
export default function App() {
  const [submit, setSubmit]=useState<boolean>(false)
  return (
    <div className="container">
      <Form setSubmit={setSubmit}/>
      <Popup submit={submit} />
    </div>
  );
}
