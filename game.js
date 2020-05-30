
///////////////////////////////////
const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var b_dg = document.querySelector('#bg')
    b_dg.style.backgroundColor = "#" + randomColor;
}
setInterval(() => {
    setBg()
}, 1000);
////////////////////////////////

var restart=document.querySelector('#button');
var squares=document.querySelectorAll('td');
function reset() {
    for(var i=0;i<squares.length;i++){
        squares[i].textContent='';
    }
}
restart.addEventListener('click',reset)


//////////////////////////////////

var k=1;

function board(){
    if (k % 2 == 0) {
        if (this.textContent === '') {
        this.textContent='O'
        }

    }
    else if (this.textContent === ''){
        this.textContent = 'X'
    }
    else if (this.textContent ==='X'){

    }
    else if (this.textContent === 'O')
    {

    }
    k++;
}

var one=document.querySelector('#one')
var two = document.querySelector('#two')
var three = document.querySelector('#three')
var four = document.querySelector('#four')
var five = document.querySelector('#five')
var six = document.querySelector('#six')
var seven = document.querySelector('#seven')
var eight = document.querySelector('#eight')
var nine = document.querySelector('#nine')


one.addEventListener('click',board)
two.addEventListener('click', board)
three.addEventListener('click', board)
four.addEventListener('click', board)
five.addEventListener('click', board)
six.addEventListener('click', board)
seven.addEventListener('click', board)
eight.addEventListener('click', board)
nine.addEventListener('click', board)


