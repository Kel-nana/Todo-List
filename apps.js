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
  <div class="check ">
    <img src="./images/icon-check.svg" alt="" />
  </div>
  <p>${todotext}</p> 
  <div class ="edit-btn"> Edit</div>
  <div class="close-edit">
    <button class="close">
      <img src="./images/icon-cross.svg" alt="" />
    </button>
  </div>
</div>
<div class="break"></div>
  `
  todoCon.appendChild(todoDowm);
  const close = todoDowm.querySelector('.close');
  close.addEventListener('click', () => {
    todoDowm.remove();
  });

  const check = todoDowm.querySelector('.check');

  check.addEventListener('click', ()=> {
    check.classList.toggle('tick-active')
    todoDowm.children[0].children[1].classList.toggle('completed')
  });
  
}

addtodo();

});

