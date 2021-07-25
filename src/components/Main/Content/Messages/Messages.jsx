import React from "react";
import s from "./Messages.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Mess from "./Mess/Mess";

function Messages() {
  return (
    <div className={s.wrap_messanges}>
        <div className={s.list_dialogs}>
            <Dialogs name="Gunga" id="1"/>
            <Dialogs name="Den" id="2"/>
            <Dialogs name="Stas" id="3"/>
            <Dialogs name="Aldar" id="4"/>
            <Dialogs name="Dimitriy" id="5"/>

        </div>
        <div className={s.list_messanges}>
            <Mess massage={"dsdasas"}/>
        </div>
    </div>
  );
}

export default Messages;
