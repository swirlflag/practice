const express = require('express');
const { getMaxListeners } = require('process');
const app = express('public');
app.listen(3000 , () => {
    console.log('Connected 3000 port');
});
const bodyParser = require('body-parser');
app.locals.pretty = true;
app.set('view engine' , 'jade');
app.set('views' , './views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : false}))

app.get('/', (req,res) => {
    res.send('hello home page');
});

app.get('/template' , (req,res) => {
    res.render('temp', {
        time    : new Date(),
        _title   : 'jade',
    });
});

app.get('/form' , (req,res) => {
    res.render('form');
});

app.get('/form_receiver' , (req,res) => {
    const title         = req.query.title;
    const description   = req.query.description;
    res.send(`${title} ${description}`);
    // res.send('hello get')
});

app.post('/form_receiver' , (req,res) => {
    const title             = req.body.title;
    const description       = req.body.description;
    res.send(`${title} ${description}`);
});

app.get('/topic/:id' , (req,res) => {
    const topics = [
        'A',
        'B',
        'C',
    ];

    const as = `
        <a href='/topic/0'>go A</a><br>
        <a href='/topic/1'>go B</a><br>
        <a href='/topic/2'>go C</a><br>
        ${topics[req.params.id]}
    `;

    res.send(as);
})

app.get('/topic/:id/:mode' , (req,res) => {
    const sendValue = `${req.params.id},${req.params.mode}`

    res.send(sendValue);
})

app.get('/login', (req,res) => {
    res.send('login please');
});

app.get('/island' , (req,res) => {
    res.send("<img src='/1.png'/>")
});

app.get('/dynamic' , (req,res) => {
    let lis = ``;
    for(let i = 0; i < 5; ++i){
        lis += "<li>coding</li>";
    }
    let time = new Date();
    const output = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
        <ul>
        ${lis}
        </ul>
        ${time}
        </body>
        </html>
    `;
    res.send(output);
})


