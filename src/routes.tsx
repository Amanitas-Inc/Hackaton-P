import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DownloadPage } from "./pages/Download";
import { LoadingPage } from "./pages/Loading";
import { UploadPage } from "./pages/Upload";
import { NotFoundPage } from "./pages/NotFound";
import { LandingPage } from "./pages/Landing";

export const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/upload" component={UploadPage} />
      <Route exact path="/download" component={DownloadPage} />
      <Route exact path="/error" component={NotFoundPage} />
    </Router>
  );
};
