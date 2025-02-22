const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', async (req, res) => {
  const data = req.body;
  try {
    // Simulate asynchronous operation using async/await
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Processed data:', data);
    res.send('Data received');
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).send('Error processing data');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));