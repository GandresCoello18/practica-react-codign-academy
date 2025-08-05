import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.REACT_APP_KEY_SENTRY,
  sendDefaultPii: true
});
