/* Proposition backlog template — BARCLAYS-BRANDED build.
   Palette and conventions abstracted from Barclays Q1 2026 Results
   Presentation (home.barclays investor relations): cyan action titles,
   navy data colour, pale-blue cards, grey comparisons, white slides,
   top-right caption line, Expert Sans.
   Archetype #6: "What do we build, in what order?"
   One question, one rule-plus-first-output answer, three reasons:
   demand admits / return-per-slot sorts / capacity cuts.
   Shipped as a WORKED EXAMPLE (exporting SMEs, 'Trade Ready') with dummy
   numbers throughout — the client replaces every name and figure.        */

const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.layout = "LAYOUT_WIDE";
p.author = "Proposition backlog template";
p.title  = "Proposition Backlog Recommendation — Minto template";

const W = 13.3, H = 7.5, M = 0.62, CW = W - 2*M;

const SLATE="00395D", BLUE="007FBD", BLUEL="6CB9E3", GOLD="00AEEF", GOLDD="0083C5",
      INK="00395D", BODY="3F5563", MUTE="6E7F8D", TINT="D9EEF9", RULE="C9DDE8",
      WHITE="FFFFFF", GREEN="2F6B4F", RED="A8443C", AMBER="B07A1E", GREY="BFBFBF";

const FH = "Expert Sans", FB = "Expert Sans";
const sh = () => ({ type:"outer", color:"9FB2BC", blur:10, offset:2, angle:90, opacity:0.28 });

function slide(dark){
  const s = p.addSlide();
  s.background = { color: dark ? SLATE : WHITE };
  if (dark) s.addShape(p.ShapeType.rect, { x:-0.06, y:-0.06, w:W+0.12, h:H+0.12,
    fill:{color:SLATE}, line:{color:SLATE, width:1} });
  return s;
}
function title(s, t, opt={}){
  s.addText(t, { x:M, y:opt.y||0.60, w:CW-1.6, h:1.06, fontFace:FH, fontSize:opt.size||25,
    bold:false, color:opt.color||GOLD, align:"left", valign:"top", margin:0, lineSpacing:30 });
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
    color:WHITE, align:"center", valign:"middle", margin:0 });
}
function pill(s, x, y, t, fill, w){
  const pw = w||0.92;
  s.addShape(p.ShapeType.roundRect, { x, y, w:pw, h:0.30, rectRadius:0.15,
    fill:{color:fill}, line:{color:fill,width:0} });
  s.addText(t, { x, y, w:pw, h:0.30, fontFace:FB, fontSize:10, bold:true,
    color:WHITE, align:"center", valign:"middle", margin:0, charSpacing:0.6 });
}
function note(s, t){ s.addNotes(t); }
function pagetag(s, n){
  s.addText([{ text:"Proposition backlog  |  [Month Year]  ", options:{ color:MUTE, breakLine:false } },
             { text:"|  " + n, options:{ color:MUTE, breakLine:false } }],
    { x:W-3.2, y:0.28, w:2.6, h:0.3, fontFace:FB, fontSize:8.5, align:"right", margin:0, valign:"middle" });
}
function foot(s, t){
  s.addText(t, { x:M, y:H-0.80, w:CW, h:0.32, fontFace:FB, fontSize:10, color:MUTE, margin:0, valign:"middle" });
}
function bullets(s, items, x, y, w, opt={}){
  s.addText(items.map((t,i)=>({ text:t, options:{ bullet:{code:"2022"}, breakLine: i<items.length-1 } })),
    { x, y, w, h: opt.h||1.6, fontFace:FB, fontSize:opt.size||13.5, color:opt.color||BODY,
      lineSpacing: opt.ls||19, paraSpaceAfter: 7, margin:0, valign:"top" });
}
function divider(n, kickerTxt, headline, sub){
  const s = slide();
  s.addShape(p.ShapeType.rect, { x:0, y:0, w:W, h:0.14, fill:{color:GOLD}, line:{color:GOLD, width:1} });
  s.addText(n, { x:M, y:2.05, w:2.6, h:1.6, fontFace:FH, fontSize:88, bold:true, color:"BFE4F7", margin:0, valign:"middle" });
  s.addText(kickerTxt.toUpperCase(), { x:M+2.55, y:2.22, w:9.4, h:0.4, fontFace:FB, fontSize:12,
    bold:true, color:GOLDD, charSpacing:2.6, margin:0, valign:"middle" });
  s.addText(headline, { x:M+2.55, y:2.62, w:9.4, h:1.0, fontFace:FH, fontSize:34, bold:false,
    color:SLATE, margin:0, valign:"middle" });
  s.addText(sub, { x:M+2.55, y:3.66, w:9.2, h:0.7, fontFace:FB, fontSize:14, color:BODY,
    margin:0, valign:"top", lineSpacing:21 });
  return s;
}

/* ---------------- 1. COVER ---------------- */
{
  const s = slide();
  s.addShape(p.ShapeType.rect, { x:0, y:0, w:W, h:0.22, fill:{color:GOLD}, line:{color:GOLD, width:1} });
  s.addText("PROPOSITION BACKLOG RECOMMENDATION", { x:M, y:1.45, w:8.6, h:0.34,
    fontFace:FB, fontSize:12, bold:true, color:GOLDD, charSpacing:2.6, margin:0, valign:"middle" });
  s.addText("What do we build,\nand in what order?", { x:M, y:1.95, w:8.4, h:2.1, fontFace:FH,
    fontSize:48, bold:false, color:GOLD, lineSpacing:54, margin:0, valign:"top" });
  s.addText("A rule that sorts the backlog · this cycle's slate · a re-score cadence", { x:M, y:4.15, w:8.6, h:0.4,
    fontFace:FB, fontSize:15, color:SLATE, margin:0, valign:"middle" });
  s.addText("Worked example: exporting SMEs · all names and numbers are dummy values",
    { x:M, y:4.65, w:9.2, h:0.4, fontFace:FB, fontSize:12, color:MUTE, margin:0, valign:"middle" });
  s.addText("[Team / function]   ·   [Month Year]", { x:M, y:6.55, w:8, h:0.4, fontFace:FB, fontSize:12,
    color:MUTE, margin:0, valign:"middle" });
  const cx = 10.85, top = 2.15, unit = 0.62, gap = 0.16;
  [1.05, 2.15, 3.25].forEach((wd,i)=>{
    s.addShape(p.ShapeType.roundRect, { x: cx - wd/2, y: top + i*(unit+gap), w: wd, h: unit,
      rectRadius:0.07, fill:{ color: i===0 ? GOLD : (i===1 ? SLATE : TINT) }, line:{width:0} });
  });
  s.addText("Answer  →  key line  →  support", { x: cx-2.6, y: top+3*(unit+gap)+0.12, w:5.2, h:0.36,
    fontFace:FB, fontSize:11, color:MUTE, align:"center", margin:0, valign:"middle" });
  note(s, "Cover, Barclays IR style: white ground, cyan rule and title, navy support. Add the standard divisional cover image via the corporate template if required.");
}

