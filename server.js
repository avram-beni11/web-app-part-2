const express = require('express');
const app = express();

// Define the lessons array
const lessons = [
  { id: 1, title: 'Lesson 1' },
  { id: 2, title: 'Lesson 2' },
  { id: 3, title: 'Lesson 3' }
];

app.get('/lessons', (req, res) => {
  // Generate HTML using the lessons array
  const html = `
    <ul>
      ${lessons.map(lesson => `<li>${lesson.title}</li>`).join('')}
    </ul>
  `;

  // Send the HTML as the response
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
