// counter code
var button = document.getElementById('counter');


button.onclick = function () {
    
    //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    regquest.onreadystatechange = function (){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status=== 200){
                
            }
        }
    };
    request.open('GET','http://http://suryatejareddy.imad.hasura-app.io/counter',true);
    request.send(null);
   
    
   
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for (var i=0;i<names.length; i++){
        list+= '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;  
};

    



