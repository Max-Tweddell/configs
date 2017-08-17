const roleHarvester = require('./role.harvester');
const creepFactory = require('./newCreep')

module.exports.loop = () => {
    creepFactory.run()
    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
}