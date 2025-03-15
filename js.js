function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); 
  function check( x,y)
  {
    if( x === 'admin' && y === 'gggg') 
        return "chuan";
    else
        return "có cc";
  }
  document.getElementById('login').addEventListener("click", function(event) {
    event.preventDefault(); 
    check();
});
document.getElementById("login").addEventListener("click",function(){
    let name = document.getElementById('name').value;
    let mk = document.getElementById('password').value;
    let res = check( name,mk);

    if( res === "chuan"){
        window.open( "https://megatron103.github.io/FIRST1407/","_blank");
    }
    else{ 
        alert("conmenos");
    }
})


