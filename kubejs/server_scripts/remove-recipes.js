events.listen('recipes', function (event) {
    //event.remove({}) // Deletes all recipes
    //event.remove({id: 'minecraft:glowstone'}) // Removes data/minecraft/recipes/glowstone.json
    //event.remove({input: '#forge:dusts/redstone'}) // Removes all recipes where input is Redstone Dust tag
    //event.remove({output: '#minecraft:wool'}) // Removes all recipes where output is Wool tag
    //event.remove({mod: 'quartzchests'}) // Remove all recipes from Quartz Chests mod
    //event.remove({type: 'minecraft:campfire_cooking'}) // Remove all campfire cooking recipes
  
    //Planned to be obtainable via quests.
    event.remove({id: 'naturescompass:naturescompass'})
    event.remove({id: 'structurescompass:structures_compass'})
    //Valhesia overwriting planks recipe (notreepunching).
    event.remove({id: 'valhelsia_structures:oak_post'})
    event.remove({id: 'valhelsia_structures:spruce_post'})
    event.remove({id: 'valhelsia_structures:birch_post'})
    event.remove({id: 'valhelsia_structures:jungle_post'})
    event.remove({id: 'valhelsia_structures:acacia_post'})
    event.remove({id: 'valhelsia_structures:dark_oak_post'})
    event.remove({id: 'valhelsia_structures:warped_post'})
    event.remove({id: 'valhelsia_structures:crimson_post'})
  
    //Remove IE Power Gen Items in favor of create engines
    event.remove({id: 'immersiveengineering:windmill'})
    event.remove({id: 'immersiveengineering:watermill'})
  })