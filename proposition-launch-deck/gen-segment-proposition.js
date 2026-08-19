/* Segment proposition template — adapted variant of gen.js.
   Question: "What proposition do we take to [segment] — which features,
   configured how commercially, delivered how?"
   Key line re-cut from Desirable/Viable/Feasible to the three DECISIONS:
   right features / configuration that pays / route that survives.       */

const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.layout = "LAYOUT_WIDE";
p.author = "Segment proposition template";
p.title  = "Segment Proposition Recommendation — Minto template";

const W = 13.3, H = 7.5, M = 0.62, CW = W - 2*M;

const SLATE="2F4858", BLUE="4E7C90", BLUEL="8FB3C2", GOLD="C9A227", GOLDD="8A6D0F",
      INK="1F2A31", BODY="3F5563", MUTE="64818F", TINT="EEF3F6", RULE="D5DFE4",
      WHITE="FFFFFF", GREEN="2F6B4F", RED="A8443C", AMBER="B07A1E";

const FH = "Cambria", FB = "Calibri";
const sh = () => ({ type:"outer", color:"9FB2BC", blur:10, offset:2, angle:90, opacity:0.28 });

function slide(dark){
  const s = p.addSlide();
  s.background = { color: dark ? SLATE : WHITE };
  if (dark) s.addShape(p.ShapeType.rect, { x:-0.06, y:-0.06, w:W+0.12, h:H+0.12,
    fill:{color:SLATE}, line:{color:SLATE, width:1} });
  return s;
}
function title(s, t, opt={}){
  s.addText(t, { x:M, y:opt.y||0.66, w:CW, h:1.06, fontFace:FH, fontSize:opt.size||27,
    bold:true, color:opt.color||INK, align:"left", valign:"top", margin:0, lineSpacing:32 });
}
function eyebrow(s, t, color, y){
  s.addText(t, { x:M, y:y===undefined?0.30:y, w:CW, h:0.30, fontFace:FB, fontSize:11,
    bold:true, color:color||GOLDD, charSpacing:2.2, margin:0, valign:"middle" });
}
function card(s, x, y, w, h, fill){
  s.addShape(p.ShapeType.roundRect, { x, y, w, h, rectRadius:0.10,
    fill:{ color: fill||TINT }, line:{ color:"FFFFFF", width:0 }, shadow: sh() });
}
function numCircle(s, x, y, n, d){
  const dd = d||0.46;
  s.addShape(p.ShapeType.ellipse, { x, y, w:dd, h:dd, fill:{color:GOLD}, line:{color:GOLD,width:0} });
  s.addText(String(n), { x, y, w:dd, h:dd, fontFace:FB, fontSize:16, bold:true,
    color:"2B2308", align:"center", valign:"middle", margin:0 });
}
function pill(s, x, y, t, fill, w){
  const pw = w||0.92;
  s.addShape(p.ShapeType.roundRect, { x, y, w:pw, h:0.30, rectRadius:0.15,
    fill:{color:fill}, line:{color:fill,width:0} });
  s.addText(t, { x, y, w:pw, h:0.30, fontFace:FB, fontSize:10, bold:true,
    color:WHITE, align:"center", valign:"middle", margin:0, charSpacing:0.6 });
}
function note(s, t){ s.addNotes(t); }
function foot(s, t){
  s.addText(t, { x:M, y:H-0.80, w:CW, h:0.32, fontFace:FB, fontSize:10, color:MUTE, margin:0, valign:"middle" });
}
function bullets(s, items, x, y, w, opt={}){
  s.addText(items.map((t,i)=>({ text:t, options:{ bullet:{code:"2022"}, breakLine: i<items.length-1 } })),
    { x, y, w, h: opt.h||1.6, fontFace:FB, fontSize:opt.size||13.5, color:opt.color||BODY,
      lineSpacing: opt.ls||19, paraSpaceAfter: 7, margin:0, valign:"top" });
}
function divider(n, kickerTxt, headline, sub){
  const s = slide(true);
  s.addText(n, { x:M, y:2.05, w:2.4, h:1.6, fontFace:FH, fontSize:88, bold:true, color:"39586A", margin:0, valign:"middle" });
  s.addText(kickerTxt.toUpperCase(), { x:M+2.15, y:2.22, w:9.4, h:0.4, fontFace:FB, fontSize:12,
    bold:true, color:GOLD, charSpacing:2.6, margin:0, valign:"middle" });
  s.addText(headline, { x:M+2.15, y:2.62, w:9.6, h:1.0, fontFace:FH, fontSize:36, bold:true,
    color:WHITE, margin:0, valign:"middle" });
  s.addText(sub, { x:M+2.15, y:3.70, w:9.2, h:0.7, fontFace:FB, fontSize:15, color:BLUEL,
    margin:0, valign:"top", lineSpacing:22 });
  return s;
}

