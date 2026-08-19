# -*- coding: utf-8 -*-
# Logic diagram for the segment-proposition variant — Minto reasons cut:
# one question (what proposition?), one integrated answer, key line =
# three reasons about the WHOLE proposition (demand / economics / delivery).
W = 780
M = 22
BODY_W = W - 2*M

BG      = "#FBFAF8"
INTRO_F = "#F1EDE6"; INTRO_S = "#C4B9A8"; INTRO_T = "#3D3A34"
ANS_F   = "#2F4858"; ANS_T   = "#FFFFFF"
KEY_F   = "#4E7C90"; KEY_T   = "#FFFFFF"
SUP_F   = "#FFFFFF"; SUP_S   = "#CBD5DA"; SUP_T   = "#33505F"
SW_F    = "#C9A227"; SW_S    = "#9C7C15"; SW_T    = "#2B2308"
LINE    = "#9BAAB3"
GOLD    = "#C9A227"; GOLDD = "#8A6D0F"

parts = []
y = 0

def esc(s):
    return s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")

def rect(x, yy, w, h, fill, stroke=None, rx=10, sw=1.5):
    s = f'<rect x="{x}" y="{yy}" width="{w}" height="{h}" rx="{rx}" fill="{fill}"'
    if stroke: s += f' stroke="{stroke}" stroke-width="{sw}"'
    parts.append(s + '/>')

def text(x, yy, s, size, fill, weight="400", anchor="start", ls="0"):
    parts.append(
        f'<text x="{x}" y="{yy}" font-family="Helvetica Neue,Helvetica,Arial,sans-serif" '
        f'font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}" '
        f'letter-spacing="{ls}">{esc(s)}</text>')

def connector(yy, h=26):
    parts.append(f'<line x1="{W/2}" y1="{yy}" x2="{W/2}" y2="{yy+h}" stroke="{LINE}" stroke-width="2.5"/>')
    parts.append(f'<polygon points="{W/2-6},{yy+h-7} {W/2+6},{yy+h-7} {W/2},{yy+h+2}" fill="{LINE}"/>')
    return yy + h + 8

# ---------- INTRO ----------
intro = [("SITUATION", ["The bank serves [segment]. N candidate features;",
                        "fixed capacity and an earnings mandate this cycle."]),
         ("COMPLICATION", ["They cannot all ship — and a feature list is not",
                           "a proposition. What it earns turns on price,",
                           "incentives, memory and delivery route; chosen",
                           "by conviction, the cycle is spent on the wrong one."]),
         ("QUESTION", ["What proposition do we take to [segment]?"])]

y = M
rows_h = 0
for lbl, lines in intro:
    rows_h += 20 + 21*len(lines) + 12
box_h = rows_h + 22
rect(M, y, BODY_W, box_h, INTRO_F, INTRO_S)
ty = y + 34
for lbl, lines in intro:
    text(M+22, ty, lbl, 14, "#7A6F5C", "700", ls="1.6")
    ty += 21
    for ln in lines:
        text(M+22, ty, ln, 18, INTRO_T)
        ty += 21
    ty += 11
y = y + box_h
y = connector(y)

# ---------- ANSWER ----------
ans = ["Take [P] to [segment]: A and C, configured",
       "[levers] under [wrapper], A built, C partnered —",
       "[£X]m at [Y]% margin by year 3. Drop D and E."]
h = 34 + 30*len(ans) + 18
rect(M, y, BODY_W, h, ANS_F, rx=12)
text(W/2, y+30, "ANSWER  ·  GOVERNING THOUGHT", 13, "#9EC3D4", "700", "middle", ls="2")
ty = y + 62
for ln in ans:
    text(W/2, ty, ln, 23, ANS_T, "600", "middle")
    ty += 30
y = y + h
y = connector(y, 30)

