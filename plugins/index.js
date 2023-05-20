const report = require('cypress-html-reporter/reporter');
const path = require('path');

module.exports = (on, config) => {
  on('after:run', (results, options) => {
    const reportOptions = {
      outputDirectory: path.join(__dirname, '..', 'reports'),
      
    };

    return report.generate(reportOptions, results);
  });
};
