Ponder.tags((event) => {
  event.createTag(
    "kubejs:decoration",
    "minecraft:oak_planks",
    "地板の摸鱼工位",
    "方块们摸鱼被你逮到了",
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
      "minecraft:stripped_acacia_log",
      "minecraft:stripped_bamboo_block",
      "quark:stripped_azalea_log",
      "quark:stripped_ancient_log",
      "quark:stripped_blossom_log",
    ])
    .scene("1", "大号的棋盘?", "kubejs:stripped_oak_1", (scene, util) => {
      for (let x = 0; x < 7; x++) {
        for (let z = 0; z < 7; z++) {
          scene.world.showSection([x, 0, z], Facing.DOWN);
        }
        scene.idle(3);
      }
      scene.addKeyframe();
      scene.idle(30);
      scene.text(50, "这是一种有规律地板的装饰方法", [3, 0, 6]);
      scene.addKeyframe();
      scene.idle(80);
      scene.text(
        100,
        "一般采用2x2的去皮木头和2x2的木头以交替的方式去排列",
        [3, 0, 6]
      );
      scene.overlay.showOutline("red", {}, [4, 0, 4, 5, 0, 5], 100);
      scene.overlay.showOutline("green", {}, [2, 0, 4, 3, 0, 5], 100);
      scene.addKeyframe();
      scene.idle(120);
      scene.text(70, "因此,这类装饰就会显得格外舒适", [3, 0, 6]);
    });
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
      "minecraft:stripped_acacia_log",
      "minecraft:stripped_bamboo_block",
      "quark:stripped_azalea_log",
      "quark:stripped_ancient_log",
      "quark:stripped_blossom_log",
    ])
    .scene("2", "去皮纹路", "kubejs:stripped_oak_2", (scene, util) => {
      for (let x = 0; x < 7; x++) {
        for (let z = 0; z < 7; z++) {
          scene.world.showSection([x, 0, z], Facing.DOWN);
        }
        scene.idle(3);
      }
      scene.addKeyframe();
      scene.idle(30);
      scene.text(50, "这是一种单一且好看的装饰方法", [3, 0, 6]);
      scene.addKeyframe();
      scene.idle(80);
      scene.text(100, "通过对去皮木头使用不同朝向去交替排列", [3.5, 0, 6]);
      scene.overlay.showOutline("red", {}, [3, 0, 3, 4, 0, 4], 100);
      scene.overlay.showOutline("green", {}, [3, 0, 5, 4, 0, 5], 100);
      scene.addKeyframe();
      scene.idle(120);
      scene.text(70, "看着像虎皮蛋糕对吧,因此这类装饰十分注重搭配", [3, 0, 6]);
    });
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
      "minecraft:stripped_acacia_log",
      "minecraft:stripped_bamboo_block",
      "quark:stripped_azalea_log",
      "quark:stripped_ancient_log",
      "quark:stripped_blossom_log",
    ])
    .scene("3", "回字地板", "kubejs:stripped_oak_3", (scene, util) => {
      for (let x = 0; x < 7; x++) {
        for (let z = 0; z < 7; z++) {
          scene.world.showSection([x, 0, z], Facing.DOWN);
        }
        scene.idle(3);
      }
      scene.addKeyframe();
      scene.idle(30);
      scene.text(50, "这是一种较为复杂的装饰方法", [3, 0, 6]);
      scene.addKeyframe();
      scene.idle(80);
      scene.text(100, "首先要使用去皮木头摆出“回字”形", [1, 1, 4.5]);
      scene.overlay.showOutline("red", {}, [1, 0, 2, 2, 0, 2], 100);
      scene.overlay.showOutline("green", {}, [3, 0, 2, 3, 0, 3], 100);
      scene.overlay.showOutline("blue", {}, [3, 0, 4, 2, 0, 4], 100);
      scene.overlay.showOutline("white", {}, [1, 0, 4, 1, 0, 3], 100);
      scene.addKeyframe();
      scene.idle(130);
      scene.text(
        100,
        "然后在回字形的中间摆放朝向为上的去皮原木",
        [2.5, 1, 3.5]
      );
      scene.overlay.showOutline("output", {}, [2, 0, 3], 100);
      scene.addKeyframe();
      scene.idle(130);
      scene.text(70, "这类装饰虽然复杂，但也有一丝优雅的气息", [3, 0, 6]);
    });
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
      "minecraft:stripped_acacia_log",
      "minecraft:stripped_bamboo_block",
      "quark:stripped_azalea_log",
      "quark:stripped_ancient_log",
      "quark:stripped_blossom_log",
    ])
    .scene("4", "三!六!九!拼法", "kubejs:stripped_oak_4", (scene, util) => {
      for (let x = 0; x < 7; x++) {
        for (let z = 0; z < 7; z++) {
          scene.world.showSection([x, 0, z], Facing.DOWN);
        }
        scene.idle(3);
      }
      scene.addKeyframe();
      scene.idle(30);
      scene.text(50, "这是采用现实生活的一种装饰方法", [3, 0, 6]);
      scene.addKeyframe();
      scene.idle(80);
      scene.text(100, "在此之前你得先找到规律", [3, 1, 4.5]);
      scene.overlay.showOutline("red", {}, [2, 0, 1, 2, 0, 3], 100);
      scene.overlay.showOutline("green", {}, [3, 0, 2, 3, 0, 4], 100);
      scene.overlay.showOutline("blue", {}, [4, 0, 3, 4, 0, 5], 100);
      scene.addKeyframe();
      scene.idle(250);
      scene.text(50, "怎么样?看懂了吗");
      scene.addKeyframe();
      scene.idle(70);
      scene.text(100, "如果看不懂也没关系,只要记住这就是三六九拼法就行了");
    });
});
