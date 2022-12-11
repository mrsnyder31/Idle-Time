const   upgrades = {

            attack: [
                {
                    id: 1,
                    name: "Name A1",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 2,
                    name: "Name A2",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 3,
                    name: "Name A3",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 4,
                    name: "Name A4",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 5,
                    name: "Name A5",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 6,
                    name: "Name A6",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 7,
                    name: "Name A7",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 8,
                    name: "Name A8",
                    value: 10,
                    levelCost: 100
                    
                }
                
                
            ],
        
            defense: [
                {
                    id: 1,
                    name: "Name D1",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 2,
                    name: "Name D2",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 3,
                    name: "Name D3",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 4,
                    name: "Name D4",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 5,
                    name: "Name D5",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 6,
                    name: "Name D6",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 7,
                    name: "Name D7",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 8,
                    name: "Name D8",
                    value: 10,
                    levelCost: 100
                    
                }
                
                
            ],
            utility: [
                {
                    id: 1,
                    name: "Name U1",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 2,
                    name: "Name U2",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 3,
                    name: "Name U3",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 4,
                    name: "Name U4",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 5,
                    name: "Name U5",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 6,
                    name: "Name U6",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 7,
                    name: "Name U7",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: 8,
                    name: "Name U8",
                    value: 10,
                    levelCost: 100
                    
                }
                
                
            ],
            currentLevelData: {}

}


export const getAttack = () => {
    return upgrades.attack.map(a => ({...a}))
}
export const getDefense = () => {
    return upgrades.defense.map(d => ({...d}))
}
export const getUtility = () => {
    return upgrades.utility.map(u => ({...u}))
}

export const setAttack = (id) => {
    return upgrades.attack.levelCost = id
}


