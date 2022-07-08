//To start the game
var selector=document.querySelectorAll('td')
function check()
{
if (this.textContent == '')
{
  this.textContent='X'
}
else if (this.textContent == 'X') {
  this.textContent='O'
}
else
{
  this.textContent=''
}
}
for (x of selector) {
  x.addEventListener('click',check)
}
// To restart the game
var restart=document.querySelector('input')
restart.addEventListener('click',flush)
function flush()
{
  for (x of selector)
  {
    x.textContent=''
  }
}
