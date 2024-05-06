var parts = [
	//this list is used to label parts the metal tier
	'ingot',
	//'gear',
	'dust',
	//'plate',
	//'rod',
	//'wire',
	//'nugget',
	//'storage_block',
]

var mods = [
	//'allomancy',
	'kubejs',
	'thermal',
	'create',
	'minecraft',
	//'malum',
	'tconstruct',
	'mythicbotany',
	//'mna',
	//'createbigcannons',
	'forbidden_arcanus',
	'extendedcrafting',
	'pneumaticcraft',
	'mekanism',
	'chemlib',
	'biggerreactors',
	'beyond_earth',
	'elementalcraft',
	'lazierae2',
]

var smeltingList = [
	'熔炉', //占位
	'熔炉',
	'熔铸炉',
	'电弧炉',
	'高炉',
	'高炉>2000热量',
	'高炉>3000热量',
	'高炉>4000热量',
	'高炉>5000热量',
]

var gradeLetter = [
	`G`, //占位
	`F`,
	`E`,
	`D`,
	`C`,
	`B`,
	`A`,
]

var gradeLetterColor = [
	Text.gray(`[G]`), //占位
	Text.darkGray(`[F]`),
	Text.white(`[E]`),
	Text.green(`[D]`),
	Text.blue(`[C]`),
	Text.lightPurple(`[B]`),
	Text.gold(`[A]`),
]

//加工数量
global.refiningMultiplier = [
	1, //占位
	2,
	4,
	8,
	16,
	32,
	64,
]

// 矿物处理流程
var OreProcessing = {
	Raw: '粗矿',
	Crushed: '粉碎',
	Chunk: '碎块',
	Lump: '团块',
	Leached: '浸出物',
	Deposit: '沉积物',
	Crystal: '结晶',
	Grit: '矿砂',
	Fine_dust: '细矿粉',
	Washed: '洗涤',
	Purified: '纯净',
	Crumbled: '细屑',
	Cluster: '矿簇',
	Brick: '砖块',
	Infused: '聚合物',
	Shard: '碎片',
	Undefined: '未确定',
}

var OreFunction = {
	iron: '铁',
	gold: '金',
	copper: '铜',
	zinc: '锌',
	chromium: '铬',
	draconium: '龙',
	tin: '锡',
	manganese: '镁',
	cobalt: '钴',
	uranium: '铀',
	platinum: '铂',
	orichalcum: '山铜',
	adamantium: '精金',
	neodymium: '钕',
	uru: '乌鲁',
	mithril: '秘银',
	rune: '符石',
	nickel: '镍',
	aluminum: '铝',
	magnesium: '镁',
	palladium: '钯',
	ostrum: '紫金',
	titanium: '钛',
	tungsten: '钨',
	iridium: '铱',
	vanadium: '钒',
	silver: '银',
	osmium: '锇',
	lead: '铅',
	thorium: '钍',
	hydrogen: '氢',
	calorite: '耐热金属',
	vibranium: '振金',
	desh: '戴斯',
	oxygen: '氧气',
	mercury: '水星',
	imortite: '不朽石',
	potentium: '蕴能素',
	kharaxium: '哈克斯',
	jimmium: '吉姆',
	densite: '密度',
	vincyte: '文赛特',
	undefined: '未确定',
}

//将第一个词转化为字母
const nameUpper = name => {
	if (name != null) {
		return name.charAt(0).toUpperCase() + name.slice(1)
	} else {
		return 'null'
	}
}

var oreProcessingPartList = []
global.oreProcessingParts.forEach(part => {
	oreProcessingPartList.push(nameUpper(part.name))
})

var oreRefiningPartList = []
global.oreRefiningParts.forEach(part => {
	oreRefiningPartList.push(nameUpper(part.name))
})

var partColor = [
	'§f', //原矿
	'§8',
	'§f',
	'§a',
	'§9',
	'§d',
	'§6',
]

