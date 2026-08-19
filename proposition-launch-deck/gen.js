const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.layout = "LAYOUT_WIDE";           // 13.3 x 7.5
p.author = "Proposition launch template";
p.title  = "Proposition Launch Recommendation — Minto template";

const W = 13.3, H = 7.5, M = 0.62, CW = W - 2*M;

const SLATE="2F4858", SLATE_D="20323D", BLUE="4E7C90", BLUEL="8FB3C2",
      GOLD="C9A227", GOLDD="8A6D0F", INK="1F2A31", BODY="3F5563",
      MUTE="64818F", TINT="EEF3F6", RULE="D5DFE4", WHITE="FFFFFF";

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
function kicker(s, t, y){
  s.addText(t, { x:M, y:y, w:CW, h:0.42, fontFace:FB, fontSize:14, color:MUTE,
    italic:true, margin:0, valign:"middle" });
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
function pill(s, x, y, t, fill, tc){
  s.addShape(p.ShapeType.roundRect, { x, y, w:0.92, h:0.30, rectRadius:0.15,
    fill:{color:fill}, line:{color:fill,width:0} });
  s.addText(t, { x, y, w:0.92, h:0.30, fontFace:FB, fontSize:10, bold:true,
    color:tc||WHITE, align:"center", valign:"middle", margin:0, charSpacing:0.6 });
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

/* ---------------- 1. COVER ---------------- */
{
  const s = slide(true);
  s.addText("PROPOSITION LAUNCH RECOMMENDATION", { x:M, y:1.55, w:8.6, h:0.34,
    fontFace:FB, fontSize:12, bold:true, color:GOLD, charSpacing:2.6, margin:0, valign:"middle" });
  s.addText("Which features\nshould we launch?", { x:M, y:2.05, w:8.4, h:2.1, fontFace:FH,
    fontSize:50, bold:true, color:WHITE, lineSpacing:56, margin:0, valign:"top" });
  s.addText("[Client name]   ·   [Month Year]", { x:M, y:4.35, w:8.4, h:0.4, fontFace:FB,
    fontSize:16, color:BLUEL, margin:0, valign:"middle" });
  s.addText("Prepared by [Your name / firm]", { x:M, y:4.78, w:8.4, h:0.4, fontFace:FB,
    fontSize:13, color:"9FBECD", margin:0, valign:"middle" });
  // pyramid motif
  const cx = 10.85, top = 2.15, unit = 0.62, gap = 0.16;
  const widths = [1.05, 2.15, 3.25];
  widths.forEach((wd,i)=>{
    s.addShape(p.ShapeType.roundRect, { x: cx - wd/2, y: top + i*(unit+gap), w: wd, h: unit,
      rectRadius:0.07, fill:{ color: i===0 ? GOLD : (i===1 ? BLUE : "3B6274") }, line:{width:0} });
  });
  s.addText("Answer  →  key line  →  support", { x: cx-2.6, y: top+3*(unit+gap)+0.12, w:5.2, h:0.36,
    fontFace:FB, fontSize:11, color:"9FBECD", align:"center", margin:0, valign:"middle" });
  note(s, "Cover. Replace client name, date and author. The pyramid mark is the deck's motif - it signals that the deck is structured answer-first.");
}

/* ---------------- 2. HOW TO USE ---------------- */
{
  const s = slide();
  eyebrow(s, "TEMPLATE GUIDE — DELETE BEFORE SENDING", GOLDD);
  title(s, "How to use this deck");
  const rows = [
    ["Everything in [square brackets] is yours to replace",
     "Feature names, scores, forecasts and dates are dummy values. Nothing in this file is client data."],
    ["Keep private numbers out of the repository",
     "Fill them in on your own copy. The committed version stays a structure, not a disclosure."],
    ["The headline of every slide is a claim, not a label",
     "'Only A and C show proven pull' works. 'Desirability analysis' does not. If a headline still fits after the answer changes, rewrite it."],
    ["The three tests are hard gates",
     "A feature must clear desirability, viability and feasibility. One failure is out. Change this rule deliberately, not by accident."],
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
  note(s, "Delete this slide before the deck goes to a client. It exists for whoever picks the template up from the repository.");
}

/* ---------------- 3. S-C-Q ---------------- */
{
  const s = slide();
  eyebrow(s, "WHY WE ARE HERE", GOLDD);
  title(s, "The question we set out to answer");
  const items = [
    ["SITUATION", "[N] proposition features sit on the roadmap. Build and launch capacity for the coming cycle is fixed at [capacity]."],
    ["COMPLICATION", "They cannot all ship. Choosing by conviction, or by whoever argues hardest, risks spending the whole cycle on features that never pay back."],
    ["QUESTION", "Which features do we launch, and in what order?"],
  ];
  let y = 1.72;
  items.forEach((it,i)=>{
    const h = [1.18, 1.42, 1.05][i];
    card(s, M, y, CW, h, i===2 ? "E4EDF2" : TINT);
    s.addText(it[0], { x:M+0.42, y:y+0.20, w:3.0, h:0.32, fontFace:FB, fontSize:11.5, bold:true,
      color: i===2 ? SLATE : GOLDD, charSpacing:2, margin:0, valign:"middle" });
    s.addText(it[1], { x:M+0.42, y:y+0.54, w:CW-1.0, h:h-0.72, fontFace:FB,
      fontSize: i===2 ? 19 : 15, bold: i===2, color: i===2 ? SLATE : BODY, margin:0, valign:"top", lineSpacing: i===2?24:20 });
    y += h + 0.22;
  });
  note(s, "Minto's introduction. The Complication is the slide that earns the client's attention - it should describe a real cost of getting the choice wrong, in their words. If you cannot write a Complication the client would recognise, you do not yet understand the brief.");
}

/* ---------------- 4. RECOMMENDATION ---------------- */
{
  const s = slide(true);
  s.addText("RECOMMENDATION", { x:M, y:0.95, w:CW, h:0.34, fontFace:FB, fontSize:12, bold:true,
    color:GOLD, charSpacing:2.6, margin:0, valign:"middle" });
  const lines = [
    ["Launch", "[Feature A] and [Feature C]", "in the coming cycle"],
    ["Stage", "[Feature B]", "behind a capability build"],
    ["Drop", "[Feature D] and [Feature E]", "from the roadmap"],
  ];
  let y = 1.72;
  lines.forEach((l)=>{
    s.addText(l[0], { x:M, y:y, w:1.85, h:0.62, fontFace:FH, fontSize:26, bold:true,
      color:GOLD, margin:0, valign:"middle" });
    s.addText(l[1], { x:M+1.9, y:y, w:6.3, h:0.62, fontFace:FH, fontSize:26, bold:true,
      color:WHITE, margin:0, valign:"middle" });
    s.addText(l[2], { x:M+8.3, y:y+0.06, w:4.0, h:0.5, fontFace:FB, fontSize:15,
      color:BLUEL, margin:0, valign:"middle" });
    y += 0.92;
  });
  s.addShape(p.ShapeType.line, { x:M, y:4.72, w:CW, h:0, line:{ color:"3E6072", width:1 } });
  s.addText("Two features clear all three gates. One fails on delivery timing alone, so it is deferred rather than discarded. Two fail on customer demand and do not come back.",
    { x:M, y:4.95, w:CW-1.2, h:0.9, fontFace:FB, fontSize:15, color:BLUEL, margin:0, valign:"top", lineSpacing:22 });
  note(s, "The governing thought. State it in one breath, with no hedging and no supporting logic on the slide - the whole rest of the deck is the support. If a reader stops here they should still know exactly what you are asking them to do.");
}

/* ---------------- 5. THE THREE REASONS ---------------- */
{
  const s = slide();
  eyebrow(s, "THE ARGUMENT IN ONE PAGE", GOLDD);
  title(s, "Three things are true of [A] and [C], and of nothing else");
  const cols = [
    ["Only [A] and [C] show proven customer pull",
     "They clear the OCV threshold of [score]. [D] and [E] sit well below it, and no amount of build effort moves a demand problem.",
     "Desirability"],
    ["Their economics hold up over the long run",
     "Positive risk-adjusted return once delivery timing is priced in, and the profit survives all three defensibility checks.",
     "Viability"],
    ["Nothing in delivery breaks them",
     "Every capability they need is either in place or buyable inside the launch window. [B] is the only shortlisted feature that is not.",
     "Feasibility"],
  ];
  const cw = (CW - 0.6)/3;
  cols.forEach((c,i)=>{
    const x = M + i*(cw+0.3);
    card(s, x, 1.78, cw, 3.75);
    numCircle(s, x+0.38, 2.12, i+1, 0.52);
    s.addText(c[2].toUpperCase(), { x:x+1.05, y:2.12, w:cw-1.4, h:0.52, fontFace:FB, fontSize:11,
      bold:true, color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
    s.addText(c[0], { x:x+0.38, y:2.88, w:cw-0.76, h:1.15, fontFace:FH, fontSize:19, bold:true,
      color:INK, margin:0, valign:"top", lineSpacing:24 });
    s.addText(c[1], { x:x+0.38, y:4.08, w:cw-0.76, h:1.25, fontFace:FB, fontSize:13,
      color:BODY, margin:0, valign:"top", lineSpacing:19 });
  });
  s.addText("Each point is a reason the recommendation is true — not a category of analysis. Everything that follows supports one of these three.",
    { x:M, y:5.78, w:CW, h:0.5, fontFace:FB, fontSize:13.5, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "The key line. Test each point by asking 'is this a reason the recommendation is true?' If a point would survive unchanged when the answer changes, it is a label, not a reason - rewrite it.");
}

/* ---------------- 6. GATE MATRIX ---------------- */
{
  const s = slide();
  eyebrow(s, "THE SHORTLIST, GATED", GOLDD);
  title(s, "Two of five features clear every gate");
  const heads = ["Feature", "Desirability\nOCV vs threshold", "Viability\nrisk-adjusted return", "Feasibility\ncapability & timing", "Verdict"];
  const rows = [
    ["[Feature A]", "PASS", "PASS", "PASS", "LAUNCH"],
    ["[Feature C]", "PASS", "PASS", "PASS", "LAUNCH"],
    ["[Feature B]", "PASS", "PASS", "FAIL", "STAGE"],
    ["[Feature D]", "FAIL", "—", "—", "DROP"],
    ["[Feature E]", "FAIL", "—", "—", "DROP"],
  ];
  const colX = [M, M+3.1, M+5.4, M+7.7, M+10.3];
  const colW = [3.1, 2.3, 2.3, 2.6, 1.75];
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
    for (let c=1;c<4;c++){
      const v = r[c];
      if (v === "PASS") pill(s, colX[c], y+0.15, "PASS", "2F6B4F");
      else if (v === "FAIL") pill(s, colX[c], y+0.15, "FAIL", "A8443C");
      else s.addText("not tested", { x:colX[c], y:y, w:colW[c]-0.15, h:0.6, fontFace:FB,
        fontSize:12, italic:true, color:"5E7885", margin:0, valign:"middle" });
    }
    const vc = r[4]==="LAUNCH" ? GOLDD : (r[4]==="STAGE" ? BLUE : MUTE);
    s.addText(r[4], { x:colX[4], y:y, w:colW[4], h:0.6, fontFace:FB, fontSize:13, bold:true,
      color:vc, charSpacing:1.2, margin:0, valign:"middle" });
    y += 0.70;
  });
  s.addText("Gates are sequential — a feature that fails desirability is never carried into the viability or feasibility work.",
    { x:M, y:y+0.16, w:CW, h:0.42, fontFace:FB, fontSize:12.5, italic:true, color:MUTE, margin:0, valign:"top" });
  note(s, "The proof, compressed. Most clients will photograph this slide. Keep the gate order honest - if you actually ran all three tests on every feature, say so and remove the 'not tested' cells.");
}

/* ---------------- 7. DIVIDER 01 ---------------- */
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
note(divider("01", "Desirability", "Do customers actually want it?", "Measured with the OCV metric, against a stated threshold."),
     "Section divider. The sub-line states what the section will prove, so a reader skimming dividers still follows the argument.");

/* ---------------- 8. OCV RANKED ---------------- */
{
  const s = slide();
  eyebrow(s, "DESIRABILITY  ·  01", GOLDD);
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
    valGridLine:{ color:"E8EEF1", size:1 }, catGridLine:{ style:"none" },
    barGapWidthPct:55
  });
  card(s, M+8.55, 1.90, CW-8.55, 3.80, TINT);
  s.addText("Threshold", { x:M+8.9, y:2.10, w:2.9, h:0.34, fontFace:FB, fontSize:11.5, bold:true,
    color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
  s.addText("60", { x:M+8.9, y:2.46, w:2.9, h:1.0, fontFace:FH, fontSize:64, bold:true,
    color:SLATE, margin:0, valign:"middle" });
  s.addText("Above the line", { x:M+8.9, y:3.58, w:2.9, h:0.3, fontFace:FB, fontSize:11.5,
    bold:true, color:MUTE, margin:0, valign:"middle" });
  s.addText("[A], [C], [B] — carried into viability", { x:M+8.9, y:3.88, w:2.95, h:0.6,
    fontFace:FB, fontSize:13, color:BODY, margin:0, valign:"top", lineSpacing:18 });
  s.addText("Below the line", { x:M+8.9, y:4.55, w:2.9, h:0.3, fontFace:FB, fontSize:11.5,
    bold:true, color:MUTE, margin:0, valign:"middle" });
  s.addText("[D], [E] — no further work", { x:M+8.9, y:4.85, w:2.95, h:0.6,
    fontFace:FB, fontSize:13, color:BODY, margin:0, valign:"top", lineSpacing:18 });
  foot(s, "Source: [research programme, fieldwork dates, n = ]");
  note(s, "Replace the dummy scores with real OCV output. Rank descending - the eye should find the cut-off without being told where it is.");
}

/* ---------------- 9. THRESHOLD ---------------- */
{
  const s = slide();
  eyebrow(s, "DESIRABILITY  ·  01", GOLDD);
  title(s, "The threshold sits at [60] because [reason]");
  const cols = [
    ["What the threshold represents", "[The OCV level at which observed demand has historically converted into sustained usage rather than trial.]"],
    ["Where it comes from", "[Calibrated against the last N launches: features above this level reached X% adoption; those below stalled.]"],
    ["What happens near the line", "[Feature B sits close. Treated as a pass here, but the sensitivity on slide 19 shows what changes if it is not.]"],
  ];
  let y = 1.80;
  cols.forEach((c)=>{
    card(s, M, y, CW, 1.28);
    s.addText(c[0], { x:M+0.42, y:y+0.20, w:4.4, h:0.86, fontFace:FB, fontSize:15, bold:true,
      color:SLATE, margin:0, valign:"middle", lineSpacing:20 });
    s.addText(c[1], { x:M+5.0, y:y+0.20, w:CW-5.5, h:0.9, fontFace:FB, fontSize:13.5,
      color:BODY, margin:0, valign:"middle", lineSpacing:20 });
    y += 1.46;
  });
  s.addText("A threshold you cannot defend is a number you chose to justify the answer you wanted. Say where it came from.",
    { x:M, y:y+0.16, w:CW, h:0.5, fontFace:FB, fontSize:13.5, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "This is the slide a sceptical client attacks first. Have the calibration data ready even if it stays in the appendix.");
}

/* ---------------- 10. EVIDENCE BASE ---------------- */
{
  const s = slide();
  eyebrow(s, "DESIRABILITY  ·  01", GOLDD);
  title(s, "What the scores rest on");
  const stats = [
    ["[n = 000]", "Customers in the research base"],
    ["[00 wks]", "Fieldwork window, ending [date]"],
    ["[0]", "Segments covered, weighted to [basis]"],
    ["[0 of 5]", "Features tested with a live prototype"],
  ];
  const cw = (CW - 0.75)/4;
  stats.forEach((st,i)=>{
    const x = M + i*(cw+0.25);
    card(s, x, 1.78, cw, 1.85);
    s.addText(st[0], { x:x+0.28, y:2.00, w:cw-0.56, h:0.85, fontFace:FH, fontSize:36, bold:true,
      color:SLATE, margin:0, valign:"middle" });
    s.addText(st[1], { x:x+0.28, y:2.88, w:cw-0.56, h:0.62, fontFace:FB, fontSize:12,
      color:BODY, margin:0, valign:"top", lineSpacing:17 });
  });
  s.addText("Known limits of the evidence", { x:M, y:3.95, w:CW, h:0.4, fontFace:FB, fontSize:15,
    bold:true, color:SLATE, margin:0, valign:"middle" });
  bullets(s, [
    "[Segment or geography under-represented, and what that could hide]",
    "[Stated-preference risk: where customers may over-claim intent]",
    "[Any feature tested by description rather than prototype, and why that matters]",
    "[What we would test next if the decision could wait]",
  ], M, 4.40, CW, { h:1.9 });
  note(s, "Stating the limits yourself is what makes the scores credible. A client who finds the gap before you do stops trusting the numbers.");
}

/* ---------------- 11. WHY D AND E FELL OUT ---------------- */
{
  const s = slide();
  eyebrow(s, "DESIRABILITY  ·  01", GOLDD);
  title(s, "Why [D] and [E] fall out, and why that is not close");
  const cols = [
    ["[Feature D]", "41", ["[What customers said when shown it]", "[The demand assumption that did not hold]", "[Whether a different framing would change this]"]],
    ["[Feature E]", "33", ["[What customers said when shown it]", "[Who it did resonate with, and why that segment is too small]", "[Conditions under which it could return to the list]"]],
  ];
  const cw = (CW - 0.35)/2;
  cols.forEach((c,i)=>{
    const x = M + i*(cw+0.35);
    card(s, x, 1.86, cw, 3.05);
    s.addText(c[0], { x:x+0.42, y:2.08, w:cw-2.0, h:0.5, fontFace:FH, fontSize:22, bold:true,
      color:INK, margin:0, valign:"middle" });
    s.addText("OCV  " + c[1], { x:x+cw-2.05, y:2.08, w:1.65, h:0.5, fontFace:FB, fontSize:15,
      bold:true, color:"A8443C", align:"right", margin:0, valign:"middle" });
    s.addShape(p.ShapeType.line, { x:x+0.42, y:2.68, w:cw-0.84, h:0, line:{color:RULE, width:1} });
    bullets(s, c[2], x+0.42, 2.88, cw-0.84, { h:1.95, size:13.5 });
  });
  s.addText("Naming the losers protects the recommendation. A client who thinks their favourite was never considered will relitigate the whole deck.",
    { x:M, y:5.15, w:CW, h:0.55, fontFace:FB, fontSize:13.5, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "Keep this slide even when the answer feels obvious. It is where internal politics gets settled.");
}

/* ---------------- 12. DIVIDER 02 ---------------- */
note(divider("02", "Viability", "Does the money hold up?", "Forecast first, discounted for delivery timing, then stress-tested for durability."),
     "Section divider. Order matters: base case, then the timing discount, then the durability checks.");

/* ---------------- 13. FORECAST ---------------- */
{
  const s = slide();
  eyebrow(s, "VIABILITY  ·  02", GOLDD);
  title(s, "Both surviving features return above the hurdle by year [3]");
  s.addChart(p.ChartType.bar, [
    { name:"[Feature A]", labels:["Year 1","Year 2","Year 3"], values:[1.2, 3.4, 5.9] },
    { name:"[Feature C]", labels:["Year 1","Year 2","Year 3"], values:[0.8, 2.6, 4.4] },
  ], {
    x:M, y:1.90, w:8.15, h:3.80, barDir:"col", chartColors:[BLUE, GOLD],
    showTitle:false, showLegend:true, legendPos:"t", legendColor:BODY, legendFontFace:FB, legendFontSize:12,
    showValue:true, dataLabelPosition:"outEnd", dataLabelColor:BODY, dataLabelFontFace:FB,
    dataLabelFontSize:11, dataLabelFormatCode:'0.0"m"',
    catAxisLabelColor:BODY, catAxisLabelFontFace:FB, catAxisLabelFontSize:12,
    valAxisLabelColor:MUTE, valAxisLabelFontFace:FB, valAxisLabelFontSize:10,
    valGridLine:{ color:"E8EEF1", size:1 }, catGridLine:{ style:"none" }, barGapWidthPct:65
  });
  card(s, M+8.55, 1.90, CW-8.55, 3.80, TINT);
  s.addText("Base case assumes", { x:M+8.9, y:2.14, w:2.9, h:0.34, fontFace:FB, fontSize:11.5,
    bold:true, color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
  bullets(s, [
    "[Adoption curve and its source]",
    "[Price point and margin]",
    "[Cannibalisation assumed]",
    "[Cost to serve at scale]",
    "[Hurdle rate applied]",
  ], M+8.9, 2.58, 2.95, { h:3.0, size:13 });
  foot(s, "[Currency] m, gross margin contribution. Source: [model name and version]");
  note(s, "Replace with the client's own model output. Show the base case here; the discount for delivery timing comes next, so the reader sees the unadjusted number first.");
}

/* ---------------- 14. TIME-TO-LAUNCH DISCOUNT ---------------- */
{
  const s = slide();
  eyebrow(s, "VIABILITY  ·  02", GOLDD);
  title(s, "Priced for delivery timing, [A] still clears — [B] does not");
  s.addText("Feasibility is not scored separately. It enters the money here: a longer, less certain build pushes revenue out and widens the range, which lowers risk-adjusted return.",
    { x:M, y:1.42, w:CW-0.3, h:0.5, fontFace:FB, fontSize:14, color:BODY, margin:0, valign:"middle" });
  const rows = [
    ["[Feature A]", "[£0.0m]", "[6 mths]", "[£0.0m]", "PASS"],
    ["[Feature C]", "[£0.0m]", "[9 mths]", "[£0.0m]", "PASS"],
    ["[Feature B]", "[£0.0m]", "[18 mths]", "[£0.0m]", "FAIL"],
  ];
  const heads = ["Feature","Base-case NPV","Time to launch","Risk-adjusted NPV","Against hurdle"];
  const colX = [M, M+3.2, M+5.9, M+8.3, M+11.1];
  const colW = [3.2, 2.7, 2.4, 2.8, 1.9];
  let y = 2.15;
  heads.forEach((h,i)=> s.addText(h, { x:colX[i], y:y, w:colW[i]-0.15, h:0.4, fontFace:FB,
    fontSize:11, bold:true, color:SLATE, margin:0, valign:"bottom" }));
  y += 0.48;
  s.addShape(p.ShapeType.line, { x:M, y:y, w:CW, h:0, line:{color:SLATE, width:1.5} });
  y += 0.16;
  rows.forEach((r,ri)=>{
    if (ri % 2 === 0) s.addShape(p.ShapeType.rect, { x:M, y:y-0.05, w:CW, h:0.7, fill:{color:"F5F8FA"}, line:{color:"F5F8FA", width:1} });
    s.addText(r[0], { x:colX[0], y:y, w:colW[0]-0.15, h:0.6, fontFace:FB, fontSize:14, bold:true, color:INK, margin:0, valign:"middle" });
    s.addText(r[1], { x:colX[1], y:y, w:colW[1]-0.15, h:0.6, fontFace:FB, fontSize:14, color:BODY, margin:0, valign:"middle" });
    s.addText(r[2], { x:colX[2], y:y, w:colW[2]-0.15, h:0.6, fontFace:FB, fontSize:14, color:BODY, margin:0, valign:"middle" });
    s.addText(r[3], { x:colX[3], y:y, w:colW[3]-0.15, h:0.6, fontFace:FB, fontSize:14, bold:true, color:SLATE, margin:0, valign:"middle" });
    pill(s, colX[4], y+0.15, r[4], r[4]==="PASS" ? "2F6B4F" : "A8443C");
    y += 0.72;
  });
  card(s, M, 5.28, CW, 1.10, "F3EEDD");
  s.addText("Why this matters", { x:M+0.42, y:5.44, w:2.6, h:0.32, fontFace:FB, fontSize:11.5,
    bold:true, color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
  s.addText("Three separate scores invite an average, and an average hides which dimension is driving the answer. Folding timing into the money leaves two comparable things: demand and return.",
    { x:M+0.42, y:5.76, w:CW-1.0, h:0.5, fontFace:FB, fontSize:13.5, color:"5C4E28", margin:0, valign:"top" });
  note(s, "The structural move of the whole deck. Be explicit about the discount method - a stated haircut the client can argue with beats a black box.");
}

/* ---------------- 15. THREE CHECKS SUMMARY ---------------- */
{
  const s = slide();
  eyebrow(s, "VIABILITY  ·  02  ·  DEFENSIBILITY", GOLDD);
  title(s, "A forecast is only as good as what protects it");
  s.addText("Three checks, applied to the numbers rather than to the feature. Each one ends in a verdict on the forecast: hold, haircut, or reject.",
    { x:M, y:1.36, w:CW-0.3, h:0.44, fontFace:FB, fontSize:14, color:BODY, margin:0, valign:"middle" });
  const cols = [
    ["Is there money here?", "Robust profit pool", "The pool is large enough, and structurally stable enough, to be worth entering.", "Attractive"],
    ["Can we win it?", "Linked to core competence", "The feature compounds something we are already better at — it is not a bolt-on any competitor could match.", "Ours to win"],
    ["Can we keep it?", "Sustained leadership economics", "We can hold a cost or scale advantage in delivering it, so the return does not erode as others enter.", "Ours to keep"],
  ];
  const cw = (CW - 0.6)/3;
  cols.forEach((c,i)=>{
    const x = M + i*(cw+0.3);
    card(s, x, 2.00, cw, 3.45);
    numCircle(s, x+0.38, 2.32, i+1, 0.52);
    s.addText(c[3].toUpperCase(), { x:x+1.05, y:2.32, w:cw-1.4, h:0.52, fontFace:FB, fontSize:10.5,
      bold:true, color:GOLDD, charSpacing:1.8, margin:0, valign:"middle" });
    s.addText(c[0], { x:x+0.38, y:3.02, w:cw-0.76, h:0.5, fontFace:FH, fontSize:20, bold:true,
      color:INK, margin:0, valign:"middle" });
    s.addText(c[1], { x:x+0.38, y:3.56, w:cw-0.76, h:0.6, fontFace:FB, fontSize:13, bold:true,
      color:BLUE, margin:0, valign:"top", lineSpacing:18 });
    s.addText(c[2], { x:x+0.38, y:4.18, w:cw-0.76, h:1.1, fontFace:FB, fontSize:12.5,
      color:BODY, margin:0, valign:"top", lineSpacing:18 });
  });
  s.addText("Check 1 is about the market. Checks 2 and 3 are about us — one asks why we would win, the other why we would still be winning in [3] years.",
    { x:M, y:5.62, w:CW, h:0.5, fontFace:FB, fontSize:13.5, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "Keep the three questions in plain language on the slide and the framework language underneath it. Clients argue with 'can we keep it' far more usefully than with 'leadership economics'.");
}

/* ---------------- 16-18. CHECK DETAIL ---------------- */
const checks = [
  { n:1, tag:"ATTRACTIVE", head:"Robust profit pool",
    claim:"The pool is [size] and growing at [rate], and its shape is not eroding",
    left:[["Where the profit actually sits","[Which part of the value chain holds the margin today, and who holds it]"],
          ["What could compress it","[Regulation, commoditisation, a substitute, a large entrant repricing the category]"],
          ["Our read","[Whether the pool is durable over the forecast horizon, and the evidence for that]"]],
    verdict:"Forecast verdict: [hold / haircut years 3+ by X% / reject]" },
  { n:2, tag:"OURS TO WIN", head:"Linked to core competence",
    claim:"[Feature A] compounds [named capability]; it is not a bolt-on",
    left:[["The capability it draws on","[Name the specific thing we are already better at, and the evidence we are better at it]"],
          ["Why a competitor cannot simply copy it","[What they would have to build, buy or unlearn first, and how long that takes]"],
          ["How this differs from feasibility","[Feasibility asks whether we can ship it. This asks whether shipping it makes us harder to beat.]"]],
    verdict:"Forecast verdict: [hold / haircut / reject]" },
  { n:3, tag:"OURS TO KEEP", head:"Sustained leadership economics",
    claim:"We can hold a [cost / scale / data] advantage of [amount] as the category matures",
    left:[["The advantage we would hold","[Unit cost, scale curve, distribution, data feedback loop — and its current size]"],
          ["What happens when others enter","[Expected price and share response, and the point at which our advantage stops paying]"],
          ["What we must keep doing","[The investment or behaviour the advantage depends on — the thing that quietly lapses]"]],
    verdict:"Forecast verdict: [hold / haircut terminal value / reject]" },
];
checks.forEach(ch=>{
  const s = slide();
  eyebrow(s, "VIABILITY  ·  02  ·  CHECK " + ch.n + " OF 3", GOLDD);
  title(s, ch.claim);
  numCircle(s, M, 1.86, ch.n, 0.52);
  s.addText(ch.tag + "   ·   " + ch.head, { x:M+0.68, y:1.86, w:9.0, h:0.52, fontFace:FB,
    fontSize:12.5, bold:true, color:BLUE, charSpacing:1.4, margin:0, valign:"middle" });
  let y = 2.44;
  ch.left.forEach(r=>{
    card(s, M, y, CW, 1.02);
    s.addText(r[0], { x:M+0.42, y:y+0.13, w:4.2, h:0.76, fontFace:FB, fontSize:14.5, bold:true,
      color:SLATE, margin:0, valign:"middle", lineSpacing:19 });
    s.addText(r[1], { x:M+4.9, y:y+0.13, w:CW-5.4, h:0.76, fontFace:FB, fontSize:13.5,
      color:BODY, margin:0, valign:"middle", lineSpacing:19 });
    y += 1.14;
  });
  card(s, M, y+0.08, CW, 0.74, "E4EDF2");
  s.addText(ch.verdict, { x:M+0.42, y:y+0.08, w:CW-0.84, h:0.74, fontFace:FB, fontSize:14.5,
    bold:true, color:SLATE, margin:0, valign:"middle" });
  note(s, "Each check must terminate in a decision about the numbers, not a paragraph of colour. If the check does not change the forecast, say so explicitly - that is still a finding.");
});

/* ---------------- 19. WHAT WOULD HAVE TO BE TRUE ---------------- */
{
  const s = slide();
  eyebrow(s, "VIABILITY  ·  02", GOLDD);
  title(s, "What would have to be true for this to be the wrong call");
  const rows = [
    ["[Adoption runs [00]% below the base case]", "[A] still clears; [C] falls below the hurdle", "Watch [named early indicator] at [month]"],
    ["[Time to launch slips by [0] months]", "[C] moves to the same position as [B] today", "Gate at [milestone] before committing spend"],
    ["[A competitor launches [equivalent] first]", "Leadership economics no longer hold for [A]", "Reassess if [signal] appears before [date]"],
  ];
  const heads = ["If this turns out to be true…", "…then this changes", "…and this is how we would know early"];
  const colX = [M, M+4.6, M+8.5];
  const colW = [4.6, 3.9, 3.6];
  let y = 1.82;
  heads.forEach((h,i)=> s.addText(h, { x:colX[i]+(i===0?0.34:0), y:y, w:colW[i]-0.2, h:0.4, fontFace:FB,
    fontSize:11.5, bold:true, color:GOLDD, margin:0, valign:"bottom" }));
  y += 0.5;
  rows.forEach((r)=>{
    card(s, M, y, CW, 1.10);
    s.addText(r[0], { x:colX[0]+0.34, y:y+0.15, w:colW[0]-0.6, h:0.8, fontFace:FB, fontSize:14,
      bold:true, color:INK, margin:0, valign:"middle", lineSpacing:19 });
    s.addText(r[1], { x:colX[1], y:y+0.15, w:colW[1]-0.3, h:0.8, fontFace:FB, fontSize:13.5,
      color:BODY, margin:0, valign:"middle", lineSpacing:19 });
    s.addText(r[2], { x:colX[2], y:y+0.15, w:colW[2]-0.3, h:0.8, fontFace:FB, fontSize:13.5,
      color:BODY, margin:0, valign:"middle", lineSpacing:19 });
    y += 1.26;
  });
  s.addText("Naming the conditions that would overturn the recommendation is what separates a decision paper from a sales document.",
    { x:M, y:y+0.16, w:CW, h:0.5, fontFace:FB, fontSize:13.5, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "Every row needs an early indicator the client can actually observe. A risk with no observable signal is decoration.");
}

/* ---------------- 20. DIVIDER 03 ---------------- */
note(divider("03", "Feasibility", "Can we build and ship it in time?", "Capabilities, timing and dependencies — the inputs that priced the forecast."),
     "Section divider. Feasibility is last because its output has already been used - it set the discount in the viability section.");

/* ---------------- 21. CAPABILITIES ---------------- */
{
  const s = slide();
  eyebrow(s, "FEASIBILITY  ·  03", GOLDD);
  title(s, "What each shortlisted feature needs from us");
  const feats = [["[Feature A]", ["[Capability 1]","[Capability 2]","[Capability 3]"]],
                 ["[Feature C]", ["[Capability 1]","[Capability 2]","[Capability 3]"]],
                 ["[Feature B]", ["[Capability 1]","[Capability 2]","[Capability 3]"]]];
  const cw = (CW - 0.6)/3;
  feats.forEach((f,i)=>{
    const x = M + i*(cw+0.3);
    card(s, x, 1.86, cw, 2.85);
    s.addText(f[0], { x:x+0.38, y:2.08, w:cw-0.76, h:0.5, fontFace:FH, fontSize:21, bold:true,
      color:INK, margin:0, valign:"middle" });
    s.addShape(p.ShapeType.line, { x:x+0.38, y:2.68, w:cw-0.76, h:0, line:{color:RULE, width:1} });
    bullets(s, f[1], x+0.38, 2.88, cw-0.76, { h:1.7, size:13.5 });
  });
  s.addText("List capabilities, not tasks. 'Real-time pricing engine' is a capability; 'build the API' is a task, and tasks hide how much is genuinely new.",
    { x:M, y:4.98, w:CW, h:0.5, fontFace:FB, fontSize:13.5, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "Keep the same capability names here as on the have/buy/build slide, or the two will not reconcile under questioning.");
}

/* ---------------- 22. HAVE / BUY / BUILD ---------------- */
{
  const s = slide();
  eyebrow(s, "FEASIBILITY  ·  03", GOLDD);
  title(s, "Only [Feature B] depends on something we must build from scratch");
  const cols = [
    ["HAVE", "In place today", "2F6B4F", ["[Capability — used by A and C]","[Capability — used by A]","[Capability — used by C]"]],
    ["BUY", "Available in [0–0] months", "B07A1E", ["[Capability — vendor or partner named]","[Capability — vendor or partner named]"]],
    ["BUILD", "[00]+ months, no shortcut", "A8443C", ["[Capability — needed only by B]","[Capability — needed only by B]"]],
  ];
  const cw = (CW - 0.6)/3;
  cols.forEach((c,i)=>{
    const x = M + i*(cw+0.3);
    card(s, x, 1.80, cw, 3.35);
    s.addShape(p.ShapeType.roundRect, { x:x+0.38, y:2.05, w:1.15, h:0.36, rectRadius:0.17,
      fill:{color:c[2]}, line:{width:0} });
    s.addText(c[0], { x:x+0.38, y:2.05, w:1.15, h:0.36, fontFace:FB, fontSize:11, bold:true,
      color:WHITE, align:"center", valign:"middle", margin:0, charSpacing:1 });
    s.addText(c[1], { x:x+0.38, y:2.55, w:cw-0.76, h:0.42, fontFace:FH, fontSize:17, bold:true,
      color:INK, margin:0, valign:"middle" });
    bullets(s, c[3], x+0.38, 3.08, cw-0.76, { h:1.9, size:13 });
  });
  s.addText("This slide is the source of the timing discount applied on the viability side — the two must agree.",
    { x:M, y:5.38, w:CW, h:0.5, fontFace:FB, fontSize:13.5, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "If a capability is 'buy', name the vendor or partner. An unnamed buy is a build with optimism attached.");
}

/* ---------------- 23. TIME TO LAUNCH ---------------- */
{
  const s = slide();
  eyebrow(s, "FEASIBILITY  ·  03", GOLDD);
  title(s, "Time to launch, and how confident we are in it");
  const rows = [
    ["[Feature A]", "[6 mths]", "[±1 mth]", "High", "2F6B4F", "[Why the range is tight]"],
    ["[Feature C]", "[9 mths]", "[±2 mths]", "Medium", "B07A1E", "[What drives the uncertainty]"],
    ["[Feature B]", "[18 mths]", "[±6 mths]", "Low", "A8443C", "[The unknown that widens the band]"],
  ];
  const heads = ["Feature","Expected","Range","Confidence","What sets the range"];
  const colX = [M, M+2.9, M+4.6, M+6.3, M+8.4];
  const colW = [2.9, 1.7, 1.7, 2.1, CW-8.4+M-M];
  let y = 1.85;
  heads.forEach((h,i)=> s.addText(h, { x:colX[i], y:y, w:(i===4?4.4:colW[i]-0.15), h:0.4,
    fontFace:FB, fontSize:11.5, bold:true, color:SLATE, margin:0, valign:"bottom" }));
  y += 0.48;
  s.addShape(p.ShapeType.line, { x:M, y:y, w:CW, h:0, line:{color:SLATE, width:1.5} });
  y += 0.16;
  rows.forEach((r,ri)=>{
    if (ri % 2 === 0) s.addShape(p.ShapeType.rect, { x:M, y:y-0.05, w:CW, h:0.78, fill:{color:"F5F8FA"}, line:{color:"F5F8FA", width:1} });
    s.addText(r[0], { x:colX[0], y:y, w:colW[0]-0.15, h:0.68, fontFace:FB, fontSize:14.5, bold:true, color:INK, margin:0, valign:"middle" });
    s.addText(r[1], { x:colX[1], y:y, w:colW[1]-0.15, h:0.68, fontFace:FB, fontSize:14, color:BODY, margin:0, valign:"middle" });
    s.addText(r[2], { x:colX[2], y:y, w:colW[2]-0.15, h:0.68, fontFace:FB, fontSize:14, color:BODY, margin:0, valign:"middle" });
    pill(s, colX[3], y+0.19, r[3].toUpperCase(), r[4]);
    s.addText(r[5], { x:colX[4], y:y, w:4.4, h:0.68, fontFace:FB, fontSize:13, color:BODY, margin:0, valign:"middle" });
    y += 0.80;
  });
  card(s, M, 5.18, CW, 1.28, "F3EEDD");
  s.addText("Where this goes next", { x:M+0.42, y:5.34, w:3.2, h:0.32, fontFace:FB, fontSize:11.5,
    bold:true, color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
  s.addText("These three numbers are the only feasibility output that leaves this section. They set the discount applied to base-case NPV — a wider band costs more than a longer timeline, because it is the uncertainty the business has to carry.",
    { x:M+0.42, y:5.66, w:CW-1.0, h:0.7, fontFace:FB, fontSize:13.5, color:"5C4E28", margin:0, valign:"top", lineSpacing:19 });
  note(s, "Confidence should come from the delivery team, not the strategy team. If they will not give you a range, that itself is the finding.");
}

/* ---------------- 24. DEPENDENCIES ---------------- */
{
  const s = slide();
  eyebrow(s, "FEASIBILITY  ·  03", GOLDD);
  title(s, "[Feature B] is deferred, not dropped — here is what would change that");
  const left = [
    ["The blocker", "[The single capability or dependency that sets B's 18-month path]"],
    ["What it would take", "[Investment, partner, or decision that shortens it — with the owner named]"],
    ["When to revisit", "[The milestone or date at which B is re-scored, not re-argued]"],
  ];
  let y = 1.85;
  left.forEach(r=>{
    card(s, M, y, 7.6, 1.15);
    s.addText(r[0], { x:M+0.38, y:y+0.18, w:2.3, h:0.8, fontFace:FB, fontSize:14, bold:true,
      color:SLATE, margin:0, valign:"middle" });
    s.addText(r[1], { x:M+2.85, y:y+0.18, w:4.5, h:0.82, fontFace:FB, fontSize:13,
      color:BODY, margin:0, valign:"middle", lineSpacing:18 });
    y += 1.32;
  });
  card(s, M+7.95, 1.85, CW-7.95, 3.79, "E4EDF2");
  s.addText("Gating risks across the launch", { x:M+8.33, y:2.08, w:4.0, h:0.4, fontFace:FB,
    fontSize:14.5, bold:true, color:SLATE, margin:0, valign:"middle" });
  bullets(s, [
    "[Dependency on another programme, and its date]",
    "[Regulatory or compliance gate]",
    "[Single point of delivery risk — team, vendor or system]",
    "[Anything that must be true before spend is committed]",
  ], M+8.33, 2.58, CW-8.7, { h:2.7, size:13 });
  note(s, "Deferral needs a re-entry condition, or B quietly becomes a permanent 'later'. Name a date and an owner.");
}

/* ---------------- 25. SO WHAT ---------------- */
{
  const s = slide(true);
  s.addText("SO WHAT", { x:M, y:0.82, w:CW, h:0.34, fontFace:FB, fontSize:12, bold:true,
    color:GOLD, charSpacing:2.6, margin:0, valign:"middle" });
  s.addText("What we need from you this week", { x:M, y:1.20, w:CW, h:0.8, fontFace:FH,
    fontSize:36, bold:true, color:WHITE, margin:0, valign:"middle" });
  const asks = [
    ["Approve", "[Feature A] and [Feature C] into the [cycle] build", "[Decision owner]", "[Date]"],
    ["Fund", "[The capability build that unblocks Feature B]", "[Decision owner]", "[Date]"],
    ["Stop", "Further work on [Feature D] and [Feature E]", "[Decision owner]", "[Date]"],
  ];
  let y = 2.35;
  asks.forEach((a,i)=>{
    s.addShape(p.ShapeType.roundRect, { x:M, y:y, w:CW, h:0.95, rectRadius:0.10,
      fill:{ color:"36586A" }, line:{ width:0 } });
    numCircle(s, M+0.34, y+0.245, i+1, 0.46);
    s.addText(a[0], { x:M+1.05, y:y, w:1.5, h:0.95, fontFace:FH, fontSize:20, bold:true,
      color:GOLD, margin:0, valign:"middle" });
    s.addText(a[1], { x:M+2.6, y:y, w:6.0, h:0.95, fontFace:FB, fontSize:15,
      color:WHITE, margin:0, valign:"middle" });
    s.addText(a[2], { x:M+8.45, y:y, w:1.95, h:0.95, fontFace:FB, fontSize:13,
      color:"C6DCE7", margin:0, valign:"middle" });
    s.addText(a[3], { x:M+10.45, y:y, w:1.25, h:0.95, fontFace:FB, fontSize:13,
      color:"C6DCE7", align:"right", margin:0, valign:"middle" });
    y += 1.12;
  });
  s.addText("Sequencing: [Feature A] first — it is the shorter build and de-risks the shared capability [C] depends on.",
    { x:M, y:5.90, w:CW, h:0.5, fontFace:FB, fontSize:14, italic:true, color:BLUEL, margin:0, valign:"middle" });
  note(s, "Close on decisions, not on a summary. Every line needs a verb, an owner and a date - otherwise the meeting ends in agreement and nothing moves.");
}

/* ---------------- 26. APPENDIX ---------------- */
{
  const s = slide();
  eyebrow(s, "APPENDIX", GOLDD);
  title(s, "Supporting detail");
  const items = [
    ["OCV methodology", "How the metric is constructed, weighted and calibrated"],
    ["Full research findings", "Segment-level results and verbatim evidence"],
    ["Forecast model", "Assumptions, sensitivities and version history"],
    ["Capability assessment", "Detail behind the have / buy / build classification"],
    ["Competitor scan", "Evidence behind the defensibility checks"],
    ["Features considered and excluded earlier", "Anything cut before the shortlist, and why"],
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
  note(s, "Appendix contents. Anything a client might challenge should have a page here, even if you never turn to it.");
}

p.writeFile({ fileName: "proposition-launch-template.pptx" })
 .then(f => console.log("written", f));
