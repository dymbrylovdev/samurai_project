import React from "react";
import s from "./Mess.module.css";

function Mess(props) {
  return (
    <div className={s.wrap_mess}>
        <ul>
            <li>{props.massage}</li>
        </ul>
    </div>
  )
}

export default Mess;
