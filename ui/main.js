// counter code
var button = document.getElementById('counter');


button.onclick = function () {
    
    //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    regquest.onreadystatechange = function (){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status=== 200){
                var counter = requesst.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://http://suryatejareddy.imad.hasura-app.io/counter',true);
    request.send(null);
   
    
   
};
 
 



