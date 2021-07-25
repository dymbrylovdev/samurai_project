import React from "react";
import Content from "./Content/Content";
import Module2 from "./Main.module.css";
import Navigator from "./Navigator/Navigator";

function Main() {
  return (
    <main className={Module2.main}>
      <Navigator />
      <div className="">
        <Content />
      </div>
    </main>
  );
}

export default Main;
