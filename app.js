document.body.addEventListener('keypress', function(e){
  document.querySelector('main h1').innerHTML = e.code
})