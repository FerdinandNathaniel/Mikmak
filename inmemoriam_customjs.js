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
// Ecwid.OnAPILoaded.add(function() {
//     Ecwid.openPage('product', {'id': 72585497, 'name': "Rip Curl Channel Island", 'variation': 16351010});
//   });

var publicToken = Ecwid.getAppPublicToken('my-cool-app');

console.log(publicToken);