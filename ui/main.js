 var button =document.getElementById('counter');
 counter=counter+1;
 
 button.onclick=function(){
     var request=new XMLHttpRequest();
     request.onreadystatechange=function(){
     if(request.readyState===XMLHttpRequest.DONE){
         if(request.status===200){
             var counter=request.responseText;
              var span=document.getElementById('count');
               span.innerHTML=counter.toString();
    
      }
     }
     };
     request.open('GET','http://suryatejareddy.imad.hasura-app.io/counter',true);
     request.send(null);
 };
 



