export default class inputForm{
    static openDialog(){
        document.getElementById("input_form").showModal();
        console.log("hi");
    }
    static closeDialog(){
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
        const name=document.getElementById("name").value;
        const desc=document.getElementById("desc").value;
        const pri=document.getElementById("pri-value").value;
        // const date=document.getElementById("due_date").value;
        let dataSet={"name":name,"desc":desc,"pri":pri};
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