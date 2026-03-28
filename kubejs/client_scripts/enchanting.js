Ponder.tags((event) => {
  event.createTag(
    "kubejs:enchanting",
    "minecraft:enchanting_table",
    "附魔师",
    "成为使徒...",
    [
      "minecraft:enchanting_table",
      "minecraft:chiseled_bookshelf",
      "minecraft:lapis_lazuli",
      "immersiveenchanting:ancient_book",
    ]
  );
});
Ponder.registry((event) => {
  event
    .create([
      "minecraft:chiseled_bookshelf",
      "minecraft:enchanting_table",
      "minecraft:lapis_lazuli",
      "immersiveenchanting:ancient_book",
    ])
    .scene(
      "enchanting_bookshelf",
      "附魔的奥秘",
      "kubejs:enchanting",
      (scene, util) => {
        scene.scaleSceneView(0.8);
        scene.rotateCameraY(260);
        scene.showStructure(60);
        let table = scene.world.showIndependentSectionImmediately([4, 26, 0]);
        scene.idle(60);
        scene.text(50, "这是一个附魔台");
        scene.idle(60);
        scene.text(70, "它的作用很简单，帮你的武器或盔甲添加很强力的效果");
        scene.idle(80);
        scene.text(70, "附魔需要远古典籍，你可以旅途和探索中找到它");
        scene.idle(80);
        scene.text(
          90,
          "远古典籍的出现使你不用经验也可以附魔，取而代之的是材料"
        );
        scene.idle(100);
        scene.text(60, "当你获得远古典籍后，可以将典籍放在雕刻书架上");
        scene.addKeyframe();
        scene.idle(70);
        scene.rotateCameraY(-30);
        scene.idle(60);
        scene.overlay.showOutline("red", {}, [6, 3, 0, 2, 1, 4], 90);
        scene.text(
          90,
          "雕刻书架可以放置在附魔台周围5x5的方形任意位置，包括角落"
        );
        scene.idle(100);
        scene.rotateCameraY(30);

        scene
          .showControls(50, [4, 2.5, 1.5], "up")
          .rightClick()
          .withItem("immersiveenchanting:ancient_book");
        scene.idle(20);
        scene.world.setBlocks([4, 2, 0], "minecraft:air", false);
        scene.world.moveSection(table, [0, -24, 0], 0);
        scene.idle(60);
        scene.world.createItemEntity(
          [0.5, 3, 6],
          Direction.DOWN,
          "ruuu7:lost_book"
        );
        scene.idle(20);
        scene.text(
          100,
          "关于其他问题，你可以在遗落之书上找到答案",
          [1, 2.5, 6]
        );
        scene.idle(110);
        scene.text(50, "现在，你可以开始附魔了");
      }
    );
});
Ponder.registry((event) => {
  event
    .create([
      "minecraft:anvil",
      "minecraft:grindstone",
      "minecraft:enchanting_table",
    ])
    .scene(
      "enchanting_bookshelf_2",
      "修补与祛魔",
      "kubejs:enchanting",
      (scene, util) => {
        scene.scaleSceneView(0.8);
        scene.rotateCameraY(260);
        scene.showStructure(60);
        scene.idle(60);
        scene.text(50, "看起来你的附魔出现了问题");
        scene.idle(60);
        scene.overlay.showOutline("red", {}, [0, 1, 5], 70);
        scene.text(70, "你可以尝试使用砂轮来去除你装备的附魔", [0, 1.5, 6]);
        scene.idle(80);
        scene.text(60, "你如果想保留附魔书，可以使用祛魔台");
        scene.idle(70);
        scene.overlay.showOutline("blue", {}, [0, 1, 4], 90);
        scene.text(
          90,
          "通过祛魔台祛魔出来的附魔书可以使用铁砧来附魔",
          [0, 1.5, 5]
        );
      }
    );
});
