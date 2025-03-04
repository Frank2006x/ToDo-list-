import './styles.css';
import setactive from './active.js'
import inputForm from './inputform.js';
import addProject from './addProject.js';
import { loadData } from './active.js';
import card from './card.js'

window.setactive = setactive;

window.addProject = addProject;

window.inputForm=inputForm;
document.addEventListener("DOMContentLoaded", ()=> {
    console.log("DOM is fully loaded!");
    loadData("Today");
    addProject.loadProjects();
    inputForm.enableClickOutside(); 
});

document.getElementById("cancel-pro").addEventListener("click", () => {
    addProject.closeProject();
});

document.getElementById("submit-pro").addEventListener("click",()=>{
    addProject.submitProject();
})

