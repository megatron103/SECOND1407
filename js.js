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
        return "sai";
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
        document.getElementById("load2").style.display ="none";
    }
    else{ 
       document.getElementById("load2").style.display ="flex";
       typeEffect();
    }
});

const text = `#include<bits/stdc++.h>
using namespace std;
int slidingwindow( vector<int> &a,
int &k,int &n,int &start,int &en)
{int s = 0; start = 0;en = k-1;for(int i = 0; i < k; i++)
 s+=a[i];int kq = s;for(int i = 0; i< n; i++){ s-=a[i];
s+= a[i+k];if( s > kq ) {kq = s;start = i-k +1;en = i;}
    }return kq;
}\n `;

let i = 0;
function typeEffect() {
    if (i < text.length) {
        let char = text.charAt(i);
        if (char === "\n") {
            document.getElementById("text").innerHTML += "<br>";
        } else {
            document.getElementById("text").innerHTML += char;
        }
        i++;
        setTimeout(typeEffect, 40);
    } else {
        document.getElementById("text").style.borderRight = "none";
    }
};
new QRCode(document.getElementById("qrcode"),{
    text:"https://dotfic.com/zDyk",
    width: 100, 
    height: 100 
 });
let img = document.getElementById("img");

img.addEventListener("click", function () {
    img.src = "cmm.png";
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            img.src = "t1.png";
        });
    });
});