/* ---------------- 2. HOW TO USE ---------------- */
{
  const s = slide();
  eyebrow(s, "TEMPLATE GUIDE — DELETE BEFORE SENDING", GOLDD);
  title(s, "How to use this deck");
  const rows = [
    ["Every name and number is a dummy value",
     "Exporting SMEs, 'Trade Ready', FX, the scores and the returns are a worked example. Replace all of them with your client's own."],
    ["The answer is a rule plus this cycle's slate",
     "The client approves the sorting rule AND the first output. That is what makes the backlog durable: next cycle re-runs the rule, not the argument."],
    ["The sort key is return per build slot, not raw NPV",
     "Capacity is the scarce thing. A big feature that eats two slots can lose to two small ones. The worked example shows exactly this: insurance beats invoice finance on raw NPV and still sorts below it."],
    ["Demand gates admission; nothing buys a queue place",
     "A feature below the demand gate never gets priced. This protects the backlog from model optimism dressed as ambition."],
  ];
  let y = 1.62;
  rows.forEach((r,i)=>{
    card(s, M, y, CW, 1.16);
    numCircle(s, M+0.34, y+0.35, i+1);
    s.addText(r[0], { x:M+1.05, y:y+0.16, w:CW-1.5, h:0.38, fontFace:FB, fontSize:15,
      bold:true, color:INK, margin:0, valign:"middle" });
    s.addText(r[1], { x:M+1.05, y:y+0.54, w:CW-1.5, h:0.56, fontFace:FB, fontSize:12,
      color:BODY, margin:0, valign:"top", lineSpacing:16 });
    y += 1.32;
  });
  note(s, "Delete this slide before the deck goes to a client.");
}

/* ---------------- 2b. COPILOT INSTRUCTIONS ---------------- */
{
  const s = slide();
  eyebrow(s, "FOR COPILOT — DELETE BEFORE SENDING", GOLDD);
  title(s, "Copilot: how to insert client data and apply the brand", { size: 24 });
  // left column: data protocol
  card(s, M, 1.62, 5.95, 4.55);
  s.addText("A — Replace the example data", { x:M+0.32, y:1.80, w:5.3, h:0.34, fontFace:FB, fontSize:12.5,
    bold:true, color:SLATE, margin:0, valign:"middle" });
  s.addText([
    ["1. ", "Replace every example value: segment, the five features, demand scores, returns, slots, partner, the wrapper name, dates and owners. The method pages (23\u201326) state which analysis produces each number and which slides it feeds."],
    ["2. ", "Numbers must reconcile across slides. Check: bridge total (13) = the earnings in the governing thought (4) \u00b7 per-slot returns (12) = risk-adjusted NPV (15) \u00f7 slots \u00b7 demand scores identical on 6 and 8 \u00b7 statuses on 6 match sections 01\u201303. If one changes, change all."],
    ["3. ", "Rewrite every headline as a claim about the client's answer. If a headline still fits after the answer changed, it was a label \u2014 rewrite it."],
    ["4. ", "Do not add, remove or reorder slides. Do not move content between sections. Do not invent data \u2014 ask for any missing input."],
  ].map((r,i)=>[{ text:r[0], options:{ bold:true, color:GOLDD, breakLine:false } },
                { text:r[1], options:{ breakLine:true } }]).flat(),
    { x:M+0.32, y:2.18, w:5.35, h:3.85, fontFace:FB, fontSize:10.5, color:BODY,
      lineSpacing:14, paraSpaceAfter:8, margin:0, valign:"top" });
  // right column: brand protocol
  card(s, M+6.25, 1.62, CW-6.25, 4.55);
  s.addText("B — Apply the client brand", { x:M+6.57, y:1.80, w:5.3, h:0.34, fontFace:FB, fontSize:12.5,
    bold:true, color:SLATE, margin:0, valign:"middle" });
  s.addText([
    ["5. ", "Apply the client's template through the slide master (Design \u2192 theme). Do not restyle shapes one by one, and do not redesign layouts."],
    ["6. ", "This build already carries the Barclays IR palette (from the Q1 2026 results deck): cyan 00AEEF = titles, accents, chart highlight \u00b7 navy 00395D = data colour, panel headers, dark cells \u00b7 pale blue D9EEF9 = cards \u00b7 grey BFBFBF = comparisons and negatives. Do not remap these."],
    ["7. ", "Fonts: Expert Sans throughout (the Barclays corporate font). If a machine lacks it, accept the substitution \u2014 do not switch fonts manually."],
    ["8. ", "Never restyle: PASS green / FAIL red, and the one-highlight rule (one accent element per exhibit)."],
    ["9. ", "After the rebrand, check every title still fits two lines and every table sits inside the margins. List anything that broke."],
  ].map((r,i)=>[{ text:r[0], options:{ bold:true, color:GOLDD, breakLine:false } },
                { text:r[1], options:{ breakLine:true } }]).flat(),
    { x:M+6.57, y:2.18, w:CW-6.85, h:3.85, fontFace:FB, fontSize:10.5, color:BODY,
      lineSpacing:14, paraSpaceAfter:8, margin:0, valign:"top" });
  card(s, M, 6.35, CW, 0.75, "D9EEF9");
  s.addText("Final self-check: report every example value still present, and PASS or FAIL for each reconcile check in step 2. Do not declare the deck finished with an open FAIL.",
    { x:M+0.42, y:6.45, w:CW-1.0, h:0.55, fontFace:FB, fontSize:11.5, bold:true, color:SLATE, margin:0, valign:"middle" });
  note(s, "This slide is addressed to Copilot in PowerPoint: select it and instruct 'follow the instructions on this slide using the client data below'. The self-check bar makes completion verifiable. Delete before the deck goes to a client.");
}

/* ---------------- 3. S-C-Q ---------------- */
{
  const s = slide();
  eyebrow(s, "WHY WE ARE HERE", GOLDD);
  title(s, "The question we set out to answer");
  const items = [
    ["SITUATION", "The bank serves exporting SMEs. Five candidate features sit on the roadmap; build capacity is two slots per cycle, with an earnings mandate."],
    ["COMPLICATION", "A one-off pick answers this cycle and nothing after it. The features differ in demand, return and build cost — and the evidence moves as we learn. Gut feel cannot hold an order across cycles."],
    ["QUESTION", "What do we build into the exporting-SME proposition — and in what order?"],
  ];
  let y = 1.66;
  items.forEach((it,i)=>{
    const h = [1.18, 1.48, 1.05][i];
    card(s, M, y, CW, h, i===2 ? "CDE9F8" : TINT);
    s.addText(it[0], { x:M+0.42, y:y+0.20, w:3.0, h:0.32, fontFace:FB, fontSize:11.5, bold:true,
      color: i===2 ? SLATE : GOLDD, charSpacing:2, margin:0, valign:"middle" });
    s.addText(it[1], { x:M+0.42, y:y+0.54, w:CW-1.0, h:h-0.72, fontFace:FB,
      fontSize: i===2 ? 18 : 14, bold: i===2, color: i===2 ? SLATE : BODY, margin:0, valign:"top", lineSpacing: i===2?23:19 });
    y += h + 0.20;
  });
  note(s, "The Complication earns the backlog framing: the reason a one-off pick fails is that the decision repeats and the evidence moves. If the client genuinely decides once and never again, use the base proposition-launch template instead.");
}

