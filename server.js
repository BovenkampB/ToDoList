const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios').default;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  // axios.get("https://quotes.rest/qod?language=en")
  // .then(data => res.send({ express: data }))
  // .catch(err => next(err));
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT + you are a cool duckie ;-)' });
});