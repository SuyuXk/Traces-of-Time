Ponder.tags((event) => {
  event.createTag(
    "kubejs:open_nether",
    "minecraft:obsidian",
    "勇往直下!",
    "那里不可睡觉!",
    ["minecraft:flint_and_steel"]
  );
});
const TICK_LENGTH = 80;
const IDLE_TICK_LENGTH = TICK_LENGTH * 0;
Ponder.registry((event) => {
  event
    .create([
      "minecraft:obsidian",
      "minecraft:flint_and_steel",
      "minecraft:fire_charge",
    ])
    .scene("nether_0", "下地狱去吧!", "kubejs:nether", (scene, util) => {
      const start = [5, 2, 6];
      const end = [2, 6, 4];
      scene.scaleSceneView(0.7);
      scene.rotateCameraY(260);
      scene.showStructure(60);
      scene.idle(20);
      scene.text(50, "看起来你已经准备好进入下界了!");
      scene.idle(60);
      scene.text(50, "不过在此之前，请先确保你有足够的装备和食物!");
      scene.idle(60);
      scene.text(50, "搭建之前，请先找到一个合适的位置进行框架搭建");
      scene.idle(60);
      scene.text(50, "这里采用最标准的搭建方式");
      scene.idle(40);
      scene.addKeyframe();
      let showSection = scene.world.showIndependentSection(
        [5, 40, 7, 2, 44, 7],
        Direction.DOWN
      ); //创建独立方块区域
      scene.world.moveSection(showSection, [0, -38, -2], 0); //绑定独立方块区域到指定位置
      scene.idle(40);
      scene.text(50, "利用你的黑曜石搭建出一个4x5的框架");
      scene.overlay.showOutline("red", {}, [2, 2, 5, 5, 2, 5], 30);
      scene.idle(40);
      scene.overlay.showOutline("blue", {}, [2, 2, 5, 2, 6, 5], 30);
      scene.idle(60);
      scene.text(50, "框架大小最小为4×5，最大为23×23");
      scene.idle(60);
      scene.text(50, "框架的内侧必须是空的，不能有任何方块");
      scene.idle(60);
      scene.text(
        50,
        "建造好黑曜石框架后，在黑曜石的内侧里用打火石或火焰弹点火",
        [5, 2, 5]
      );
      scene.addKeyframe();
      scene
        .showControls(50, [5, 2, 5], "up")
        .rightClick()
        .withItem("flint_and_steel");
      scene.idle(80);
      scene.world.setBlock([3, 3, 5], "minecraft:nether_portal", true);
      scene.world.setBlock([4, 3, 5], "minecraft:nether_portal", true);
      scene.world.setBlock([3, 4, 5], "minecraft:nether_portal", true);
      scene.world.setBlock([4, 4, 5], "minecraft:nether_portal", true);
      scene.world.setBlock([3, 5, 5], "minecraft:nether_portal", true);
      scene.world.setBlock([4, 5, 5], "minecraft:nether_portal", true);
      scene.particles
        .simple(TICK_LENGTH, "portal", start)
        .density(20)
        .area(end);
      scene.idle(IDLE_TICK_LENGTH);
      scene.idle(30);
      scene.text(50, "现在你可以进入传送门，前往下界了!");
    });
});
Ponder.registry((event) => {
  event
    .create([
      "minecraft:obsidian",
      "minecraft:flint_and_steel",
      "minecraft:fire_charge",
    ])
    .scene(
      "nether_1",
      "饱经沧桑的传送门",
      "kubejs:ruined_portal",
      (scene, util) => {
        scene.scaleSceneView(0.7);
        scene.rotateCameraY(90);
        scene.showStructure();
        const centerBlockPos = util.grid.at(7, 3, 8);
        const centerTop = util.vector.topOf(centerBlockPos);
        scene.idle(20);
        scene.text(
          50,
          "这是一个废弃传送门，你可以在主世界和下界找到它",
          [6, 6, 4]
        );
        scene.idle(60);
        scene.text(
          50,
          "值得注意的是，它们既可以直接在地面上生成，也可以在地下、水下和下界的熔岩海下生成"
        );
        scene.idle(60);
        scene.addKeyframe();
        scene.text(50, "看见旁边的箱子了吗?");
        scene.overlay.showOutline("red", {}, [7, 3, 8], 50);
        scene.idle(60);
        scene.text(50, "它通常会包含一些有用的物品，比如金锭、打火石和黑曜石");
        scene.idle(60);
        scene.text(50, "其中黑曜石在箱子里的数量通常为1-2个");
        scene.world.createItemEntity(
          centerTop.add(0, 0.5, 0),
          util.vector.of(-0.07, 0.4, 0),
          "obsidian"
        );
        scene.world.createItemEntity(
          centerTop.add(0, 0.5, 0),
          util.vector.of(0.03, 0.4, -0.07),
          "obsidian"
        );
        scene.idle(60);
        scene.addKeyframe();
        scene.text(
          50,
          "如果你有残余的黑曜石，可以将剩余的黑曜石放置在传送门的框架上(哭泣的黑曜石除外）"
        );
        scene.world.setBlock([6, 5, 5], "minecraft:obsidian", true);
        scene.idle(10);
        scene.world.setBlock([6, 6, 5], "minecraft:obsidian", true);
        scene.idle(10);
        scene.world.setBlock([6, 7, 5], "minecraft:obsidian", true);
        scene.idle(40);
        scene.text(50, "和前面一样，用打火石或火焰弹激活即可");
        scene.idle(40);
        scene
          .showControls(50, [6, 3, 7], "up")
          .rightClick()
          .withItem("flint_and_steel");
      }
    );
});
Ponder.registry((event) => {
  event
    .create("minecraft:obsidian")
    .scene("WTF", "不具备的条件", "kubejs:cao", (scene, util) => {
      scene.scaleSceneView(0.8);
      scene.showStructure();
      scene.rotateCameraY(260);
      const centerBlockPos = util.grid.at(3, 0, 7);
      const centerTop = util.vector.topOf(centerBlockPos);
      scene.world.createItemEntity(
        centerTop.add(0, 0.5, 0),
        util.vector.of(-0.07, 0, 0),
        "wheat_seeds"
      );
      scene.world.createItemEntity(
        centerTop.add(0, 0.5, 0),
        util.vector.of(0.07, 0, 0.1),
        "wheat_seeds"
      );
      scene.idle(70);
      scene.text(50, "很明显，这是不可能的");
      scene.idle(70);
    });
});
