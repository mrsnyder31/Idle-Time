import { tempAttack, tempDefense, tempUtility } from "./resourceCounter.js";


export const upgradeRender = (target) => {
    
    let attackInfo = tempAttack
    let defenseInfo = tempDefense
    let utilityInfo = tempUtility

    let html = ``
    
    if (target === "defense") {
        html = `
            <div class="upgrade-current" id="header-upgrade">Defense Upgrade</div>
            <div class="wrap-skill" id="container-upgrade">\n`
            
            for (const defense of defenseInfo){
                html += ` <div class="upgrade-skill" id="upgrade--${defense.id}">${defense.name}:
            ${defense.value}
            $ ${defense.levelCost}
            </div>\n`
            }

        html += `</div>`
        // console.log(html)
        return html
        }
        
        if (target === "utility") {
            html = `
            <div class="upgrade-current" id="header-upgrade">Utility Upgrade</div>
            <div class="wrap-skill" id="container-upgrade">\n`
            
            for (const utility of utilityInfo){
                html += ` <div class="upgrade-skill" id="upgrade--${utility.id}">${utility.name}:
            ${utility.value}
            $ ${utility.levelCost}
            </div>\n`
            }
            
        html += `</div>`
        // console.log(html)
        return html
        }

        if (target === "attack") {
                html = `
                <div class="upgrade-current" id="header-upgrade">Attack Upgrade</div>
                <div class="wrap-skill" id="container-upgrade">\n`

                for (const attack of attackInfo){
                html += ` <div class="upgrade-skill" id="upgrade--${attack.id}">${attack.name}:
                ${attack.value}
                $ ${attack.levelCost}
                </div>\n`
                }

        }
    

    html += `</div>`
    // console.log(html)
    return html
}







export const attackRender = (target) => {
    let attackInfo = tempAttack
  

    let html = ``
        if (target === "attack") {
            html = ``

                for (const attack of attackInfo){
                html += ` <div class="upgrade-skill" id="upgrade--${attack.id}">${attack.name}:
                ${attack.value}
                $ ${attack.levelCost}
                </div>\n`
                }
        }
    
    html += `</div>`
    document.getElementById("container-upgrade").innerHTML = html
    return 
}

export const defenseRender = (target) => {
    
    let defenseInfo = tempDefense
    

    let html = ``
        if (target === "defense") {
            html = `
                <div class="wrap-skill" id="container-upgrade">\n`

                for (const defense of defenseInfo){
                html += ` <div class="upgrade-skill" id="upgrade--${defense.id}">${defense.name}:
                ${defense.value}
                $ ${defense.levelCost}
                </div>\n`
                }
        }
    
    html += `</div>`
    document.getElementById("container-upgrade").innerHTML = html
    return
}

export const utilityRender = (target) => {
    let utilityInfo = tempUtility
    

    let html = ``
        if (target === "utility") {
            html = `
                <div class="wrap-skill" id="container-upgrade">\n`

                for (const utility of utilityInfo){
                html += ` <div class="upgrade-skill" id="upgrade--${utility.id}">${utility.name}:
                ${utility.value}
                $ ${utility.levelCost}
                </div>\n`
                }
        }
    
    html += `</div>`
    document.getElementById("container-upgrade").innerHTML = html
    return 
}


