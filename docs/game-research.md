# 9–10 岁逻辑游戏研究记录

更新日期：2026-11-12

本轮调研只提炼通用教育机制。游戏中的文案、关卡数据、界面与代码均为原创实现，不下载或复用第三方代码、美术和题卡。

## 参考项目与可迁移机制

### NRICH：7–11 岁互动游戏与逻辑活动

- 来源：[Interactive Games and Puzzles: Age 7-11](https://nrich.maths.org/maths-at-home/age-7-11/interactive-games-and-puzzles)
- 来源：[Primary Interactive Resources](https://nrich.maths.org/primary-interactive-resources)
- 可迁移机制：通过可操作对象探索规律；用维恩图、分类图和网格任务表达“同时满足”“只满足一个”“都不满足”；鼓励先试验、再总结策略。
- 本项目转化：原创“双圈分类站”，让孩子把数字按两个条件放入四个逻辑区域。

### ThinkFun Rush Hour：滑块与路径清障

- 来源：[Rush Hour 官方产品页](https://www.thinkfun.com/en-US/products/educational-games/rush-hour-76582)
- 可迁移机制：在固定方向和空间限制中移动障碍物，为目标对象清出通路；关卡由入门逐步增加规划深度。
- 本项目转化：原创“探测车出舱”棋盘，使用自有名称、棋盘布局、视觉样式和规则说明。

### PBS KIDS Cyberchase：故事化数学与策略

- 来源：[Cyberchase 项目介绍](https://parents.prod.pbskids.org/parents/shows/cyberchase/about)
- 来源：[Cyberchase Games](https://pbskids.org/cyberchase)
- 可迁移机制：用任务故事承载数学推理，让孩子在行动后看到结果；强调“人人都能学会数学”的正向反馈。
- 本项目转化：继续使用太空研究任务叙事，把失败反馈写成“漏了一条线索”，避免能力标签。

### 轮流取物策略游戏

- 来源：[NRICH：Developing Logical Thinking—The Place of Strategy Games](https://nrich.maths.org/content/id/10019/Developing%20Logical%20Thinking%3A%20the%20Place%20of%20Strategy%20Games.pdf)
- 可迁移机制：通过轮流取物学习逆向思考、不变量和必胜位置，并把在一个游戏中发现的策略迁移到新情境。
- 本项目转化：原创“最后的能量石”，玩家与研究机器人轮流取 1–3 颗，目标是主动发现“四的倍数”策略。

## 设计结论

1. 9–10 岁入口应减少文字负担，先允许操作，再追问“为什么”。
2. 每个实验只保留一个核心规则，难度来自组合与步数，而不是题干长度。
3. 即时反馈要指出遗漏的条件，不使用“你不擅长”之类的固定能力评价。
4. 完成后呈现可复用的思考工具：分类、逆推、保持不变量、先清障再前进。

## 动态交互补充研究

### Blockly Games：指令块与实时执行

- 来源：[Blockly Games 项目介绍](https://www.blockly-games.appspot.com/about?lang=en)
- 来源：[Blockly 应用界面说明](https://docs.blockly.com/guides/design/app-overview/)
- 动态机制：孩子先组合视觉指令，再点击运行；角色在输出区域逐步执行，错误发生在哪一步会被直接看见。Maze 从顺序指令逐步发展到循环与条件。
- 本项目转化：原创“编程探测车”，使用轻量自研指令队列，不引入或复制 Blockly 代码、图形和关卡。

### Mathigon 与 NRICH：操作即反馈

- 来源：[Mathigon Activities](https://mathigon.org/activities)
- 来源：[NRICH Interactive Games and Puzzles](https://nrich.maths.org/interactive-games-and-puzzles-7-11)
- 动态机制：移动方块、调整对象或尝试策略后，画面立即变化；孩子可通过连续试验发现结构，而不是提交整张答卷后才知道结果。
- 本项目转化：探测车逐格运动、指令逐条高亮、碰撞抖动、能量点收集、关卡完成动画，以及持续运动的首页视觉。
