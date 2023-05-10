let container = document.getElementById('container-boxes');
let button_gioca = document.getElementById('play')

button_gioca.addEventListener('click', function() {

    container.innerHTML = ''

    let difficolta = document.getElementById('livello').value

    let numero_caselle = getDifficolta(difficolta)

    createBox(numero_caselle, difficolta, container)    
})



// FUNZIONI

function getDifficolta(dif) {
    let n

    if (dif == 'facile') {
        n = 100
    }
    else if (dif == 'medio') {
        n = 81
    } 
    else {
        n = 49
    }

    return n
}

function createBox (num, dif, cont) {

    for (let i = 1; i <= num; i++) {
    
        let box = document.createElement('div');
   
        box.classList.add(`box`);
        box.classList.add(`box-${dif}`);
        box.innerHTML = i
   
        cont.appendChild(box);
    };
   
    let boxes = document.getElementsByClassName('box');
   
    for (let i = 0; i < boxes.length; i++) {
       
        let single_box = boxes[i];
   
        single_box.addEventListener('click', function() {
   
            if (this.classList.contains('red')) {
                this.classList.remove('red')
            }
            else {
                this.classList.add('red')
            }
        })
    }
}
