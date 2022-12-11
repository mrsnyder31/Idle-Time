const   upgrades = {
// keys to add to upgrades: increaseValueRate, increaseLevelCostRate, ?increasePowerLevel?
            attack: [
                {
                    id: "atk_1",
                    name: "Name A1",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "atk_2",
                    name: "Name A2",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "atk_3",
                    name: "Name A3",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "atk_4",
                    name: "Name A4",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "atk_5",
                    name: "Name A5",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "atk_6",
                    name: "Name A6",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "atk_7",
                    name: "Name A7",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "atk_8",
                    name: "Name A8",
                    value: 10,
                    levelCost: 100
                    
                }
                
                
            ],
        
            defense: [
                {
                    id: "def_1",
                    name: "Name D1",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "def_2",
                    name: "Name D2",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "def_3",
                    name: "Name D3",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "def_4",
                    name: "Name D4",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "def_5",
                    name: "Name D5",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "def_6",
                    name: "Name D6",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "def_7",
                    name: "Name D7",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "def_8",
                    name: "Name D8",
                    value: 10,
                    levelCost: 100
                    
                }
                
                
            ],
            utility: [
                {
                    id: "utl_1",
                    name: "Name U1",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "utl_2",
                    name: "Name U2",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "utl_3",
                    name: "Name U3",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "utl_4",
                    name: "Name U4",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "utl_5",
                    name: "Name U5",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "utl_6",
                    name: "Name U6",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "utl_7",
                    name: "Name U7",
                    value: 10,
                    levelCost: 100
                    
                },
                {
                    id: "utl_8",
                    name: "Name U8",
                    value: 10,
                    levelCost: 100
                    
                }
                
                
            ]

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



