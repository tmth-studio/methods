# -*- coding: utf-8 -*-
# EXEMPLAR — pattern: SEEKING APPROVAL ("we have a problem, we have a solution
# that costs X — should you approve it?").
# This is the canonical filled DATA block: the Meridian Office Services demo
# shipped inside both deck generators. Paste everything below this header
# between the DATA markers of generate_standalone_deck.py or
# generate_presentation_deck.py and run. All content is fictional.
# Signature moves of this pattern: the complication carries the cost of the
# problem; the key line runs diagnosis -> remedy -> economics (degree order);
# the ask is one decision with a gate that caps the downside.


# --- THEME: all brand values live here, as data. Ship = neutral TMTH palette.
# To apply a client's brand: (i) paste their palette hexes + font names below,
# or (ii) attach any existing client .pptx and run extract_theme.py (same
# repository) — it prints a ready-to-paste THEME dict. Hex: 6 chars, no '#',
# no alpha. Never commit a client THEME to the public repository.
THEME = {
    "dominant":      "2F4858",  # lead brand colour — cover, dividers, the answer, table headers
    "accent":        "4E7C90",  # secondary brand colour — slide titles, line charts
    "highlight":     "C9A227",  # the one-highlight colour — eyebrows, numbers, highlighted bars
    "card_fill":     "EEF3F6",  # card / panel background tint
    "ink":           "1F2A31",  # near-black headings ink
    "ink_soft":      "3C4C57",  # body text ink
    "muted":         "6B7A85",  # secondary text, sources, footers
    "chart_compare": "B9C6CD",  # non-highlighted chart bars / comparison elements
    "font_heading":  "Georgia",  # travel-safe serif — installed on Windows and Mac alike
    "font_body":     "Arial",    # travel-safe sans — never substituted on client machines
}

META = {
    "title": "Win renewals on response time, not price",
    "subtitle": "Recommendation — SME contract churn",
    "author_line": "Strategy team",
    "date": "20 Aug 2026",
    "audience": "Managing director and the executive committee",
    "presence": "standalone",        # this generator assumes no presenter
    "archetype": "recommendation",   # used by the memo generator; ignored here
    "footer_tag": "Demonstration content — every name and number is fictional",
}

SCQA = {
    "tone_order": "SCA",  # SCA standard | ASC direct | CSA concerned
    "situation": ("Meridian serves 1,200 SME service contracts across the "
                  "South East, worth £5.1M of annual revenue. Renewal pricing "
                  "has been flat for two years."),
    "complication": ("Churn has risen from 22% to 35% in three years — a "
                     "£1.8M annual revenue impact. The lost-deal evidence "
                     "points away from price: objections fell 30% while churn "
                     "climbed."),
    "question": ("How does Meridian win renewals in a market that now judges "
                 "providers on response time?"),
}

GOVERNING_THOUGHT = ("Reposition Meridian around a response-time guarantee — "
                     "the factor deciding renewals — recovering churn to 25% "
                     "and £1.2M annual revenue within four quarters.")

KEY_LINE_ORDER = "degree"  # "time" | "structure" | "degree"

