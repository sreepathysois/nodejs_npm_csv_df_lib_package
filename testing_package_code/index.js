const csvToDataframe = require('@sreepathysois/csv-to-dataframe');
const path = require('path');

const csvFilePath = path.join(__dirname, 'sample.csv');

csvToDataframe(csvFilePath)
  .then(df => {
    // Custom function to display DataFrame contents
    function displayDataFrame(df) {
      if (Array.isArray(df.data)) {
        df.data.forEach((row, index) => {
          if (Object.keys(row).length > 0) { // Skip empty rows
            console.log(`Row ${index + 1}:`, row);
          }
        });
      } else {
        console.log('DataFrame data is not in expected format:', df);
      }
    }

    displayDataFrame(df);
  })
  .catch(err => {
    console.error('Error:', err);
  });
