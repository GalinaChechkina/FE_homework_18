// загрузка страницы
const array = ["media/a1.jpg", "media/a2.jpg", "media/a3.jpg", "media/a4.jpeg", "media/a5.jpg"];
const imageNode = document.querySelector(".image");
const leftButtonNode = document.getElementById("left-button");
const rightButtonNode = document.getElementById("right-button");
imageNode.src = array[0];
let i = 0;


rightButtonNode.addEventListener("click", () => {
    // выполняется когда пользователь кликнул по кнопке вправо
    console.log('begin', i);
    if (i === array.length-1) {
        i = 0;
    } else {
        i++;
    }
    imageNode.src = array[i];
    console.log('end', i);
})

leftButtonNode.addEventListener ("click", ()=> {
    // выполняется когда пользователь кликнул по кнопке влево
    console.log("begin",i);
    if (i===0){
        i=array.length-1;
    }else{
       i--; 
    }
    imageNode.src = array[i];
    console.log("end",i);
 })
