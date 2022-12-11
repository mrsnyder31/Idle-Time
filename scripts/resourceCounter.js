import { getAttack, getDefense, getUtility, setAttack } from "./database.js";
import { upgradeRender } from "./upgradeWindows.js";




   var count=0;

   var counter = setInterval(timer, 80);
   
   function timer()
   {
     count=count+1;

     if (count >= 99999)
     {
        clearInterval(counter);
        //counter ended, do something here
         document.getElementById("counter").innerHTML=count ;
         
        return;
     }

        const countDisplay = document.getElementById("counter")
        countDisplay.innerHTML= `$ ${count}` ;   
    }
    
    
    export const resourceCounterHTML = () => {
    
        let html = `<div id="counter"> $0 </div>`
        return html
    }
    const tempAttack = getAttack();
    const tempDefense = getDefense();
    const tempUtility = getUtility();    
    



export const levelUpCost = () => {
    for (const atk of tempAttack){
        if (count >= atk.levelCost)
        {
            count = count-atk.levelCost
            // let currentLevelCost = atk.levelCost + atk.levelCost * 0.3
            // setAttack(currentLevelCost)
            console.log("leveled up")
            
        }
    }
    
    for (const def of tempDefense){
        if (count >= def.levelCost)
        {
            count = count-def.levelCost  
        }
       
    }
    
    for (const utl of tempUtility){
        if (count >= utl.levelCost)
        {
            count = count-utl.levelCost
        }
       
    }  
}