onEvent('client.generate_assets', event => {
	global.newMaterialParts.forEach(item => {
		if (item.ore) {
			global.oreProcessingParts.forEach(part => {
				if (part.name != 'grit') {
					//根据等级给矿石名称着色
					if (
						Item.of(`kubejs:${part.name}_${item.material}`) !=
						null
					) {
						event.addLang(
							`item.kubejs.${part.name}_${item.material}`,
							`${
								partColor[part.grade]
							}${global.displayNameFunction(
								item.material,
								item.ore_name,
								part.prefix,
								part.suffix
							)}`
						)
					}
					if (
						Item.of(`create:crushed_raw_${item.material}`) !=
							null &&
						part.name == 'crushed'
					) {
						event.addLang(
							`item.create.crushed_raw_${item.material}`,
							`${
								partColor[part.grade]
							}${global.displayNameFunction(
								item.material,
								item.ore_name,
								part.prefix,
								part.suffix
							)}`
						)
					}
				}
			})
		}
	})
})

onEvent('item.tooltip', tooltip => {
	tooltip.addAdvanced('multiblocked:symbol', (item, advanced, text) => {
		text.add(1, [Text.aqua('这是第一条工具提示，防止有时会出现问题')])
	})
	//Multiblocked Tooltips 多方块提示
	tooltip.addAdvanced(`multiblocked:energy_input_mk1`, (item, advanced, text) => {
		text.add(1, [Text.of('最大传输量: ').gold(), Text.of('16,000').green()])
	})
	tooltip.addAdvanced(`multiblocked:energy_input_mk2`, (item, advanced, text) => {
		text.add(1, [Text.of('最大传输量: ').gold(), Text.of('128,000').green()])
	})
	tooltip.addAdvanced(`multiblocked:energy_input_mk3`, (item, advanced, text) => {
		text.add(1, [Text.of('最大传输量: ').gold(), Text.of('1,024,000').green()])
	})

	//Battie tooltips
	global.batteryItems.forEach((item, index) => {
		let storage = global.batteryStorage[index].toLocaleString()
		console.log(item + ' ' + storage)
		tooltip.addAdvanced(`kubejs:${item}_empty`, (item, advanced, text) => {
			text.add(1, [Text.of(`(0/${storage})`).red()])
		})
		tooltip.addAdvanced(`kubejs:${item}_full`, (item, advanced, text) => {
			text.add(1, [Text.of(`(${storage})`).green()])
		})
	})

	//Misc tooltips 杂项提示
	tooltip.addAdvanced('forbidden_arcanus:orb_of_temporary_flight', (item, advanced, text) => {
		text.add(2, [Text.of('可在末地城的箱子中找到').aqua()])
	})
	tooltip.addAdvanced('forbidden_arcanus:blood_test_tube', (item, advanced, text) => {
		text.add(1, [
			Text.red('使用'),
			Text.gold('神秘匕首'),
			Text.red('杀死生物可以储存血'),
		])
	})

	//AE2 Additions 应用能源扩展
	var ae2aLoaded = Platform.isLoaded('ae2additions')
	if (ae2aLoaded) {
		tooltip.addAdvanced('ae2additions:pattern_provider_2th', (item, advanced, text) => {
			text.add(1, [Text.of('可容纳 18 种样板').lightPurple()])
			text.add(2, [Text.of('仅在高级样板管理终端上显示').red()])
		})
		tooltip.addAdvanced('ae2additions:pattern_provider_3th', (item, advanced, text) => {
			text.add(1, [Text.of('可容纳 27 种样板').lightPurple()])
			text.add(2, [Text.of('仅在高级样板管理终端上显示').red()])
		})
		tooltip.addAdvanced('ae2additions:pattern_provider_4th', (item, advanced, text) => {
			text.add(1, [Text.of('可容纳 36 种样板').lightPurple()])
			text.add(2, [Text.of('仅在高级样板管理终端上显示').red()])
		})
		tooltip.addAdvanced(
			'ae2additions:part_pattern_provider_2th',
			(item, advanced, text) => {
				text.add(1, [Text.of('可容纳 18 种样板').lightPurple()])
				text.add(2, [Text.of('仅在高级样板管理终端上显示').red()])
			}
		)
		tooltip.addAdvanced(
			'ae2additions:part_pattern_provider_3th',
			(item, advanced, text) => {
				text.add(1, [Text.of('可容纳 27 种样板').lightPurple()])
				text.add(2, [Text.of('仅在高级样板管理终端上显示').red()])
			}
		)
		tooltip.addAdvanced(
			'ae2additions:part_pattern_provider_4th',
			(item, advanced, text) => {
				text.add(1, [Text.of('可容纳 36 种样板').lightPurple()])
				text.add(2, [Text.of('仅在高级样板管理终端上显示').red()])
			}
		)
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////// COIL TIPS NEED TO MAKE CHANGES MANUALLY HERE THERE AND EVERYWHERE (aka ore_processing) ///////////////

	let coilHeatValues = [
		{
			name: 'white_alloy',
			heat: 100,
		},
		{
			name: 'desh',
			heat: 200,
		},
		{
			name: 'tungsten',
			heat: 300,
		},
		{
			name: 'adamantium',
			heat: 400,
		},
		{
			name: 'vibranium',
			heat: 1000,
		},
	]
	coilHeatValues.forEach(coil => {
		tooltip.addAdvanced(`kubejs:${coil.name}_coil`, (item, advanced, text) => {
			text.add(1, [
				Text.white('每个线圈的 EBF 发热量：'),
				Text.red(`${coil.heat}`),
			])
		})
	})

	/////////// I really should figure out a way to handle these through the master list ///////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	global.newMaterialParts.forEach(item => {
		/*
		//Allomantic Tooltips for flakes
		if (item.allomancy != null) {
			console.log(`${item.material} is allomantic`)
			let allomancyToolTip = item.allomancy
			let feruchemyToolTip = item.feruchemy
			tooltip.addAdvanced(
				`allomancy:${item.material}_flakes`,
				(item, advanced, text) => {
					if (!tooltip.shift) {
						text.add(1, [
							Text.of('按住').gold(),
							Text.of('Shift').aqua(),
							Text.of('以查看镕金术用法').gold(),
						])
					} else {
						text.add(1, Text.aqua(allomancyToolTip))
					}
					if (!tooltip.ctrl) {
						text.add(2, [
							Text.of('按住').gold(),
							Text.of('Ctrl').green(),
							Text.of('以查看藏金术用法').gold(),
						])
					} else {
						text.add(2, Text.green(feruchemyToolTip))
					}
				}
			)
		}*/

		// 添加金属等级标签
		if (item.type == 'base_metal') {
			mods.forEach(mod => {
				parts.forEach(part => {
					if (mod == 'pneumaticcraft' || mod == 'mekanism') {
						if (
							Item.of(
								`${mod}:${part}_${item.material}`
							) != null
						)
							tooltip.add(
								`${mod}:${part}_${item.material}`,
								item.tier + `级` + `金属`
							)
					} else if (mod == 'naturesaura') {
						if (Item.of(`${mod}:${item.material}`) != null)
							tooltip.add(
								`${mod}:${item.material}`,
								item.tier + `级` + `金属`
							)
					} else {
						if (
							Item.of(
								`${mod}:${item.material}_${part}`
							) != null
						)
							tooltip.add(
								`${mod}:${item.material}_${part}`,
								item.tier + `级` + `金属`
							)
					}
				})
			})
		} else if (item.type == 'alloy') {
			// 添加合金等级标签
			mods.forEach(mod => {
				parts.forEach(part => {
					if (mod == 'pneumaticcraft' || mod == 'mekanism') {
						if (
							Item.of(
								`${mod}:${part}_${item.material}`
							) != null
						)
							tooltip.add(
								`${mod}:${part}_${item.material}`,
								item.tier + `级` + `合金`
							)
					} else if (mod == 'naturesaura') {
						if (Item.of(`${mod}:${item.material}`) != null)
							tooltip.add(
								`${mod}:${item.material}`,
								item.tier + `级` + `合金`
							)
					} else {
						if (
							Item.of(
								`${mod}:${item.material}_${part}`
							) != null
						)
							tooltip.add(
								`${mod}:${item.material}_${part}`,
								item.tier + `级` + `合金`
							)
					}
				})
			})
		} else if (item.type == 'rare_metal') {
			// 添加稀有金属等级标签
			mods.forEach(mod => {
				parts.forEach(part => {
					if (mod == 'pneumaticcraft' || mod == 'mekanism') {
						if (
							Item.of(
								`${mod}:${part}_${item.material}`
							) != null
						)
							tooltip.add(
								`${mod}:${part}_${item.material}`,
								item.tier + `级` + `稀有金属`
							)
					} else if (mod == 'naturesaura') {
						if (Item.of(`${mod}:${item.material}`) != null)
							tooltip.add(
								`${mod}:${item.material}`,
								item.tier + `级` + `稀有金属`
							)
					} else {
						if (
							Item.of(
								`${mod}:${item.material}_${part}`
							) != null
						)
							tooltip.add(
								`${mod}:${item.material}_${part}`,
								item.tier + `级` + `稀有金属`
							)
					}
				})
			})
		}
		//添加矿石加工信息
		if (item.ore) {
			//额外工具提示
			if (item.type != 'compound_ore') {
				tooltip.addAdvanced(
					`kubejs:grit_${item.material}`,
					(items, advanced, text) => {
						text.add(1, [
							Text.of(`金属等级：`).white(),
							Text.of(`${item.tier}`).gold(),
						])
						text.add(2, [
							Text.white(`可熔炼于：`),
							Text.yellow(
								`${nameUpper(
									smeltingList[item.tier]
								)}`
							),
						])
					}
				)
			} else {
				tooltip.addAdvanced(
					`kubejs:grit_${item.material}`,
					(items, advanced, text) => {
						text.add(1, [
							Text.of(`金属等级：`).white(),
							Text.of(`${item.tier}`).gold(),
						])
						text.add(2, [
							Text.white(`可以熔炼为：`),
							Text.gold(
								`${item.trans_components[0]}`
							),
						])
					}
				)
			}

			if (item.tier <= 1) {
				if (item.type == 'compound_ore') {
					tooltip.addAdvanced(
						`kubejs:fragment_${item.material}`,
						(items, advanced, text) => {
							text.add(1, [
								Text.of(`金属等级：`).white(),
								Text.of(`${item.tier}`).gold(),
							])
							text.add(2, [
								Text.white(`可以熔炼为： `),
								Text.gold(
									`${nameUpper(
										item.components[0]
									)} 粒`
								),
								Text.white(`或与原矿石混合`),
							])
						}
					)
				} else {
					tooltip.addAdvanced(
						`kubejs:fragment_${item.material}`,
						(items, advanced, text) => {
							text.add(1, [
								Text.of(`金属等级：`).white(),
								Text.of(`${item.tier}`).gold(),
							])
							text.add(2, [
								Text.white(`可熔炼或合成原矿`),
							])
						}
					)
				}
			} else {
				tooltip.addAdvanced(
					`kubejs:fragment_${item.material}`,
					(items, advanced, text) => {
						text.add(1, [
							Text.of(`金属等级：`).white(),
							Text.of(`${item.tier}`).gold(),
						])
						text.add(2, [Text.white(`放入原矿进行进一步加工`)])
					}
				)
			}
			////////////////////////////////////////////////
			//											                     //
			//			               加工提示	                 	   //
			//											                    //
			////////////////////////////////////////////////

			global.oreProcessingParts.forEach((part, index) => {
				if (item.type != 'compound_ore') {
					console.log(part.prefix + item.material + part.suffix)
					//red = error 错误
					//yellow = smelting 冶炼
					//green = processing 加工
					//aqua = refining 精炼
					//第一步, 生成工具提示
					let smeltingFunction = tier => {
						let smeltingTooltip = ''
						if (tier - 1 > part.grade && part.name != 'grit') {
							smeltingTooltip =
								Text.of(
									`必须进一步加工冶炼或精炼`
								).red()
						} else {
							smeltingTooltip = [
								Text.of(`可冶炼于: `).white(),
								Text.of(
									`${smeltingList[tier]}`
								).yellow(),
							]
						}
						return smeltingTooltip
					}
					let smeltingDashFunction = (tier, partGrade) => {
						let smeltingDash = ''
						if (tier - 1 > partGrade) {
							//tier = item.tier
							smeltingDash = Text.of(` ✗ `).red()
						} else if (part.name == 'grit') {
							smeltingDash = Text.of(` ✗ `).red()
						} else {
							smeltingDash = Text.of(` ✓ `).green()
						}
						return smeltingDash
					}
					let refiningFunction = (part, partLevel) => {
						let refiningStep = ''
						if (partLevel == index - 1) {
							//if we can smelt it (item.tier-1 <= partLevel (index)), or the next part, aqua, otherwise gray
							if (
								item.tier - 1 <= partLevel ||
								item.tier - 1 <= partLevel + 1
							) {
								refiningStep = [
									Text.aqua(
										` ↗ x${global.refiningMultiplier[partLevel]}`
									),
									Text.white(
										` ${OreProcessing[part]}`
									),
								]
							} else {
								refiningStep = Text.gray(
									` ↗ x${global.refiningMultiplier[partLevel]} ${OreProcessing[part]}`
								)
							}
						} else if (partLevel == index) {
							//if we can smelt it (item.tier-1 <= partLevel (index)), aqua, otherwise gray
							if (item.tier - 1 <= partLevel) {
								refiningStep = [
									Text.aqua(
										` → x${global.refiningMultiplier[partLevel]}`
									),
									Text.white(
										` ${OreProcessing[part]}`
									),
								]
							} else {
								refiningStep = Text.gray(
									` ↗ x${global.refiningMultiplier[partLevel]} ${OreProcessing[part]}`
								)
							}
						} else {
							if (
								item.tier - 1 <= partLevel ||
								item.tier - 1 <= partLevel - 1
							) {
								refiningStep = Text.gray(
									` → x${global.refiningMultiplier[partLevel]} ${OreProcessing[part]}`
								)
							} else {
								refiningStep = Text.gray(
									` ↗ x${global.refiningMultiplier[partLevel]} ${OreProcessing[part]}`
								)
							}
						}

						return refiningStep
					}

					let processingLine1 = part => {
						let tooltipLine1 = ''
						if (part == 'raw') {
							tooltipLine1 = Text.gray(`- 矿石`)
						} else if (part == 'crushed') {
							tooltipLine1 = [
								smeltingDashFunction(
									item.tier,
									index - 1
								),
								Text.gray(
									OreProcessing[
										oreProcessingPartList[
											index - 1
										]
									]
								),
							]
						} else {
							tooltipLine1 = [
								smeltingDashFunction(
									item.tier,
									index - 1
								),
								Text.gray(
									OreProcessing[
										oreProcessingPartList[
											index - 1
										]
									]
								),
								Text.gray(
									` [${
										gradeLetter[
											index - 1
										]
									}]`
								),
								refiningFunction(
									oreRefiningPartList[
										index - 1
									],
									index - 1
								),
							]
						}
						return tooltipLine1
					}

					let processingLine2 = part => {
						let tooltipLine2 = ''
						if (part == 'raw') {
							tooltipLine2 = [
								smeltingDashFunction(
									item.tier,
									index
								),
								Text.of(
									OreProcessing[
										oreProcessingPartList[
											index
										]
									]
								).white(),
							]
						} else {
							tooltipLine2 = [
								smeltingDashFunction(
									item.tier,
									index
								),
								Text.of(
									OreProcessing[
										oreProcessingPartList[
											index
										]
									] + ' '
								).white(),
								gradeLetterColor[index],
								refiningFunction(
									oreRefiningPartList[index],
									index
								),
							]
						}
						return tooltipLine2
					}

					let processingLine3 = part => {
						let tooltipLine3 = ''
						//console.log(oreProcessingPartList)
						if (
							oreProcessingPartList[
								oreProcessingPartList.length - 1
							] == nameUpper(part)
						) {
							//last item on the list has no next step -2 because grit is last
							tooltipLine3 =
								Text.darkGray(`达到最大处理量`)
						} else {
							tooltipLine3 = [
								smeltingDashFunction(
									item.tier,
									index + 1
								),
								Text.gray(
									OreProcessing[
										oreProcessingPartList[
											index + 1
										]
									]
								),
								Text.gray(
									` [${
										gradeLetter[
											index + 1
										]
									}]`
								),
								refiningFunction(
									oreRefiningPartList[
										index + 1
									],
									index + 1
								),
							]
						}
						return tooltipLine3
					}
					//动态工具提示
					let processingToolTipCreation = name => {
						//Make the Actual Tooltip
						tooltip.addAdvanced(
							name,
							(items, advanced, text) => {
								text.add(1, [
									Text.of(
										`金属等级: `
									).white(),
									Text.of(
										`${item.tier}`
									).gold(),
								])
								text.add(2, [
									smeltingFunction(item.tier),
								])

								if (!tooltip.shift) {
									text.add(
										3,
										processingLine2(
											part.name
										)
									)
									text.add(4, [
										Text.of(
											'按住'
										).gray(),
										Text.of(
											'Shift'
										).green(),
										Text.of(
											'以了解更多信息'
										).gray(),
									])
								} else {
									text.add(
										3,
										processingLine1(
											part.name
										)
									)
									text.add(
										4,
										processingLine2(
											part.name
										)
									)
									text.add(
										5,
										processingLine3(
											part.name
										)
									)
								}
							}
						)
					}

					//查找准确的物品，然后运行工具提示创建功能
					let partName = ''
					if (part.name == 'raw' || part.name == 'crushed') {
						mods.forEach(mod => {
							if (
								Item.of(
									`${mod}:${part.name}_${item.material}`
								) != null
							) {
								partName = `${mod}:${part.name}_${item.material}`
								processingToolTipCreation(partName)
							} else if (
								Item.of(
									`${mod}:${item.material}_${part.name}`
								) != null
							) {
								processingToolTipCreation(partName)
								partName = `${mod}:${item.material}_${part.name}`
							} else if (
								Item.of(
									`${mod}:${part.name}_${item.material}_ore`
								) != null
							) {
								partName = `${mod}:${part.name}_${item.material}_ore` //这就是创建的方法
								processingToolTipCreation(partName)
							}
						})
					} else {
						if (
							Item.of(
								`kubejs:${part.name}_${item.material}`
							) != null
						) {
							partName = `kubejs:${part.name}_${item.material}`
							processingToolTipCreation(partName)
						}
					}

					////////////////////////////////////////////////
					//											                     //
					//			           复合工具提示		   	            //
					//											                     //
					////////////////////////////////////////////////
				} else {
					//若为复合矿石

					//告诉玩家，在特定时刻，它可以分拣成什么，是否可以熔炼，以及是什么等级

					let compoundSmeltingFunction = grade => {
						let smeltingTooltip = ''
						if (grade <= 0) {
							smeltingTooltip = [
								Text.white(`冶炼成: `),
								Text.gold(
									`${
										OreFunction[
											item
												.components[0]
										]
									}`
								),
							]
						} else {
							smeltingTooltip =
								Text.red(
									`必须在冶炼前分拣成基础金属`
								)
						}
						return smeltingTooltip
					}

					let compoundLine = line => {
						let tooltipLine = ''
						if (line <= part.grade + 1) {
							if (part.grade == 0) {
								tooltipLine = Text.white(
									`- ${
										OreFunction[
											item
												.components[
												line
											]
										]
									}`
								)
							} else {
								tooltipLine = [
									gradeLetterColor[index],
									Text.white(
										` ${
											OreFunction[
												item
													.components[
													line
												]
											]
										}`
									),
								]
							}
						} else if (line == part.grade + 2) {
							if (line != 8) {
								tooltipLine =
									Text.green(
										`此矿石可在分拣前再进行加工可产出: `
									)
							} else {
								tooltipLine =
									Text.darkGray(
										`达到最大产量`
									)
							}
						} else {
							tooltipLine = [
								gradeLetterColor[line - 2],
								Text.gray(
									` ${
										OreFunction[
											item
												.components[
												line -
													1
											]
										]
									}`
								),
							]
						}
						return tooltipLine
					}
					let compoundToolTipCreation = name => {
						//创建复合部件工具提示
						tooltip.addAdvanced(
							name,
							(items, advanced, text) => {
								if (!tooltip.shift) {
									text.add(1, [
										compoundSmeltingFunction(
											part.grade
										),
									])
									text.add(2, [
										Text.of(
											'按住'
										).gray(),
										Text.of(
											'Shift'
										).gold(),
										Text.of(
											'以获取分拣信息'
										).gray(),
									])
								} else {
									text.add(1, [
										Text.gold(
											'当前矿石状态可分拣出: '
										),
									])
									text.add(2, compoundLine(0))
									text.add(3, compoundLine(1))
									text.add(4, compoundLine(2))
									text.add(5, compoundLine(3))
									text.add(6, compoundLine(4))
									text.add(7, compoundLine(5))
									text.add(8, compoundLine(6))
									text.add(9, compoundLine(7))
									text.add(
										10,
										compoundLine(8)
									)
								}
							}
						)
					}
					//查找准确的物品，然后运行工具提示创建功能
					let partName = ''
					if (
						Item.of(`kubejs:${part.name}_${item.material}`) !=
						null
					) {
						partName = `kubejs:${part.name}_${item.material}`
						compoundToolTipCreation(partName)
					}
				}
			})

			////////////////////////////////////////////////
			//				                    							  //
			//	             		精炼工具提示			          //
			//									                     		  //
			////////////////////////////////////////////////
			global.oreRefiningParts.forEach((part, index) => {
				let smeltingFunction = tier => {
					let smeltingTooltip = ''
					if (part.level == 1) {
						smeltingTooltip = [
							Text.of(`可冶炼于: `).white(),
							Text.of(`${smeltingList[tier]}`).yellow(),
						]
					} else {
						smeltingTooltip =
							Text.of(`必须精炼至 1 级后才能冶炼`).aqua()
					}
					return smeltingTooltip
				}
				let smeltingCheckFunction = line => {
					let smeltingCheck = ''
					if (line == index - 1) {
						if (line == 1) {
							smeltingCheck = Text.of(` ✓ `).green()
						} else {
							smeltingCheck = Text.of(`↓ `).gray()
						}
					} else if (line == index) {
						if (line == 1) {
							smeltingCheck = Text.of(` ✓ `).green()
						} else {
							smeltingCheck = Text.of(`↓ `).aqua()
						}
					} else {
						smeltingCheck = Text.of(`↓ `).gray()
					}
					return smeltingCheck
				}

				let refiningLine1 = linePart => {
					let tooltipLine1 = ''
					if (
						oreRefiningPartList[
							oreRefiningPartList.length - 1
						] == nameUpper(linePart)
					) {
						// if there is no higher tier (inverted because I'm cool like that or something)
						tooltipLine1 = [Text.darkGray(`达到最高精炼量`)]
					} else {
						tooltipLine1 = [
							smeltingCheckFunction(index + 1),
							Text.gray(
								OreProcessing[
									oreRefiningPartList[
										index + 1
									]
								]
							),
							Text.gray(` (${index + 1})`),
						]
					}
					return tooltipLine1
				}

				//let refiningLine2 = (linePart) => {
				let tooltipLine2 = ''
				tooltipLine2 = [
					smeltingCheckFunction(index),
					Text.of(OreProcessing[oreRefiningPartList[index]]).white(),
					Text.aqua(` (${index})`),
				]
				//	return tooltipLine2
				//}

				let refiningLine3 = linePart => {
					let tooltipLine3 = ''
					//console.log(oreRefiningPartList)
					if (oreRefiningPartList[1] == nameUpper(linePart)) {
						//last item on the list has no next step
						tooltipLine3 = Text.gray(`也可粉碎成粉末`)
					} else {
						tooltipLine3 = [
							smeltingCheckFunction(index - 1),
							Text.gray(
								OreProcessing[
									oreRefiningPartList[
										index - 1
									]
								]
							),
							Text.gray(` (${index - 1})`),
						]
					}
					return tooltipLine3
				}

				console.log(part.prefix + item.material + part.suffix)

				//动态工具提示
				let refiningToolTipCreation = name => {
					//创建合金工具提示
					tooltip.addAdvanced(name, (items, advanced, text) => {
						text.add(1, [
							Text.of(`金属等级: `).white(),
							Text.of(`${item.tier}`).gold(),
						])
						text.add(2, [smeltingFunction(item.tier)])
						if (!tooltip.shift) {
							text.add(3, tooltipLine2)
							text.add(4, [
								Text.of('按住').gray(),
								Text.of('Shift').aqua(),
								Text.of('以查看更多信息').gray(),
							])
						} else {
							text.add(3, refiningLine1(part.name))
							text.add(4, tooltipLine2)
							text.add(5, refiningLine3(part.name))
						}
					})
				}
				//查找准确的物品，然后运行工具提示创建功能
				let partName = ''
				if (
					Item.of(`kubejs:${part.name}_${item.material}`) != null &&
					part.name != 'fine_dust'
				) {
					partName = `kubejs:${part.name}_${item.material}`
					refiningToolTipCreation(partName)
				}
			})
		}
	})
})
