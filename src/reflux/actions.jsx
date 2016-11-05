var Reflux = require('reflux');

var Actions = Reflux.createActions([
    'getBkVotes',
    'bkVote',
    'getMcdVotes',
    'mcdVote'
]);

module.exports = Actions;
