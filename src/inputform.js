import Card from './card.js'


export default class inputForm{
    
    static openDialog(){
        document.getElementById("input_form").showModal();
        console.log("hi");
    }
    static closeDialog(){
        const name = document.getElementById("name");
        const desc = document.getElementById("desc");
        const pri = document.getElementById("pri-value");
        const date = document.getElementById("due-date");

        if (name) name.value = "";
        if (desc) desc.value = "";
        if (pri) pri.textContent = "";
        if (date) date.value = "";
        document.getElementById("input_form").close();
    }
    static setClicked(Element){
        document.querySelectorAll(".pri-btn").forEach(btn=>{
            btn.classList.remove("click");
        })
        Element.classList.add("click");
        const value=document.getElementById("pri-value");
        value.textContent=Element.innerHTML;
        console.log(value.textContent);
    }
    static submitData(){
        let name=document.getElementById("name").value;
        let desc=document.getElementById("desc").value;
        let priValue=document.getElementById("pri-value").textContent;
        let dueDate=document.getElementById("due-date").value;

        let dataSet=new Card(name,desc,dueDate,priValue);
        console.log(dataSet);
        
        inputForm.closeDialog();
    }
    static enableClickOutside() {
        const dialog = document.getElementById("input_form");
    
        if (!dialog) {
            console.error("Dialog not found!");
            return;
        }
        
        
        dialog.addEventListener("click", (e) => {
            if (e.target === dialog) {
                inputForm.closeDialog();
            }
        });
    }

}