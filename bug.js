const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data asynchronously
  setTimeout(() => {
    console.log('Processed data:', data);
    res.send('Data received');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => console.log('Server listening on port 3000'));