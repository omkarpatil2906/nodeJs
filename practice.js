const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';

const DATE = moment().subtract(1, 'd').toISOString();

const data = {
  date: DATE
};

jsonfile.writeFile(FILE_PATH, data, async () => {

  // 🔥 Set environment variables BEFORE commit
  process.env.GIT_AUTHOR_DATE = DATE;
  process.env.GIT_COMMITTER_DATE = DATE;

  await simpleGit()
    .add([FILE_PATH])
    .commit(DATE)
    .push();

});
