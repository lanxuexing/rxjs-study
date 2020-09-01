var fs = require('fs');
var path = require('path');

var PATH = path.join(__dirname, '../docs'); // 目录

// 遍历目录得到文件信息
function walk(path, callback) {
    var files = fs.readdirSync(path);

    files.forEach(function (file) {
        if (fs.statSync(path + '/' + file).isFile()) {
            callback(path, file);
        }
    });
}

// 修改文件名称
function rename(oldPath, newPath) {
    fs.rename(oldPath, newPath, function (err) {
        if (err) {
            throw err;
        }
    });
}

// 运行
walk(PATH, function (path, fileName) {
    var oldPath = path + '/' + fileName, // 源文件路径
        newPath = path + '/' + fileName.replace(/index.html/, '404.html'); // 新路径

    rename(oldPath, newPath);
});