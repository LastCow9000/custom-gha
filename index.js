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

    // const projectGetCard = await client.rest.projects.getCard();
    const projectListCards = await client.rest.projects.listCards({ column_id: 'Backlog' });

    console.log(`github lib: ${JSON.stringify(github)}`);
    console.log(`client: ${JSON.stringify(client)}`);
    console.log(`inputA: ${inputA} inputB:${inputB}`);
    // console.log(`projects getCard: ${JSON.stringify(projectGetCard)}`)
    console.log(`projects listCards: ${JSON.stringify(projectListCards)}`)
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

