//Adds Tags to items that should be Curios?
//#curios:necklace
onEvent('item.tags', tag => {
    tag.add("curios:necklace", "fins:empty_charm")
    tag.add("curios:necklace", "fins:spindly_sapphire_charm")
    tag.add("curios:necklace", "fins:spindly_pearl_charm" )
    tag.add("curios:necklace", "fins:spindly_ruby_charm")
    tag.add("curios:necklace", "fins:spindly_amber_charm")
    tag.add("curios:necklace", "fins:spindly_emerald_charm")
})