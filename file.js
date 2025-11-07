const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Error reading file:', err);
  } else {
    console.log(data);
  }
});
const fs=require('fs');
fs.writeFile('output.txt', 'This is some output text.', (err) => {
  if (err) {
    console.log('Error writing file:', err);
  } else {
    console.log('File written successfully.');
  }
});