const search = document.querySelector("#searchBox");
const addBtn = document.querySelector(".addBtn");
const todoList = document.querySelector('.ToDoList');

function add(){
    const taskText = search.value.trim();

    if(taskText === ""){
        alert("Hello! Enter task name");
    }else{
          const li = document.createElement("li")

    li.classList.add("task")
    
    li.innerHTML= `
        <p>${taskText}</p>

        <span class="tick">
            <i class="fa-regular fa-circle-check fa-xl" style="color: rgb(21, 10, 53);"></i>
        </span>
        <span class="drop">
            <i class="fa-solid fa-trash fa-xl" style="color: rgb(230, 18, 73);"></i>
        </span>
    `
 
    todoList.appendChild(li);

    search.value="";

    todoList.addEventListener("click", (e)=>{
        if(e.target.closest(".tick")){
            e.target.closest("li").classList.toggle("complete-btn");
            
            const checkedLi = e.target.closest("li");
            checkedLi.classList.contains("complete-btn");

            const tickIcon = checkedLi.querySelector(".tick i")

            if(checkedLi.classList.contains("complete-btn")){
                tickIcon.style.color="rgb(78 , 226 , 14)";
            }
        }
        if(e.target.closest(".drop")){
            e.target.closest("li").remove(); 
        }
    })

}

}

addBtn.addEventListener('click' , ()=>{
    add();
})
search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        add();
    };
});
// addBtn.addEventListener('click', ()=>{
//     const allowance =Notification.requestPermission();
//          if(allowance === "granted"){
//           var notify =  new Notification("Hello User!" , {
//                 body: "Thanks for enabling Notification",
//                 icon: "images/logo.jpg",
//                 silent:true,
//                 image: "images/logo.jpg"
//             })
//              setTimeout( ()=>{
//             notify.close();
//         },5000);
// }});
