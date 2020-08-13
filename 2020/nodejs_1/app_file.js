const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { RSA_NO_PADDING } = require('constants');
const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.locals.pretty = true;
app.set('views' , './views_file');
app.set('view engine' , 'jade');

app.listen(3000, () => {
    console.log('Connected 3000 port');
});

app.get('/', (req,res) => {
    res.send('index');
})

app.get('/topic/new' , (req,res) => {
    fs.readdir('data', (err,files) => {
        if(err){
            res.status(500).send('internal server error');
        }
        res.render('new', {topics : files});
    });
    
});

app.get(['/topic' , '/topic/:id'], (req,res) => {
    fs.readdir('data', (err,files) => {
        if(err || !files.length){
            res.status(500).send('internal server error');
        }
        const id = req.params.id;
        if(id){
            fs.readFile(`data/${id}` , 'utf8' , (err,data) => {
                if(err || !data.length){
                    res.status(500).send('internal server error');
                }
                res.render('view', {title : id, topics : files, description : data});
            });
        }else{
            res.render('view', {topics : files, title : 'welcome', description : 'welcome !!!'});
        }
    
    });

});

app.post('/topic' , (req,res) => {
    const title         = req.body.title;
    const description   = req.body.description;
    fs.writeFile(`data/${title}` , description, (err) => {
        if(err){
            res.status(500).send('internal server error');
        }
        res.redirect(`/topic/${title}`);
    });
    // res.send('hi post ' + req.body.title);
});