/* ---------------- 1. COVER ---------------- */
{
  const s = slide(true);
  s.addText("SEGMENT PROPOSITION RECOMMENDATION", { x:M, y:1.55, w:8.6, h:0.34,
    fontFace:FB, fontSize:12, bold:true, color:GOLD, charSpacing:2.6, margin:0, valign:"middle" });
  s.addText("What do we take\nto [segment]?", { x:M, y:2.05, w:8.4, h:2.1, fontFace:FH,
    fontSize:50, bold:true, color:WHITE, lineSpacing:56, margin:0, valign:"top" });
  s.addText("Features · commercial configuration · delivery route", { x:M, y:4.28, w:8.4, h:0.4,
    fontFace:FB, fontSize:15, color:BLUEL, margin:0, valign:"middle" });
  s.addText("[Client name]   ·   [Month Year]   ·   Prepared by [Your name / firm]",
    { x:M, y:4.80, w:9.2, h:0.4, fontFace:FB, fontSize:13, color:"9FBECD", margin:0, valign:"middle" });
  const cx = 10.85, top = 2.15, unit = 0.62, gap = 0.16;
  [1.05, 2.15, 3.25].forEach((wd,i)=>{
    s.addShape(p.ShapeType.roundRect, { x: cx - wd/2, y: top + i*(unit+gap), w: wd, h: unit,
      rectRadius:0.07, fill:{ color: i===0 ? GOLD : (i===1 ? BLUE : "3B6274") }, line:{width:0} });
  });
  s.addText("Answer  →  key line  →  support", { x: cx-2.6, y: top+3*(unit+gap)+0.12, w:5.2, h:0.36,
    fontFace:FB, fontSize:11, color:"9FBECD", align:"center", margin:0, valign:"middle" });
  note(s, "Cover. This variant answers a wider question than feature selection alone: it carries three decisions - features, commercial configuration, delivery route - under one governing thought.");
}

/* ---------------- 2. HOW TO USE ---------------- */
{
  const s = slide();
  eyebrow(s, "TEMPLATE GUIDE — DELETE BEFORE SENDING", GOLDD);
  title(s, "How to use this deck");
  const rows = [
    ["Everything in [square brackets] is yours to replace",
     "Feature names, scores, prices, partners and dates are dummy values. Nothing in this file is client data."],
    ["One governing thought carries three decisions",
     "Features, configuration, route. Each key-line section closes one decision. Do not let a section reopen another section's decision."],
    ["Incentives are guilty until proven innocent",
     "In SME banking, defaults beat persuasion and incentives often buy selection, not behaviour. Section 02 makes the case FOR each lever, not just its size."],
    ["Route verdicts can differ per feature",
     "Build one, partner another. The route section prices each option and states the defensibility cost of partnering — do not average across features."],
  ];
  let y = 1.62;
  rows.forEach((r,i)=>{
    card(s, M, y, CW, 1.12);
    numCircle(s, M+0.34, y+0.33, i+1);
    s.addText(r[0], { x:M+1.05, y:y+0.17, w:CW-1.5, h:0.38, fontFace:FB, fontSize:15,
      bold:true, color:INK, margin:0, valign:"middle" });
    s.addText(r[1], { x:M+1.05, y:y+0.55, w:CW-1.5, h:0.44, fontFace:FB, fontSize:12.5,
      color:BODY, margin:0, valign:"top" });
    y += 1.28;
  });
  note(s, "Delete this slide before the deck goes to a client.");
}

/* ---------------- 3. S-C-Q ---------------- */
{
  const s = slide();
  eyebrow(s, "WHY WE ARE HERE", GOLDD);
  title(s, "The question we set out to answer");
  const items = [
    ["SITUATION", "The bank serves [segment: size, revenue, current share of wallet]. [N] candidate products and features sit on the proposition roadmap, with fixed build capacity and an earnings mandate for the cycle."],
    ["COMPLICATION", "They cannot all ship — and the feature list alone does not set earnings. Price, incentives and channel change what each feature returns, and the build-or-partner choice changes when it lands and what margin survives. Chosen by conviction, these three decisions get made separately and inconsistently."],
    ["QUESTION", "Which features do we take to [segment], configured how, and delivered how?"],
  ];
  let y = 1.66;
  items.forEach((it,i)=>{
    const h = [1.18, 1.52, 1.05][i];
    card(s, M, y, CW, h, i===2 ? "E4EDF2" : TINT);
    s.addText(it[0], { x:M+0.42, y:y+0.20, w:3.0, h:0.32, fontFace:FB, fontSize:11.5, bold:true,
      color: i===2 ? SLATE : GOLDD, charSpacing:2, margin:0, valign:"middle" });
    s.addText(it[1], { x:M+0.42, y:y+0.54, w:CW-1.0, h:h-0.72, fontFace:FB,
      fontSize: i===2 ? 19 : 14, bold: i===2, color: i===2 ? SLATE : BODY, margin:0, valign:"top", lineSpacing: i===2?24:19 });
    y += h + 0.20;
  });
  note(s, "The Complication names why this is ONE question, not three: the decisions interact. A feature that only pays when partnered, or an incentive that only pays on the right feature, cannot be decided in isolation.");
}

/* ---------------- 4. RECOMMENDATION ---------------- */
{
  const s = slide(true);
  s.addText("RECOMMENDATION", { x:M, y:0.80, w:CW, h:0.34, fontFace:FB, fontSize:12, bold:true,
    color:GOLD, charSpacing:2.6, margin:0, valign:"middle" });
  const lines = [
    ["Launch", "[Feature A] and [Feature C]", "to [segment] this cycle"],
    ["Configure", "[price move] + [targeted incentive]", "defaults where they beat persuasion"],
    ["Deliver", "[A] in-house · [C] via [partner]", "routes priced, defensibility checked"],
    ["Drop", "[Feature D] and [Feature E]", "demand below threshold"],
  ];
  let y = 1.48;
  lines.forEach((l)=>{
    s.addText(l[0], { x:M, y:y, w:2.1, h:0.58, fontFace:FH, fontSize:24, bold:true,
      color:GOLD, margin:0, valign:"middle" });
    s.addText(l[1], { x:M+2.15, y:y, w:6.5, h:0.58, fontFace:FH, fontSize:23, bold:true,
      color:WHITE, margin:0, valign:"middle" });
    s.addText(l[2], { x:M+8.75, y:y+0.05, w:3.6, h:0.5, fontFace:FB, fontSize:14,
      color:BLUEL, margin:0, valign:"middle" });
    y += 0.82;
  });
  s.addShape(p.ShapeType.line, { x:M, y:5.02, w:CW, h:0, line:{ color:"3E6072", width:1 } });
  s.addText("Together: [£X]m incremental earnings by year [3] at [Y]% margin — [share] from the features themselves, [share] from configuration, with the partner route pulling [C]'s launch forward by [months].",
    { x:M, y:5.24, w:CW-0.8, h:0.9, fontFace:FB, fontSize:14.5, color:BLUEL, margin:0, valign:"top", lineSpacing:21 });
  note(s, "One governing thought, three verbs: launch, configure, deliver. The earnings split line matters - it tells the reader how much of the value is the feature list and how much is the commercial and delivery choices.");
}

