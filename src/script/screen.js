var screen = document.querySelectorAll('.screen')

var index = 0

function switchScreen(){
    if(index === 0){
        screen[index].style.opacity = '100'
        screen[screen.length-1].style.opacity = '0'
    }else{
        screen[index].style.opacity = '100'
        screen[index-1].style.opacity = '0'
    }
    index === screen.length-1 ? index = 0 : index++
}

setInterval(switchScreen,4000)