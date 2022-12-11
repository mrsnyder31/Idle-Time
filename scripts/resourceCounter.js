import { getAttack, getDefense, getUtility } from "./database.js";
import { setPowerLevel } from "./powerLevel.js";
import { attackRender, defenseRender, utilityRender } from "./upgradeWindows.js";


export const resourceCounterHTML = () => {

    let html = `<div id="counter"> $0 </div>`
    return html
}


   var count=0;

   var counter = setInterval(timer, 8);
   
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
    


 
    export let tempAttack = getAttack();
    export let tempDefense = getDefense();
    export let tempUtility = getUtility();    
    


export const levelUpCost = (id) => {
    for (const atk of tempAttack){
        if (id === atk.id && count >= atk.levelCost)
        {
            count = count-atk.levelCost
            atk.levelCost = Math.floor(atk.levelCost + atk.levelCost * 0.3)
            atk.value = Math.floor(atk.value + atk.value * .5)
            attackRender("attack")
            setPowerLevel(id)
            console.log(`"leveled up attack" ${atk.id}`)
             
        }
    }
    
    for (const def of tempDefense){
        if (id === def.id && count >= def.levelCost)
        {
            count = count-def.levelCost
            def.levelCost = Math.floor(def.levelCost + def.levelCost * 0.3)
            def.value = Math.floor(def.value + def.value * .5)
            defenseRender("defense")
            setPowerLevel(id)
            console.log(`"leveled up defense" ${def.id}`)  
        }
       
    }
    
    for (const utl of tempUtility){
        if (id === utl.id && count >= utl.levelCost)
        {
            count = count-utl.levelCost
            utl.levelCost = Math.floor(utl.levelCost + utl.levelCost * 0.3)
            utl.value = Math.floor(utl.value + utl.value * .5)
            utilityRender("utility")
            setPowerLevel(id)
            console.log(`"leveled up utility" ${utl.id}`)
        }
       
    }  
}