/* ---------------- 5. THE THREE DECISIONS (KEY LINE) ---------------- */
{
  const s = slide();
  eyebrow(s, "THE ARGUMENT IN ONE PAGE", GOLDD);
  title(s, "Three decisions, each closed on evidence");
  const cols = [
    ["The right features", "Only [A] and [C] show proven customer pull",
     "They clear the OCV threshold of [score]. [D] and [E] sit well below it — no configuration rescues a demand problem.", "01"],
    ["The configuration that pays", "[Levers] add [£X]m without buying dead weight",
     "Levers are spent where evidence says they change behaviour — at [acquisition / switching moments] — and withheld where defaults do the work free.", "02"],
    ["The route that survives", "[Build A, partner C] ships inside the window and keeps the advantage",
     "Each route is priced for time, margin share and defensibility. Partnering [C] trades [margin share] for [months] — and the trade is bounded by [terms].", "03"],
  ];
  const cw = (CW - 0.6)/3;
  cols.forEach((c,i)=>{
    const x = M + i*(cw+0.3);
    card(s, x, 1.78, cw, 3.95);
    numCircle(s, x+0.38, 2.12, i+1, 0.52);
    s.addText("DECISION " + c[3], { x:x+1.05, y:2.12, w:cw-1.4, h:0.52, fontFace:FB, fontSize:11,
      bold:true, color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
    s.addText(c[0], { x:x+0.38, y:2.82, w:cw-0.76, h:0.44, fontFace:FB, fontSize:13, bold:true,
      color:BLUE, margin:0, valign:"middle" });
    s.addText(c[1], { x:x+0.38, y:3.30, w:cw-0.76, h:1.18, fontFace:FH, fontSize:17, bold:true,
      color:INK, margin:0, valign:"top", lineSpacing:21 });
    s.addText(c[2], { x:x+0.38, y:4.52, w:cw-0.76, h:1.15, fontFace:FB, fontSize:12,
      color:BODY, margin:0, valign:"top", lineSpacing:17 });
  });
  s.addText("Each headline is a claim that closes its decision. If a headline would survive the answer changing, it is a label — rewrite it.",
    { x:M, y:5.95, w:CW, h:0.5, fontFace:FB, fontSize:13, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "The key line. Note the dependency direction: features are chosen first (demand), configuration is chosen per surviving feature, route is chosen per configured feature. Later sections must not reopen earlier decisions.");
}

/* ---------------- 6. DECISION MATRIX ---------------- */
{
  const s = slide();
  eyebrow(s, "THE PROPOSITION, DECIDED", GOLDD);
  title(s, "One page: what ships, how it is configured, how it is delivered");
  const heads = ["Feature", "Demand\nOCV vs [60]", "Configuration\nprice · incentive", "Route\nbuild / partner", "Verdict"];
  const rows = [
    ["[Feature A]", "PASS", "[list price · no incentive]", "BUILD", "LAUNCH"],
    ["[Feature C]", "PASS", "[intro price · switch incentive]", "PARTNER [name]", "LAUNCH"],
    ["[Feature B]", "PASS", "[not configured]", "BUILD — [18 mths]", "STAGE"],
    ["[Feature D]", "FAIL", "—", "—", "DROP"],
    ["[Feature E]", "FAIL", "—", "—", "DROP"],
  ];
  const colX = [M, M+2.75, M+4.85, M+8.05, M+10.55];
  const colW = [2.75, 2.1, 3.2, 2.5, 1.5];
  let y = 1.78;
  heads.forEach((h,i)=>{
    s.addText(h, { x:colX[i], y:y, w:colW[i]-0.15, h:0.72, fontFace:FB, fontSize:11,
      bold:true, color:SLATE, margin:0, valign:"bottom", lineSpacing:14 });
  });
  y += 0.80;
  s.addShape(p.ShapeType.line, { x:M, y:y, w:CW, h:0, line:{ color:SLATE, width:1.5 } });
  y += 0.14;
  rows.forEach((r,ri)=>{
    if (ri % 2 === 0) s.addShape(p.ShapeType.rect, { x:M, y:y-0.06, w:CW, h:0.72, fill:{color:"F5F8FA"}, line:{color:"F5F8FA", width:1} });
    s.addText(r[0], { x:colX[0], y:y, w:colW[0]-0.15, h:0.6, fontFace:FB, fontSize:14, bold:true,
      color: ri<2 ? INK : BODY, margin:0, valign:"middle" });
    if (r[1]==="PASS") pill(s, colX[1], y+0.15, "PASS", GREEN);
    else if (r[1]==="FAIL") pill(s, colX[1], y+0.15, "FAIL", RED);
    s.addText(r[2], { x:colX[2], y:y, w:colW[2]-0.2, h:0.6, fontFace:FB, fontSize:12,
      color:BODY, margin:0, valign:"middle" });
    s.addText(r[3], { x:colX[3], y:y, w:colW[3]-0.15, h:0.6, fontFace:FB, fontSize:12, bold: ri<2,
      color: ri<3 ? SLATE : MUTE, margin:0, valign:"middle" });
    const vc = r[4]==="LAUNCH" ? GOLDD : (r[4]==="STAGE" ? BLUE : MUTE);
    s.addText(r[4], { x:colX[4], y:y, w:colW[4], h:0.6, fontFace:FB, fontSize:13, bold:true,
      color:vc, charSpacing:1.2, margin:0, valign:"middle" });
    y += 0.70;
  });
  s.addText("Demand gates first — a feature that fails OCV is never configured or routed. Configuration and route are decided only for survivors.",
    { x:M, y:y+0.16, w:CW, h:0.42, fontFace:FB, fontSize:12.5, italic:true, color:MUTE, margin:0, valign:"top" });
  note(s, "The photograph slide. Five columns tell the whole story: what ships, how priced, how delivered, and what happened to everything else.");
}

/* ---------------- 7. DIVIDER 01 ---------------- */
note(divider("01", "The right features", "Do customers actually want it?",
  "Measured with the OCV metric against a stated threshold. Configuration cannot rescue a demand failure."),
  "Section divider. This section is unchanged from the base template: demand gates first.");

/* ---------------- 8. OCV RANKED ---------------- */
{
  const s = slide();
  eyebrow(s, "THE RIGHT FEATURES  ·  01", GOLDD);
  title(s, "Three features clear the OCV threshold; two are not close");
  s.addChart(p.ChartType.bar, [{
    name: "OCV score",
    labels: ["[Feature A]","[Feature C]","[Feature B]","[Feature D]","[Feature E]"],
    values: [78, 72, 69, 41, 33]
  }], {
    x:M, y:1.90, w:8.15, h:3.80, barDir:"bar", chartColors:[BLUE,BLUE,BLUE,"C0CCD3","C0CCD3"], varyColors:true,
    showTitle:false, showLegend:false, showValue:true, dataLabelPosition:"outEnd",
    dataLabelColor:INK, dataLabelFontFace:FB, dataLabelFontSize:12, dataLabelFontBold:true,
    catAxisLabelColor:BODY, catAxisLabelFontFace:FB, catAxisLabelFontSize:12,
    valAxisLabelColor:MUTE, valAxisLabelFontFace:FB, valAxisLabelFontSize:10,
    valAxisMaxVal:100, valAxisMinVal:0,
    valGridLine:{ color:"E8EEF1", size:1 }, catGridLine:{ style:"none" }, barGapWidthPct:55
  });
  card(s, M+8.55, 1.90, CW-8.55, 3.80, TINT);
  s.addText("Threshold", { x:M+8.9, y:2.10, w:2.9, h:0.34, fontFace:FB, fontSize:11.5, bold:true,
    color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
  s.addText("[60]", { x:M+8.9, y:2.46, w:2.9, h:1.0, fontFace:FH, fontSize:60, bold:true,
    color:SLATE, margin:0, valign:"middle" });
  s.addText("Above the line", { x:M+8.9, y:3.58, w:2.9, h:0.3, fontFace:FB, fontSize:11.5,
    bold:true, color:MUTE, margin:0, valign:"middle" });
  s.addText("[A], [C], [B] — carried forward", { x:M+8.9, y:3.88, w:2.95, h:0.6,
    fontFace:FB, fontSize:13, color:BODY, margin:0, valign:"top", lineSpacing:18 });
  s.addText("Below the line", { x:M+8.9, y:4.55, w:2.9, h:0.3, fontFace:FB, fontSize:11.5,
    bold:true, color:MUTE, margin:0, valign:"middle" });
  s.addText("[D], [E] — no further work", { x:M+8.9, y:4.85, w:2.95, h:0.6,
    fontFace:FB, fontSize:13, color:BODY, margin:0, valign:"top", lineSpacing:18 });
  foot(s, "Source: [research programme, fieldwork dates, n = ]. OCV method: see appendix.");
  note(s, "Replace dummy scores with real OCV output, ranked descending. OCV definition and calibration belong in the appendix.");
}

/* ---------------- 9. EVIDENCE + LIMITS ---------------- */
{
  const s = slide();
  eyebrow(s, "THE RIGHT FEATURES  ·  01", GOLDD);
  title(s, "What the scores rest on — and their stated limits");
  const stats = [
    ["[n = 000]", "[Segment] customers in the research base"],
    ["[00 wks]", "Fieldwork window, ending [date]"],
    ["[0 of N]", "Features tested with a live prototype"],
    ["[00]%", "Of segment revenue represented in the sample"],
  ];
  const cw = (CW - 0.75)/4;
  stats.forEach((st,i)=>{
    const x = M + i*(cw+0.25);
    card(s, x, 1.78, cw, 1.85);
    s.addText(st[0], { x:x+0.28, y:2.00, w:cw-0.56, h:0.85, fontFace:FH, fontSize:34, bold:true,
      color:SLATE, margin:0, valign:"middle" });
    s.addText(st[1], { x:x+0.28, y:2.88, w:cw-0.56, h:0.62, fontFace:FB, fontSize:11.5,
      color:BODY, margin:0, valign:"top", lineSpacing:16 });
  });
  s.addText("Known limits of the evidence", { x:M, y:3.95, w:CW, h:0.4, fontFace:FB, fontSize:15,
    bold:true, color:SLATE, margin:0, valign:"middle" });
  bullets(s, [
    "[Sub-segment under-represented, and what that could hide]",
    "[Stated-preference risk: where customers may over-claim intent — SME owners over-claim switching intent in particular]",
    "[Any feature tested by description rather than prototype, and why that matters]",
    "[Why D and E fell out — the demand assumption that did not hold, stated plainly]",
  ], M, 4.40, CW, { h:1.9 });
  note(s, "Evidence base and the losers, combined. If the politics around dropped features are live, split the losers back onto their own slide as in the base template.");
}

/* ---------------- 10. DIVIDER 02 ---------------- */
note(divider("02", "The configuration that pays", "Which levers actually drive earnings?",
  "Price, incentives, channel and defaults — each lever spent only where evidence says it changes behaviour."),
  "Section divider. This section is new versus the base template: it closes the 4Ps decision per surviving feature.");

/* ---------------- 11. EARNINGS BRIDGE (waterfall, shapes) ---------------- */
{
  const s = slide();
  eyebrow(s, "CONFIGURATION  ·  02", GOLDD);
  title(s, "Configuration adds [£X]m to the base case — most of it from [lever]");
  s.addText("[Currency]m annual earnings, year [3] run-rate, surviving features", { x:M, y:1.60, w:9, h:0.32,
    fontFace:FB, fontSize:12, color:MUTE, margin:0, valign:"middle" });
  const baseY = 5.7, scale = 0.55; // inches per unit
  // [label, value, kind] kind: abs=absolute bar, up, down
  const bars = [
    ["Base case\n(list price,\nno levers)", 4.0, "abs"],
    ["[Price\nmove]", 0.9, "up"],
    ["[Switch\nincentive]\nuptake", 1.3, "up"],
    ["Incentive\ncost", -0.7, "down"],
    ["[Channel /\ndefault\nchange]", 0.8, "up"],
    ["Configured\ncase", 6.3, "abs"],
  ];
  let run = 0, x = M + 0.25;
  const bw = 1.62, gap = 0.42;
  bars.forEach((b)=>{
    const v = b[1];
    let top, h;
    if (b[2]==="abs"){ run = v; h = v*scale; top = baseY - h; }
    else if (b[2]==="up"){ h = v*scale; top = baseY - (run+v)*scale; run += v; }
    else { h = (-v)*scale; top = baseY - run*scale; run += v; }
    const col = b[2]==="abs" ? SLATE : (b[2]==="up" ? GOLD : RED);
    s.addShape(p.ShapeType.rect, { x, y:top, w:bw, h:h, fill:{color:col}, line:{color:col, width:1} });
    s.addText((v>0&&b[2]!=="abs"?"+":"") + "[" + v.toFixed(1) + "]", { x, y:top-0.34, w:bw, h:0.3,
      fontFace:FB, fontSize:12, bold:true, color:INK, align:"center", margin:0, valign:"middle" });
    s.addText(b[0], { x:x-0.08, y:baseY+0.10, w:bw+0.16, h:0.9, fontFace:FB, fontSize:10,
      color:BODY, align:"center", margin:0, valign:"top", lineSpacing:12 });
    x += bw + gap;
  });
  s.addText("[Which lever does the work, and which barely moves the number — say it plainly.]",
    { x:M, y:6.28, w:CW, h:0.42, fontFace:FB, fontSize:13, italic:true, color:MUTE, margin:0, valign:"middle" });
  foot(s, "Source: [pricing model, version]. Incentive cost is gross, before clawback terms.");
  note(s, "The bridge makes the configuration case in one look: base earnings from the features, what each lever adds, what the incentives cost back. If incentive cost nearly cancels incentive uptake, this slide says so before a sceptic does.");
}

/* ---------------- 12. INCENTIVE EVIDENCE ---------------- */
{
  const s = slide();
  eyebrow(s, "CONFIGURATION  ·  02", GOLDD);
  title(s, "Incentives are spent only where they beat defaults");
  const rows = [
    ["Defaults beat persuasion", "[Where a default, pre-set option or removal of friction achieves the behaviour free — evidence: regulator trials, own A/B history. These get NO incentive spend.]"],
    ["Incentives buy selection, not behaviour", "[Where incentive uptake concentrates among customers who would have acted anyway — the dead-weight share, estimated from past campaigns.]"],
    ["Where incentives DO pay", "[The moments evidence supports: acquisition and switching moments, primacy formation, first-use activation — with the expected uplift and payback per feature.]"],
  ];
  let y = 1.80;
  rows.forEach((c)=>{
    card(s, M, y, CW, 1.28);
    s.addText(c[0], { x:M+0.42, y:y+0.20, w:4.4, h:0.86, fontFace:FB, fontSize:15, bold:true,
      color:SLATE, margin:0, valign:"middle", lineSpacing:20 });
    s.addText(c[1], { x:M+5.0, y:y+0.20, w:CW-5.5, h:0.9, fontFace:FB, fontSize:13,
      color:BODY, margin:0, valign:"middle", lineSpacing:18 });
    y += 1.46;
  });
  s.addText("The test for every pound of incentive: would this behaviour happen anyway, and could a default achieve it free? Spend survives only if the answer is no twice.",
    { x:M, y:y+0.14, w:CW, h:0.55, fontFace:FB, fontSize:13.5, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "This is the slide that stops the deck being a discount programme with a strategy attached. It applies behavioural evidence (defaults beat persuasion; incentives select) BEFORE sizing any lever.");
}

/* ---------------- 13. CHOSEN CONFIGURATION ---------------- */
{
  const s = slide();
  eyebrow(s, "CONFIGURATION  ·  02", GOLDD);
  title(s, "The configuration per feature, and what each choice is worth");
  const heads = ["Feature","Price","Incentive","Channel / default","Earnings effect","Dead-weight"];
  const colX = [M, M+2.3, M+4.35, M+6.7, M+9.15, M+11.1];
  const colW = [2.3, 2.05, 2.35, 2.45, 1.95, CW-11.1+M-M];
  const rows = [
    ["[Feature A]", "[list]", "none", "[default-on at onboarding]", "[+£0.0m]", "n/a"],
    ["[Feature C]", "[intro, steps to list]", "[switch incentive, capped]", "[RM-led for >£Xk turnover]", "[+£0.0m]", "[00]% est."],
  ];
  let y = 1.85;
  heads.forEach((h,i)=> s.addText(h, { x:colX[i], y:y, w:(i===5?0.95:colW[i]-0.15), h:0.4,
    fontFace:FB, fontSize:11, bold:true, color:SLATE, margin:0, valign:"bottom" }));
  y += 0.48;
  s.addShape(p.ShapeType.line, { x:M, y:y, w:CW, h:0, line:{color:SLATE, width:1.5} });
  y += 0.16;
  rows.forEach((r,ri)=>{
    if (ri % 2 === 0) s.addShape(p.ShapeType.rect, { x:M, y:y-0.05, w:CW, h:0.95, fill:{color:"F5F8FA"}, line:{color:"F5F8FA", width:1} });
    r.forEach((v,ci)=>{
      s.addText(v, { x:colX[ci], y:y, w:(ci===5?0.95:colW[ci]-0.2), h:0.85, fontFace:FB,
        fontSize: ci===0?14:12, bold: ci===0, color: ci===0?INK:BODY, margin:0, valign:"middle", lineSpacing:15 });
    });
    y += 1.0;
  });
  card(s, M, y+0.15, CW, 1.35, "F3EEDD");
  s.addText("The rule applied", { x:M+0.42, y:y+0.31, w:3.0, h:0.32, fontFace:FB, fontSize:11.5,
    bold:true, color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
  s.addText("Every lever above passed the two-part test on the previous page. Levers that failed it — [list the rejected levers] — are not in the configuration, and the earnings they would have claimed are not in the forecast.",
    { x:M+0.42, y:y+0.63, w:CW-1.0, h:0.75, fontFace:FB, fontSize:13, color:"5C4E28", margin:0, valign:"top", lineSpacing:18 });
  note(s, "Configuration is decided per feature, not as a blanket pricing policy. Rejected levers are named - that is what makes the accepted ones credible.");
}

/* ---------------- 14. DIVIDER 03 ---------------- */
note(divider("03", "The route that survives", "Build, buy or partner — per feature?",
  "Each route priced for time, margin share and defensibility. The route sets the discount on the earnings case."),
  "Section divider. Route is decided per configured feature. Its outputs (time, confidence, margin share) discount the section-02 earnings.");

/* ---------------- 15. ROUTE ECONOMICS ---------------- */
{
  const s = slide();
  eyebrow(s, "DELIVERY ROUTE  ·  03", GOLDD);
  title(s, "The routes priced: what each costs in time, margin and control");
  const heads = ["", "[Feature A]", "[Feature C]"];
  const rows = [
    ["Build in-house", "[9 mths] · [£0.0m] capex · full margin", "[18 mths] · [£0.0m] capex · full margin"],
    ["Partner", "[n/a — core capability exists]", "[5 mths] · [rev share 00%] · partner holds [capability]"],
    ["Buy / white-label", "[not available]", "[7 mths] · [unit fee] · thinner differentiation"],
    ["Route verdict", "BUILD — compounds [named core capability]", "PARTNER [name] — speed pays for the margin share"],
  ];
  const colX = [M, M+3.4, M+8.2];
  let y = 1.85;
  heads.forEach((h,i)=> s.addText(h, { x:colX[i], y:y, w:4.4, h:0.4, fontFace:FB, fontSize:13,
    bold:true, color:SLATE, margin:0, valign:"bottom" }));
  y += 0.5;
  s.addShape(p.ShapeType.line, { x:M, y:y, w:CW, h:0, line:{color:SLATE, width:1.5} });
  y += 0.15;
  rows.forEach((r,ri)=>{
    const last = ri===rows.length-1;
    if (last) s.addShape(p.ShapeType.rect, { x:M, y:y-0.05, w:CW, h:0.85, fill:{color:"E4EDF2"}, line:{color:"E4EDF2", width:1} });
    else if (ri % 2 === 0) s.addShape(p.ShapeType.rect, { x:M, y:y-0.05, w:CW, h:0.85, fill:{color:"F5F8FA"}, line:{color:"F5F8FA", width:1} });
    s.addText(r[0], { x:colX[0], y:y, w:3.2, h:0.75, fontFace:FB, fontSize:13, bold:true,
      color:SLATE, margin:0, valign:"middle" });
    s.addText(r[1], { x:colX[1], y:y, w:4.6, h:0.75, fontFace:FB, fontSize:12, bold:last,
      color: last?SLATE:BODY, margin:0, valign:"middle", lineSpacing:16 });
    s.addText(r[2], { x:colX[2], y:y, w:4.4, h:0.75, fontFace:FB, fontSize:12, bold:last,
      color: last?SLATE:BODY, margin:0, valign:"middle", lineSpacing:16 });
    y += 0.90;
  });
  s.addText("An unnamed partner is a build with optimism attached. Every partner row names the counterparty and the margin share.",
    { x:M, y:y+0.14, w:CW, h:0.5, fontFace:FB, fontSize:13, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "Verdicts can differ per feature - that is the point of deciding route at feature level. The verdict row states the reason in the cell, not in a separate paragraph.");
}

/* ---------------- 16. PARTNER DEFENSIBILITY ---------------- */
{
  const s = slide();
  eyebrow(s, "DELIVERY ROUTE  ·  03", GOLDD);
  title(s, "Partnering [C] costs defensibility — here is the bound on that cost");
  const rows = [
    ["What the partner holds", "[The capability, data or customer touchpoint the partner controls under this structure]"],
    ["What we keep", "[The customer relationship, the data rights, the pricing control — the assets that keep the economics ours]"],
    ["Contract bounds", "[Exclusivity in segment · data ownership · exit and portability terms · price re-opener]"],
    ["Re-internalise trigger", "[The volume or margin point at which building in-house pays, and the date it is reviewed]"],
  ];
  let y = 1.80;
  rows.forEach((r)=>{
    card(s, M, y, CW, 1.02);
    s.addText(r[0], { x:M+0.42, y:y+0.13, w:3.8, h:0.76, fontFace:FB, fontSize:14, bold:true,
      color:SLATE, margin:0, valign:"middle" });
    s.addText(r[1], { x:M+4.5, y:y+0.13, w:CW-5.0, h:0.76, fontFace:FB, fontSize:13,
      color:BODY, margin:0, valign:"middle", lineSpacing:18 });
    y += 1.16;
  });
  s.addText("Feasibility asked whether the partner can ship it. This slide asks whether partnering keeps us hard to beat — the two are different questions, and both must pass.",
    { x:M, y:y+0.12, w:CW, h:0.55, fontFace:FB, fontSize:13.5, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "The defensibility check applied to the chosen route. If the partner ends up holding the customer relationship or the data, the earnings survive but the moat does not - and the forecast's later years should be haircut accordingly.");
}

/* ---------------- 17. TIMING + DISCOUNT ---------------- */
{
  const s = slide();
  eyebrow(s, "DELIVERY ROUTE  ·  03", GOLDD);
  title(s, "Priced for delivery: both launches clear the hurdle on their chosen route");
  const rows = [
    ["[Feature A] — build", "[£0.0m]", "[9 mths ±1]", "High", GREEN, "[£0.0m]", "PASS"],
    ["[Feature C] — partner", "[£0.0m]", "[5 mths ±1]", "High", GREEN, "[£0.0m]", "PASS"],
    ["[Feature C] — if built instead", "[£0.0m]", "[18 mths ±4]", "Low", RED, "[£0.0m]", "FAIL"],
  ];
  const heads = ["Feature · route","Configured NPV","Time to launch","Confidence","","Risk-adjusted NPV","Vs hurdle"];
  const colX = [M, M+3.6, M+5.9, M+7.7, 0, M+9.3, M+11.6];
  let y = 2.0;
  [0,1,2,3,5,6].forEach(i=> s.addText(heads[i], { x:colX[i], y:y, w:2.2, h:0.4, fontFace:FB,
    fontSize:11, bold:true, color:SLATE, margin:0, valign:"bottom" }));
  y += 0.48;
  s.addShape(p.ShapeType.line, { x:M, y:y, w:CW, h:0, line:{color:SLATE, width:1.5} });
  y += 0.16;
  rows.forEach((r,ri)=>{
    if (ri % 2 === 0) s.addShape(p.ShapeType.rect, { x:M, y:y-0.05, w:CW, h:0.72, fill:{color:"F5F8FA"}, line:{color:"F5F8FA", width:1} });
    s.addText(r[0], { x:colX[0], y:y, w:3.4, h:0.62, fontFace:FB, fontSize:13, bold:ri<2,
      color: ri<2?INK:MUTE, margin:0, valign:"middle" });
    s.addText(r[1], { x:colX[1], y:y, w:2.1, h:0.62, fontFace:FB, fontSize:13, color:BODY, margin:0, valign:"middle" });
    s.addText(r[2], { x:colX[2], y:y, w:1.7, h:0.62, fontFace:FB, fontSize:13, color:BODY, margin:0, valign:"middle" });
    pill(s, colX[3], y+0.16, r[3].toUpperCase(), r[4]);
    s.addText(r[5], { x:colX[5], y:y, w:2.1, h:0.62, fontFace:FB, fontSize:13, bold:true, color:SLATE, margin:0, valign:"middle" });
    pill(s, colX[6], y+0.16, r[6], r[6]==="PASS" ? GREEN : RED);
    y += 0.76;
  });
  card(s, M, y+0.18, CW, 1.15, "F3EEDD");
  s.addText("Why the third row is on the slide", { x:M+0.42, y:y+0.34, w:4.2, h:0.32, fontFace:FB, fontSize:11.5,
    bold:true, color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
  s.addText("It shows what the partner route is worth: built in-house, [C] misses the hurdle on timing alone. The partner decision is not a preference — it is the difference between launching [C] and dropping it.",
    { x:M+0.42, y:y+0.66, w:CW-1.0, h:0.6, fontFace:FB, fontSize:13, color:"5C4E28", margin:0, valign:"top", lineSpacing:18 });
  note(s, "The counterfactual row is the persuasive device: it prices the route decision. Confidence bands come from the delivery team and the partner's own committed dates, not from the strategy team.");
}

/* ---------------- 18. WHAT WOULD HAVE TO BE TRUE ---------------- */
{
  const s = slide();
  eyebrow(s, "ACROSS ALL THREE DECISIONS", GOLDD);
  title(s, "What would have to be true for this to be the wrong call");
  const rows = [
    ["[OCV overstates demand — adoption runs 00% below case]", "[A] still clears; [C] falls below hurdle", "Watch [activation rate] at [month 3]"],
    ["[Incentive dead-weight exceeds 00%]", "Configuration case halves; revert to defaults-only", "[Incentive redemption vs. new-to-feature mix, monthly]"],
    ["[Partner slips, or captures the customer relationship]", "[C] launch misses the window; moat erodes", "[Contract milestones + data-flow audit at month 2]"],
  ];
  const heads = ["If this turns out to be true…", "…then this changes", "…and how we would know early"];
  const colX = [M, M+4.6, M+8.5];
  const colW = [4.6, 3.9, 3.6];
  let y = 1.82;
  heads.forEach((h,i)=> s.addText(h, { x:colX[i]+(i===0?0.34:0), y:y, w:colW[i]-0.2, h:0.4, fontFace:FB,
    fontSize:11.5, bold:true, color:GOLDD, margin:0, valign:"bottom" }));
  y += 0.5;
  rows.forEach((r)=>{
    card(s, M, y, CW, 1.10);
    s.addText(r[0], { x:colX[0]+0.34, y:y+0.15, w:colW[0]-0.6, h:0.8, fontFace:FB, fontSize:13.5,
      bold:true, color:INK, margin:0, valign:"middle", lineSpacing:18 });
    s.addText(r[1], { x:colX[1], y:y+0.15, w:colW[1]-0.3, h:0.8, fontFace:FB, fontSize:13,
      color:BODY, margin:0, valign:"middle", lineSpacing:18 });
    s.addText(r[2], { x:colX[2], y:y+0.15, w:colW[2]-0.3, h:0.8, fontFace:FB, fontSize:13,
      color:BODY, margin:0, valign:"middle", lineSpacing:18 });
    y += 1.26;
  });
  s.addText("One row per decision. Each has an observable early signal — a risk with no signal is decoration.",
    { x:M, y:y+0.16, w:CW, h:0.5, fontFace:FB, fontSize:13.5, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "The sensitivity slide covers all three decisions, one row each. If a decision has no condition that could overturn it, either the evidence is overwhelming or the row was dodged - the client will know which.");
}

/* ---------------- 19. SO WHAT ---------------- */
{
  const s = slide(true);
  s.addText("SO WHAT", { x:M, y:0.72, w:CW, h:0.34, fontFace:FB, fontSize:12, bold:true,
    color:GOLD, charSpacing:2.6, margin:0, valign:"middle" });
  s.addText("What we need from you this week", { x:M, y:1.08, w:CW, h:0.8, fontFace:FH,
    fontSize:34, bold:true, color:WHITE, margin:0, valign:"middle" });
  const asks = [
    ["Approve", "[A] and [C] into the [cycle] build, configured as slide [13]", "[Owner]", "[Date]"],
    ["Sign", "[Partner] heads of terms for [C] — exclusivity, data, exit as slide [16]", "[Owner]", "[Date]"],
    ["Fund", "[The capability build behind Feature B's re-entry]", "[Owner]", "[Date]"],
    ["Stop", "Work on [D] and [E]; retire the [rejected levers] from the plan", "[Owner]", "[Date]"],
  ];
  let y = 2.10;
  asks.forEach((a,i)=>{
    s.addShape(p.ShapeType.roundRect, { x:M, y:y, w:CW, h:0.88, rectRadius:0.10,
      fill:{ color:"36586A" }, line:{ width:0 } });
    numCircle(s, M+0.34, y+0.21, i+1, 0.46);
    s.addText(a[0], { x:M+1.05, y:y, w:1.5, h:0.88, fontFace:FH, fontSize:19, bold:true,
      color:GOLD, margin:0, valign:"middle" });
    s.addText(a[1], { x:M+2.6, y:y, w:6.4, h:0.88, fontFace:FB, fontSize:14,
      color:WHITE, margin:0, valign:"middle", lineSpacing:18 });
    s.addText(a[2], { x:M+9.1, y:y, w:1.7, h:0.88, fontFace:FB, fontSize:12.5,
      color:"C6DCE7", margin:0, valign:"middle" });
    s.addText(a[3], { x:M+10.9, y:y, w:1.0, h:0.88, fontFace:FB, fontSize:12.5,
      color:"C6DCE7", align:"right", margin:0, valign:"middle" });
    y += 1.04;
  });
  s.addText("Sequencing: [A] first — in-house and shortest. [C]'s partner negotiation runs in parallel; its launch does not wait for [A].",
    { x:M, y:6.42, w:CW, h:0.5, fontFace:FB, fontSize:13.5, italic:true, color:BLUEL, margin:0, valign:"middle" });
  note(s, "Four asks because there are three decisions plus a stop. Every line: verb, owner, date. The partner heads-of-terms is its own ask - it is the one item on this slide the client cannot delegate downward.");
}

/* ---------------- 20. APPENDIX ---------------- */
{
  const s = slide();
  eyebrow(s, "APPENDIX", GOLDD);
  title(s, "Supporting detail");
  const items = [
    ["OCV methodology", "How the metric is constructed, weighted and calibrated"],
    ["Full research findings", "Segment-level results and verbatim evidence"],
    ["Pricing and incentive model", "Lever assumptions, dead-weight estimates, clawback terms"],
    ["Behavioural evidence base", "Defaults vs. persuasion trials; incentive selection effects"],
    ["Partner due diligence", "Counterparty assessment, term sheet detail, exit mechanics"],
    ["Route model", "Build/partner/buy economics per feature, version history"],
  ];
  const cw = (CW-0.35)/2;
  items.forEach((it,i)=>{
    const x = M + (i%2)*(cw+0.35);
    const y = 1.85 + Math.floor(i/2)*1.28;
    card(s, x, y, cw, 1.10);
    s.addText(it[0], { x:x+0.4, y:y+0.16, w:cw-0.8, h:0.4, fontFace:FB, fontSize:15, bold:true,
      color:INK, margin:0, valign:"middle" });
    s.addText(it[1], { x:x+0.4, y:y+0.56, w:cw-0.8, h:0.42, fontFace:FB, fontSize:12.5,
      color:BODY, margin:0, valign:"top" });
  });
  note(s, "Anything a client might challenge has a page here. The behavioural evidence base matters most in this variant - the incentive discipline on slide 12 rests on it.");
}

p.writeFile({ fileName: "segment-proposition-template.pptx" })
 .then(f => console.log("written", f));
