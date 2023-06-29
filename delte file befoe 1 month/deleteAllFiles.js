const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const deleteAllFiles = () => {
    var uploadsDir = './mysqlbackup';

    fs.readdir(uploadsDir, function (err, files) {
        files.forEach(function (file, index) {
            fs.stat(path.join(uploadsDir, file), function (err, stat) {
                var endTime, now;
                if (err) {
                    return console.error(err);
                }
                now = new Date().getTime();
                endTime = new Date(stat.ctime).getTime() + 2500000000;
                if (now > endTime) {
                    console.log(now);
                    return rimraf(path.join(uploadsDir, file), function (err) {
                        if (err) {
                            return console.error(err);
                        }
                        console.log('successfully deleted');
                    });
                }
            });
        });
    });

}

module.exports = deleteAllFiles;