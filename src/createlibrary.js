/**
 * Created by viktyz on 2017/7/21.
 */

const P = require('path');
const chalk = require('chalk');
var fs = require('fs');
var shell = require('shelljs');

var source_name = '';
var target_name = '';

module.exports = function createlibrary(projectName) {

    if (!projectName || !projectName.match(/^[$A-Z_][0-9A-Z_-]*$/i)) {
        var msg = chalk.red('Invalid project name: ') + chalk.yellow(projectName);
        console.log(msg);
        process.exit();
    }

    var msg = chalk.blue('Create a new library : ') + chalk.cyan(projectName);
    console.log(msg);

    const s_path = P.join(__dirname, '/OCProjectTemplate/SAMPLE_LIBRARY_PROJECT') + '/*';
    const t_path = process.cwd() + '/';

    shell.cp('-rf', s_path, t_path);

    source_name = 'SAMPLE_LIBRARY_PROJECT';
    target_name = projectName;
    // source_prefix = 'SAMPLE_CLASS_PREFIX';
    // target_prefix = 'JDHD';

    walk(t_path, 0, rename)
};

function walk(path, floor, cb) {

    floor++;

    fs.readdir(path, function (err, files) {
        if (err) {
            console.log('read dir error');
        } else {
            files.forEach(function (item) {

                var tmpPath = P.join(path, item);

                fs.stat(tmpPath, function (err1, stats) {

                    if (err1) {
                        console.log('stat error');
                    } else {

                        var fdStart = item.indexOf('.');
                        if (fdStart != 0) {

                            if (stats.isDirectory()) {

                                var npath = cb(path, tmpPath, item);

                                if (npath.length > 0) {
                                    walk(npath, floor, cb);
                                }
                                else {
                                    walk(tmpPath, floor, cb);
                                }
                            }
                            else {

                                var npath = cb(path, tmpPath, item);

                                if (npath.length > 0) {
                                    changecontent(npath);
                                }
                                else {
                                    changecontent(tmpPath);
                                }

                            }
                        }
                    }
                })
            });
        }
    });
}

function is_match(path, target) {

    return (P.basename(path).indexOf(target) >= 0);
}

function rename(path, tmpPath, item) {

    console.log('rename : ' + path);

    if (!is_match(item, source_name)) {
        return '';
    }

    var tname = item.replace(source_name, target_name);

    var tpath = P.join(path, tname);

    shell.cp('-rf', tmpPath, tpath);
    shell.rm('-rf', tmpPath);

    console.log('tpath : ' + tpath);

    return tpath;
}

function changecontent(tmpPath) {

    if (!fs.existsSync(tmpPath)) {
        return;
    }

    var contentText = fs.readFileSync(tmpPath, 'utf-8');

    var fdIndex = contentText.indexOf(source_name);
    if (fdIndex != -1) {

        var reg = new RegExp(source_name, 'g');

        var rcontent = contentText.replace(reg, target_name);
        fs.writeFileSync(tmpPath, rcontent);
    }
}