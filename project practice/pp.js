const fs = require('fs');
const { COPYFILE_EXCL } = fs.constants;

// destination.txt will be created or overwritten by default.
fs.copyFileSync('file1.txt', 'file2.txt');
console.log('file1.txt was copied to file2.txt');

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
// fs.copyFileSync('source.txt', 'destination.txt', COPYFILE_EXCL);