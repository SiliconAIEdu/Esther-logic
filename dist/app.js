const QUESTION_BANK = {
  pattern: {
    title: "信号塔的秘密节奏",
    kicker: "任务 01 · 发现规律",
    questions: {
      10: [
        { prompt: "信号灯按什么规律闪烁？找出下一束信号。", visual: ["2", "4", "6", "8", "?"], options: ["9", "10", "11", "12"], answer: 1, hint: "比较相邻两个数，每次增加了多少？", explain: "每次增加 2，所以 8 后面是 10。" },
        { prompt: "每次信号都比上一次多一些。下一束是多少？", visual: ["1", "3", "6", "10", "?"], options: ["13", "14", "15", "16"], answer: 2, hint: "增加的数依次是 2、3、4，下一次呢？", explain: "增加量也在变：+2、+3、+4、+5，所以答案是 15。" },
        { prompt: "两个节奏轮流出现。补上缺失的信号。", visual: ["3", "8", "5", "8", "7", "?"], options: ["8", "9", "10", "12"], answer: 0, hint: "把第 1、3、5 个和第 2、4、6 个分别看。", explain: "奇数位置是 3、5、7；偶数位置一直是 8。" }
      ],
      11: [
        { prompt: "这串信号由两种变化轮流控制。下一束是多少？", visual: ["4", "7", "14", "17", "34", "?"], options: ["35", "36", "37", "68"], answer: 2, hint: "试试“加一个数”和“乘一个数”轮流发生。", explain: "规则是 +3、×2 交替：34 + 3 = 37。" },
        { prompt: "观察信号之间的差，找出下一束。", visual: ["2", "5", "10", "17", "?"], options: ["24", "25", "26", "27"], answer: 2, hint: "相邻信号分别增加 3、5、7。", explain: "增加的是连续奇数 3、5、7、9，因此 17 + 9 = 26。" },
        { prompt: "每个信号都由前两个信号共同决定。下一束是多少？", visual: ["2", "3", "5", "8", "13", "?"], options: ["18", "19", "20", "21"], answer: 3, hint: "把相邻的前两个数合起来看看。", explain: "每个数等于前两个数之和：8 + 13 = 21。" }
      ],
      12: [
        { prompt: "信号看似增长，其实每一步用了同一个操作。下一束是多少？", visual: ["3", "8", "18", "38", "?"], options: ["68", "74", "76", "78"], answer: 3, hint: "先乘 2，再观察还差多少。", explain: "每次都是 ×2 +2，所以 38 × 2 + 2 = 78。" },
        { prompt: "把位置也看作线索。第 6 束信号是多少？", visual: ["2", "6", "12", "20", "30", "?"], options: ["36", "40", "42", "48"], answer: 2, hint: "第 1 项可以写成 1×2，第 2 项可以写成 2×3。", explain: "第 n 项是 n×(n+1)，所以第 6 项是 6×7=42。" },
        { prompt: "规律藏在“变化的变化”里。补全最后一束。", visual: ["1", "2", "6", "15", "31", "?"], options: ["46", "52", "56", "58"], answer: 2, hint: "增加量是 1、4、9、16，它们有什么共同点？", explain: "依次增加 1²、2²、3²、4²、5²，所以 31+25=56。" }
      ]
    }
  },
  code: {
    title: "档案室的三位密码",
    kicker: "任务 02 · 条件推理",
    questions: {
      10: [
        { prompt: "密码由 2、4、7 各用一次组成。7 不在最后，2 在 4 前面。密码是？", options: ["247", "274", "427", "472"], answer: 1, hint: "先放置不能在最后的 7，再检查 2 是否在 4 前。", explain: "只有 274 同时满足：7 不在最后，2 也在 4 前面。" },
        { prompt: "机器人说：密码大于 300，小于 500，个位是 2，三个数字互不相同。哪一个可能？", options: ["252", "342", "512", "442"], answer: 1, hint: "先用大小范围确定百位，再检查是否有重复数字。", explain: "342 在范围内、个位是 2，并且三个数字不同。" },
        { prompt: "三枚徽章排成一排：蓝不在中间，红在绿的左边。哪种排列可行？", options: ["蓝-绿-红", "红-蓝-绿", "绿-红-蓝", "绿-蓝-红"], answer: 1, hint: "逐个检查：蓝的位置，以及红和绿的左右关系。", explain: "红-蓝-绿满足蓝不在中间吗？等等，蓝在中间，所以不满足。正确应是红-绿-蓝。", correction: true }
      ],
      11: [
        { prompt: "密码由 1、3、6 各用一次组成。它是偶数；1 不在百位；3 在 1 左边。密码是？", options: ["136", "316", "361", "613"], answer: 1, hint: "偶数密码的个位必须是谁？剩下再看 3 与 1 的顺序。", explain: "个位必须是 6；又因为 3 在 1 左边，所以密码是 316。" },
        { prompt: "A、B、C 三个舱门只有一个安全。A 说“B安全”，B说“我不安全”，C说“A不安全”。只有一句是真话，安全门是？", options: ["A", "B", "C", "无法确定"], answer: 0, hint: "分别假设 A、B、C 安全，数一数每种情况下有几句真话。", explain: "若 A 安全：A的话假、B的话真、C的话假，刚好一句真话。" },
        { prompt: "档案编号是三位数。百位比十位大 2，个位是十位的 2 倍，三个数字之和为 12。编号是？", options: ["426", "462", "624", "642"], answer: 0, hint: "把十位看作起点，百位和个位都能由它表示。", explain: "十位是 2，则百位 4、个位 4？会重复。逐项验证后题设无唯一有效项。", invalid: true }
      ],
      12: [
        { prompt: "密码由 2、5、8 各用一次。守卫三句话中只有一句是假话：①2在首位 ②8不在末位 ③5在2右边。密码是？", options: ["258", "285", "528", "852"], answer: 0, hint: "对每个选项逐句判断，寻找“两真一假”。", explain: "258 中：①真、②假、③真，恰好只有一句是假话。" },
        { prompt: "四位研究员甲乙丙丁排队。甲不挨着乙；丙在丁前；乙不在两端。哪种顺序可能？", options: ["甲乙丙丁", "丁乙甲丙", "甲丙乙丁", "丙丁乙甲"], answer: 2, hint: "每个选项都检查三条限制，不要只检查一条。", explain: "甲-丙-乙-丁：甲不挨乙，丙在丁前，乙也不在两端。" },
        { prompt: "三个箱子标签全贴错了：苹果、橙子、混合。只从一个箱子拿出一个水果，就能全部改对。先从哪个标签的箱子拿？", options: ["苹果", "橙子", "混合", "任意一个"], answer: 2, hint: "既然所有标签都错，“混合”箱里一定不是混合。", explain: "从“混合”箱抽取，可立刻确定它装的是单一水果，再利用“标签全错”推完另外两个。" }
      ]
    }
  },
  route: {
    title: "月面车的能量路线",
    kicker: "任务 03 · 策略规划",
    questions: {
      10: [
        { prompt: "月面车要从基地到矿区，只能选一条路线。哪条消耗的能量最少？", board: [["A路线", "3+4+2"], ["B路线", "5+2+1"], ["C路线", "2+3+4"], ["D路线", "6+1+3"]], options: ["A路线", "B路线", "C路线", "D路线"], answer: 1, hint: "分别算出整条路线的总消耗，再比较。", explain: "A=9、B=8、C=9、D=10，B路线最省能量。" },
        { prompt: "车里有 10 格能量。必须经过补给点，而且到终点至少剩 2 格。哪条路线可行？", board: [["A", "耗9"], ["B", "耗8"], ["C", "耗7但绕开补给"], ["D", "耗11"]], options: ["A", "B", "C", "D"], answer: 1, hint: "先排除没经过补给的，再检查剩余能量。", explain: "B经过补给且消耗8，正好还剩2格。" },
        { prompt: "三件样本重 2、3、5 千克，月面车最多载 7 千克。怎样带走最多件？", options: ["只带5", "带2和3", "带2和5", "三件都带"], answer: 2, hint: "“最多件”先比较件数，再看是否超过重量。", explain: "2+5=7，可带两件；2+3也能带两件。两者都是最优方案。", multi: true }
      ],
      11: [
        { prompt: "路线既要经过通信站，又要在 12 分钟内到达。哪条路线符合？", board: [["A", "10分·无通信站"], ["B", "12分·经通信站"], ["C", "13分·经通信站"], ["D", "9分·无通信站"]], options: ["A", "B", "C", "D"], answer: 1, hint: "这是双重条件：时间和必经地点都要满足。", explain: "只有 B 同时经过通信站，且时间没有超过 12 分钟。" },
        { prompt: "月面车有 14 格能量。去程三段消耗 3、4、2，返程至少要留 4 格。最多还能花几格探索？", options: ["1", "2", "3", "5"], answer: 0, hint: "先扣掉去程，再预留返程，剩下才可用于探索。", explain: "14-3-4-2-4=1，最多只能花 1 格探索。" },
        { prompt: "四个采样点中必须访问三个。P耗2、Q耗4、R耗3、S耗5，总能量10。哪组可行？", options: ["PQR", "PQS", "PRS", "QRS"], answer: 0, hint: "逐组相加，注意“必须访问三个”。", explain: "P+Q+R=2+4+3=9，不超过10；其余组合都超过10。" }
      ],
      12: [
        { prompt: "每走一段会消耗能量，但经过充能站会增加 3 格。哪条路线到终点剩余最多？初始 8 格。", board: [["A", "耗4→充3→耗4"], ["B", "耗2→耗3"], ["C", "耗5→充3→耗2"], ["D", "耗1→耗6"]], options: ["A", "B", "C", "D"], answer: 1, hint: "按路线顺序逐步更新能量，不要只看消耗总和。", explain: "A剩3、B剩3、C剩4、D剩1，实际 C 最多。", correctedAnswer: 2 },
        { prompt: "三个任务价值分别为 6、8、11，耗时分别为 2、3、5 小时。只有 5 小时，怎样让总价值最大？", options: ["只做任务3", "任务1+2", "任务1+3", "任务2+3"], answer: 1, hint: "先排除超时组合，再比较可行方案的总价值。", explain: "任务1+2正好5小时，价值14，高于只做任务3的11。" },
        { prompt: "路线每天只能走一次。连续三天不能重复同一路线，且第2天不能走B。哪份计划合规？", options: ["A-B-C", "A-C-A", "B-A-C", "C-C-A"], answer: 2, hint: "“不能重复”指三天内不重复，再检查第2天。", explain: "B-A-C 三天不重复，且第2天走的是A，不是B。" }
      ]
    }
  }
};

