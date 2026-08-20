# -*- coding: utf-8 -*-
# EXEMPLAR — pattern: CHOOSING AMONG ALTERNATIVES ("we want to do X and have
# several ways — which makes most sense?"). Paste everything below this
# header between the DATA markers of generate_standalone_deck.py or
# generate_presentation_deck.py and run. All content is fictional
# (Bram & Field, a retail fulfilment business).
# Signature moves of this pattern: the governing thought NAMES the winner and
# the margin; the key line runs in DEGREE order (the sharpest differentiator
# first); losing options are dispatched with numbers, not adjectives; the
# rejected option that stays available later is named in the conclusion.
# Chart paths exercised: two-series column (capital vs running cost), table.

THEME = {
    "dominant":      "2F4858",
    "accent":        "4E7C90",
    "highlight":     "C9A227",
    "card_fill":     "EEF3F6",
    "ink":           "1F2A31",
    "ink_soft":      "3C4C57",
    "muted":         "6B7A85",
    "chart_compare": "B9C6CD",
    "font_heading":  "Georgia",
    "font_body":     "Arial",
}

META = {
    "title": "Extend Reading, not relocate",
    "subtitle": "Recommendation — warehouse capacity decision",
    "author_line": "Operations strategy",
    "date": "28 Sep 2026",
    "audience": "The board",
    "presence": "standalone",
    "archetype": "choice",
    "footer_tag": "Demonstration content — every name and number is fictional",
}

SCQA = {
    "tone_order": "ASC",
    "situation": ("Bram and Field ships 14,000 orders a month from a single "
                  "Reading warehouse now at 96% of pick capacity."),
    "complication": ("Order volume grows 30% a year and the site saturates "
                     "next spring; three expansion options are fully costed "
                     "and diligence is complete."),
    "question": "Which expansion option should the board fund?",
}

GOVERNING_THOUGHT = ("Extend Reading now — it is £1.1M cheaper than "
                     "relocating over ten years, keeps the trained crew, "
                     "and covers growth to 2030.")

KEY_LINE_ORDER = "degree"

