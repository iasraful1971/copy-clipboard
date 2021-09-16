const input = document.getElementById('input');
const btn =  document.querySelector('button.btn');
btn.onclick =  function(){
  input.select();
  document.execCommand('copy');
  alert('copied in your clipboard')
}