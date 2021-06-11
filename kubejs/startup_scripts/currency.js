// Listen to item registry event
onEvent('item.registry', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('ten_note').displayName('$10 Note')
  event.create('twenty_note').displayName('$20 Note')
  event.create('fifty_note').displayName('$50 Note')
  event.create('hundred_note').displayName('$100 Note')
})