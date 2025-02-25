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


        checkbox.addEventListener("change", ()=> {
            if (checkbox.checked) {
                cardName.style.textDecoration = "line-through"; 
            } else {
                cardName.style.textDecoration = "none"; 
            }
        });
        
        let del=document.createElement("button");
        del.setAttribute("id","del");
        del.addEventListener("click",()=>delCard(todo));




        del.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38" fill="none">
  <path d="M13 17V29" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21 17V29" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 9H33" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 9H17H29V31C29 34.3138 26.3138 37 23 37H11C7.6863 37 5 34.3138 5 31V9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11 5C11 2.79086 12.7909 1 15 1H19C21.2092 1 23 2.79086 23 5V9H11V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

        let info=document.createElement("button");
        info.setAttribute("id","info");
        todo.appendChild(checkbox);
        todo.appendChild(cardName);
        todo.appendChild(info);
        todo.appendChild(del);
        todoList.appendChild(todo);

        let InfoBox=document.getElementById("Info");
        let details=document.getElementById("Info-div");
        info.addEventListener("click",()=>{
            InfoBox.style.display="flex";
            InfoBox.style.flexDirection="row";
            let closeBtn=document.createElement("button");
            closeBtn.setAttribute("id","info-close");
            closeBtn.innerHTML=`<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M7 17L16.8995 7.10051" stroke="#bb00ff" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 7.00001L16.8995 16.8995" stroke="#bb00ff" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
            closeBtn.addEventListener("click",()=>{
                closeBtn.remove();
                infoName.remove();
                infoDesc.remove();
                infoDate.remove();
                infoPri.remove();
                InfoBox.style.display = "none";
                InfoBox.close();
                return;
            })
            
            
            let infoName=document.createElement("h3");
            infoName.innerHTML=`Task : ${name}`;
            let infoDesc=document.createElement("p");
            infoDesc.innerHTML=`Description : ${desc}`;
            let infoDate=document.createElement("p");
            infoDate.innerHTML=`Due Date : ${dueDate}`;
            let infoPri=document.createElement("button");
            infoPri.innerHTML=priValue;
            infoPri.setAttribute("id","info-btn")
            infoPri.setAttribute("id",priValue.toLowerCase());
            InfoBox.appendChild(closeBtn);
            details.appendChild(infoName);
            details.appendChild(infoDesc);
            details.appendChild(infoDate);
            details.appendChild(infoPri);
            InfoBox.showModal();
        })
        info.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none">
  <path d="M3.795 0.00262481C1.66175 0.00262481 0 1.51725 0 3.46762V28.203C0 30.1507 1.66175 31.668 3.795 31.668H30.889C33.0222 31.668 34.684 30.1507 34.684 28.203V3.465C34.684 1.51725 33.0222 0 30.889 0L3.795 0.00262481ZM14.467 5.334H20.217V10.584H14.467V5.334ZM14.467 13.209H20.217V26.334H14.467V13.209Z" fill="white"/>
  </svg>`;
        

    }
}

function delCard(Element){
    Element.remove();

}