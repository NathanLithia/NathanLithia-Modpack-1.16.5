// This script adds items on first time player joins, checking gamestages

// Listen to player login event
events.listen('player.logged_in', function (event) {
  // Check if player doesn't have "starting_items" gamestage yet
  if (!event.hasGameStage('starting_items')) {
    // Add the gamestage
    event.addGameStage('starting_items')
    // Give some items to player
    event.player.give('notreepunching:macuahuitl')
    event.player.give('ftbquests:book')
    event.player.give({ item: 'pamhc2foodextended:hamandcheesesandwichitem', count: 16 })
    event.player.give({ item: 'toughasnails:purified_water_bottle', count: 3})
  }
})