function relaxedContains (thing,array){
    for(var a of array){
      if(a==thing)return true;
   }
    return false;
};
global.blackListCheck = function(itemToTest, event, player) {
    if (itemToTest) {
        var id = itemToTest.id.toString();
        var itemBlackList = [];
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