import { getAttack } from "./database.js";

const allAttack = getAttack()
console.log("all Attack", allAttack)

const getAttackNames = () => {
    
    for (const attack of allAttack){
      
        console.log(`${attack.name}`)
       
    }
}

const attackNames = getAttackNames()
console.log(attackNames)