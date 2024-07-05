
let array = [];

let button = document.getElementById('play');
let savebutton = document.getElementById('save');

// play using keyboard keys

document.addEventListener('keydown',function(event){

    const letter = event.key;


      if(letter === 'f'){
        const play = document.getElementById('f-nat');
        play.currentTime = 0;
        play.play();
           
      }

    else if(letter === 'j'){
      const play = document.getElementById('f-g-nat');
      play.currentTime = 0;
      play.play();
    }

    else if(letter === 'g'){
      const play = document.getElementById('g-nat');
      play.currentTime = 0;
      play.play();
    }

    else if(letter === 'k'){
      const play = document.getElementById('g-a-nat');
      play.currentTime = 0;
      play.play();
    }

    else if(letter === 'a'){
      const play = document.getElementById('a-nat');
      play.currentTime = 0;
      play.play();
    }

    else if(letter === 'm'){
      const play = document.getElementById('a-b-nat');
      play.currentTime = 0;
      play.play();
    }

    else if(letter === 'b'){
      const play = document.getElementById('b-nat');
      play.currentTime = 0;
      play.play();
    }
    else if(letter === 'c'){
      const play = document.getElementById('c-nat');
      play.currentTime = 0;
      play.play();
    }

    else if(letter === 'l'){
      const play = document.getElementById('c-d-nat');
      play.currentTime = 0;
      play.play();
    }

    else if(letter === 'd'){
      const play = document.getElementById('d-nat');
      play.currentTime = 0;
      play.play();
    }

    else if(letter === 'o'){
      const play = document.getElementById('d-e-nat');
      play.currentTime = 0;
      play.play();
    }

    else if(letter === 'e'){
      const play = document.getElementById('e-nat');
      play.currentTime = 0;
      play.play();
    }


    else if(letter === 'f'){
      const play = document.getElementById('f-nat');
      play.currentTime = 0;
      play.play();
    }
      else{
    return;
      }
    });

    // Play using Click
          
const buttons = document.getElementsByTagName("button");

const buttonPressed = event => {
 let letter = event.target.id
 

 if(letter === 'f-natural'){

const play = document.getElementById('f-nat');
play.currentTime = 0;


let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(event) {
play.volume = event.currentTarget.value / 100;
});


play.play();

}

else if(letter === 'f-g-natural'){

const play = document.getElementById('f-g-nat');
play.currentTime = 0;
play.play();

}

else if(letter === 'g-natural'){

const play = document.getElementById('g-nat');
play.currentTime = 0;
play.play();

}


else if(letter === 'g-a-natural'){

const play = document.getElementById('g-a-nat');
play.currentTime = 0;
play.play();

}

else if(letter === 'a-natural'){

const play = document.getElementById('a-nat');
play.currentTime = 0;
play.play();

}


else if(letter === 'a-b-natural'){

const play = document.getElementById('a-b-nat');
play.currentTime = 0;
play.play();

}

else if(letter === 'b-natural'){

const play = document.getElementById('b-nat');
play.currentTime = 0;
play.play();

}


else if(letter === 'c-natural'){

const play = document.getElementById('c-nat');
play.currentTime = 0;
play.play();

}


else if(letter === 'c-d-natural'){

const play = document.getElementById('c-d-nat');
play.currentTime = 0;
play.play();

}

else if(letter === 'd-natural'){

const play = document.getElementById('d-nat');
play.currentTime = 0;
play.play();

}


else if(letter === 'd-e-natural'){

const play = document.getElementById('d-e-nat');
play.currentTime = 0;
play.play();

}

else if(letter === 'e-natural'){

const play = document.getElementById('e-nat');
play.currentTime = 0;
play.play();

}

else{

return;

}

}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}



// record while playing with keyboard keys



savebutton.addEventListener('keydown',function(event){

const letter = event.key;

  if(letter === 'f'){

    const play = document.getElementById('f-nat');

  array.push(play)
 
console.log({array});
  }


else if (letter === 'g'){

    const play = document.getElementById('g-nat');

array.push(play)

}

else if (letter === 'a'){

const play = document.getElementById('a-nat');

array.push(play)

}

else if (letter === 'b'){

const play = document.getElementById('b-nat');

array.push(play)

}

else if (letter === 'c'){

const play = document.getElementById('c-nat');

array.push(play);

}

else if (letter === 'd'){

const play = document.getElementById('d-nat');

array.push(play);

}

else if (letter === 'e'){

const play = document.getElementById('e-nat');

array.push(play);

}

  else{

    return;

  }

});

// record while using clicks


savebutton.addEventListener('click',function(event){

  
const letter = event.target;

// console.log(letter);

  if(letter === 'f-natural'){

    const play = document.getElementById('f-nat');

  array.push(play)
 
console.log({array});

  }


else if (letter === 'g-natural'){

    const play = document.getElementById('g-nat');

array.push(play)

}

else if (letter === 'a-natural'){

const play = document.getElementById('a-nat');

array.push(play)

}

else if (letter === 'b-natural'){

const play = document.getElementById('b-nat');

array.push(play)

}

else if (letter === 'c-natural'){

const play = document.getElementById('c-nat');

array.push(play);

}

else if (letter === 'd-natural'){

const play = document.getElementById('d-nat');

array.push(play);

}

else if (letter === 'f-natural'){

const play = document.getElementById('e-nat');

array.push(play);

}

  else{

    return;

  }

});


button.addEventListener('click',function(){

const playTone = function (i){

let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(event) {
array[i].volume = event.currentTarget.value / 100;

document.getElementById("value").innerHTML = array[i].volume

});


setTimeout(function(){

array[i].play();


if (i<array.length) {
  i++;
  playTone(i);
}

},700);

  }

  playTone(0);

});