Ponder.tags((event) => {
  event.createTag(
    "kubejs:beacon",
    "minecraft:beacon",
    "突破天际的光线",
    "记住!不要挖脚下",
    [
      "minecraft:beacon",
      "minecraft:iron_block",
      "minecraft:gold_block",
      "minecraft:diamond_block",
      "minecraft:netherite_block",
      "minecraft:emerald_block",
    ]
  );
});
Ponder.registry((event) => {
  event
    .create([
      "minecraft:beacon",
      "minecraft:iron_block",
      "minecraft:gold_block",
      "minecraft:diamond_block",
      "minecraft:netherite_block",
      "minecraft:emerald_block",
    ])
    .scene("beacon", "射穿世界的一束光", "kubejs:beacon", (scene, util) => {
      scene.showBasePlate();
      scene.idle(20);
      scene.text(50, "在开始搭建信标之前，需要找到一个较为平坦的地方");
      scene.idle(60);
      scene.text(50, "当然，动手挖一片区域出来也是一件好事");
      scene.idle(60);
      for (let x = 0; x < 6; x++) {
        for (let z = 0; z < 6; z++) {
          scene.world.showSection([x, 1, z], Facing.DOWN);
        }
        scene.idle(1);
      }
      scene.idle(20);
      scene.addKeyframe();
      scene.text(
        120,
        "这里采用标准的5x5信标基座,信标基座可以由铁块、金块、绿宝石块、钻石块或下界合金块组成",
        [2.5, 1, 2.5]
      );
      scene.overlay.showOutline("red", {}, [1, 1, 1, 5, 1, 1], 120);
      scene.overlay.showOutline("blue", {}, [1, 1, 1, 1, 1, 5], 120);
      scene.idle(130);
      scene.addKeyframe();
      scene.text(50, "继续向上搭建一个3x3的基座");
      for (let x = 0; x < 5; x++) {
        for (let z = 0; z < 5; z++) {
          scene.world.showSection([x, 2, z], Facing.DOWN);
        }
        scene.idle(2);
      }
      scene.idle(60);
      scene.addKeyframe();
      scene.text(50, "接下来，我们在蓝色标记点放置信标");
      scene.overlay.showOutline("blue", {}, [3, 3, 3], 50);
      scene.idle(60);
      scene.world.showSection([3, 3, 3], Facing.DOWN);
      scene.idle(30);
      scene.text(50, "信标正确放置后会产生一束光柱，射向天空");
      scene.idle(70);
      scene.text(50, "我们可以通过信标的界面来选择增益效果");
      scene.idle(70);
      scene.text(50, "信标搭建越大，可选的增益效果也就越多(最大为4个增益)");
      scene.idle(60);
      scene.addKeyframe();
      scene.world.hideSection([1, 1, 1, 5, 1, 5], Facing.NORTH);
      scene.idle(3);
      scene.world.hideSection([2, 2, 2, 4, 2, 4], Facing.SOUTH);
      scene.idle(2);
      scene.world.hideSection([3, 3, 3], Facing.UP);
      scene.rotateCameraY(180);
      scene.idle(20);
      let showSection = scene.world.showIndependentSection(
        [2, 4, 2, 4, 4, 4],
        Direction.DOWN
      ); //创建独立方块区域
      scene.world.moveSection(showSection, [0, -3, 0], 0); //绑定独立方块区域到指定位置
      scene.idle(40);
      scene.text(50, "信标基座也可以由不同的矿物方块组成");
      scene.idle(30);
      let showSection2 = scene.world.showIndependentSection(
        [2, 3, 2, 4, 3, 4],
        Direction.DOWN
      );
      scene.world.moveSection(showSection2, [0, -1, 0], 0);
      scene.idle(40);
      scene.text(50, "但信标本身只能放置在基座的中心位置");
      scene.overlay.showOutline("red", {}, [3, 2, 3], 50);
      scene.idle(70);
      scene.text(50, "同样，3x3的最小基座也是可以激活信标的");
    });
});
