import setactive from './active.js';

export default class addProject {
    constructor(proName) {
        this.proName = proName;
        let content = document.getElementById("content");
        let newProject=document.createElement("div");
        newProject.style.display="flex";
        // newProject.style.
        let newProjectName = document.createElement("p");
        let del=document.createElement("button");
        del.classList.add("project-close-btn");
        del.innerHTML=`<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M10.722 9.969l-0.754 0.754 5.278 5.278-5.253 5.253 0.754 0.754 5.253-5.253 5.253 5.253 0.754-0.754-5.253-5.253 5.278-5.278-0.754-0.754-5.278 5.278z" fill="#ffffff"> </path> </g></svg>`;
        del.addEventListener("click",()=>{
            this.delProject(newProject,proName)
        })
        newProject.classList.add("item");
        newProject.addEventListener("click",function(){
            setactive(this);
            
        });
        newProjectName.innerHTML = proName;
        newProject.appendChild(newProjectName);
        newProject.appendChild(del);
        content.appendChild(newProject);
    }

    static openDialog() {
        let dialog = document.getElementById("addDialog");
        dialog.showModal();
    }

    static saveProject(proName) {
        let dataset = JSON.parse(localStorage.getItem("Pro")) || [];
        dataset.push(proName);
        localStorage.setItem("Pro", JSON.stringify(dataset));
    }

    static loadProjects() {
        document.querySelectorAll("#content .item").forEach(i => i.remove());
        let dataset = JSON.parse(localStorage.getItem("Pro")) || [];
        dataset.forEach(i => new addProject(i));
    }

    static closeProject() {
        let dialog = document.getElementById("addDialog");
        if (dialog) {
            console.log("Closing dialog...");
            dialog.close();  // ✅ Correctly closes the dialog
        } else {
            console.error("Dialog element not found!");
        }
    }
    

    static submitProject() {
        
        let proName = document.getElementById("addProject").value.trim();
        if (proName) {
            addProject.saveProject(proName);
            addProject.loadProjects();
        }

    }
    delProject(Element,proName){
        Element.remove();
        let dataSet=JSON.parse(localStorage.getItem("Pro")) || [];
        let updateSet=dataSet.filter(data=>data !==proName);
        localStorage.setItem("Pro",JSON.stringify(updateSet));
    }
}
