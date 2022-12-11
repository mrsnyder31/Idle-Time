import { tempAttack, tempDefense, tempUtility } from "./resourceCounter.js"


let powerLevel = 0



export const setPowerLevel = (target) => {
    let attackInfo = tempAttack
    let defenseInfo = tempDefense
    let utilityInfo = tempUtility
    let html = ``

    
    for (const defense of defenseInfo){
        if(target === defense.id){
            powerLevel += defense.value
            document.getElementById("power-level-current").innerHTML = `Power Level: ${powerLevel}`
            console.log(`${defense.id} PL upgraded`, powerLevel)
        }

        else if (!target || !defense.id) {
              powerLevel += defense.value
             
        }
    }

    for (const attack of attackInfo) {
        if(target === attack.id){
            powerLevel += attack.value
       
            document.getElementById("power-level-current").innerHTML = `Power Level: ${powerLevel}`
            console.log(`${attack.id} PL upgraded`, powerLevel)
            
        }   

        else if (!target || !attack.id) {
            powerLevel += attack.value
        }
            
    }

    for (const utility of utilityInfo) {    
        if(target === utility.id ){
            powerLevel += utility.value
            document.getElementById("power-level-current").innerHTML = `Power Level: ${powerLevel}`
            console.log(`${utility.id} PL upgraded`, powerLevel)
        }

        else if (!target || !utility.id) {
            powerLevel += utility.value
        }  

    }

    html = `<div class="current-stat-total current" id="power-level-current">Power Level: ${powerLevel}</div>
    <div class="current-level current">Current Level Power</div>`
    
   
    
    
    return html
}

