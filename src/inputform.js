export  function openDialog(){
    document.getElementById("input_form").showModal();
    console.log("hi");
}
export function closeDialog(){
    document.getElementById("input_form").close();
}
// export

export function setClicked(Element){
    document.querySelectorAll(".pri-btn").forEach(btn=>{
        btn.classList.remove("click");
    })
    Element.classList.add("click");
}
        
