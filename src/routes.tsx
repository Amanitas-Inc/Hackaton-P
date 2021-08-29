import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DownloadPage } from "./pages/Download";
import { MainPage } from "./pages/MainPage";

export const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/download" component={DownloadPage} />
    </Router>
  );
};
