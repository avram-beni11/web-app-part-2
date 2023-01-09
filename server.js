//const { response } = require('express');
const express = require('express');
const app = express();

// Define the lessons array
// app.get('/lessons', (request, response, next) => {
const lessons = [
  { topic: 'math', location: 'Hendon', price: 100 },
  { topic: 'math', location: 'Colindale', price: 80 },
  { topic: 'math', location: "Brent Cross", price: 90 },
  { topic: 'math', location: 'Golders Green', price: 120 }
 ];
//   response.send(lessons)
// });

app.get('/lessons', (req, res) => {
  // Generate HTML using the lessons array
  const html = `
  <html>
  <head>
  <style>
  .lesson-box {
    display: inline-block;
    width: 200px;
    height: 200px;
    border: 2px solid black;
    margin: 10px;
    padding: 10px;
    height: 110px
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
    </head>
    <body>
      <ul>
        ${lessons.map(lessons => `
        <div class="lesson-box">
            <h3>${lessons.topic}</h3>
            <p>Location: ${lessons.location}</p>
            <p>Price: ${lessons.price}</p>
          </div>
        `).join('')}
      </ul>
    </body>
  </html>
`;

  // Send the HTML as the response
  res.send(html);
});

app.get("/user", (request, response, next)=>{
  const user = {'email': 'user@email.com', 'password': 'mypassword'};
  response.send(user);
});

app.use(express.static("./"));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
