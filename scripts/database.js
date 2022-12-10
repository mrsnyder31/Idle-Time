const   upgrades = {

            attack: [
                {
                    id: 1,
                    name: "Name A1",
                    val_1: 10,
                    
                },
                {
                    id: 2,
                    name: "Name A2",
                    val_2: 10,
                    
                },
                {
                    id: 3,
                    name: "Name A3",
                    val_3: 10,
                    
                },
                {
                    id: 4,
                    name: "Name A4",
                    val_4: 10,
                    
                },
                {
                    id: 5,
                    name: "Name A5",
                    val_5: 10,
                    
                },
                {
                    id: 6,
                    name: "Name A6",
                    val_6: 10,
                    
                },
                {
                    id: 7,
                    name: "Name A7",
                    val_7: 10,
                    
                },
                {
                    id: 8,
                    name: "Name A8",
                    val_8: 10,
                    
                }
                
                
            ],
        
            defense: [
                {
                    id: 1,
                    name: "Name B1",
                    val_1: 10,
                    
                },
                {
                    id: 2,
                    name: "Name B2",
                    val_2: 10,
                    
                },
                {
                    id: 3,
                    name: "Name B3",
                    val_3: 10,
                    
                },
                {
                    id: 4,
                    name: "Name B4",
                    val_4: 10,
                    
                },
                {
                    id: 5,
                    name: "Name B5",
                    val_5: 10,
                    
                },
                {
                    id: 6,
                    name: "Name B6",
                    val_6: 10,
                    
                },
                {
                    id: 7,
                    name: "Name B7",
                    val_7: 10,
                    
                },
                {
                    id: 8,
                    name: "Name B8",
                    val_8: 10,
                    
                }
                
                
            ],
            utility: [
                {
                    id: 1,
                    name: "Name U1",
                    val_1: 10,
                    
                },
                {
                    id: 2,
                    name: "Name U2",
                    val_2: 10,
                    
                },
                {
                    id: 3,
                    name: "Name U3",
                    val_3: 10,
                    
                },
                {
                    id: 4,
                    name: "Name U4",
                    val_4: 10,
                    
                },
                {
                    id: 5,
                    name: "Name U5",
                    val_5: 10,
                    
                },
                {
                    id: 6,
                    name: "Name U6",
                    val_6: 10,
                    
                },
                {
                    id: 7,
                    name: "Name U7",
                    val_7: 10,
                    
                },
                {
                    id: 8,
                    name: "Name U8",
                    val_8: 10,
                    
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




