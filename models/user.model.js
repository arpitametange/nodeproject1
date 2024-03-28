exports.calculateSalary = function(req, res) {
    // Your salary calculation logic goes here
    // Retrieve data from req.body or req.query as needed
    // Perform salary calculations and send the result to the view
  
    res.render('result', { title: 'Salary Slip Result', salary: calculatedSalary });
  };
  