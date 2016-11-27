// counter code
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});
var button = document.getElementById('counter');


button.onclick = function () {
    
    //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    regquest.onreadystatechange = function (){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status=== 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
    };
    request.open('GET','http://http://suryatejareddy.imad.hasura-app.io/counter',true);
    request.send(null);
   
    
   
};


var submit = document.getElementById('submit_btn');
submit.onclick = function () {
      var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function (){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status=== 200){
                 var names=request.responseText;
                 names=JSON.parse(names);
                 var list = '';
                  for (var i=0;i<names.length; i++){
                       list+= '<li>' + names[i] + '</li>';}
                   var ul = document.getElementById('namelist');
                   ul.innerHTML = list;
                
                
            }
        }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://http://suryatejareddy.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
   
};

    



