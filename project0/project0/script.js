const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
let itemCountSpan = document.getElementById('item-count')
let uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let t=0;
  uncheckedCountSpan.innerHTML=t;
  const item=prompt("Enter The Item In list","" )
   let newList = document.createElement('li');
   newList.style=document.getElementsByClassName('todo-list')

   let Check = document.createElement('input')
   Check.setAttribute('type','checkbox')
   Check.setAttribute(onclick,'update')
   

   let txt= document.createElement('label');
   txt.innerHTML=item;
   

   newList.appendChild(Check);
   newList.appendChild(txt);
   list.appendChild(newList);

   listInc();

function listInc()
{
  let allitems=document.getElementsByTagName('li');
itemCountSpan.innerHTML=allitems.length;
let un=allitems.length;
for(let i=0;i<un;i++)
{
  if(allitems[i].firstChild.checked===false)
  {
    uncheckedCountSpan.innerHTML++;
  }
  
}
}
}


