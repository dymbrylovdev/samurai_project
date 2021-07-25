import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Messages from "./Messages/Messages";
import Music from "./Music/Music";
import News from "./News/News";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";

function Content() {
  return (
    <Switch>
      <div>
        <Route  path="/profile" component={Profile}/>
        <Route  path="/news" component={News} />
        <Route  path="/messages" component={Messages} />
        <Route  path="/music" component={Music} />
        <Route  path="/settings" component={Settings} />
      </div>
    </Switch>
  );
}

export default Content;
