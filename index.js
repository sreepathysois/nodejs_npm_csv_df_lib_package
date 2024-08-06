const fs = require('fs');
const csv = require('csv-parser');

class DataFrame {
  constructor(data) {
    this.data = data;
  }

  show() {
    console.table(this.data);
  }
}

function csvToDataFrame(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(new DataFrame(results));
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

module.exports = csvToDataFrame;

