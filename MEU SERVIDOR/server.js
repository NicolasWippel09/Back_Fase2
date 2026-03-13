const http = require('http');
const fs = require('fs');
let port = 3000;
let host = 'localhost';

const server = http.createServer((req,res)=>{
    //header
    res.setHeader('Content-Type', 'text/html');

    //roteamento
    let html_page = '';

    switch(req.url){
        case '/':
            html_page = 'data.html'
            res.statusCode =200
            break;

        case '/clima.html':
            html_page = 'clima.html'
            res.statusCode =200
            break;

        case '/paginainicial':
            html_page = 'paginainicial.html'
            res.statusCode =200
            break;
            
        default:
            html_page = '404.html'
            res.statusCode = 404
            break;

                  
        }
        //preparar a página de html
        fs.readFile('./HTML/'+html_page,(err,data)=>{
            if(err){
                console.log('error');
                res.statusCode = 404;
                res.end();
            }
            else{
               res.write(data);
               res.end(); 
            }
        });
})
server.listen(port,host,()=>{
    console.log('Servidor está no ar!!');


})