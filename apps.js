const form = document.querySelector('form');
const text =document.getElementById('text');
const todoCon = document.querySelector('.todo-con');


form.addEventListener('submit', (e)=>
{
e.preventDefault();
function addtodo() {
  let todoDowm = document.createElement('div');
  let todotext = text.value;
  todoDowm.innerHTML = `
  <div class="todo-li">
  <div class="check tick-active">
    <img src="./images/icon-check.svg" alt="" />
  </div>
  <p>${todotext}</p> 
  <div class="close-edit">
    <p class="edit-btn">Edit</p>
    <button class="close">
      <img src="./images/icon-cross.svg" alt="" />
    </button>
  </div>
</div>
<div class="break"></div>
  `
  todoCon.appendChild(todoDowm);
  
}

addtodo();

});

