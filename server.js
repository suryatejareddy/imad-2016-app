var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    

 articleOne: {
         title:'article one surya',
         heading:'article one',
         date:'sep16,2016',
    content:`
    <p>
            this is my first web app and i am very happy to share.
            
        </p>
          <div>
           <a href="Screenshot (17).png"></a>
       </div> `
},
 articleTwo: { title:'article two surya',
         heading:'article two',
         date:'sep18,2016',
    content:`
    <p>
            this is my first web app and i am very happy to share this.
            
        </p>
      
    
       </div> 
 },
        
 articleThree: { title:'article three surya',
         heading:'article three',
         date:'sep19,2016',
    content:`
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
<body>
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


app.get('/:articleName',function(req,res){
var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});