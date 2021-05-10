import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from './App';
import packageJson from '../package.json'

const REACT_APP_SENTRY_RELEASE = packageJson.version;

Sentry.init({
  dsn: "https://f70c3feeb8c648dbbe42b3aed3d84b1d@o616455.ingest.sentry.io/5754940",
  integrations: [new Integrations.BrowserTracing()],
  autoSessionTracking: true,
  release: REACT_APP_SENTRY_RELEASE,
  attachStacktrace: true
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
