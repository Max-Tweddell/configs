const newCreep = {
    run :() => {
    if (Game.spawns['Spawn1'].energy >=200) {
        Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], 'Harvester' + Math.random())
    }
        
    }
        
}
module.exports = newCreep