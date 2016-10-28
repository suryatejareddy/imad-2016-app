var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone={
         title:'article one surya',
         heading:'article one',
         date:'sep16,2016',
    content:`
    <p>
            this is my first web app and i am very happy to share this.
            
        </p>`
};
function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate=`
<!DOCTYPE html>
<html>
<head>
    <title>
       s(title)
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
       s(heading)
    </h3>
    <div>
       s(date)
    
    </div>
    <div>
    s(content)
       
        
    </div>
     </div>
    
</body>
    
    
    
    
    
</html>

;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){res.send(createTemplate(articleone))});
app.get('/article-two',function(req,res){ res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));});
app.get('/article-three',function(req,res){ res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));});
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
