function relaxedContains (thing,array){
    for(var a of array){
      if(a==thing)return true;
   }
    return false;
};
global.blackListCheck = function(itemToTest, event, player) {
    if (itemToTest) {
        var id = itemToTest.id.toString();
        var itemBlackList = ['tconstruct:sword', 'tconstruct:cleaver', 'tconstruct:scythe', 'artifacts:everlasting_beef', 'artifacts:eternal_steak', 'artifacts:scarf_of_invisibility', 'immersiveengineering:windmill', 'immersiveengineering:watermill', 'stalwart_dungeons:tungsten_helmet', 'stalwart_dungeons:tungsten_chestplate', 'stalwart_dungeons:tungsten_leggings', 'stalwart_dungeons:tungsten_boots', 'stalwart_dungeons:warted_tungsten_helmet', 'stalwart_dungeons:warted_tungsten_chestplate', 'stalwart_dungeons:warted_tungsten_leggings', 'stalwart_dungeons:warted_tungsten_boots', 'stalwart_dungeons:chorundum_armour_helmet', 'stalwart_dungeons:chorundum_armour_chestplate', 'stalwart_dungeons:chorundum_armour_leggings', 'stalwart_dungeons:chorundum_armour_boots'];
        if (relaxedContains(id, itemBlackList)) {
            player.tell("You have Obtained an removed item, it either causes a crash or is considered OP")
            player.tell("Removed: "+id)
            itemToTest.count = 0;
            event.cancel();
        }
    }
};
events.listen("item.right_click", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("item.left_click", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("item.pickup", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("item.toss", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("item.crafted", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("item.smelted", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("item.entity_interact", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("block.place", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("block.left_click", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("block.right_click", function(event) {
    global.blackListCheck(event.item, event, event.player);
});