const state = {
  age: Number(localStorage.getItem("logicPlanetAge")) || 11,
  stars: Number(localStorage.getItem("logicPlanetStars")) || 0,
  progress: JSON.parse(localStorage.getItem("logicPlanetProgress") || '{"pattern":0,"code":0,"route":0}'),
  currentMission: null,
  questionIndex: 0,
  attempts: 0,
  answered: false,
  currentLab: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const ageDialog = $("#ageDialog");
const gameDialog = $("#gameDialog");
const labDialog = $("#labDialog");
let labAwarded = false;
let escapeState;
let programState;
let sortState;
let nimState;

function saveState() {
  localStorage.setItem("logicPlanetAge", state.age);
  localStorage.setItem("logicPlanetStars", state.stars);
  localStorage.setItem("logicPlanetProgress", JSON.stringify(state.progress));
}

function renderDashboard() {
  $("#ageButton").textContent = `${state.age} 岁`;
  $("#starCount").textContent = state.stars;
  const descriptions = { 9: "9 岁 · 动手探索与图形分类", 10: "10 岁 · 观察变化与单步推理", 11: "11 岁 · 多步推理与条件组合", 12: "12 岁 · 反向验证与策略优化" };
  $("#ageDescription").textContent = descriptions[state.age];
  $$(".age-options button").forEach((button) => button.classList.toggle("selected", Number(button.dataset.age) === state.age));
  Object.entries(state.progress).forEach(([skill, value]) => {
    const score = Math.min(100, value * 12);
    $(`[data-skill="${skill}"]`).style.width = `${score}%`;
    $(`#${skill}Score`).textContent = `${score}%`;
  });
}

function openMission(mission) {
  state.currentMission = mission;
  state.questionIndex = 0;
  state.attempts = 0;
  state.answered = false;
  const data = QUESTION_BANK[mission];
  $("#gameKicker").textContent = data.kicker;
  $("#gameTitle").textContent = data.title;
  $("#nextButton").innerHTML = '下一题 <span aria-hidden="true">→</span>';
  $("#nextButton").onclick = nextQuestion;
  renderQuestion();
  gameDialog.showModal();
}

function normalizedQuestion(raw) {
  if (raw.correctedAnswer !== undefined) return { ...raw, answer: raw.correctedAnswer };
  if (raw.correction) return { ...raw, options: ["蓝-绿-红", "红-绿-蓝", "绿-红-蓝", "绿-蓝-红"], answer: 1, explain: "红-绿-蓝满足：蓝不在中间，并且红在绿的左边。" };
  if (raw.invalid) return { prompt: "档案编号由 2、4、6 各用一次，百位比十位大 2，个位最大。编号是？", options: ["246", "426", "462", "624"], answer: 1, hint: "个位要先放最大的6，再检查百位和十位相差2。", explain: "个位放6；4比2大2，所以编号是426。" };
  return raw;
}

function getQuestions() {
  const questionAge = state.age === 9 ? 10 : state.age;
  return QUESTION_BANK[state.currentMission].questions[questionAge].map(normalizedQuestion);
}

function renderQuestion() {
  const questions = getQuestions();
  const q = questions[state.questionIndex];
  state.answered = false;
  state.attempts = 0;
  $("#questionCounter").textContent = `${state.questionIndex + 1} / ${questions.length}`;
  $("#gameProgressBar").style.width = `${(state.questionIndex / questions.length) * 100}%`;
  $("#feedback").className = "feedback";
  $("#feedback").innerHTML = "";
  $("#hintButton").classList.remove("hidden");
  $("#nextButton").classList.add("hidden");

  let visual = "";
  if (q.visual) visual = `<div class="sequence" aria-label="数列 ${q.visual.join("，")}">${q.visual.map((item) => `<span class="${item === "?" ? "mystery" : ""}">${item}</span>`).join("")}</div>`;
  if (q.board) visual = `<div class="route-board">${q.board.map(([name, detail]) => `<div class="route-node"><span><strong>${name}</strong>${detail}</span></div>`).join("")}</div>`;
  const optionMarkup = q.options.map((option, index) => `<button class="option" type="button" data-index="${index}"><span>${String.fromCharCode(65 + index)}.</span> ${option}</button>`).join("");
  $("#questionArea").innerHTML = `<p class="question-label">思考题 ${state.questionIndex + 1}</p><h3>${q.prompt}</h3>${visual}<div class="options">${optionMarkup}</div>`;
  $$(".option").forEach((button) => button.addEventListener("click", () => chooseAnswer(Number(button.dataset.index))));
}

function chooseAnswer(index) {
  if (state.answered) return;
  const q = getQuestions()[state.questionIndex];
  const feedback = $("#feedback");
  $$(".option").forEach((button) => button.classList.remove("selected", "wrong"));
  const selected = $(`.option[data-index="${index}"]`);
  selected.classList.add("selected");
  state.attempts += 1;

  const accepted = index === q.answer || (q.multi && index === 1);
  if (accepted) {
    state.answered = true;
    selected.classList.add("correct");
    feedback.className = "feedback show";
    feedback.innerHTML = `<strong>${state.attempts === 1 ? "漂亮，一次推理成功！" : "找到了！"}</strong>${q.explain}`;
    $("#hintButton").classList.add("hidden");
    $("#nextButton").classList.remove("hidden");
    state.stars += state.attempts === 1 ? 3 : 2;
    state.progress[state.currentMission] += 1;
    saveState();
    renderDashboard();
  } else {
    selected.classList.add("wrong");
    feedback.className = "feedback show error";
    feedback.innerHTML = `<strong>这个答案漏掉了一条线索。</strong>先别急着换答案，回到题目逐条检查限制条件。`;
  }
}

function showHint() {
  const q = getQuestions()[state.questionIndex];
  const feedback = $("#feedback");
  feedback.className = "feedback show";
  feedback.innerHTML = `<strong>给你一小步：</strong>${q.hint}`;
}

function nextQuestion() {
  const questions = getQuestions();
  if (state.questionIndex < questions.length - 1) {
    state.questionIndex += 1;
    renderQuestion();
    return;
  }
  $("#gameProgressBar").style.width = "100%";
  $("#feedback").className = "feedback";
  $("#hintButton").classList.add("hidden");
  $("#nextButton").textContent = "完成任务";
  $("#nextButton").onclick = () => {
    gameDialog.close();
    $("#nextButton").innerHTML = '下一题 <span aria-hidden="true">→</span>';
    $("#nextButton").onclick = nextQuestion;
  };
  $("#questionArea").innerHTML = `<div class="completion"><div class="completion-mark">✓</div><p class="eyebrow">任务完成</p><h3>你不是“猜对了”，<br>而是把理由想清楚了。</h3><p>本轮获得思维星星，能力档案也已更新。明天再来，大脑会记住今天用过的工具。</p></div>`;
}

const LAB_META = {
  escape: { kicker: "策略实验 01 · 空间规划", title: "探测车出舱", hint: "先别急着动红车。把挡在同一行的两辆竖向车都移到红车下方，再向出口前进。" },
  program: { kicker: "策略实验 02 · 动态编程", title: "编程探测车", hint: "先规划到第一颗能量星：前进、右转、前进、左转、前进、右转。之后沿横向通道前进。" },
  sort: { kicker: "策略实验 03 · 条件分类", title: "双圈分类站", hint: "逐个问两个问题：它是偶数吗？它是 3 的倍数吗？两个答案的组合决定位置。" },
  nim: { kicker: "策略实验 04 · 逆向思考", title: "最后的能量石", hint: "从结尾倒着想：如果能让机器人面对 4、8、12 颗，你就能控制之后的节奏。" }
};

function openLab(type) {
  state.currentLab = type;
  labAwarded = false;
  const meta = LAB_META[type];
  $("#labKicker").textContent = meta.kicker;
  $("#labGameTitle").textContent = meta.title;
  resetLab();
  labDialog.showModal();
}

function resetLab() {
  $("#labStatus").textContent = "观察规则，然后开始尝试。";
  if (state.currentLab === "escape") resetEscape();
  if (state.currentLab === "program") resetProgram();
  if (state.currentLab === "sort") resetSort();
  if (state.currentLab === "nim") resetNim();
}

function completeLab(skill, message) {
  $("#labStatus").textContent = message;
  if (labAwarded) return;
  labAwarded = true;
  state.stars += 5;
  state.progress[skill] += 1;
  saveState();
  renderDashboard();
}

function resetEscape() {
  escapeState = {
    moves: 0,
    selected: "R",
    complete: false,
    vehicles: [
      { id: "R", label: "探测车", row: 2, col: 0, len: 2, dir: "h", className: "target" },
      { id: "A", label: "蓝车", row: 1, col: 2, len: 3, dir: "v", className: "block-a" },
      { id: "B", label: "黄车", row: 0, col: 4, len: 3, dir: "v", className: "block-b" },
      { id: "C", label: "绿车", row: 5, col: 0, len: 2, dir: "h", className: "decor" }
    ]
  };
  renderEscape();
}

function vehicleCells(vehicle, row = vehicle.row, col = vehicle.col) {
  return Array.from({ length: vehicle.len }, (_, index) => vehicle.dir === "h" ? `${row},${col + index}` : `${row + index},${col}`);
}

function canMoveVehicle(vehicle, delta) {
  if ((vehicle.dir === "h" && delta.row) || (vehicle.dir === "v" && delta.col)) return false;
  const nextRow = vehicle.row + delta.row;
  const nextCol = vehicle.col + delta.col;
  const cells = vehicleCells(vehicle, nextRow, nextCol);
  if (cells.some((cell) => cell.split(",").some((value) => Number(value) < 0 || Number(value) > 5))) return false;
  const occupied = new Set(escapeState.vehicles.filter((other) => other.id !== vehicle.id).flatMap((other) => vehicleCells(other)));
  return cells.every((cell) => !occupied.has(cell));
}

function renderEscape() {
  const selected = escapeState.vehicles.find((vehicle) => vehicle.id === escapeState.selected);
  const vehicleMarkup = escapeState.vehicles.map((vehicle) => `<button type="button" class="vehicle ${vehicle.className} ${vehicle.id === escapeState.selected ? "selected" : ""}" data-vehicle="${vehicle.id}" aria-label="选择${vehicle.label}" style="grid-row:${vehicle.row + 1}/span ${vehicle.dir === "v" ? vehicle.len : 1};grid-column:${vehicle.col + 1}/span ${vehicle.dir === "h" ? vehicle.len : 1}">${vehicle.id}</button>`).join("");
  $("#labGameArea").innerHTML = `<div class="escape-layout"><div class="escape-board-wrap"><div class="escape-board">${vehicleMarkup}<span class="escape-exit">出口</span></div></div><div class="escape-controls"><div><h4>移动选中的车辆</h4><p>车辆只能前后移动，不能转弯，也不能穿过其他车辆。</p></div><div class="move-pad"><button class="move-up" data-row="-1" data-col="0" aria-label="向上移动">↑</button><button class="move-left" data-row="0" data-col="-1" aria-label="向左移动">←</button><button class="move-right" data-row="0" data-col="1" aria-label="向右移动">→</button><button class="move-down" data-row="1" data-col="0" aria-label="向下移动">↓</button></div><span class="move-counter">已用 ${escapeState.moves} 步 · 参考目标 9 步</span></div></div>`;
  $$("[data-vehicle]").forEach((button) => button.addEventListener("click", () => { escapeState.selected = button.dataset.vehicle; renderEscape(); }));
  $$(".move-pad button").forEach((button) => {
    const delta = { row: Number(button.dataset.row), col: Number(button.dataset.col) };
    button.disabled = escapeState.complete || !canMoveVehicle(selected, delta);
    button.addEventListener("click", () => moveSelectedVehicle(delta));
  });
}

function moveSelectedVehicle(delta) {
  const vehicle = escapeState.vehicles.find((item) => item.id === escapeState.selected);
  if (!canMoveVehicle(vehicle, delta)) return;
  vehicle.row += delta.row;
  vehicle.col += delta.col;
  escapeState.moves += 1;
  const target = escapeState.vehicles.find((item) => item.id === "R");
  if (target.col + target.len === 6) {
    escapeState.complete = true;
    completeLab("route", `出舱成功！你用了 ${escapeState.moves} 步。策略工具：先找关键障碍，再安排移动顺序。`);
  } else {
    $("#labStatus").textContent = `已移动 ${vehicle.label}。现在重新观察：红车前方还剩哪些障碍？`;
  }
  renderEscape();
}

const PROGRAM_ROCKS = new Set(["2,0", "3,2", "1,1", "1,3", "3,4"]);
const PROGRAM_ENERGY = new Set(["2,2", "1,4"]);
const PROGRAM_LABELS = { F: "↑ 前进", L: "↶ 左转", R: "↷ 右转" };

function resetProgram() {
  programState = {
    queue: [],
    robot: { row: 4, col: 0, dir: 0 },
    collected: new Set(),
    running: false,
    version: Date.now()
  };
  renderProgram();
}

function renderProgram() {
  const cells = Array.from({ length: 25 }, (_, index) => {
    const row = Math.floor(index / 5);
    const col = index % 5;
    const key = `${row},${col}`;
    const classes = ["program-cell"];
    if (PROGRAM_ROCKS.has(key)) classes.push("rock");
    if (PROGRAM_ENERGY.has(key)) classes.push("energy");
    if (programState.collected.has(key)) classes.push("collected");
    if (key === "0,4") classes.push("goal");
    return `<span class="${classes.join(" ")}" data-cell="${key}"></span>`;
  }).join("");
  const queue = programState.queue.length ? programState.queue.map((command, index) => `<i class="command-block" data-step="${index}">${PROGRAM_LABELS[command]}</i>`).join("") : '<span class="command-placeholder">点击上方指令，把程序排在这里</span>';
  $("#labGameArea").innerHTML = `<div class="program-layout"><div class="program-board">${cells}<i id="programRobot" class="program-robot" style="--row:${programState.robot.row};--col:${programState.robot.col};--dir:${programState.robot.dir}" aria-label="探测车"></i></div><div class="program-panel"><h4>给探测车编一段程序</h4><p>收集两颗能量星，再到达右上角终点。岩石不能穿过，最多使用 14 条指令。</p><div class="command-palette">${Object.entries(PROGRAM_LABELS).map(([command, label]) => `<button type="button" data-command="${command}" ${programState.running || programState.queue.length >= 14 ? "disabled" : ""}>${label}</button>`).join("")}</div><div class="command-queue">${queue}</div><div class="program-actions"><button type="button" id="removeCommand" ${programState.running || !programState.queue.length ? "disabled" : ""}>撤回</button><button type="button" id="clearProgram" ${programState.running || !programState.queue.length ? "disabled" : ""}>清空</button><button type="button" id="runProgram" class="run-program" ${programState.running || !programState.queue.length ? "disabled" : ""}>▶ 运行程序</button></div><div class="program-stats"><span>${programState.queue.length} / 14 条指令</span><span>已收集 ${programState.collected.size} / 2</span></div></div></div>`;
  $$("[data-command]").forEach((button) => button.addEventListener("click", () => addProgramCommand(button.dataset.command)));
  $("#removeCommand").addEventListener("click", () => { programState.queue.pop(); renderProgram(); });
  $("#clearProgram").addEventListener("click", () => { programState.queue = []; renderProgram(); });
  $("#runProgram").addEventListener("click", runProgram);
}

function addProgramCommand(command) {
  if (programState.running || programState.queue.length >= 14) return;
  programState.queue.push(command);
  $("#labStatus").textContent = `已加入“${PROGRAM_LABELS[command]}”。排好后点击运行，观察每一步。`;
  renderProgram();
}

function programDelay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function runProgram() {
  if (programState.running || !programState.queue.length) return;
  programState.running = true;
  programState.robot = { row: 4, col: 0, dir: 0 };
  programState.collected = new Set();
  const version = programState.version;
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  renderProgram();
  $("#labStatus").textContent = "程序开始执行。注意观察高亮的指令和探测车的位置。";
  let failed = false;

  for (let index = 0; index < programState.queue.length; index += 1) {
    if (!labDialog.open || state.currentLab !== "program" || programState.version !== version) return;
    const command = programState.queue[index];
    const block = $(`.command-block[data-step="${index}"]`);
    if (block) block.classList.add("active");
    const robot = $("#programRobot");

    if (command === "L" || command === "R") {
      programState.robot.dir = (programState.robot.dir + (command === "R" ? 1 : 3)) % 4;
      robot.style.setProperty("--dir", programState.robot.dir);
      await programDelay(340);
    } else {
      const [rowStep, colStep] = directions[programState.robot.dir];
      const nextRow = programState.robot.row + rowStep;
      const nextCol = programState.robot.col + colStep;
      const nextKey = `${nextRow},${nextCol}`;
      const outside = nextRow < 0 || nextRow > 4 || nextCol < 0 || nextCol > 4;
      if (outside || PROGRAM_ROCKS.has(nextKey)) {
        robot.classList.add("bump");
        $("#labStatus").textContent = `第 ${index + 1} 条指令撞到了${outside ? "边界" : "岩石"}。修改程序后再运行。`;
        failed = true;
        await programDelay(420);
        break;
      }
      programState.robot.row = nextRow;
      programState.robot.col = nextCol;
      robot.style.setProperty("--row", nextRow);
      robot.style.setProperty("--col", nextCol);
      await programDelay(420);
      if (PROGRAM_ENERGY.has(nextKey)) {
        programState.collected.add(nextKey);
        const cell = $(`[data-cell="${nextKey}"]`);
        if (cell) cell.classList.add("collected");
        $("#labStatus").textContent = `收集到第 ${programState.collected.size} 颗能量星，继续执行。`;
      }
    }
    if (block) block.classList.remove("active");
  }

  programState.running = false;
  if (!failed) {
    const atGoal = programState.robot.row === 0 && programState.robot.col === 4;
    if (atGoal && programState.collected.size === PROGRAM_ENERGY.size) {
      completeLab("route", `程序执行成功！你用 ${programState.queue.length} 条指令收集能量并到达终点。策略工具：先规划完整路径，再按顺序执行。`);
    } else if (atGoal) {
      $("#labStatus").textContent = "到达终点了，但还有能量星没收集。调整中间的路线。";
    } else {
      $("#labStatus").textContent = "程序执行完了，但还没到终点。继续追加或调整指令。";
    }
  }
  if (state.currentLab === "program") renderProgram();
}

const SORT_ITEMS = [
  { value: 12, zone: "both" }, { value: 8, zone: "even" }, { value: 9, zone: "three" }, { value: 7, zone: "neither" },
  { value: 18, zone: "both" }, { value: 10, zone: "even" }, { value: 21, zone: "three" }, { value: 25, zone: "neither" }
];

function resetSort() {
  sortState = { selected: null, placed: {} };
  renderSort();
}

function renderSort() {
  const unplaced = SORT_ITEMS.filter((item) => !sortState.placed[item.value]);
  const zones = [
    ["both", "既是偶数，也是 3 的倍数"], ["even", "只是偶数"], ["three", "只是 3 的倍数"], ["neither", "两个条件都不满足"]
  ];
  const zoneMarkup = zones.map(([id, label]) => `<button type="button" class="sort-zone" data-zone="${id}"><strong>${label}</strong><span class="placed-chips">${SORT_ITEMS.filter((item) => sortState.placed[item.value] === id).map((item) => `<i>${item.value}</i>`).join("")}</span></button>`).join("");
  $("#labGameArea").innerHTML = `<p class="lab-instruction">先选择一个数字，再选择它应该进入的区域。</p><div class="sort-rules"><span>条件 A：偶数</span><span>条件 B：3 的倍数</span></div><div class="sort-tray">${unplaced.map((item) => `<button type="button" class="number-chip ${sortState.selected === item.value ? "selected" : ""}" data-number="${item.value}">${item.value}</button>`).join("") || "全部数字已分类"}</div><div class="sort-zones">${zoneMarkup}</div>`;
  $$("[data-number]").forEach((button) => button.addEventListener("click", () => { sortState.selected = Number(button.dataset.number); $("#labStatus").textContent = `已选择 ${button.dataset.number}，现在判断它满足哪几个条件。`; renderSort(); }));
  $$("[data-zone]").forEach((button) => button.addEventListener("click", () => placeSortItem(button.dataset.zone)));
}

function placeSortItem(zone) {
  if (sortState.selected === null) {
    $("#labStatus").textContent = "请先从上方选择一个数字。";
    return;
  }
  const item = SORT_ITEMS.find((candidate) => candidate.value === sortState.selected);
  if (item.zone !== zone) {
    $("#labStatus").textContent = `${item.value} 还不属于这里。分别检查“偶数”和“3 的倍数”两个条件。`;
    return;
  }
  sortState.placed[item.value] = zone;
  sortState.selected = null;
  const finished = Object.keys(sortState.placed).length === SORT_ITEMS.length;
  if (finished) completeLab("code", "分类完成！策略工具：把两个条件分别判断，再组合成四种可能。只有一个条件也不能漏。 ");
  else $("#labStatus").textContent = "放对了。继续选择下一个数字。";
  renderSort();
}

function resetNim() {
  nimState = { remaining: 15, turn: "player", finished: false, version: Date.now() };
  renderNim();
}

function renderNim() {
  const stones = Array.from({ length: nimState.remaining }, () => '<i class="energy-stone"></i>').join("");
  $("#labGameArea").innerHTML = `<div class="nim-layout"><p class="lab-instruction">你和研究机器人轮流拿走 <strong>1、2 或 3 颗</strong>。拿到最后一颗的人获胜。</p><div class="nim-stones" aria-label="还剩 ${nimState.remaining} 颗能量石">${stones}</div><div class="nim-turn"><i></i>${nimState.finished ? "本局结束" : nimState.turn === "player" ? "轮到你" : "机器人正在思考"} · 剩余 ${nimState.remaining} 颗</div><div class="nim-actions">${[1,2,3].map((count) => `<button type="button" data-take="${count}" ${nimState.finished || nimState.turn !== "player" || count > nimState.remaining ? "disabled" : ""}>拿 ${count} 颗</button>`).join("")}</div></div>`;
  $$("[data-take]").forEach((button) => button.addEventListener("click", () => playerTake(Number(button.dataset.take))));
}

function playerTake(count) {
  if (nimState.finished || nimState.turn !== "player" || count > nimState.remaining) return;
  nimState.remaining -= count;
  if (nimState.remaining === 0) {
    nimState.finished = true;
    completeLab("route", "你拿到了最后一颗！策略工具：从结局倒推，主动把 4 的倍数留给对手。");
    renderNim();
    return;
  }
  nimState.turn = "robot";
  $("#labStatus").textContent = `你拿走了 ${count} 颗。机器人正在寻找下一步……`;
  renderNim();
  const version = nimState.version;
  setTimeout(() => robotTake(version), 480);
}

function robotTake(version) {
  if (!nimState || nimState.version !== version || nimState.finished || nimState.turn !== "robot") return;
  let count = nimState.remaining % 4;
  if (count === 0) count = 1;
  count = Math.min(count, 3, nimState.remaining);
  nimState.remaining -= count;
  if (nimState.remaining === 0) {
    nimState.finished = true;
    $("#labStatus").textContent = `机器人拿走 ${count} 颗并赢得本局。别急，观察它每次想留给你的数量，再试一次。`;
  } else {
    nimState.turn = "player";
    $("#labStatus").textContent = `机器人拿走了 ${count} 颗。轮到你，试着把 4 的倍数留给它。`;
  }
  renderNim();
}

$("#ageButton").addEventListener("click", () => ageDialog.showModal());
$$(".age-options button").forEach((button) => button.addEventListener("click", () => {
  state.age = Number(button.dataset.age);
  saveState();
  renderDashboard();
  ageDialog.close();
}));
$$(".mission-card").forEach((card) => {
  card.addEventListener("click", () => openMission(card.dataset.mission));
  card.querySelector("button").addEventListener("click", (event) => {
    event.stopPropagation();
    openMission(card.dataset.mission);
  });
});
$$(".lab-card").forEach((card) => {
  card.querySelector("button").addEventListener("click", () => openLab(card.dataset.lab));
});
$("#gameClose").addEventListener("click", () => gameDialog.close());
$("#labClose").addEventListener("click", () => labDialog.close());
$("#labReset").addEventListener("click", resetLab);
$("#labHint").addEventListener("click", () => { $("#labStatus").textContent = LAB_META[state.currentLab].hint; });
$("#hintButton").addEventListener("click", showHint);
$("#nextButton").onclick = nextQuestion;

renderDashboard();
if (!localStorage.getItem("logicPlanetAge")) ageDialog.showModal();
