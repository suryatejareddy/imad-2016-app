// counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
    
    //Make a request to the counter endpoint
    
    //capture the response and store it in a variable
    
    //render the variable in the correctbspan
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
 
 



