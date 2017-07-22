/**
 * Created by viktyz on 2017/7/21.
 */

const create = require('./createlibrary');

module.exports = function operate(operate,plname) {

    console.log(operate + ' : ' + plname);

    if(operate === 'create')
    {
        create(plname);
    }

};