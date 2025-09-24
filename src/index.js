document.addEventListener("DOMContentLoaded", () => {
  // your code here
const addElement=document.querySelector('#create-task-form')
const tasklist=document.querySelector('#tasks')


addElement.addEventListener("submit",function(event){
event.preventDefault() 
  
const imput=document.querySelector("#new-task-description")
const taskstodo=imput.value.trim()

if(taskstodo !==""){
  const ul=document.createElement("ul")
  ul.textContent = taskstodo;
  tasklist.appendChild(ul);

  const deleteBtn=document.createElement('button')
  deleteBtn.textContent='X'
  deleteBtn.style.marginLeft="10px"


  deleteBtn.addEventListener("click" ,() => {
    ul.remove() })
 
  ul.appendChild(deleteBtn)
  tasklist.appendChild(ul)

  imput.value = "";
  }
  })

});

