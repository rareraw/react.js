const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([{
        'id' : 1,
        'image' : 'https://placeimg.com/64/64/1',
        'name' : '정인섭',
        'birthday' : '930423',
        'gender' : '남자',
        'job' : '모빌씨앤씨'
      },{
        'id' : 2,
        'image' : 'https://placeimg.com/64/64/2',
        'name' : '황윤성',
        'birthday' : '911222',
        'gender' : '남자',
        'job' : 'LS글로벌'
      },{
        'id' : 3,
        'image' : 'https://placeimg.com/64/64/3',
        'name' : '이준규',
        'birthday' : '910915',
        'gender' : '남자',
        'job' : '???'
      }]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));