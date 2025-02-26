import './styles.css';
import setactive from './active.js'
import inputForm from './inputform.js';
import card from './card.js'
window.setactive = setactive;
window.inputForm=inputForm;
document.addEventListener("DOMContentLoaded", ()=> {
    console.log("DOM is fully loaded!");
    inputForm.enableClickOutside(); 
});

// new Card(name,desc,dueDate,priValue)
// new card("frank","helloewuhowh ouherowui hor woeuirh o","43/23/234","high");

