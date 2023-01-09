const express = require('express');
const app = express();

// Define the lessons array
const lessons = [
  { topic: 'math', location: 'Hendon', price: 100 },
  { topic: 'math', location: 'Colindale', price: 80 },
  { topic: 'math', location: "Brent Cross", price: 90 },
  { topic: 'math', location: 'Golders Green', price: 120 }
];


const users = [
  {email: "user@email.com", password: "mypassword" },

];

app.get('/lessons', (req, res) => {
  // Generate HTML using the lessons array
  const html = `
    <ul>
      ${lessons.map(lesson => `<li>${lesson.topic}</li>`).join('')}
    </ul>
  `;

  // Send the HTML as the response
  res.send(html);
});

app.get('/users', (req, res) => {

  const html = `
    <p>
      ${lessons.map(lesson => `<li>${lesson.title}</li>`).join('')}
    </p>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
