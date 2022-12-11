import { resourceCounterHTML } from "./resourceCounter.js"




export const loadPage = () => {

    let html = `
    <div class="wrap-screen">
               
            <div class="wrap-screen-top">

                <div class="wrap-screen-top-resource"> 

                    <div class="resource-total">Resource Counter
                    ${resourceCounterHTML()}
                    </div>
                    <div class="resource-current">?total score? => move to right corner?</div>
                    
                </div>

                <div class="wrap-screen-top-skill">

                    <!-- <div class="skill-header">Skills</div> -->
                    <div class="skill-icon">Skill ?remove?</div>
                    <div class="skill-icon">Skill ?remove? </div>
                    
                </div>

            </div>
                   
            <div class="game-window">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Basic_human_drawing.png" alt="stickman" width="50px">
                
            </div>
            <!-- <div class="playback-speed">- Speed +</div> -->
            
            <div class="wrap-screen-bottom">
                
                <div class="wrap-screen-bottom-current">

                    <div class="current-stat-total current">Power Level: Error </div>
                    <div class="current-level current">Current Level Power: Error</div>
                    
                </div>

                    <div class="wrap-screen-bottom-stat" id="container-all-upgrade">

                        <div class="upgrade-current" id="header-upgrade">Current Upgrade Error</div>
                    
                        <div class="wrap-skill" id="container-upgrade">

                            <div class="upgrade-skill">Error</div>
                            <div class="upgrade-skill">Error</div>
                            <div class="upgrade-skill">Error</div>
                            <div class="upgrade-skill">Error</div>
                            <div class="upgrade-skill">Error</div>
                            <div class="upgrade-skill">Error</div>
                            <div class="upgrade-skill">Error</div>
                            <div class="upgrade-skill">Error</div>

                        </div>
                            
                    </div>

                    <div class="wrap-screen-bottom-popup">

                        <div class="popup" id="popup-attack">Pop A</div>
                        <div class="popup" id="popup-defense">Pop D</div>
                        <div class="popup" id="popup-utility">Pop U</div>

                    </div>
            </div>

                    
        </div>
    `
    return html

}