KEY_LINE = [
    {
        "tag": "DIAGNOSIS",
        "assertion": "Churn is perception-driven, not price-driven",
        "why_it_matters": ("Every remedy on the table prices the wrong "
                           "problem. The evidence separates what customers "
                           "say from what they do — and it clears price as "
                           "the cause."),
        "supports": [
            {
                "assertion": ("Current customers renew at stable rates while "
                              "competitor-bid churn climbs"),
                "prose": ("Existing-contract churn has held between 21% and "
                          "23% for eight quarters. A price problem hits "
                          "paying customers first, and it has not. The rise "
                          "is concentrated in renewals where a competitor "
                          "bid is on the table."),
                "bullets": [
                    "Existing-contract churn steady at 21–23% for eight quarters",
                    "Price pain reaches current payers first — it has not",
                    "The rise sits in renewals facing a competitor bid",
                ],
                "source": "Contract system renewal records, Q3 2024 to Q2 2026, n=1,180",
                "exhibit": None,
                "notes": ("Land the distinction between the two churn "
                          "populations before anyone mentions price. The "
                          "whole argument turns on it."),
            },
            {
                "assertion": ("Price objections fell 30% while churn rose 13 "
                              "points"),
                "prose": ("Recorded price objections fell from 46 to 32 a "
                          "quarter across three years. If price drove the "
                          "losses, objections would rise with churn. They "
                          "moved the opposite way."),
                "bullets": [
                    "A price-driven loss pattern would move these lines together",
                    "The divergence widens every year — this is not noise",
                    "Objections data covers all 1,200 contracts, not a sample",
                ],
                "source": "CRM objection log and renewal records, 2023 to 2026",
                "exhibit": {"exhibit_id": "EX-OBJECTIONS",
                            "kind": "line",
                            "unit": "Indexed, 2023 = 100",
                            "categories": ["2023", "2024", "2025", "2026"],
                            "series": [
                                {"name": "Price objections",
                                 "values": [100, 89, 80, 70]},
                                {"name": "Churn rate",
                                 "values": [100, 123, 145, 159]},
                            ],
                            "source": ("CRM objection log and renewal "
                                       "records, 2023 to 2026")},
                "notes": ("If price were the cause, this line would rise "
                          "with churn. Let the divergence do the work — no "
                          "editorialising needed."),
            },
            {
                "assertion": ("All 10 lost Q4 deals cite the competitor "
                              "guarantee and none cite price"),
                "prose": ("Every lost-deal review from the last quarter "
                          "names the competitor's four-hour response "
                          "guarantee. Price appears in none of them. The "
                          "market has changed what it judges providers on."),
                "bullets": [
                    "Unanimity across 10 reviews is rare — the n is small, the signal is not",
                    "Price at zero mentions rules it out as the loss driver",
                    "The competitor set the frame; the market has adopted it",
                ],
                "source": "Lost-deal reviews, Oct to Dec 2025, n=10",
                "exhibit": {"exhibit_id": "EX-LOSTDEAL",
                            "kind": "bar",
                            "unit": "Mentions across 10 lost-deal reviews",
                            "categories": ["Competitor response guarantee",
                                           "Service scope",
                                           "Relationship change",
                                           "Price"],
                            "values": [10, 3, 2, 0],
                            "highlight": 0,
                            "source": "Lost-deal reviews, Oct to Dec 2025, n=10"},
                "notes": ("This is the exhibit the sceptics remember. Ten "
                          "out of ten is unusual — say so, and say the n is "
                          "small but the signal is unanimous."),
            },
        ],
        "transition": ("If price is not the lever, the lost-deal records say "
                       "what is — and it is buildable."),
    },
    {
        "tag": "REMEDY",
        "assertion": ("A four-hour response guarantee wins the frame the "
                      "market now uses"),
        "why_it_matters": ("The competitor changed the question renewals are "
                           "judged on. Matching the guarantee answers that "
                           "question directly — and Meridian starts closer "
                           "to it than the sales narrative admits."),
        "supports": [
            {
                "assertion": ("The competitor guarantee reset what buyers ask "
                              "at renewal"),
                "prose": ("Renewal conversations now open with response "
                          "commitments, not price. Account managers report "
                          "the guarantee is raised by the customer in most "
                          "competitive renewals. The frame has moved and the "
                          "proposition has not moved with it."),
                "bullets": [
                    "Renewal conversations now open with response commitments",
                    "Customers raise the guarantee unprompted",
                    "The proposition has not moved with the frame",
                ],
                "source": "Account team renewal debriefs, Q1 to Q2 2026",
                "exhibit": None,
                "notes": ("Anchor this in the account managers' own words — "
                          "the evidence is qualitative and honest about it."),
            },
            {
                "assertion": ("Meridian already meets four hours on 78% of "
                              "callouts"),
                "prose": ("Dispatch records show 78% of 2025 callouts were "
                          "answered inside four hours without any guarantee "
                          "in place. The gap to close is the remaining 22% — "
                          "evenings, weekends and multi-site jobs. That gap "
                          "is known and priceable."),
                "bullets": [
                    "This is baseline performance — achieved with no guarantee in place",
                    "The gap is evenings, weekends and multi-site jobs",
                    "The guarantee prices the last 22%, not the whole operation",
                ],
                "source": "Dispatch system records, Jan to Dec 2025, n=8,400",
                "exhibit": {"exhibit_id": "EX-CALLOUTS",
                            "kind": "bar",
                            "unit": "% of 2025 callouts",
                            "categories": ["Met within four hours today",
                                           "Requires new cover"],
                            "values": [78, 22],
                            "highlight": 0,
                            "source": "Dispatch system records, 2025, n=8,400"},
                "notes": ("The surprise is how close we already are. The "
                          "guarantee prices the last 22%, not the whole "
                          "operation."),
            },
            {
                "assertion": ("The guarantee costs £350k a year to stand up"),
                "prose": ("Three cost lines close the 22% gap: extended "
                          "engineering cover, a triage desk, and a service-"
                          "credit reserve priced at a 2% breach rate. The "
                          "total is £350k a year, fixed."),
                "bullets": [
                    "All three lines are fixed cost — no per-callout scaling",
                    "The reserve is the honest line: it prices the 2% breach rate",
                    "£350k is 7% of the £5.1M revenue under protection",
                ],
                "source": "Operations costing model v2, Jul 2026",
                "exhibit": {"exhibit_id": "EX-COSTS",
                            "kind": "waterfall",
                            "unit": "£k a year",
                            "categories": ["Engineering cover", "Triage desk",
                                           "Credit reserve", "Total"],
                            "values": [190, 95, 65, 350],
                            "totals": [3],
                            "source": "Operations costing model v2, Jul 2026"},
                "notes": ("The reserve line is the honest one — a guarantee "
                          "without a priced breach rate is a slogan."),
            },
        ],
        "transition": ("A guarantee Meridian can meet at a known cost must "
                       "still pay. It does — on pessimistic assumptions."),
    },
    {
        "tag": "ECONOMICS",
        "assertion": ("The programme pays back within four quarters on the "
                      "central case"),
        "why_it_matters": ("The case is priced in ranges, not a point value. "
                           "Even the pessimistic case clears the outlay "
                           "inside five quarters, and the staged spend caps "
                           "the downside."),
        "supports": [
            {
                "assertion": ("Recovered renewals return £0.9M to £1.6M a "
                              "year against the £350k outlay"),
                "prose": ("The scenario table runs churn recovery at three "
                          "levels. The central case recovers churn to 27% "
                          "and returns £1.2M a year — payback inside four "
                          "quarters. The pessimistic case still pays back "
                          "in five."),
                "bullets": [
                    "Central case: churn to 27%, £1.2M a year recovered",
                    "Pessimistic case still pays back in five quarters",
                    "All three cases clear the £350k outlay",
                ],
                "source": "Renewal economics model, scenario run Jul 2026",
                "exhibit": {"exhibit_id": "EX-SCENARIOS",
                            "kind": "table",
                            "headers": ["Scenario", "Churn recovered to",
                                        "Revenue recovered", "Payback"],
                            "rows": [
                                ["Pessimistic", "31%", "£0.9M a year", "5 quarters"],
                                ["Central", "27%", "£1.2M a year", "4 quarters"],
                                ["Optimistic", "25%", "£1.6M a year", "3 quarters"],
                            ],
                            "source": "Renewal economics model, Jul 2026"},
                "notes": ("Never present the central case alone. The range "
                          "is the credibility."),
            },
            {
                "assertion": ("The 90-day gate caps the downside at £120k"),
                "prose": ("Spend is staged: £120k reaches the field before "
                          "the 90-day review. If lost-deal citations of the "
                          "competitor guarantee have not fallen below five a "
                          "quarter by then, the programme stops before the "
                          "remaining spend commits."),
                "bullets": [
                    "Only £120k committed before the 90-day review",
                    "Stop trigger: citations still above five a quarter",
                    "The remaining spend never commits on a failed signal",
                ],
                "source": "Programme spend schedule, draft Jul 2026",
                "exhibit": None,
                "notes": ("The gate is what makes this approvable — the "
                          "decision is reversible at a known cost."),
            },
        ],
        "transition": None,
    },
]

