const http = require("http");
const fs = require("fs");




const server = http.createServer((req,res) => {
  fs.readFile("project/public/html" + req.url +".html" ,(err,data) => {
    if(err){
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("<h2>Page 404, not found</h2>");
        return  res.end();
    
    }    
    // console.log(data);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data.toString());
    res.end();
    

  })
 
})



server.listen(3000);


