import { getAttack, getDefense, getUtility } from "./database.js"




export const upgradeRender = (target) => {
    
    const attackInfo = getAttack();
    const defenseInfo = getDefense();
    const utilityInfo = getUtility();

    let html = ``
    
    if (target === "defense") {
        html = `
            <div class="upgrade-current" id="header-upgrade">Defense Upgrade</div>
            <div class="wrap-skill" id="container-upgrade">\n`
            
            for (const defense of defenseInfo){
                html += ` <div class="upgrade-skill">${defense.name}:
            ${defense.value}
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
                html += ` <div class="upgrade-skill">${utility.name}:
            ${utility.value}
            </div>\n`
            }
            
        html += `</div>`
        // console.log(html)
        return html
        }

        else {
                html = `
                <div class="upgrade-current" id="header-upgrade">Attack Upgrade</div>
                <div class="wrap-skill" id="container-upgrade">\n`

                for (const attack of attackInfo){
                html += ` <div class="upgrade-skill">${attack.name}:
                ${attack.value}
                </div>\n`
                }

        }
    

    html += `</div>`
    // console.log(html)
    return html
}







