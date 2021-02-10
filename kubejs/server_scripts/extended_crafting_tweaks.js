onEvent('recipes', event => {

  //Ultimate Ingot
  event.custom({
    "type": "powah:energizing",
    "ingredients": [
    {
      "item": "minecraft:netherite_ingot"
    },
    {
      "tag": "forge:ingots/terrasteel"
    },
    {
      "tag": "forge:ingots/refined_obsidian"
    },
    {
      "item": "mysticalagradditions:insanium_ingot"
    },
    {
      "item": "extendedcrafting:enhanced_ender_ingot"
    },
    {
      "item": "extendedcrafting:crystaltine_ingot"
    }
    ],
    "energy": 10000000,
    "result": {
    "item": "extendedcrafting:the_ultimate_ingot",
    "count": 1
    }
  })

  //Enhanced Ender Ingot
  event.remove({id: 'extendedcrafting:enhanced_ender_ingot'})
  event.recipes.thermal.smelter('extendedcrafting:enhanced_ender_ingot', [Item.of('thermal:enderium_ingot', 8), 'extendedcrafting:ender_star'])

  //Enhanced Ender Ingot
  event.remove({id: 'extendedcrafting:crystaltine_ingot'})
  event.recipes.thermal.smelter('extendedcrafting:crystaltine_ingot', [Item.of('thermal:lumium_ingot', 8), Item.of('minecraft:diamond', 16), Item.of('minecraft:emerald', 16)])

  //Ender Star
  event.remove({id: 'extendedcrafting:ender_star'})  
  event.shaped('extendedcrafting:ender_star', [
    ' E ',
    'ESE',
    ' E '
  ], {
    E: 'cyclic:ender_eye_reuse',
    S: 'minecraft:nether_star'
  })

})