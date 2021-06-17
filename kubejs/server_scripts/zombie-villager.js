onEvent('entity.spawned', event => {
	if (event.entity.type == 'minecraft:zombie_villager'){
		//console.log(Object.keys(event.entity));
		event.entity.setHeadArmorItem('minecraft:stone_button');
		event.entity.setCustomName('§aZombie Villager');
	}
	if (event.entity.type == 'minecraft:villager'){
		event.entity.setCustomName(null);
	}
})