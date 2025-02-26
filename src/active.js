import card from './card.js'

export default function setactive(Element){
    document.querySelectorAll(".item").forEach(e=>e.classList.remove("active"))
    Element.classList.add("active");
    changeheader(Element);
}

function changeheader(Element){
    const header=document.getElementById("Todo_type");
    header.textContent=Element.textContent;
    let todoList=document.getElementById("Todo");
    document.querySelectorAll("#todo").forEach(i=>{
        i.remove();
    })
    loadData(header.textContent);
    

}

function loadData(cato){
    let dataSet=[];
    let storedData=localStorage.getItem(cato);
    if (storedData && storedData.trim() !=="" ){
        dataSet=JSON.parse(storedData);
    }else{
        dataSet=[];
    }
    dataSet.forEach(i=>{
        new card(i.name,i.desc,i.dueDate,i.priValue);
    })
}