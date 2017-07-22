#!/usr/bin/env node

/**
 * Created by viktyz on 2017/7/21.
 */

const program = require('commander');
const uvtoperate = require('../src/operate.js');

program
    .command('uvt [operate] [podLibrary]')
    .description('use uvt to operate a pod library')
    .action(function (operate,plname) {

        uvtoperate(operate,plname);
    });

program.parse(process.argv);