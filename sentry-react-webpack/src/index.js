import React from "react";
import ReactDOM from "react-dom";
//import * as Sentry from "@sentry/react";
//import { Integrations } from "@sentry/tracing";
import App from "./App.js";
// const packageJson = require('../package.json');

/*Sentry.init({
  environment: "production",
  dsn: "https://30a2494c1f5e41d487935a6311210154@o616455.ingest.sentry.io/5750332",
  integrations: [new Integrations.BrowserTracing(),
  ],
  release: packageJson.version,
});*/

ReactDOM.render(<App />, document.getElementById("root"));