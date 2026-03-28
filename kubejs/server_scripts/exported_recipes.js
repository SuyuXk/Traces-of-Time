ServerEvents.recipes((event) => {
  event.shaped(Item.of("minecraft:enchanting_table"), [" A ", "BCB", "CCC"], {
    A: "immersiveenchanting:ancient_book",
    B: "minecraft:diamond",
    C: "minecraft:obsidian",
  });
});
ServerEvents.recipes((event) => {
  event.remove({ output: "minecraft:enchanting_table" });
});
