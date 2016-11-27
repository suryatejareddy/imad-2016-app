var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));





var articles={
     
 
  articleOne: {
          title:'article one surya',
          heading:'electronics',
          date:'sep16,2016',
     content:`
     <body bgcolor="#F8C471">
     <p>
            the branch of physics and technology concerned with the design of circuits using transistors and microchips, and with the behavior and movement of electrons in a semiconductor, conductor, vacuum, or gas.
"electronics is seen as a growth industry"
             
         </p>
         <div id="image-table">
    <table>
        <tr>
            <td style="padding:5px">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQcQ2C08AgOfSeJp9AHJ2Mm3seE5sWoX0tPdBLLoEZSUgRIEM">
              </td>
            <td style="padding:5px">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHb86nYJV-gvhAYgYj8HEKjF4BnOQlvkVeMqMVtf3CfNoQSgN4">
             </td>
             <td style="padding:5px">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSpGHJgavJ2VJHTHtPVY_rpgQ9aDQ8-fuUP942jXUD9oAcJ-syI8g">
              </td>
              <td style="padding:5px">
                <img src="2wCEAAkGBxMTEhUSExMWFRUXGBoaFxgYGRoXHhsYGh0YGBkaGxgYHiggGh0lGx0XIjIhKCktLi4uHR8zODMtNygtLisBCgoKDg0OGhAQGi0lICUtLS8tLy0tLS0tLy0tLS0tLS8rLy8tLS0tLS4rLS8vLS0tLS0vLTUtLS0vLS0tLS8vLf">
              </td>
              <td style="padding:5px">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4M-BnpwL1lJG9XCdOxqV-ucdVwf91t-WqO0AqfRsYuPt4X8301A">
              </td>
        </tr>
    </table>
</div>
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
    
        
          
            
    
          `
 },
  articleTwo: {
      title:'article two surya',
          heading:'article two',
          date:'sep18,2016',
     content:`<p> this is my first web app and i am very happy to share this.This is my second article.</p>`
     
  },
         
  articleThree: { title:'article three surya',
          heading:'article three',
          date:'sep19,2016',
     content:`<p>
     this is my third article.</p>`
    }
 };
 function createTemplate(data){
 var title=data.title;
 var date=data.date;
 var heading=data.heading;
 var content=data.content;
 var htmlTemplate=`
 <!doctype html>
 <html>
 <head>
     <title>
        ${title}
     </title>
   <link href="/ui/style.css" rel="stylesheet" />
 </head>
 <body img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSUgfPeq0RhhOnIu7tPFR3W68j6wzh45KPuJmp3-e_W2ZD_XFY9Eg" width="500" height="500">
 
 
     <div class="con">
    <div>
        <a href="/">home</a>
     </div>
     <hr/>
    
     <h3>
        ${heading}
     </h3>
     <div>
        ${date}
     
     </div>
     <div>
     ${content}
        
         
     </div>
      </div>
     
     
 </body>
 
 
 </html>`;
 return htmlTemplate;
 }
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
     
  });
  var counter=0;
  app.get('/counter',function(req,res){
      counter=counter+1;
      res.send(counter.toString());
      
  });
var names = [];
app.get('/submit-name',function(req,res){
    
    var name = req.query.name;
    names.push(name);
    
    res.send(JSON.stringify(names));
});

  
 
 app.get('/:articleName',function(req,res){
 var articleName=req.params.articleName;
 res.send(createTemplate(articles[articleName]));
 });
    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js',function(req,res){res.sendFile(path.join(_dirname,'ui','main.js'));});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});