CONCLUSION = {
    "restate": ("The renewal problem is a framing problem, and the guarantee "
                "answers it — churn back to 25% and £1.2M of revenue "
                "recovered within four quarters."),
    "key_assumption": ("This rests on the market's response-time frame "
                       "persisting. If lost-deal citations shift away from "
                       "it, we review at the 90-day gate."),
    "next_action": ("The operations director stands up the build team on "
                    "1 Oct 2026."),
}

ASK = {
    "decision": ("Approve the response-time guarantee programme at £350k a "
                 "year"),
    "gate": ("Stop at 90 days if lost-deal citations of the competitor "
             "guarantee have not fallen below five a quarter"),
    "owner": "Operations director",
    "date": "1 Oct 2026",
}

NEXT_STEPS = [
    ("Confirm the service-credit terms with legal", "Commercial lead", "12 Sep 2026"),
    ("Brief the account teams on the renewal script", "Sales director", "19 Sep 2026"),
]

# --- EXHIBIT REUSE (Stage 4) — one row per exhibit this deck uses. Every
# support exhibit's exhibit_id must appear here. decision: "REUSE" (as-is
# from a prior deck) | "ADAPT" ('changes' required) | "NEW". data_vintage =
# date of the UNDERLYING data (YYYY-MM), not the deck date. Staleness guard:
# REUSE/ADAPT rows older than MAX_VINTAGE_MONTHS fail the build unless
# vintage_accepted is True with a stated vintage_reason. NEW rows are exempt.
# ENGAGEMENT ASSET: never commit a filled register to the public repository.
MAX_VINTAGE_MONTHS = 6

