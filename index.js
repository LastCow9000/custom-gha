const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const repoToken = core.getInput('repo-token', { required: true });
    if (!repoToken) {
      throw new Error('Action must have repo token')
    }
    const inputA = core.getInput('input-A');
    const inputB = core.getInput('input-B');

    const client = github.getOctokit(repoToken);

    console.log(`github lib: ${JSON.stringify(github)}`);
    console.log(`client: ${JSON.stringify(client)}`);
    console.log(`inputA: ${inputA} inputB:${inputB}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

