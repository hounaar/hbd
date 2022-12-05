window.onload = () =>{

/*
🍧 Happy Birthday Dear 🎉🎊🎁🎈 
🍧
🍧 Made with love♥️😍
🍧 Have some:   
   (🍧🍰🍬🍨🍦🍭🍧🍰🍨🍬🍭🍦)
   ----------------------------
*/
  
    let text = document.getElementsByClassName("wish")[0];
    
    aakuWriter(text, "Happy Wala Birthday, Thank you soo much for being there for me.
 You have tought me many things. I missed you so much. Happy birthday to my dearest one.");
    
};

function aakuWriter(target, msg) {
    let i=0,
        id = setInterval(() => {
        
        target.append(msg[i++]);
        if (i >= msg.length) {
            clearInterval(id);         
        }
    }, 70);
}


window.addEventListener('click', () => {
    
    document.getElementById("song").play();
    
});