EXHIBIT_REGISTER = [
    {"exhibit_id": "EX-OBJECTIONS",
     "message": ("Price objections fell while churn rose — the two series "
                 "diverge"),
     "chart_form": "line", "source_deck": "Q2 renewal review deck",
     "data_vintage": "2026-07", "decision": "ADAPT",
     "changes": ("Add the churn series alongside objections and index both "
                 "to 2023 = 100 so the divergence reads on one axis"),
     "vintage_accepted": False, "vintage_reason": ""},
    {"exhibit_id": "EX-LOSTDEAL",
     "message": ("All 10 lost Q4 deals cite the competitor guarantee; none "
                 "cite price"),
     "chart_form": "bar", "source_deck": "",
     "data_vintage": "2025-12", "decision": "NEW", "changes": "",
     "vintage_accepted": False, "vintage_reason": ""},
    {"exhibit_id": "EX-CALLOUTS",
     "message": "Meridian already meets four hours on 78% of callouts",
     "chart_form": "bar", "source_deck": "",
     "data_vintage": "2026-02", "decision": "NEW", "changes": "",
     "vintage_accepted": False, "vintage_reason": ""},
    {"exhibit_id": "EX-COSTS",
     "message": "The guarantee costs £350k a year, in three fixed lines",
     "chart_form": "waterfall", "source_deck": "Operations costing pack v2",
     "data_vintage": "2026-01", "decision": "ADAPT",
     "changes": ("Rebuild the costing table as a build-up waterfall so the "
                 "three lines read as one £350k total"),
     "vintage_accepted": True,
     "vintage_reason": ("Costing re-validated Jul 2026 against supplier "
                        "quotes; underlying rates unchanged")},
    {"exhibit_id": "EX-SCENARIOS",
     "message": ("Recovered renewals return £0.9M–£1.6M a year against the "
                 "£350k outlay"),
     "chart_form": "table", "source_deck": "Renewal economics model pack",
     "data_vintage": "2026-07", "decision": "REUSE", "changes": "",
     "vintage_accepted": False, "vintage_reason": ""},
]

