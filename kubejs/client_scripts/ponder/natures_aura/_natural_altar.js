onEvent('ponder.tag', event => {
    event.createTag(
        'kubejs:natures_aura',
        'naturesaura:nature_altar',
        '自然灵气',
        '充分利用周围的灵气',
        [
            'naturesaura:gold_leaf',
            'naturesaura:wood_stand',
            'naturesaura:nature_altar',
            'naturesaura:offering_table',
            'naturesaura:animal_spawner',
        ]
    );
});

onEvent('ponder.registry', event => {
    event
        .create(['naturesaura:nature_altar', 'naturesaura:gold_brick', 'naturesaura:infused_iron'])
        .scene('natural_altar', '自然祭坛', 'kubejs:grass_9x9', (scene, util) => {
            scene.showBasePlate();
            //scene.world.showSection([0, 0, 0, 9, 0, 9], Facing.up)
            scene.idle(10);
            scene.text(10, '20x 木板', [3.5, 1, 4.5]);
            let positions = [
                { x: 3, y: 0, z: 4 },
                { x: 4, y: 0, z: 5 },
                { x: 5, y: 0, z: 4 },
                { x: 4, y: 0, z: 3 },

                { x: 2, y: 0, z: 5 },
                { x: 3, y: 0, z: 6 },
                { x: 5, y: 0, z: 6 },
                { x: 6, y: 0, z: 5 },
                { x: 6, y: 0, z: 3 },
                { x: 5, y: 0, z: 2 },
                { x: 3, y: 0, z: 2 },
                { x: 2, y: 0, z: 3 },

                { x: 1, y: 0, z: 5 },
                { x: 3, y: 0, z: 7 },
                { x: 5, y: 0, z: 7 },
                { x: 7, y: 0, z: 5 },
                { x: 7, y: 0, z: 3 },
                { x: 5, y: 0, z: 1 },
                { x: 3, y: 0, z: 1 },
                { x: 1, y: 0, z: 3 },
            ];
            positions.forEach(pos => {
                //scene.world.replaceBlocks([pos.x, pos.y, pos.z], "minecraft:oak_planks", false);
                //scene.world.setBlock([pos.x, pos.y, pos.z], "minecraft:grass_block", false)
                //scene.world.hideSection([pos.x, pos.y, pos.z], Facing.down)
                scene.world.setBlock([pos.x, pos.y, pos.z], 'minecraft:oak_planks', false);
                scene.world.showSection([pos.x, pos.y, pos.z], Facing.down);
                scene.idle(2);
            });
            scene.idle(15);
            scene.addKeyframe();
            scene.text(10, '4x 鏨制石砖', [3.5, 1, 5.5]);
            let stoneChiseledPositions = [
                { x: 3, y: 0, z: 5 },
                { x: 5, y: 0, z: 5 },
                { x: 5, y: 0, z: 3 },
                { x: 3, y: 0, z: 3 },
            ];
            stoneChiseledPositions.forEach(pos => {
                scene.world.setBlock(
                    [pos.x, pos.y, pos.z],
                    'minecraft:chiseled_stone_bricks',
                    false
                );
                scene.world.showSection([pos.x, pos.y, pos.z], Facing.down);
                scene.idle(2);
            });
            scene.idle(15);
            scene.addKeyframe();
            scene.text(30, '16x 石砖', [2.5, 1, 4.5]);
            let stoneBrickPositions = [
                { x: 2, y: 0, z: 4 },
                { x: 4, y: 0, z: 6 },
                { x: 6, y: 0, z: 4 },
                { x: 4, y: 0, z: 2 },
                { x: 1, y: 0, z: 4 },
                { x: 4, y: 0, z: 7 },
                { x: 7, y: 0, z: 4 },
                { x: 4, y: 0, z: 1 },
            ];
            stoneBrickPositions.forEach(pos => {
                scene.world.setBlock([pos.x, pos.y, pos.z], 'minecraft:stone_bricks', false);
                scene.world.showSection([pos.x, pos.y, pos.z], Facing.down);
                scene.idle(1);
            });
            scene.idle(5);
            let stoneBrickPositions2 = [
                { x: 0, y: 1, z: 4 },
                { x: 4, y: 1, z: 8 },
                { x: 8, y: 1, z: 4 },
                { x: 4, y: 1, z: 0 },
                { x: 0, y: 2, z: 4 },
                { x: 4, y: 2, z: 8 },
                { x: 8, y: 2, z: 4 },
                { x: 4, y: 2, z: 0 },
            ];
            stoneBrickPositions2.forEach(pos => {
                scene.world.setBlock([pos.x, pos.y, pos.z], 'minecraft:stone_bricks', false);
                scene.world.showSection([pos.x, pos.y, pos.z], Facing.down);
                scene.idle(1);
            });
            scene.idle(20);
            scene.addKeyframe();
            scene.text(20, '8x 金色石砖', [0.5, 3, 4.5]);
            let goldenBrickPositions = [
                { x: 0, y: 3, z: 4 },
                { x: 2, y: 1, z: 6 },
                { x: 4, y: 3, z: 8 },
                { x: 6, y: 1, z: 6 },
                { x: 8, y: 3, z: 4 },
                { x: 6, y: 1, z: 2 },
                { x: 4, y: 3, z: 0 },
                { x: 2, y: 1, z: 2 },
            ];
            goldenBrickPositions.forEach(pos => {
                scene.world.setBlock([pos.x, pos.y, pos.z], 'naturesaura:gold_brick', false);
                scene.world.showSection([pos.x, pos.y, pos.z], Facing.down);
                scene.idle(2);
            });
            scene.idle(25);
            scene.addKeyframe();
            scene.text(30, '将自然祭坛放在中央', [4.5, 1, 4.5]);
            scene.world.setBlock([4, 1, 4], 'naturesaura:nature_altar', false);
            scene.world.showSection([4, 1, 4], Facing.down);
            scene.idle(20);

            //scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("east", "side"), true);
        })
        .scene('crimson_altar', '猩红祭坛', 'kubejs:crimson_altar', (scene, util) => {
            scene.showStructure();
            scene.text(20, '如果自然祭坛建在地狱，它就会变成猩红祭坛', [4.5, 1, 4.5]);

            scene.idle(30);
            scene.addKeyframe();
            scene.text(30, '20x 绯红/诡异木板', [3.5, 1, 4.5]);
            scene.idle(15);
            let positions = [
                { x: 3, y: 0, z: 4 },
                { x: 4, y: 0, z: 5 },
                { x: 5, y: 0, z: 4 },
                { x: 4, y: 0, z: 3 },

                { x: 2, y: 0, z: 5 },
                { x: 3, y: 0, z: 6 },
                { x: 5, y: 0, z: 6 },
                { x: 6, y: 0, z: 5 },
                { x: 6, y: 0, z: 3 },
                { x: 5, y: 0, z: 2 },
                { x: 3, y: 0, z: 2 },
                { x: 2, y: 0, z: 3 },

                { x: 1, y: 0, z: 5 },
                { x: 3, y: 0, z: 7 },
                { x: 5, y: 0, z: 7 },
                { x: 7, y: 0, z: 5 },
                { x: 7, y: 0, z: 3 },
                { x: 5, y: 0, z: 1 },
                { x: 3, y: 0, z: 1 },
                { x: 1, y: 0, z: 3 },
            ];
            positions.forEach(pos => {
                //scene.world.replaceBlocks([pos.x, pos.y, pos.z], "minecraft:oak_planks", false);
                //scene.world.setBlock([pos.x, pos.y, pos.z], "minecraft:grass_block", false)
                //scene.world.hideSection([pos.x, pos.y, pos.z], Facing.down)
                scene.world.setBlock([pos.x, pos.y, pos.z], 'minecraft:warped_planks', false);
                scene.world.showSection([pos.x, pos.y, pos.z], Facing.down);
            });
            scene.idle(20);
            scene.addKeyframe();
            scene.text(15, '4x 红色下界砖块', [3.5, 1, 5.5]);

            scene.idle(20);
            scene.addKeyframe();
            scene.text(15, '16x 下界砖块', [2.5, 1, 4.5]);

            scene.idle(20);
            scene.addKeyframe();
            scene.text(15, '8x 黄金下界砖', [0.5, 3, 4.5]);
        });
});
