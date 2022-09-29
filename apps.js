const form = document.querySelector('form');
const text =document.getElementById('text');
const todoCon = document.querySelector('.todo-con');


form.addEventListener('submit', (e)=>
{
e.preventDefault();

 addtodo();

});


let storagetext =JSON.parse(localStorage.getItem("storagetext"));

if(storagetext) {

 storagetext.forEach(item => {
   addtodo(item)

 });
}

function addtodo(textSt) {
  let todoDowm = document.createElement('div');
  let todotext = text.value;
  if (textSt){
    todotext=textSt.text;
  }
if(todotext){
  todoDowm.innerHTML = `
  <div class="todo-li">
  <div class="check ${textSt && textSt.complete? 'tick-active':""}" >
    <img src="./images/icon-check.svg" alt="" />
  </div>
  <p class = "store ${textSt && textSt.complete? 'completed ':""}" >${todotext}</p> 
  <div class ="edit-btn"> Edit</div>
  <div class="close-edit">
    <button class="close">
      <img src="./images/icon-cross.svg" alt="" />
    </button>
  </div>
</div>
<div class="break"></div>
  `;
  todoCon.appendChild(todoDowm);

  update ();
}
  const close = todoDowm.querySelector('.close');
  close.addEventListener('click', () => {
    todoDowm.remove();
    update ();
  });

  const check = todoDowm.querySelector('.check');

  check.addEventListener('click', ()=> {
    check.classList.toggle('tick-active')
    todoDowm.children[0].children[1].classList.toggle('completed')
    update ();
  });
  
}


function update () {
  const store =document.querySelectorAll('.store');
  let arr = [];
  store.forEach(item=>{
arr.push({
  text:item.innerText,
  complete:item.classList.contains("completed")
})
  });
  localStorage.setItem("storagetext", JSON.stringify(arr));
}
 
const infor = document.querySelectorAll('.choice p'); 
const todoli = document.querySelectorAll('.todo-li');
// console.log(infor);
infor.forEach((item)=>{
  
  item.addEventListener('click', ()=>{
    infor.forEach((elem)=>{
elem.classList.remove('active');

    })
    item.classList.add('active')
if(item.innerText=="Active"){
todoli.forEach((element)=> {
if(element.children[1].classList.contains('completed')){
  element.style.display="none";
}else{
  element.style.display="flex";
}
})
}else if(item.innerText=="Completed"){
  todoli.forEach((element)=> {
    if(element.children[1].classList.contains('completed')){
      element.style.display="flex";
    }else{ 
      element.style.display="none";
    }
    })
}else{
  todoli.forEach((element)=> {
    element.style.display="flex";
    })
}
});
});
 
const clear = document.querySelector(".clear");

clear.addEventListener('click', ()=> {
  todoli.forEach((item)=> {
    console.log(item)
    if(item.children[1].classList.contains('completed')){
      item.remove()
      update ();
    }
    // item.remove()
  });
});

const left = document.querySelector(".left");
function setItem() {
 let activeTodo=document.querySelectorAll(".todo-li .tick-active")
 console.log(activeTodo)
 let difference = todoli.length-activeTodo.length
console.log(difference);
left.innerText=`${difference} items left`
}

setItem();

const light = document.querySelector(".light-d");
const background = document.querySelector("body");
const formBg = document.querySelector("form input");
const todoliBg =document.querySelectorAll(".todo-li");
const inforbg =document.querySelector(".infor");
// left.addEventListener('click', ()=> {
  light.addEventListener('click', ()=> {
   console.log(background.classList.toggle('lighter')); 
   formBg.classList.toggle('lighter')
   inforbg.classList.toggle('lighter')
   todoliBg.forEach((item)=> {
    item.classList.toggle("lighter");
   })
  
  });
// })