KEY_LINE = [
    {
        "tag": "COST",
        "assertion": ("Extension beats both alternatives on ten-year cost"),
        "why_it_matters": ("Cost separates the options most sharply: the "
                           "ten-year totals differ by more than £1M, and "
                           "the extension wins under every volume scenario "
                           "tested."),
        "supports": [
            {
                "assertion": ("Ten-year cost is £3.2M against £4.3M for "
                              "relocation"),
                "prose": ("The costing compares extension, relocation to "
                          "Swindon, and a third-party logistics contract "
                          "over ten years. Extension totals £3.2M, "
                          "relocation £4.3M once fit-out and dual-running "
                          "are counted, and outsourcing £4.9M at quoted "
                          "rates."),
                "bullets": [
                    "Relocation's dual-running period alone costs £480k",
                    "Outsourcing is cheapest in year one, dearest by year four",
                    "Every volume scenario keeps the same ranking",
                ],
                "source": "Expansion options costing model, Sep 2026",
                "exhibit": {"exhibit_id": "EX-TENYEAR",
                            "kind": "column",
                            "unit": "£M over ten years",
                            "categories": ["Extend Reading",
                                           "Relocate Swindon",
                                           "Outsource 3PL"],
                            "series": [
                                {"name": "Capital",
                                 "values": [1.1, 1.9, 0.2]},
                                {"name": "Running cost",
                                 "values": [2.1, 2.4, 4.7]},
                            ],
                            "source": ("Expansion options costing model, "
                                       "Sep 2026")},
                "notes": ("Walk the eye across the pairs: capital is not "
                          "the story — running cost is where outsourcing "
                          "loses."),
            },
            {
                "assertion": ("The trained crew stays, avoiding a nine-month "
                              "productivity dip"),
                "prose": ("Relocation retains an estimated 60% of warehouse "
                          "staff at best. Comparable moves in the sector "
                          "show pick-rate productivity taking nine months "
                          "to recover, and peak season falls inside that "
                          "window."),
                "bullets": [
                    "Sector benchmark: nine months to recover pick rates",
                    "Peak season falls inside the recovery window",
                    "Extension keeps the full trained crew",
                ],
                "source": "Sector relocation benchmark study, 2025",
                "exhibit": None,
                "notes": ("The crew point is the one boards underweight — "
                          "read the benchmark number out loud."),
            },
        ],
        "transition": ("Cost decides the ranking; capacity confirms the "
                       "winner is not a short-term fix."),
    },
    {
        "tag": "CAPACITY",
        "assertion": ("The extended site covers forecast growth until 2030"),
        "why_it_matters": ("An option that must be repeated in three years "
                           "is no option; the extension holds to 2030 on "
                           "the central forecast, with the Swindon option "
                           "still available then."),
        "supports": [
            {
                "assertion": ("Extension lifts capacity to 26,000 orders a "
                              "month"),
                "prose": ("The mezzanine extension adds 12,000 orders a "
                          "month of pick capacity. Against the central "
                          "forecast of 30% annual growth the extended site "
                          "saturates in 2030, and in 2029 under the high "
                          "case."),
                "bullets": [
                    "Central case: headroom to 2030",
                    "High case: headroom to 2029",
                    "Planning consent for the mezzanine is pre-approved",
                ],
                "source": "Capacity model v4 and demand forecast, Sep 2026",
                "exhibit": {"exhibit_id": "EX-SATURATION",
                            "kind": "table",
                            "headers": ["Scenario", "Orders per month, 2030",
                                        "Saturation year"],
                            "rows": [
                                ["Central", "24,600", "2030"],
                                ["High", "27,900", "2029"],
                                ["Low", "21,200", "After 2031"],
                            ],
                            "source": ("Capacity model v4 and demand "
                                       "forecast, Sep 2026")},
                "notes": ("If pressed on life beyond 2030: Swindon remains "
                          "available then, decided with three more years of "
                          "information."),
            },
            {
                "assertion": ("Construction runs without stopping order "
                              "fulfilment"),
                "prose": ("The mezzanine builds above the existing pick "
                          "floor in three phased sections over 22 weeks. "
                          "The contractor guarantees fulfilment continues "
                          "throughout, carrying a £40k weekly penalty if "
                          "any phase closes the floor."),
                "bullets": [
                    "Three phased sections, none closing the pick floor",
                    "Contractor carries a £40k weekly disruption penalty",
                    "Build completes in 22 weeks",
                ],
                "source": "Contractor proposal and penalty terms, Aug 2026",
                "exhibit": None,
                "notes": ("The penalty clause moves the disruption risk from "
                          "our balance sheet to theirs — that is the reason "
                          "to sign in October."),
            },
        ],
        "transition": None,
    },
]

CONCLUSION = {
    "restate": ("Extend Reading: £1.1M cheaper than relocating over ten "
                "years, the trained crew retained, and capacity covered "
                "to 2030."),
    "key_assumption": ("The case rests on the central demand forecast; the "
                       "capacity model re-runs quarterly, and saturation "
                       "arriving in 2029 would bring the Swindon decision "
                       "forward."),
    "next_action": ("The operations director signs the contractor's terms "
                    "in October to hold the 22-week build slot."),
}

ASK = {
    "decision": ("Approve the £1.1M Reading extension at the October "
                 "board"),
    "gate": ("Revisit if the quarterly capacity re-run shows saturation "
             "before 2029"),
    "owner": "Operations director",
    "date": "14 Oct 2026",
}

NEXT_STEPS = [
    ("Sign contractor terms and penalty clause", "Operations director",
     "21 Oct 2026"),
    ("Notify the Swindon landlord the option lapses", "Commercial lead",
     "31 Oct 2026"),
]

MAX_VINTAGE_MONTHS = 6

EXHIBIT_REGISTER = [
    {"exhibit_id": "EX-TENYEAR",
     "message": ("Extension wins on ten-year cost — running cost, not "
                 "capital, is where outsourcing loses"),
     "chart_form": "column", "source_deck": "",
     "data_vintage": "2026-09", "decision": "NEW", "changes": "",
     "vintage_accepted": False, "vintage_reason": ""},
    {"exhibit_id": "EX-SATURATION",
     "message": ("The extended site holds to 2030 on the central case and "
                 "2029 on the high case"),
     "chart_form": "table", "source_deck": "",
     "data_vintage": "2026-09", "decision": "NEW", "changes": "",
     "vintage_accepted": False, "vintage_reason": ""},
]
