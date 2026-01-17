Ponder.tags((event) => {
  event.createTag(
    "kubejs:getting_started",
    "minecraft:stripped_oak_log",
    "树皮失踪案",
    "了解斧头耐久是怎么没的",
    [
      "minecraft:stripped_oak_log",
      "minecraft:stripped_spruce_log",
      "minecraft:stripped_birch_log",
      "minecraft:stripped_jungle_log",
      "minecraft:stripped_dark_oak_log",
      "minecraft:stripped_mangrove_log",
      "minecraft:stripped_cherry_log",
      "minecraft:stripped_crimson_stem",
      "minecraft:stripped_warped_stem",
      "minecraft:stripped_acacia_log",
      "minecraft:stripped_bamboo_block",
      "quark:stripped_azalea_log",
      "quark:stripped_ancient_log",
      "quark:stripped_blossom_log",
    ]
  );
});

Ponder.registry((event) => {
  event
    .create([
      "minecraft:stripped_oak_log",
      "minecraft:stripped_spruce_log",
      "minecraft:stripped_birch_log",
      "minecraft:stripped_jungle_log",
      "minecraft:stripped_dark_oak_log",
      "minecraft:stripped_mangrove_log",
      "minecraft:stripped_cherry_log",
      "minecraft:stripped_crimson_stem",
      "minecraft:stripped_warped_stem",
      "minecraft:wooden_axe",
      "minecraft:stone_axe",
      "minecraft:iron_axe",
      "minecraft:golden_axe",
      "minecraft:diamond_axe",
      "minecraft:netherite_axe",
      "minecraft:stripped_acacia_log",
      "minecraft:stripped_bamboo_block",
      "quark:stripped_azalea_log",
      "quark:stripped_ancient_log",
      "quark:stripped_blossom_log",
    ])
    .scene("0", "学会去皮", "kubejs:test_2", (scene, util) => {
      scene.world.setBlock([2, 1, 2], "minecraft:oak_log", true);
      scene.world.setBlock([2, 2, 2], "minecraft:oak_log", true);
      scene.world.setBlock([2, 3, 2], "minecraft:oak_log", true);
      scene.world.setBlock([2, 4, 2], "minecraft:oak_log", true);
      scene.world.setBlock([2, 5, 2], "minecraft:oak_log", true);

      scene.world.setBlock([1, 3, 0], "minecraft:oak_leaves", true);
      scene.world.setBlock([2, 3, 0], "minecraft:oak_leaves", true);
      scene.world.setBlock([3, 3, 0], "minecraft:oak_leaves", true);
      scene.world.setBlock([4, 3, 0], "minecraft:oak_leaves", true);
      scene.world.setBlock([0, 3, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([1, 3, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([2, 3, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([3, 3, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([4, 3, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([0, 3, 2], "minecraft:oak_leaves", true);
      scene.world.setBlock([1, 3, 2], "minecraft:oak_leaves", true);
      scene.world.setBlock([3, 3, 2], "minecraft:oak_leaves", true);
      scene.world.setBlock([4, 3, 2], "minecraft:oak_leaves", true);
      scene.world.setBlock([0, 3, 3], "minecraft:oak_leaves", true);
      scene.world.setBlock([1, 3, 3], "minecraft:oak_leaves", true);
      scene.world.setBlock([2, 3, 3], "minecraft:oak_leaves", true);
      scene.world.setBlock([3, 3, 3], "minecraft:oak_leaves", true);
      scene.world.setBlock([4, 3, 3], "minecraft:oak_leaves", true);
      scene.world.setBlock([0, 3, 4], "minecraft:oak_leaves", true);
      scene.world.setBlock([1, 3, 4], "minecraft:oak_leaves", true);
      scene.world.setBlock([2, 3, 4], "minecraft:oak_leaves", true);
      scene.world.setBlock([3, 3, 4], "minecraft:oak_leaves", true);
      scene.world.setBlock([4, 3, 4], "minecraft:oak_leaves", true);

      scene.world.setBlock([1, 4, 0], "minecraft:oak_leaves", true);
      scene.world.setBlock([2, 4, 0], "minecraft:oak_leaves", true);
      scene.world.setBlock([3, 4, 0], "minecraft:oak_leaves", true);
      scene.world.setBlock([4, 4, 0], "minecraft:oak_leaves", true);
      scene.world.setBlock([0, 4, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([1, 4, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([2, 4, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([3, 4, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([4, 4, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([0, 4, 2], "minecraft:oak_leaves", true);
      scene.world.setBlock([1, 4, 2], "minecraft:oak_leaves", true);
      scene.world.setBlock([3, 4, 2], "minecraft:oak_leaves", true);
      scene.world.setBlock([4, 4, 2], "minecraft:oak_leaves", true);
      scene.world.setBlock([0, 4, 3], "minecraft:oak_leaves", true);
      scene.world.setBlock([1, 4, 3], "minecraft:oak_leaves", true);
      scene.world.setBlock([2, 4, 3], "minecraft:oak_leaves", true);
      scene.world.setBlock([3, 4, 3], "minecraft:oak_leaves", true);
      scene.world.setBlock([4, 4, 3], "minecraft:oak_leaves", true);
      scene.world.setBlock([1, 4, 4], "minecraft:oak_leaves", true);
      scene.world.setBlock([2, 4, 4], "minecraft:oak_leaves", true);
      scene.world.setBlock([3, 4, 4], "minecraft:oak_leaves", true);

      scene.world.setBlock([1, 5, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([2, 5, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([3, 5, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([1, 5, 2], "minecraft:oak_leaves", true);
      scene.world.setBlock([3, 5, 2], "minecraft:oak_leaves", true);
      scene.world.setBlock([1, 5, 3], "minecraft:oak_leaves", true);
      scene.world.setBlock([2, 5, 3], "minecraft:oak_leaves", true);

      scene.world.setBlock([2, 6, 1], "minecraft:oak_leaves", true);
      scene.world.setBlock([1, 6, 2], "minecraft:oak_leaves", true);
      scene.world.setBlock([2, 6, 2], "minecraft:oak_leaves", true);
      scene.world.setBlock([3, 6, 2], "minecraft:oak_leaves", true);
      scene.world.setBlock([2, 6, 3], "minecraft:oak_leaves", true);

      scene.showBasePlate();

      scene.idle(30);

      scene.world.showSection([2, 1, 2], Facing.UP);
      scene.idle(5);
      scene.world.showSection([2, 2, 2], Facing.DOWN);
      scene.idle(4);
      scene.world.showSection([2, 3, 2], Facing.DOWN);
      scene.idle(3);
      scene.world.showSection([2, 4, 2], Facing.DOWN);
      scene.idle(2);
      scene.world.showSection([2, 5, 2], Facing.DOWN);
      scene.idle(1);

      //The first layer	
      for (let x = 0; x < 5; x++) {
        for (let z = 0; z < 5; z++) {
          if (!(x === 2 && z === 2)) {
            scene.world.showSection([x, 3, z], Facing.DOWN);
          }
          scene.idle(1);
        }
      }
      //The second layer
      for (let x = 0; x < 5; x++) {
        for (let z = 0; z < 5; z++) {
          if (!(x === 2 && z === 2)) {
            scene.world.showSection([x, 4, z], Facing.DOWN);
            scene.idle(2);
          }
        }
      }
      //The third layer
      for (let x = 1; x < 4; x++) {
        for (let z = 1; z < 4; z++) {
          if (!(x === 2 && z === 2)) {
            scene.world.showSection([x, 5, z], Facing.DOWN);
            scene.idle(3);
          }
        }
      }
      //The fourth layer
      for (let x = 1; x < 4; x++) {
        for (let z = 1; z < 4; z++) {
          scene.world.showSection([x, 6, z], Facing.DOWN);
          scene.idle(3);
        }
      }
      scene.addKeyframe();
      scene.idle(10);
      scene.text(30, "这是一颗普通的树", [0, 5, 3]); //30指定显示时间
      scene.idle(40);

      scene.addKeyframe();
      scene.world.hideSection([0, 3, 0, 4, 6, 1], Facing.NORTH);
      scene.text(40, "让我们裁掉一些多余的树叶", [0, 5, 3]);

      scene.idle(70);

      scene.addKeyframe();
      scene.overlay.showOutline("blue", {}, [2, 2, 2], 110);
      scene.text(40, "随机选择一个木头", [2, 2.5, 3]);
      scene.idle(70);

      scene.addKeyframe();
      scene
        .showControls(60, [3, 2.5, 2], "right") // 显示 60 刻，指向坐标，提示方向（向下）
        .rightClick()
        .withItem("wooden_axe");
      scene.idle(50);
      scene.world.modifyBlock(
        [2, 2, 2],
        () => Block.id("minecraft:stripped_oak_log"),
        true
      );
      scene.idle(50);
      scene.text(100, "这样你就完成了一次去皮", [2, 2.5, 3]);
    });
});
