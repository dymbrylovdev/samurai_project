import React from "react";
import s from "./Dialods.module.css";
import {NavLink} from "react-router-dom";


function Dialogs(props) {
    let id = "/messages/"+ props.id
  return (
    <div className={s.dialogs}>
        <NavLink to={id}>
            <button className={s.dialog__name}>{props.name}</button>
        </NavLink>
    </div>
  );
}

export default Dialogs;
