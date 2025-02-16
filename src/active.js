export default function setactive(Element){
    document.querySelectorAll(".item").forEach(e=>e.classList.remove("active"))
    Element.classList.add("active");
    changeheader(Element);
}

function changeheader(Element){
    const header=document.getElementById("Todo_type");
    header.textContent=Element.textContent;
}