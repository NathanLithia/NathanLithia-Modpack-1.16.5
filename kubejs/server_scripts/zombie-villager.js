onEvent('entity.spawned', event => {
	if (event.entity.type == 'minecraft:zombie_villager'){
		let NBT = event.entity.fullNBT;
		NBT.PersistenceRequired = true
		event.entity.fullNBT = NBT;
		event.entity.setHeadArmorItem('minecraft:stone_button');
	}
})