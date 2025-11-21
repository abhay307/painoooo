let body = document.body
let cursor = document.querySelector('#cursor')

body.addEventListener('mousemove', function(dets){
  cursor.style.top = dets.y+"px"
  cursor.style.left = dets.x+"px"
})