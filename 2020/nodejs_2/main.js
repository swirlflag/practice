const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const qs = require('querystring');

const templateHTML = (title,list,body,control = null) => {
    return `
        <!doctype html>
            <html>
            <head>
            <title>${title}</title>
            <meta charset="utf-8">
            </head>
            <body>
            <h1><a href="/">WEB</a></h1>
            ${control}
            ${list}
            ${body}
            </body>
        </html>
    `
}

const templateList = (filelist) => {
    return `
        <ul>
            ${filelist.map((file) => {
                return `
                    <li>
                        <a href="/?id=${file}">${file}</a>
                    </li>
                `
            })
            .join('')}
        </ul>
    `
}

const app = http.createServer((request,response) => {
    let _url = request.url;
    const queryData = url.parse(_url, true).query;
    const pathname = url.parse(_url, true).pathname;
    
    if(pathname === '/'){
        
        if(queryData.id === undefined){
            fs.readdir('./data', (error, filelist) => {
                let title = 'Welcome !';
                let description = 'Hello nodejs !';

                const list = templateList(filelist);

                const template = templateHTML( 
                    title,
                    list ,
                    `<h2>${title}</h2>
                    ${description}`,
                    `<a href="/create">create</a>`,
                );
                response.writeHead(200);
                response.end(template);
            });
        }else {
            fs.readdir('./data', (error, filelist) => {
                fs.readFile(`data/${queryData.id}`, 'utf8', (err,data) => {
                    let title = queryData.id;
                    let description = data;
    
                    const list = templateList(filelist);
    
                    const template = templateHTML( 
                        title,
                        list ,
                        `<h2>${title}</h2>
                        ${description}`,
                        `<a href="/create">create</a>
                        <a href="/update?id=${title}">update</a>
                        <form action="delete_process" method="post">
                            <input type="hidden" name="id" value=${title}>
                            <input type="submit" value="delete">
                        </form>`,
                    );
                    response.writeHead(200);
                    response.end(template);
                });
            });
        };
    }else if(pathname === '/create') {
        fs.readdir('./data', (error, filelist) => {
            let title = 'Create !';

            const list = templateList(filelist);

            const template = templateHTML( 
                title,
                list ,
                `<form action="/create_process" method="post">
                    <p><input type="text" name="title" placeholder="title"></p>
                    <p><textarea name="description" placeholder="description"></textarea></p>
                    <p><input type="submit"></p>
                </form>`,
                '',
            );
            response.writeHead(200);
            response.end(template);
        });
    }else if(pathname === '/create_process'){
        let body = '';
        request.on('data', (data) => {
            body += data;
        });
        request.on('end', () => {
            const post = qs.parse(body);
            const title = post.title;
            const description = post.description;
            fs.writeFile(`data/${title}`, description , 'utf8' , (err) => {
                response.writeHead(200);
                response.end('success');        
            });
        });
    }else if(pathname === '/update'){
        fs.readdir('./data', (error, filelist) => {
            fs.readFile(`data/${queryData.id}`, 'utf8', (err,data) => {
                let title = queryData.id;
                let description = data;
                const list = templateList(filelist);
                const template = templateHTML( 
                    title,
                    list ,
                    `<form action="/update_process" method="post">
                        <input type="hidden" name="id" placeholder="title" value="${title}"/>
                        <p><input type="text" name="title" placeholder="title" value="${title}"/></p>
                        <p><textarea name="description" placeholder="description">${description}</textarea></p>
                        <p><input type="submit"/></p>
                    </form>`,
                    '',
                );
                response.writeHead(200);
                response.end(template);
            });
        });
    }else if(pathname === '/update_process'){
        let body = '';
        request.on('data', (data) => {
            body += data;
        });
        request.on('end', () => {
            const post = qs.parse(body);
            const id = post.id;
            const title = post.title;
            const description = post.description;
            fs.rename(`data/${id}` , `data/${title}` , (error) => {
                fs.writeFile(`data/${title}` , description , 'utf8' , (err) => {
                    response.writeHead(302, {Location : `/?id=${title}`});
                    response.end();
                })
            });
        });
    }else if(pathname === '/delete_process'){
        let body = '';
        request.on('data', (data) => {
            body += data;
        });
        request.on('end', () => {
            const post = qs.parse(body);
            const id = post.id;
            fs.unlink(`data/${id}`, (error) => {
                response.writeHead(302, {Location : `/`});
                response.end();
            });
        });
    }else {
        response.writeHead(404);
        response.end('404 not found !');
    };
});

app.listen(3000);