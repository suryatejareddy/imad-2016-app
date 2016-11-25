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
         <h2>movies</h2>
         <img src="2wCEAAkGBxMTEhUTExMVFhUXGRgYGBgXGBoYGxgYGxgdGhgXHhgaHSggGh0lHRkYITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYvLS8tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf" alt="W3Schools.com">
<  style="width:304px;height:228px;">
  <!-- begin wwww.htmlcommentbox.com -->
 <div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">Comment Form</a> is loading comments...</div>
 <link rel="stylesheet" type="text/css" href="//www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" />
 <script type="text/javascript" id="hcb"> /*<!--*/ if(!window.hcb_user){hcb_user={};} (function(){var s=document.createElement("script"), l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), h="//www.htmlcommentbox.com";s.setAttribute("type","text/javascript");s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&opts=16862&num=10&ts=1480096413156");if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})(); /*-->*/ </script>
<!-- end www.htmlcommentbox.com -->
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
     this is my third article.</p>
       <!-- begin wwww.htmlcommentbox.com -->
 <div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">Comment Form</a> is loading comments...</div>
 <link rel="stylesheet" type="text/css" href="//www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" />
 <script type="text/javascript" id="hcb"> /*<!--*/ if(!window.hcb_user){hcb_user={};} (function(){var s=document.createElement("script"), l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), h="//www.htmlcommentbox.com";s.setAttribute("type","text/javascript");s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&opts=16862&num=10&ts=1480096413156");if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})(); /*-->*/ </script>
<!-- end www.htmlcommentbox.com -->
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