/* ---------------- 4. RECOMMENDATION ---------------- */
{
  const s = slide();
  eyebrow(s, "RECOMMENDATION", GOLDD);
  pagetag(s, 4);
  s.addText("Fill 'Trade Ready' in return order: FX and invoice finance take this cycle's two slots — £6m a year by year 3.",
    { x:M, y:0.72, w:CW, h:1.5, fontFace:FH, fontSize:26, bold:false, color:GOLD, margin:0, valign:"top", lineSpacing:33 });
  const lines = [
    ["This cycle", "FX payments (build) · invoice finance (partner)", "the two slots"],
    ["Next cycle", "Trade insurance", "third by return per slot"],
    ["Off the list", "Crypto payments · rewards scheme", "below the demand gate"],
    ["Standing", "Re-score the backlog every quarter", "the order moves with the evidence"],
  ];
  let y = 2.65;
  lines.forEach((l)=>{
    card(s, M, y, CW, 0.72, TINT);
    s.addText(l[0], { x:M+0.35, y:y, w:2.2, h:0.72, fontFace:FB, fontSize:15, bold:true,
      color:GOLDD, margin:0, valign:"middle" });
    s.addText(l[1], { x:M+2.65, y:y, w:6.4, h:0.72, fontFace:FB, fontSize:15, bold:true,
      color:SLATE, margin:0, valign:"middle" });
    s.addText(l[2], { x:M+9.15, y:y, w:3.2, h:0.72, fontFace:FB, fontSize:12,
      color:BODY, margin:0, valign:"middle" });
    y += 0.9;
  });
  s.addShape(p.ShapeType.line, { x:M, y:6.42, w:CW, h:0, line:{ color:RULE, width:1 } });
  s.addText("The client approves two things: this cycle's slate, and the rule that produced it. Next cycle re-runs the rule.",
    { x:M, y:6.56, w:CW-0.8, h:0.5, fontFace:FB, fontSize:13, color:BODY, margin:0, valign:"top", lineSpacing:19 });
  note(s, "The governing thought in Barclays IR style: cyan statement, pale-blue expansion rows. One sentence, then four rows that expand it without new claims.");
}

