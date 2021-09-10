// function to load jQuery
function loadjQuery(){
    var jq = document.createElement('script'); jq.type = 'text/javascript';
    jq.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    document.getElementsByTagName('head')[0].appendChild(jq);
  }
  
  if (typeof jQuery == 'undefined') {  
    loadjQuery();
  } else {}
  
// app code
