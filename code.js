const incButton = document.querySelector(".inc");
const decButton = document.querySelector(".dec");
let count=0;
const myCount= document.querySelector(".val");
myCount.innerText = count;

incButton.addEventListener('click', function(){
    count++
    myCount.innerText = count
})

decButton.addEventListener('click', function(){
    if( count > 0){
        count--
    }
    myCount.innerText = count
})