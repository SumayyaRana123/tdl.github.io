document.addEventListener('DOMContentLoaded',function(){
   let tasklistUL =document.querySelector('#task-list ul');
   let tasklist=document.querySelector('#task-list');
   let tasks =document.querySelectorAll('li');
   let searchBar=document.forms['search-tasks'].querySelector('input');
   let checkBoxes=document.querySelectorAll('input[type="checkbox"]');
   let deleteBins=document.querySelectorAll('.fa-trash');
   let addForm=document.forms['add-task'];
    console.log(addForm);
    
    searchBar.addEventListener('keyup',function(e)
    {
        const term =e.target.value.toLowerCase();
        Array.from(tasks).forEach(function(task)
        {
            const taskName= task.querySelector('.name').textContent;
            if(taskName.toLowerCase().indexOf(term)!=-1)
            {
                task.style.display="block";
            }
            else
            {
                task.style.display="none";

            }
          
        })
    })

    addForm.addEventListener('submit',function(e)
    {
        e.preventDefault();
        const newTask=addForm.querySelector('input[type="text"]');
        const li=document.createElement('li');
        const spanForCheckBox=document.createElement('span');
        spanForCheckBox.innerHTML+=`<input type="checkbox"></input>`;
        spanForCheckBox.setAttribute('class','check');
        const spanForTaskName=document.createElement('span');
        spanForTaskName.setAttribute('class','name');
        spanForTaskName.textContent=newTask.value;
        const spanForTrashIcon=document.createElement('span');
        spanForTrashIcon.innerHTML+=`<i class="fa fa-trash"></i>`;
        spanForTrashIcon.setAttribute('class','delete');

        li.append(spanForCheckBox);
        li.append(spanForTaskName);
        li.append(spanForTrashIcon);
        tasklistUL.appendChild(li);
        
    })

    tasklistUL.addEventListener('click',function(e)
    {
        console.log(e.target.classList.className);
        if(e.target.parentElement.classList.contains('delete'))
        {
             //alert('something is clicked');
           //  console.log(e.target.parentElement.className);
             const li=e.target.parentElement.parentElement;
             li.parentNode.removeChild(li);
        }
        else if(e.target.parentElement.classList.contains('check'))
        {
            const taskname=e.target.parentElement.nextElementSibling;
            if(e.target.checked)
            {
               
               taskname.style.textDecorationLine = "line-through";
              
            }
            else
            {
              taskname.style.textDecorationLine = "none";
            }
        }

    })


})
    