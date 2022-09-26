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
//  storagetext=JSON.pars   e(storagetext);
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
  <div class="check " >
    <img src="./images/icon-check.svg" alt="" />
  </div>
  <p class = "store" >${todotext}</p> 
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
