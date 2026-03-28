Ponder.registry((event) => {
  event
    .create(["disenchanting_table:disenchanting_table", "minecraft:anvil"])
    .scene(
      "dis_enchanting",
      "祛魔师",
      "kubejs:dis_enchanting",
      (scene, util) => {
        scene.scaleSceneView(1);
        scene.rotateCameraY(260);
        scene.showStructure(60);
        scene.idle(60);
        scene.text(50, "这是一个祛魔台");
        scene.idle(60);
        scene.text(70, "它的作用很简单，帮你的武器或盔甲提取出附魔效果");
        scene.idle(80);
        scene.text(70, "祛魔需要书，祛魔后会把附魔转移到书上");
        scene.idle(80);
        scene.text(70, "要想使用也很简单，放置祛魔台即可");
        scene.idle(80);
        scene.addKeyframe();
        scene.text(70, "祛魔后会损失小部分经验，请谨慎使用");
        scene.idle(80);
        scene.world.createItemEntity(
          [1, 2, 0.3],
          Direction.DOWN,
          "minecraft:diamond_pickaxe"
        );
        scene.idle(10);
        scene.world.createItemEntity(
          [2, 2, 0.3],
          Direction.DOWN,
          "minecraft:enchanted_book"
        );
        scene.idle(20);
        scene.overlay.showOutline("red", {}, [1, 1, 0], 120);
        scene.text(
          120,
          "你可以将提取出来的附魔书放在铁砧上与武器或装备结合",
          [1, 1.5, 1]
        );
        scene.idle(130);
      }
    );
});