/* ---------------- 5. THE THREE REASONS ---------------- */
{
  const s = slide();
  eyebrow(s, "THE ARGUMENT IN ONE PAGE", GOLDD);
  title(s, "Three things make this order right");
  const cols = [
    ["DEMAND ADMITS", "Exporters want three of the five — and will think of us",
     "FX (78), invoice finance (72) and insurance (64) clear the demand gate of 60. Crypto (41) and rewards (33) never get priced. The 'Trade Ready' name makes the shelf visible at the moment the need hits.", "1"],
    ["RETURN SORTS", "Return per build slot sets the order — FX first",
     "FX earns £2.1m a slot, invoice finance £1.6m, insurance £0.9m. Insurance beats invoice finance on raw NPV and still sorts below it — it needs two slots. The order is re-scored quarterly.", "2"],
    ["CAPACITY CUTS", "Two slots this cycle — and the routes keep the edge",
     "FX builds in-house on our core platform. Invoice finance partners: live in 5 months instead of 18. Insurance waits on the claims capability. Partner terms keep the customer and the data ours.", "3"],
  ];
  const cw = (CW - 0.6)/3;
  cols.forEach((c,i)=>{
    const x = M + i*(cw+0.3);
    card(s, x, 1.78, cw, 4.15);
    numCircle(s, x+0.38, 2.12, i+1, 0.52);
    s.addText(c[0], { x:x+1.05, y:2.12, w:cw-1.4, h:0.52, fontFace:FB, fontSize:11,
      bold:true, color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
    s.addText(c[1], { x:x+0.38, y:2.82, w:cw-0.76, h:1.15, fontFace:FH, fontSize:16.5, bold:true,
      color:INK, margin:0, valign:"top", lineSpacing:21 });
    s.addText(c[2], { x:x+0.38, y:4.02, w:cw-0.76, h:1.8, fontFace:FB, fontSize:11.5,
      color:BODY, margin:0, valign:"top", lineSpacing:16 });
  });
  s.addText("Each reason stands alone: attack demand, the sort, or the cut separately — the other two hold.",
    { x:M, y:6.12, w:CW, h:0.5, fontFace:FB, fontSize:13, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "The key line. Three independent reasons about the whole backlog - not three sub-decisions. The one analytical dependency (route timing feeds the return discount) is a data flow, shown where it happens in section 02.");
}

/* ---------------- 6. THE BACKLOG, DECIDED ---------------- */
{
  const s = slide();
  eyebrow(s, "THE BACKLOG, DECIDED", GOLDD);
  title(s, "One page: the order, and why each feature sits where it sits");
  const heads = ["Position", "Feature", "Demand\nvs gate 60", "Return\nper slot", "Route", "Status"];
  const rows = [
    ["1", "FX payments", "78", "£2.1m", "Build in-house", "THIS CYCLE"],
    ["2", "Invoice finance", "72", "£1.6m", "Partner", "THIS CYCLE"],
    ["3", "Trade insurance", "64", "£0.9m", "Build — needs claims capability", "NEXT CYCLE"],
    ["—", "Crypto payments", "41", "not priced", "—", "OFF THE LIST"],
    ["—", "Rewards scheme", "33", "not priced", "—", "OFF THE LIST"],
  ];
  const colX = [M, M+1.35, M+4.15, M+5.85, M+7.55, M+10.55];
  const colW = [1.35, 2.8, 1.7, 1.7, 3.0, 1.6];
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
    s.addText(r[0], { x:colX[0], y:y, w:colW[0]-0.15, h:0.6, fontFace:FH, fontSize:18, bold:true,
      color: ri<2 ? GOLDD : (ri===2 ? BLUE : MUTE), margin:0, valign:"middle" });
    s.addText(r[1], { x:colX[1], y:y, w:colW[1]-0.15, h:0.6, fontFace:FB, fontSize:14, bold:true,
      color: ri<3 ? INK : BODY, margin:0, valign:"middle" });
    s.addText(r[2], { x:colX[2], y:y, w:colW[2]-0.15, h:0.6, fontFace:FB, fontSize:13,
      color: ri<3 ? BODY : "A8443C", margin:0, valign:"middle" });
    s.addText(r[3], { x:colX[3], y:y, w:colW[3]-0.15, h:0.6, fontFace:FB, fontSize:13, bold: ri<2,
      color: ri<3 ? SLATE : MUTE, margin:0, valign:"middle" });
    s.addText(r[4], { x:colX[4], y:y, w:colW[4]-0.15, h:0.6, fontFace:FB, fontSize:12,
      color: ri<3 ? BODY : MUTE, margin:0, valign:"middle" });
    const vc = r[5]==="THIS CYCLE" ? GOLDD : (r[5]==="NEXT CYCLE" ? BLUE : MUTE);
    s.addText(r[5], { x:colX[5], y:y, w:colW[5], h:0.6, fontFace:FB, fontSize:11, bold:true,
      color:vc, charSpacing:0.8, margin:0, valign:"middle" });
    y += 0.70;
  });
  s.addText("Demand admits, return sorts, capacity cuts. A feature below the gate is never priced — no queue place can be bought.",
    { x:M, y:y+0.16, w:CW, h:0.42, fontFace:FB, fontSize:12.5, italic:true, color:MUTE, margin:0, valign:"top" });
  note(s, "The photograph slide. The whole system on one page: positions, the three columns that produced them, and the statuses. When the backlog is re-scored, only this page and its inputs change.");
}

/* ---------------- 7. DIVIDER 01 ---------------- */
note(divider("01", "Demand admits", "Who gets into the backlog?",
  "Measured with the OCV demand score against a gate of 60. Below the gate, a feature is never priced."),
  "Section divider. Demand is the admission test, not the sort key - it protects the backlog from optimism.");

/* ---------------- 8. OCV RANKED ---------------- */
{
  const s = slide();
  eyebrow(s, "DEMAND ADMITS  ·  01", GOLDD);
  title(s, "Three of five clear the demand gate; two are not close");
  s.addChart(p.ChartType.bar, [{
    name: "OCV demand score",
    labels: ["FX payments","Invoice finance","Trade insurance","Crypto payments","Rewards scheme"],
    values: [78, 72, 64, 41, 33]
  }], {
    x:M, y:1.90, w:8.15, h:3.80, barDir:"bar", chartColors:[SLATE,SLATE,SLATE,GREY,GREY], varyColors:true,
    showTitle:false, showLegend:false, showValue:true, dataLabelPosition:"outEnd",
    dataLabelColor:INK, dataLabelFontFace:FB, dataLabelFontSize:12, dataLabelFontBold:true,
    catAxisLabelColor:BODY, catAxisLabelFontFace:FB, catAxisLabelFontSize:12,
    valAxisLabelColor:MUTE, valAxisLabelFontFace:FB, valAxisLabelFontSize:10,
    valAxisMaxVal:100, valAxisMinVal:0,
    valGridLine:{ color:"E8EEF1", size:1 }, catGridLine:{ style:"none" }, barGapWidthPct:55
  });
  card(s, M+8.55, 1.90, CW-8.55, 3.80, TINT);
  s.addText("The gate", { x:M+8.9, y:2.10, w:2.9, h:0.34, fontFace:FB, fontSize:11.5, bold:true,
    color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
  s.addText("60", { x:M+8.9, y:2.46, w:2.9, h:1.0, fontFace:FH, fontSize:60, bold:true,
    color:SLATE, margin:0, valign:"middle" });
  s.addText("Admitted", { x:M+8.9, y:3.58, w:2.9, h:0.3, fontFace:FB, fontSize:11.5,
    bold:true, color:MUTE, margin:0, valign:"middle" });
  s.addText("FX, invoice finance, insurance — priced in section 02", { x:M+8.9, y:3.88, w:2.95, h:0.75,
    fontFace:FB, fontSize:12.5, color:BODY, margin:0, valign:"top", lineSpacing:17 });
  s.addText("Refused", { x:M+8.9, y:4.68, w:2.9, h:0.3, fontFace:FB, fontSize:11.5,
    bold:true, color:MUTE, margin:0, valign:"middle" });
  s.addText("Crypto, rewards — never priced", { x:M+8.9, y:4.98, w:2.95, h:0.55,
    fontFace:FB, fontSize:12.5, color:BODY, margin:0, valign:"top", lineSpacing:17 });
  foot(s, "Source: exporter research programme, 320 interviews, May–Jul [year]. OCV method: appendix.");
  note(s, "The gate of 60 is calibrated on past launches (appendix). Insurance passes at 64 - close to the line, which is why its position is re-tested at every quarterly re-score.");
}

/* ---------------- 9. EVIDENCE + LIMITS ---------------- */
{
  const s = slide();
  eyebrow(s, "DEMAND ADMITS  ·  01", GOLDD);
  title(s, "What the scores rest on — and their stated limits");
  const stats = [
    ["320", "Exporting SMEs interviewed"],
    ["9 wks", "Fieldwork window, ending [date]"],
    ["3 of 5", "Features tested with a live prototype"],
    ["61%", "Of segment revenue represented"],
  ];
  const cw = (CW - 0.75)/4;
  stats.forEach((st,i)=>{
    const x = M + i*(cw+0.25);
    card(s, x, 1.78, cw, 1.85);
    s.addText(st[0], { x:x+0.28, y:2.00, w:cw-0.56, h:0.85, fontFace:FH, fontSize:36, bold:true,
      color:SLATE, margin:0, valign:"middle" });
    s.addText(st[1], { x:x+0.28, y:2.88, w:cw-0.56, h:0.62, fontFace:FB, fontSize:11.5,
      color:BODY, margin:0, valign:"top", lineSpacing:16 });
  });
  s.addText("Known limits of the evidence", { x:M, y:3.95, w:CW, h:0.4, fontFace:FB, fontSize:15,
    bold:true, color:SLATE, margin:0, valign:"middle" });
  bullets(s, [
    "Smallest exporters (under £1m turnover) are under-represented — could overstate invoice finance demand",
    "Exporters over-claim switching intent; scores are calibrated against observed uptake, not stated intent",
    "Crypto and rewards were tested by description only — a prototype could move them, and a re-score would catch it",
    "Insurance sits four points above the gate: treated as admitted, re-tested every quarter",
  ], M, 4.40, CW, { h:1.9, size:13 });
  note(s, "Limits stated by us before a sceptic finds them. Note how the limits connect to the re-score cadence: uncertainty is not a reason to freeze the backlog, it is the reason the backlog gets re-scored.");
}

/* ---------------- 10. THE WRAPPER ---------------- */
{
  const s = slide();
  eyebrow(s, "DEMAND ADMITS  ·  01  ·  PROPOSITION LEVEL", GOLDD);
  title(s, "'Trade Ready' makes the shelf visible when the need hits");
  const rows = [
    ["The gap", "At the moments that matter — the first export order, the first unpaid foreign invoice — exporters name their bank 22% of the time, and the market leader 41%."],
    ["The wrapper", "One name over the launched features, with a fixed set of brand assets, tied to those two moments. Product communications ladder up to it, not alongside it."],
    ["The economics", "£0.8m a year, fixed — spread across every feature in the shell, unlike incentives that pay per redemption. Break-even at a 6-point lift in recall."],
    ["The multiplier rule", "A wrapper multiplies what is there. It cannot rescue a feature below the demand gate — weak features wrapped are weak features remembered."],
  ];
  let y = 1.78;
  rows.forEach((r)=>{
    card(s, M, y, CW, 0.98);
    s.addText(r[0], { x:M+0.42, y:y+0.11, w:3.4, h:0.76, fontFace:FB, fontSize:14, bold:true,
      color:SLATE, margin:0, valign:"middle" });
    s.addText(r[1], { x:M+4.1, y:y+0.11, w:CW-4.6, h:0.76, fontFace:FB, fontSize:12.5,
      color:BODY, margin:0, valign:"middle", lineSpacing:16 });
    y += 1.12;
  });
  s.addText("The wrapper is a demand claim — will they think of us — so it lives in this section. Its cost appears in the earnings bridge; its stop rule sits on the sensitivity page.",
    { x:M, y:y+0.10, w:CW, h:0.6, fontFace:FB, fontSize:13, italic:true, color:MUTE, margin:0, valign:"top", lineSpacing:18 });
  note(s, "The wrapper is the standing shell the backlog ships into - it persists across cycles while features accrete. Mental availability at the entry points is what it buys; the break-even and stop rule keep it honest.");
}

/* ---------------- 11. DIVIDER 02 ---------------- */
note(divider("02", "Return sorts", "What order do the admitted features take?",
  "Sorted by risk-adjusted return per build slot — capacity is the scarce thing, so returns are measured against it."),
  "Section divider. The sort key is the deck's central discipline: per-slot return, not raw NPV.");

/* ---------------- 12. THE SORT ---------------- */
{
  const s = slide();
  eyebrow(s, "RETURN SORTS  ·  02", GOLDD);
  title(s, "Per-slot return sets the order — and it re-orders raw NPV");
  const heads = ["Feature", "Risk-adjusted NPV", "Build slots", "Return per slot", "Order"];
  const rows = [
    ["FX payments", "£2.1m", "1", "£2.1m", "1st"],
    ["Invoice finance (partnered)", "£1.6m", "1", "£1.6m", "2nd"],
    ["Trade insurance", "£1.8m", "2", "£0.9m", "3rd"],
  ];
  const colX = [M, M+3.9, M+6.4, M+8.3, M+10.9];
  const colW = [3.9, 2.5, 1.9, 2.6, 1.2];
  let y = 1.95;
  heads.forEach((h,i)=> s.addText(h, { x:colX[i], y:y, w:colW[i]-0.15, h:0.4, fontFace:FB,
    fontSize:11.5, bold:true, color:SLATE, margin:0, valign:"bottom" }));
  y += 0.48;
  s.addShape(p.ShapeType.line, { x:M, y:y, w:CW, h:0, line:{color:SLATE, width:1.5} });
  y += 0.16;
  rows.forEach((r,ri)=>{
    if (ri % 2 === 0) s.addShape(p.ShapeType.rect, { x:M, y:y-0.05, w:CW, h:0.72, fill:{color:"F5F8FA"}, line:{color:"F5F8FA", width:1} });
    s.addText(r[0], { x:colX[0], y:y, w:colW[0]-0.15, h:0.62, fontFace:FB, fontSize:14, bold:true, color:INK, margin:0, valign:"middle" });
    s.addText(r[1], { x:colX[1], y:y, w:colW[1]-0.15, h:0.62, fontFace:FB, fontSize:14, bold: ri===2,
      color: ri===2 ? "A8443C" : BODY, margin:0, valign:"middle" });
    s.addText(r[2], { x:colX[2], y:y, w:colW[2]-0.15, h:0.62, fontFace:FB, fontSize:14, bold: ri===2,
      color: ri===2 ? "A8443C" : BODY, margin:0, valign:"middle" });
    s.addText(r[3], { x:colX[3], y:y, w:colW[3]-0.15, h:0.62, fontFace:FB, fontSize:14, bold:true, color:SLATE, margin:0, valign:"middle" });
    s.addText(r[4], { x:colX[4], y:y, w:colW[4], h:0.62, fontFace:FH, fontSize:17, bold:true, color:GOLDD, margin:0, valign:"middle" });
    y += 0.76;
  });
  card(s, M, y+0.18, CW, 1.35, "D9EEF9");
  s.addText("Why per slot, not raw NPV", { x:M+0.42, y:y+0.34, w:4.0, h:0.32, fontFace:FB, fontSize:11.5,
    bold:true, color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
  s.addText("Insurance beats invoice finance on raw NPV (£1.8m vs £1.6m) — and still sorts below it, because it eats both of the cycle's slots. Capacity is the scarce thing; returns are measured against what they consume.",
    { x:M+0.42, y:y+0.66, w:CW-1.0, h:0.75, fontFace:FB, fontSize:13, color:SLATE, margin:0, valign:"top", lineSpacing:18 });
  foot(s, "Risk-adjusted NPV: base earnings per feature, levers applied, discounted for route timing (slide 15).");
  note(s, "The teaching row is insurance: raw NPV would put it second, per-slot puts it third. If the client's capacity is capital rather than slots, change the denominator - the rule survives, the unit changes.");
}

/* ---------------- 13. EARNINGS BRIDGE ---------------- */
{
  const s = slide();
  eyebrow(s, "RETURN SORTS  ·  02", GOLDD);
  title(s, "Configuration lifts the cycle's earnings from £4m to £6.3m");
  s.addText("£m annual earnings, year 3 run-rate, this cycle's two features", { x:M, y:1.60, w:9, h:0.32,
    fontFace:FB, fontSize:12, color:MUTE, margin:0, valign:"middle" });
  const baseY = 5.7, scale = 0.55;
  const bars = [
    ["Base case\n(list price,\nno levers)", 4.0, "abs"],
    ["Price\nmove", 0.9, "up"],
    ["Switch\nincentive\nuptake", 1.3, "up"],
    ["Incentive\ncost", -0.7, "down"],
    ["'Trade Ready'\nrecall\nuplift", 0.8, "up"],
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
    const col = b[2]==="abs" ? SLATE : (b[2]==="up" ? GOLD : GREY);
    s.addShape(p.ShapeType.rect, { x, y:top, w:bw, h:h, fill:{color:col}, line:{color:col, width:1} });
    s.addText((v>0&&b[2]!=="abs"?"+":"") + v.toFixed(1), { x, y:top-0.34, w:bw, h:0.3,
      fontFace:FB, fontSize:12, bold:true, color:INK, align:"center", margin:0, valign:"middle" });
    s.addText(b[0], { x:x-0.08, y:baseY+0.10, w:bw+0.16, h:0.95, fontFace:FB, fontSize:10,
      color:BODY, align:"center", margin:0, valign:"top", lineSpacing:12 });
    x += bw + gap;
  });
  s.addText("The switch incentive does most of the lever work (+1.3) and costs half of it back (−0.7). The wrapper's recall uplift is the smallest add — and the only one that also serves every future feature.",
    { x:M, y:6.32, w:CW, h:0.42, fontFace:FB, fontSize:13, italic:true, color:MUTE, margin:0, valign:"middle" });
  foot(s, "Source: pricing model v3. Incentive cost is gross, before clawback terms.");
  note(s, "The bridge says plainly which lever does the work. The wrapper's +0.8 is deliberately modest here - its full value is the standing shell across cycles, argued in section 01.");
}

/* ---------------- 14. INCENTIVE DISCIPLINE ---------------- */
{
  const s = slide();
  eyebrow(s, "RETURN SORTS  ·  02", GOLDD);
  title(s, "Incentives are spent only where a free default cannot work");
  const rows = [
    ["Defaults beat persuasion", "FX is switched on for every exporting customer at onboarding — no incentive. Regulator trials and our own tests show pre-set options beat paid persuasion."],
    ["Incentives buy selection, not behaviour", "Around a third of incentive redeemers would have acted anyway — the dead-weight share, estimated from our last two campaigns. It is priced into the −0.7."],
    ["Where incentives DO pay", "The switching moment. Invoice finance targets exporters leaving a factoring provider — a real cost to move, a one-off payment to cover it, capped and clawed back."],
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
  s.addText("The test for every pound of incentive: would the behaviour happen anyway, and could a default do it free? Spend survives only if the answer is no, twice.",
    { x:M, y:y+0.14, w:CW, h:0.55, fontFace:FB, fontSize:13.5, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "This slide stops the deck being a discount programme with a strategy attached. Rejected levers are named in the appendix model.");
}

/* ---------------- 15. ROUTE TIMING PRICED ---------------- */
{
  const s = slide();
  eyebrow(s, "RETURN SORTS  ·  02", GOLDD);
  title(s, "Returns are discounted for each route's timing — the partner route is what puts invoice finance second");
  const rows = [
    ["FX — build", "£2.4m", "9 mths ±1", "High", GREEN, "£2.1m", "PASS"],
    ["Invoice finance — partner", "£1.9m", "5 mths ±1", "High", GREEN, "£1.6m", "PASS"],
    ["Invoice finance — if built", "£1.9m", "18 mths ±4", "Low", RED, "£0.6m", "FAIL"],
  ];
  const heads = ["Feature · route","Configured NPV","Time to launch","Confidence","","Risk-adjusted NPV","Vs hurdle"];
  const colX = [M, M+3.6, M+5.9, M+7.7, 0, M+9.3, M+11.6];
  let y = 2.15;
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
  card(s, M, y+0.18, CW, 1.15, "D9EEF9");
  s.addText("Why the third row is on the slide", { x:M+0.42, y:y+0.34, w:4.2, h:0.32, fontFace:FB, fontSize:11.5,
    bold:true, color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
  s.addText("Built in-house, invoice finance falls to £0.6m a slot — below insurance, and below the hurdle. The partner route is not a preference: it is what earns the feature its place in this cycle.",
    { x:M+0.42, y:y+0.66, w:CW-1.0, h:0.6, fontFace:FB, fontSize:13, color:SLATE, margin:0, valign:"top", lineSpacing:18 });
  note(s, "The data flow from section 03: route timing and confidence set the discount applied here. The counterfactual row prices the route decision inside the sort - one number, one consequence.");
}

/* ---------------- 16. RE-SCORE RULE ---------------- */
{
  const s = slide();
  eyebrow(s, "RETURN SORTS  ·  02", GOLDD);
  title(s, "The order is re-scored every quarter — here is what can move it");
  const rows = [
    ["New demand evidence", "A prototype test of crypto, or a shift in exporter behaviour", "Scores re-run; a feature can enter or leave the backlog"],
    ["Return assumptions move", "Uptake, margin, dead-weight or partner terms change", "Per-slot returns re-computed; positions 2 and 3 can swap"],
    ["Capability lands", "The claims capability ships", "Insurance's slots fall from 2 to 1 — its per-slot return doubles"],
    ["A slot frees up", "A build finishes early or a partner accelerates", "The cut-line moves down the sorted list — no new argument needed"],
  ];
  let y = 1.80;
  rows.forEach((r)=>{
    card(s, M, y, CW, 0.98);
    s.addText(r[0], { x:M+0.42, y:y+0.11, w:3.2, h:0.76, fontFace:FB, fontSize:13.5, bold:true,
      color:SLATE, margin:0, valign:"middle" });
    s.addText(r[1], { x:M+3.9, y:y+0.11, w:4.4, h:0.76, fontFace:FB, fontSize:12,
      color:BODY, margin:0, valign:"middle", lineSpacing:16 });
    s.addText(r[2], { x:M+8.5, y:y+0.11, w:CW-9.0, h:0.76, fontFace:FB, fontSize:12,
      color:BODY, margin:0, valign:"middle", lineSpacing:16 });
    y += 1.12;
  });
  s.addText("This is what the client is really approving: not this quarter's list, but the machine that keeps the list honest.",
    { x:M, y:y+0.12, w:CW, h:0.5, fontFace:FB, fontSize:13.5, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "The re-score rule is the difference between a backlog and a one-off deck. Each row names an observable trigger and the mechanical consequence - no re-litigation, just re-scoring.");
}

/* ---------------- 17. DIVIDER 03 ---------------- */
note(divider("03", "Capacity cuts", "What ships this cycle — and how?",
  "Two build slots. Routes chosen per feature, priced for time and margin, bounded for defensibility."),
  "Section divider. Capacity sets the cut-line on the sorted list; the routes protect the advantage.");

/* ---------------- 18. THIS CYCLE'S SLATE ---------------- */
{
  const s = slide();
  eyebrow(s, "CAPACITY CUTS  ·  03", GOLDD);
  title(s, "Two slots: build FX on our core; partner invoice finance for speed");
  const cols = [
    ["FX payments — BUILD", "Slot 1",
     ["Deepens the payments platform we already run — the capability compounds",
      "9 months ±1, high confidence: the delivery team owns every dependency",
      "Full margin kept; no third party in the flow"]],
    ["Invoice finance — PARTNER", "Slot 2",
     ["Live in 5 months instead of 18 — the difference between second place and missing the cycle",
      "Partner: [specialist lender], revenue share 25%",
      "We keep the customer, the data and the pricing; they run the credit engine"]],
  ];
  const cw = (CW - 0.35)/2;
  cols.forEach((c,i)=>{
    const x = M + i*(cw+0.35);
    card(s, x, 1.80, cw, 3.6);
    s.addText(c[0], { x:x+0.4, y:2.02, w:cw-1.6, h:0.5, fontFace:FH, fontSize:19, bold:true,
      color:INK, margin:0, valign:"middle" });
    s.addText(c[1], { x:x+cw-1.2, y:2.02, w:0.85, h:0.5, fontFace:FB, fontSize:12, bold:true,
      color:GOLDD, align:"right", margin:0, valign:"middle" });
    s.addShape(p.ShapeType.line, { x:x+0.4, y:2.62, w:cw-0.8, h:0, line:{color:RULE, width:1} });
    bullets(s, c[2], x+0.4, 2.82, cw-0.8, { h:2.4, size:12.5, ls:18 });
  });
  s.addText("Insurance waits: it needs the claims capability, which is itself a build. When that lands, its slot cost halves and the re-score promotes it.",
    { x:M, y:5.62, w:CW, h:0.5, fontFace:FB, fontSize:13, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "Route verdicts differ per feature and each states its reason in place. The FX reason is compounding (core platform); the invoice finance reason is speed priced in section 02.");
}

/* ---------------- 19. PARTNER BOUNDS ---------------- */
{
  const s = slide();
  eyebrow(s, "CAPACITY CUTS  ·  03", GOLDD);
  title(s, "The partner deal is bounded — the advantage stays ours");
  const rows = [
    ["What the partner holds", "The credit decisioning engine and the capital. Their capability, their balance sheet risk."],
    ["What we keep", "The customer relationship, the transaction data, the pricing decision, and the 'Trade Ready' brand over the top."],
    ["Contract bounds", "Exclusivity in the exporting-SME segment · our data stays ours on exit · 90-day portability · price re-opener at 12 months."],
    ["Re-internalise trigger", "At 5,000 active users, building in-house pays back in under 3 years — reviewed at each quarterly re-score."],
  ];
  let y = 1.80;
  rows.forEach((r)=>{
    card(s, M, y, CW, 0.98);
    s.addText(r[0], { x:M+0.42, y:y+0.11, w:3.6, h:0.76, fontFace:FB, fontSize:14, bold:true,
      color:SLATE, margin:0, valign:"middle" });
    s.addText(r[1], { x:M+4.3, y:y+0.11, w:CW-4.8, h:0.76, fontFace:FB, fontSize:12.5,
      color:BODY, margin:0, valign:"middle", lineSpacing:17 });
    y += 1.12;
  });
  s.addText("Shipping fast is the partner's job. Staying hard to beat is the contract's job. The two are different questions, and both must pass.",
    { x:M, y:y+0.12, w:CW, h:0.55, fontFace:FB, fontSize:13.5, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "If the partner ends up holding the customer or the data, the earnings survive but the moat does not. The re-internalise trigger keeps 'partner' a route, not a destiny.");
}

/* ---------------- 20. WHAT WOULD HAVE TO BE TRUE ---------------- */
{
  const s = slide();
  eyebrow(s, "ACROSS THE SYSTEM", GOLDD);
  title(s, "What would have to be true for this to be the wrong call");
  const rows = [
    ["Demand scores overstate uptake by a third", "FX still clears; invoice finance drops to the hurdle", "Activation rate at month 3 vs the model"],
    ["Incentive dead-weight passes 50%", "The −0.7 doubles; the incentive is switched off", "Redemption vs new-to-feature mix, monthly"],
    ["'Trade Ready' recall does not lift by month 6", "The £0.8m stops; comms revert to product level", "Entry-point recall tracking, quarterly"],
    ["The partner slips or captures the relationship", "Invoice finance misses the cycle; moat erodes", "Contract milestones + data-flow audit, month 2"],
  ];
  const heads = ["If this turns out to be true…", "…then this changes", "…and how we would know early"];
  const colX = [M, M+4.6, M+8.5];
  const colW = [4.6, 3.9, 3.6];
  let y = 1.82;
  heads.forEach((h,i)=> s.addText(h, { x:colX[i]+(i===0?0.34:0), y:y, w:colW[i]-0.2, h:0.4, fontFace:FB,
    fontSize:11.5, bold:true, color:GOLDD, margin:0, valign:"bottom" }));
  y += 0.5;
  rows.forEach((r)=>{
    card(s, M, y, CW, 0.95);
    s.addText(r[0], { x:colX[0]+0.34, y:y+0.11, w:colW[0]-0.6, h:0.74, fontFace:FB, fontSize:12.5,
      bold:true, color:INK, margin:0, valign:"middle", lineSpacing:16 });
    s.addText(r[1], { x:colX[1], y:y+0.11, w:colW[1]-0.3, h:0.74, fontFace:FB, fontSize:12,
      color:BODY, margin:0, valign:"middle", lineSpacing:16 });
    s.addText(r[2], { x:colX[2], y:y+0.11, w:colW[2]-0.3, h:0.74, fontFace:FB, fontSize:12,
      color:BODY, margin:0, valign:"middle", lineSpacing:16 });
    y += 1.08;
  });
  s.addText("Every row ends in the re-score, not in a crisis meeting: the trigger fires, the score changes, the order moves.",
    { x:M, y:y+0.10, w:CW, h:0.5, fontFace:FB, fontSize:13, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "The sensitivity slide inherits the backlog's key property: being wrong is survivable, because the system re-scores instead of re-arguing.");
}

/* ---------------- 21. SO WHAT ---------------- */
{
  const s = slide();
  eyebrow(s, "SO WHAT", GOLDD);
  pagetag(s, 21);
  title(s, "What we need from you this week", { size: 26 });
  const asks = [
    ["Adopt", "The sorting rule: demand admits, per-slot return sorts, capacity cuts", "[Owner]", "[Date]"],
    ["Approve", "This cycle's slate: build FX, partner invoice finance", "[Owner]", "[Date]"],
    ["Sign", "Partner heads of terms — exclusivity, data, exit, re-opener (slide 19)", "[Owner]", "[Date]"],
    ["Stop", "Crypto and rewards — off the list until new demand evidence", "[Owner]", "[Date]"],
  ];
  let y = 1.85;
  asks.forEach((a,i)=>{
    card(s, M, y, CW, 0.92, TINT);
    numCircle(s, M+0.34, y+0.23, i+1, 0.46);
    s.addText(a[0], { x:M+1.05, y:y, w:1.6, h:0.92, fontFace:FH, fontSize:18, bold:false,
      color:GOLD, margin:0, valign:"middle" });
    s.addText(a[1], { x:M+2.7, y:y, w:6.4, h:0.92, fontFace:FB, fontSize:13.5,
      color:SLATE, margin:0, valign:"middle", lineSpacing:17 });
    s.addText(a[2], { x:M+9.2, y:y, w:1.6, h:0.92, fontFace:FB, fontSize:12,
      color:BODY, margin:0, valign:"middle" });
    s.addText(a[3], { x:M+10.9, y:y, w:1.0, h:0.92, fontFace:FB, fontSize:12,
      color:BODY, align:"right", margin:0, valign:"middle" });
    y += 1.08;
  });
  s.addText("First re-score lands in [month]. From then on the backlog is a standing agenda item, not a new deck.",
    { x:M, y:6.35, w:CW, h:0.5, fontFace:FB, fontSize:13, italic:true, color:MUTE, margin:0, valign:"middle" });
  note(s, "Four asks: the rule, the slate, the terms, the stop. Every line: verb, owner, date. Adopting the rule is the ask that outlives the meeting.");
}

/* ---------------- 22. APPENDIX CONTENTS ---------------- */
{
  const s = slide();
  eyebrow(s, "APPENDIX", GOLDD);
  title(s, "Supporting detail — and how each analysis was run");
  const items = [
    ["OCV methodology + research findings", "Metric construction, calibration, the 320-interview base"],
    ["Pricing and incentive model", "Lever assumptions, dead-weight estimates, clawback terms"],
    ["Wrapper / recall study", "Entry-point research, recall tracking, break-even"],
    ["Partner due diligence + route model", "Counterparty assessment, terms, route economics"],
    ["Method: the four analyses", "Step-by-step, next four pages — reproducible with Copilot"],
    ["Features considered and excluded earlier", "Anything cut before the shortlist, and why"],
  ];
  const cw = (CW-0.35)/2;
  items.forEach((it,i)=>{
    const x = M + (i%2)*(cw+0.35);
    const y = 1.85 + Math.floor(i/2)*1.28;
    card(s, x, y, cw, 1.10);
    s.addText(it[0], { x:x+0.4, y:y+0.16, w:cw-0.8, h:0.4, fontFace:FB, fontSize:14.5, bold:true,
      color:INK, margin:0, valign:"middle" });
    s.addText(it[1], { x:x+0.4, y:y+0.56, w:cw-0.8, h:0.42, fontFace:FB, fontSize:12,
      color:BODY, margin:0, valign:"top" });
  });
  note(s, "Appendix contents. The method pages make the deck reproducible: a colleague with Copilot and the inputs can re-run every analysis - which is also what makes the quarterly re-score cheap.");
}

/* ---------------- METHOD SLIDES ---------------- */
function methodSlide(numTxt, titleTxt, inputs, steps, feeds, copilotLine){
  const s = slide();
  eyebrow(s, "APPENDIX  ·  METHOD " + numTxt, GOLDD);
  title(s, titleTxt, { size: 24 });
  card(s, M, 1.72, 3.5, 3.85);
  s.addText("Inputs required", { x:M+0.32, y:1.92, w:2.9, h:0.34, fontFace:FB, fontSize:11.5,
    bold:true, color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
  bullets(s, inputs, M+0.32, 2.32, 2.95, { h:3.1, size:11.5, ls:16 });
  let y = 1.78;
  steps.forEach((st,i)=>{
    numCircle(s, M+3.85, y, i+1, 0.4);
    s.addText(st, { x:M+4.42, y:y-0.06, w:CW-4.55, h:0.72, fontFace:FB, fontSize:12,
      color:BODY, margin:0, valign:"top", lineSpacing:16 });
    y += 0.78;
  });
  card(s, M, 5.78, CW, 1.0, "D9EEF9");
  s.addText("Run it with Copilot", { x:M+0.42, y:5.92, w:3.0, h:0.3, fontFace:FB, fontSize:11,
    bold:true, color:GOLDD, charSpacing:2, margin:0, valign:"middle" });
  s.addText(copilotLine + "   ·   Output feeds: " + feeds, { x:M+0.42, y:6.22, w:CW-1.0, h:0.5,
    fontFace:FB, fontSize:12, color:SLATE, margin:0, valign:"top", lineSpacing:16 });
  return s;
}

note(methodSlide("1 OF 4", "How the demand scores were built",
  ["Segment interviews (n, dates)", "Incumbent solution facts and prices", "Feature specs and price points", "Past-launch calibration data"],
  [
    "Derive the segment's outcomes: build the outcome ladder for the job; keep the minimal covering set (OCV standard, step 1a).",
    "Score each feature against the incumbent per component: financial, time and stress deltas, time priced at the standard's conventions.",
    "Subtract switching costs (the standard's taxonomy). Adjust each component for visibility and credibility — contractual anchors beat claimed ones.",
    "Sum to the OCV score. Map to predicted uptake with the calibration table; set the gate from past launches, not from the answer you want.",
    "Rank the features. Record every input in the evidence register with source and date — the register is what the quarterly re-score re-runs.",
  ],
  "slides 8–9, and the uptake input to the sort",
  "Attach objective-customer-value-standard.md (same repository). One chat per feature. Paste the step, the feature spec and the register; require evidence for AND against."),
  "Method page. The OCV standard in the repository is the authority; this page is the operator card.");

note(methodSlide("2 OF 4", "How the backlog was sorted",
  ["Uptake per feature (from method 1)", "Margin model per feature", "Build-slot estimates per feature", "Past campaign results, by lever"],
  [
    "Build the base case per admitted feature: predicted uptake × price × margin, before any lever.",
    "Size the levers with the two-part test: would the behaviour happen anyway, and could a default do it free? Price the dead-weight in.",
    "Discount each feature's configured NPV for its route's timing and confidence (method 4 supplies both).",
    "Divide by build slots consumed: the sort key is risk-adjusted return PER SLOT. Rank. Note where per-slot order differs from raw NPV order.",
    "Set the re-score triggers: which input movements change the order, and who watches each one.",
  ],
  "slides 12–16",
  "One chat per feature. Paste the base case, lever tests and route discount; require the per-slot arithmetic shown and the trigger list stated."),
  "Method page for the sort. Step 4 is the archetype's core discipline; step 5 is what makes the backlog durable.");

note(methodSlide("3 OF 4", "How the wrapper case was built",
  ["Brand tracking data", "Entry-point research: when the job arises, in customer words", "Media / channel cost cards", "Competitor recall benchmarks"],
  [
    "Identify the segment's entry points: the moments the job arises, phrased in the customer's words, from research — not from the marketing plan.",
    "Measure current unaided recall at each entry point, for the bank and for competitors. The gap is the wrapper's job description.",
    "Design the wrapper: one name, fixed assets, explicit linkage to the entry points. Span only admitted features — never wrap what failed the gate.",
    "Price it: fixed annual cost against a recall-uplift band. State the break-even in recall points — the honest version of a brand business case.",
    "Set the tracking: entry-point recall, quarterly, with the stop rule — the wrapper's row on the sensitivity page.",
  ],
  "slide 10, the bridge on slide 13, and the sensitivity page",
  "Paste the entry-point list and tracking data. Require the break-even arithmetic shown and a stated stop rule — refuse a case that only asserts awareness value."),
  "Method page for the wrapper. Memory spend gets the same discipline as incentive spend: a mechanism, a break-even, a stop rule.");

note(methodSlide("4 OF 4", "How the delivery routes were priced",
  ["Delivery team estimates, with ranges", "Partner term sheets / indicative terms", "Capability register", "Hurdle rate and horizon"],
  [
    "Inventory the capabilities each feature requires — capabilities, not tasks. Keep the same names end to end or the slides will not reconcile.",
    "Classify each capability have / buy / build. Name real partner candidates with indicative terms — an unnamed partner is a build with optimism attached.",
    "Price each route: time to launch, capex, margin share, and a confidence band from the delivery team and the partner's committed dates.",
    "Hand timing and confidence to the sort (method 2). Keep the built-instead counterfactual row — it is what prices the route decision.",
    "Bound the partner routes: what they hold, what we keep, contract terms, and the re-internalise trigger with its review date.",
  ],
  "slides 15, 18–19",
  "One chat per feature. Paste the capability inventory and terms; require the counterfactual row and the defensibility bounds before accepting a verdict."),
  "Method page for the routes. Confidence bands come from the people who deliver, not the people who recommend.");

p.writeFile({ fileName: "proposition-backlog-template-barclays.pptx" })
 .then(f => console.log("written", f));
