const { exec } = require('child_process')
const chalk = require('react-dev-utils/chalk');
const packageJson = require('./package.json');

const REACT_APP_SENTRY_RELEASE = packageJson.version;
const SENTRY_ORG = "dipeshdas";
const SENTRY_PROJECT = "sentry-react-app";

function execute (cmd) {
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.log(chalk.red(err.message));
      return;
    }
    if (stdout) {
      console.log(chalk.green(stdout))
      return
    }
    console.log(chalk.yellow(stderr))
  })
}

const create_release = `sentry-cli releases --org=${SENTRY_ORG} new --project=${SENTRY_PROJECT} ${REACT_APP_SENTRY_RELEASE}`;
const maps = `sentry-cli releases --org=${SENTRY_ORG} --project=${SENTRY_PROJECT} files ${REACT_APP_SENTRY_RELEASE} upload-sourcemaps ./build --url-prefix "~/build/static/js" --validate build/static/js`
// const files = `sentry-cli releases --org=${SENTRY_ORG} --project=${SENTRY_PROJECT} files ${REACT_APP_SENTRY_RELEASE} upload ./build --url-prefix "~/build/static/js"`

// const associate_commits = `sentry-cli releases --org=${SENTRY_ORG} --project=${SENTRY_PROJECT} set-commits --auto ${REACT_APP_SENTRY_RELEASE}`;

execute(create_release);
// execute(files);
execute(maps);
