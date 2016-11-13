var Reflux = require('reflux');

var Actions = Reflux.createActions([
    'bkVote',
    'mcdVote',
    'getMcdNo',
    'getBkNo',
    'domVote',
    'getPhutNo',
    'phutVote',
    'getDomNo',
    'arbyVote',
    'getWendNo',
    'wendVote',
    'getArbyNo'
]);

module.exports = Actions;
