export default class card{
    constructor(name,desc,dueDate,priValue){
        this.name=name;
        this.desc=desc;
        this.dueDate=dueDate;
        this.priValue=priValue;
        let todoList=document.getElementById("todo-list");
        let todo=document.createElement("div");
        todo.setAttribute("id","todo");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "myCheckbox";
        checkbox.name = "myCheckbox";
        let cardName=document.createElement("p");
        cardName.innerHTML=name;
        
        let del=document.createElement("button");
        del.setAttribute("id","del");
        del.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38" fill="none">
  <path d="M13 17V29" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21 17V29" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 9H33" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 9H17H29V31C29 34.3138 26.3138 37 23 37H11C7.6863 37 5 34.3138 5 31V9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11 5C11 2.79086 12.7909 1 15 1H19C21.2092 1 23 2.79086 23 5V9H11V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

        let info=document.createElement("button");
        info.setAttribute("id","info");
        info.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none">
  <path d="M3.795 0.00262481C1.66175 0.00262481 0 1.51725 0 3.46762V28.203C0 30.1507 1.66175 31.668 3.795 31.668H30.889C33.0222 31.668 34.684 30.1507 34.684 28.203V3.465C34.684 1.51725 33.0222 0 30.889 0L3.795 0.00262481ZM14.467 5.334H20.217V10.584H14.467V5.334ZM14.467 13.209H20.217V26.334H14.467V13.209Z" fill="white"/>
  </svg>`;
        todo.appendChild(checkbox);
        todo.appendChild(cardName);
        todo.appendChild(info);
        todo.appendChild(del);
        todoList.appendChild(todo);


    }
}