const body = document.querySelector('body');
const box = document.createElement('div');
const text1 = document.createElement('p');
const text2 = document.createElement('p');
const text3 = document.createElement('p');
const text4 = document.createElement('p');
const text5 = document.createElement('p');
box.appendChild(text1)
box.appendChild(text2)
box.appendChild(text3)
box.appendChild(text4)
box.appendChild(text5)
body.appendChild(box)

let note1 = document.getElementById('note1')

note1.addEventListener('keyup', (e) => {
    note1 = parseFloat(e.target.value)
})
let note2 = document.getElementById('note1')

note2.addEventListener('keyup', (e) => {
    note2 = parseFloat(e.target.value)
})
let note3 = document.getElementById('note1')

note3.addEventListener('keyup', (e) => {
    note3 = parseFloat(e.target.value)
})

function generateSubTotal(note1,note2) {
    let subtotal = (note1*0.3)+(note2*0.3)
    return subtotal
}

function generateNoteExcellent(note1,note2) {
    let excellent = (4.6 - generateSubTotal(note1,note2)) * 100 / 40
    return excellent
}

function generateNoteWin(note1,note2) {
    let win = (3.5 - generateSubTotal(note1,note2)) * 100 / 40
    return win
}

function generateNoteLoseRecuperation(note1,note2) {
    let loseRecuperation = (2.1 - generateSubTotal(note1,note2)) * 100 / 40
    return loseRecuperation
}

function average(note1,note2,note3) {
    let total = (note1*0.3) + (note2*0.3) + (note3*0.4)
    return total
}

const button=document.getElementById('calcular')
button.addEventListener('click',  () => {
    
    if (generateNoteExcellent(note1,note2) > 5) {
        text1.innerText='No le alcanza para ganar con honores'
    }else{
        text1.innerText='La nota necesaria para ganar con honores la materia es: '+generateNoteExcellent(note1,note2)
    }

    if (generateNoteWin(note1,note2) > 5) {
        text2.innerText='No le alcanza para ganar la materia'
    }else{
        text2.innerText='La nota necesaria para ganar la materia es: '+generateNoteWin(note1,note2)
    }

    if (generateSubTotal(note1,note2) > 2 ) {
        text3.innerText='Con las notas actuales se encuentra perdiendo con oportundidad de recuperacion'
    }else{
        if (generateNoteLoseRecuperation(note1,note2) > 5) {
            text4.innerText='No le alcanza para perder con opcion de recuperacion, definitivamente perdio la materia'
        }else{
            text4.innerText='La nota necesaria para perder con opcion de recuperar es: '+generateNoteLoseRecuperation(note1,note2)
        }
    }


    if (average(note1,note2,note3) >=3.5) {
        text5.innerText='la nota definitiva ha sido '+average(note1,note2,note3)+', gana la materia'
    } else {
        text5.innerText='la nota definitiva ha sido '+average(note1,note2,note3)+', pierde la materia'
}
})




