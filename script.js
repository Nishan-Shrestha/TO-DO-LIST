 
 
 const addForm = document.querySelector(".add");
 const task = document.querySelector(".tasks");
 const clearAll = document.querySelector(".clear");
 const messageSpan = document.querySelector(".message span");
 const searchform = document.querySelector(".search"); 
// const delet = document.querySelectorAll(".delete");


 addForm.addEventListener("submit", event => {
    event.preventDefault();
      const value = addForm.task.value.trim();
      if(value.length){
         task.innerHTML += `<li>
         <span>${value}</span>
         <i class="bi bi-trash-fill delete"></i>
     </li>`
        console.log(value);
        addForm.reset();
        updateMessage(); 
      }
     
 });


 task.addEventListener("click", event =>{
    if(event.target.classList.contains("delete")){
      event.target.parentElement.remove();
      updateMessage();
    }

 });


 clearAll.addEventListener("click", event =>{
   const allTasks = task.querySelectorAll("li");
   allTasks.forEach(items => {
      items.remove();
     
   });
   updateMessage();

 });

 function updateMessage() { 
   const textlength = task.children.length;
   messageSpan.textContent = `You have ${textlength} pending tasks`;

   
 }
 updateMessage(); 



function filterTask(term){

 Array.from(task.children)
.filter(task =>{
   return !task.textContent.toLocaleLowerCase().includes(term);
    
})
.forEach(task =>{
   task.classList.add("hide");
});
Array.from(task.children)
.filter(task =>{
   return task.textContent.includes(term);
})
.forEach(task =>{
   task.classList.remove("hide");
});

}

 searchform.addEventListener("keyup", event =>{
   const term = searchform.task.value.trim().toLowerCase();
   console.log(term);
   filterTask(term);


 });

 searchform.addEventListener("click", event =>{
   if(event.target.classList.contains("reset")){
      searchform.reset();
      filterTask(term);
   }
 });