# ---------- KEY LINES ----------
keys = [
 ("KEY LINE 1 · DEMAND", ["[Segment] will take it up: proven", "pull, made present at the moment"],
  [("OCV score by feature: A and C clear the gate", None),
   ("Threshold and evidence base — limits stated", None),
   ("Why D and E fell out — stated, not implied", None),
   ("The wrapper closes the entry-point memory gap", None)]),
 ("KEY LINE 2 · ECONOMICS", ["It pays: [£X]m at [Y]% margin,", "after the route timing is priced"],
  [("Base earnings per surviving feature", None),
   ("Bridge: levers + wrapper add, net of their cost", None),
   ("Incentives only where they beat defaults", None),
   ("NPV discounted for route timing", "k2s3"),
   ("Built-instead counterfactual prices the choice", None)]),
 ("KEY LINE 3 · DELIVERY", ["Delivery holds, and the", "advantage stays ours"],
  [("Build A, partner C — inside the window", None),
   ("Time-to-launch + confidence band", "k3s1"),
   ("Partner bounds: what they hold, what we keep", None),
   ("Re-internalise trigger, with its review date", None)]),
]

marks = {}
for i,(num, head, sup) in enumerate(keys):
    head_h = 30 + 27*len(head) + 14
    sup_h  = 16 + 30*len(sup) + 10
    total  = head_h + sup_h
    rect(M, y, BODY_W, total, SUP_F, SUP_S, rx=12)
    parts.append(f'<path d="M {M} {y+12} a12,12 0 0 1 12,-12 h {BODY_W-24} a12,12 0 0 1 12,12 v {head_h-12} h -{BODY_W} z" fill="{KEY_F}"/>')
    text(M+22, y+28, num, 13, "#BBD6E2", "700", ls="1.6")
    hy = y + 55
    for ln in head:
        text(M+22, hy, ln, 22, KEY_T, "600")
        hy += 27
    sy = y + head_h + 32
    for (ln, tag) in sup:
        parts.append(f'<circle cx="{M+30}" cy="{sy-6}" r="3.2" fill="#8FA9B5"/>')
        text(M+46, sy, ln, 17.5, SUP_T)
        if tag: marks[tag] = sy - 6
        sy += 30
    y = y + total
    if i < len(keys)-1:
        y += 16

# ---------- FEEDBACK ARROWS (right gutter) ----------
gx = W - M - 8
def gutter_arrow(frm, to, label):
    parts.append(f'<path d="M {M+BODY_W-30} {frm} H {gx+18} V {to} H {M+BODY_W-30}" fill="none" stroke="{GOLD}" stroke-width="2.4" stroke-dasharray="6 5"/>')
    parts.append(f'<polygon points="{M+BODY_W-30},{to} {M+BODY_W-19},{to-5.5} {M+BODY_W-19},{to+5.5}" fill="{GOLD}"/>')
    parts.append(f'<text x="{gx+12}" y="{(frm+to)/2}" font-family="Helvetica Neue,Helvetica,Arial,sans-serif" font-size="13" font-weight="700" fill="{GOLDD}" text-anchor="middle" transform="rotate(90 {gx+12} {(frm+to)/2})">{esc(label)}</text>')

gutter_arrow(marks["k3s1"], marks["k2s3"], "feeds the discount")

y = connector(y, 30)

# ---------- SO WHAT ----------
sw = ["Approve the build · sign the partner terms · fund",
      "B's re-entry · stop D and E — owners and dates."]
h = 34 + 27*len(sw) + 16
rect(M, y, BODY_W, h, SW_F, SW_S, rx=12)
text(W/2, y+30, "SO WHAT", 13, "#5E4A08", "700", "middle", ls="2")
ty = y+60
for ln in sw:
    text(W/2, ty, ln, 20, SW_T, "600", "middle")
    ty += 27
y = y + h + M

H = int(y)
svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" '
       f'viewBox="0 0 {W} {H}"><rect width="{W}" height="{H}" fill="{BG}"/>'
       + "".join(parts) + '</svg>')
open("docs/pyramid-segment.svg","w").write(svg)
print("svg", W, H)
