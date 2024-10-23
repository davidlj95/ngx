//👇 Type assertion needed to make Node.js happy
// https://stackoverflow.com/a/70106896/3263250
export { default as ANGULAR_CLI_VERSIONS } from './angular-cli-versions.json' with { type: 'json' }
