const express = require('express');
const path = require('path'); // path lets us naviagte the file system/folders

// heroku assigns a port when it deploys via the process (envionrment variables - coming soon)
// locally this will run @port 3000; remotly it will run wherever heroku tells it to run
const port =  3000;// a double pipe - || - means "or"

const app = express();

app.use(express.static('public'));

// a forward slash is the hom route (same as index.html)
app.get('/', (req,res) => {
  console.log('at the home route')
  res.sendFile(path.join(__dirname + '/views/index.html'));
  //this builds localhost:3000/index.html 
  //it looks at the directory and appends to find the file we name 
})

app.get('/contact', (req,res) => {
  console.log('at the contact route')
  res.sendFile(path.join(__dirname +'/views/contact.html'));
})

app.get('/portfolio', (req,res) => {
  console.log('at the portfolio route')
  res.send('on the portfolio main page!');
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

