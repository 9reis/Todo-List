
// document.querySelector("#push").onclick = function()
// {
//     if(document.querySelector('#newtask input').value.length == 0){
//         alert('Please Enter a Task')
//     }
// }

let push = document.querySelector('#push');
let newTask = document.querySelector('#newtask input').value.length;

function empty (){
    if(newTask == 0){
        alert('teste')
    }
}