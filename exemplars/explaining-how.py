# -*- coding: utf-8 -*-
# EXEMPLAR — pattern: EXPLAINING HOW ("the present system does not meet the
# need — here is how the new one will work"). Paste everything below this
# header between the DATA markers of generate_standalone_deck.py or
# generate_presentation_deck.py and run. All content is fictional
# (Northgate Housing, a social landlord).
# Signature moves of this pattern: the question is "how will it work?"; the
# key line runs in STRUCTURE order (the parts of the process, in sequence);
# every trade-off is named on the slide, not buried; the cost bridge kills
# the cost objection before it is raised.
# Chart paths exercised: waterfall WITH a negative delta (cost bridge),
# single-series bar with highlight, table.

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
    "title": "Three-lane triage meets the one-hour standard",
    "subtitle": "How the new repairs triage will work",
    "author_line": "Repairs transformation team",
    "date": "29 Sep 2026",
    "audience": "Repairs staff and the executive team",
    "presence": "standalone",
    "archetype": "explanation",
    "footer_tag": "Demonstration content — every name and number is fictional",
}

SCQA = {
    "tone_order": "SCA",
    "situation": ("Northgate handles 3,800 repair requests a month through "
                  "a single phone queue, triaged by whoever answers the "
                  "call."),
    "complication": ("Emergency jobs wait behind routine ones — median time "
                     "to dispatch an emergency is 4.1 hours, and the "
                     "regulator's new standard requires one hour."),
    "question": ("How will the new triage process meet the one-hour "
                 "standard?"),
}

GOVERNING_THOUGHT = ("A three-lane triage — emergency, urgent, routine — "
                     "sorted at first contact by a scripted decision tree, "
                     "dispatches emergencies inside one hour.")

KEY_LINE_ORDER = "structure"

KEY_LINE = [
    {
        "tag": "SORTING",
        "assertion": ("First contact sorts every request into one of three "
                      "lanes"),
        "why_it_matters": ("The decision tree does the sorting, not "
                           "judgement under pressure: eight questions, "
                           "asked in order, place every request in a lane "
                           "before the call ends."),
        "supports": [
            {
                "assertion": ("An eight-question script places requests in "
                              "a lane within four minutes"),
                "prose": ("The script asks eight yes-or-no questions drawn "
                          "from the regulator's hazard categories. In the "
                          "six-week pilot, call handlers placed 96% of "
                          "requests in the correct lane, averaging three "
                          "minutes forty seconds per call."),
                "bullets": [
                    "96% correct lane placement in the pilot",
                    "Questions map to the regulator's hazard categories",
                    "Disputed cases default to the faster lane",
                ],
                "source": "Triage pilot evaluation, weeks 1 to 6, Aug 2026",
                "exhibit": {"exhibit_id": "EX-PILOT",
                            "kind": "bar",
                            "unit": "% of pilot calls, n=1,140",
                            "categories": ["Correct lane", "One lane low",
                                           "One lane high"],
                            "values": [96, 3, 1],
                            "highlight": 0,
                            "source": ("Triage pilot evaluation, weeks 1 "
                                       "to 6, Aug 2026")},
                "notes": ("Default-to-faster-lane is the safety valve — "
                          "mis-sorts err toward speed, never away from "
                          "it."),
            },
            {
                "assertion": ("Emergency dispatch is automated once a "
                              "request lands in the lane"),
                "prose": ("A request entering the emergency lane pages the "
                          "on-shift operative directly with the job and "
                          "address. No coordinator sits between triage and "
                          "dispatch, which removes the queue where the 4.1 "
                          "hours accumulated."),
                "bullets": [
                    "Direct paging removes the coordinator queue",
                    "The on-shift rota guarantees two operatives per patch",
                    "Routine lanes keep the existing scheduling flow",
                ],
                "source": "Process design v2, dispatch flow, Sep 2026",
                "exhibit": None,
                "notes": ("The old process failed in the hand-off, not the "
                          "visit — that hand-off is what the automation "
                          "removes."),
            },
        ],
        "transition": ("Sorting is half the answer; the standard is met "
                       "only if the numbers hold at load."),
    },
    {
        "tag": "LOAD",
        "assertion": ("The emergency lane meets one hour at forecast "
                      "volumes"),
        "why_it_matters": ("Modelled at winter peak the emergency lane "
                           "dispatches in a 41-minute median, and the cost "
                           "bridge shows the process saves money rather "
                           "than adding it."),
        "supports": [
            {
                "assertion": ("Median emergency dispatch falls from 4.1 "
                              "hours to 41 minutes"),
                "prose": ("The queue model runs winter peak volumes through "
                          "the three lanes. Emergencies, at 9% of requests, "
                          "dispatch in a 41-minute median and 55 minutes at "
                          "the 95th percentile — inside the standard with "
                          "buffer to spare."),
                "bullets": [
                    "41-minute median, 55 minutes at the 95th percentile",
                    "Winter peak modelled, not average load",
                    "Routine waits grow twenty minutes — a named trade",
                ],
                "source": "Queue simulation on winter 2025 volumes, Sep 2026",
                "exhibit": {"exhibit_id": "EX-QUEUE",
                            "kind": "table",
                            "headers": ["Measure", "Today", "Three-lane"],
                            "rows": [
                                ["Median emergency dispatch", "4.1 hours",
                                 "41 minutes"],
                                ["95th percentile", "9.6 hours",
                                 "55 minutes"],
                                ["Routine median wait", "2.0 days",
                                 "2.1 days"],
                            ],
                            "source": ("Queue simulation on winter 2025 "
                                       "volumes, Sep 2026")},
                "notes": ("Name the trade honestly: routine waits grow "
                          "twenty minutes so emergencies gain three and a "
                          "half hours."),
            },
            {
                "assertion": ("The process saves £120k a year after paging "
                              "costs"),
                "prose": ("The cost bridge starts from today's £820k annual "
                          "triage and dispatch cost. Scripted triage "
                          "removes £160k of coordinator time, direct paging "
                          "adds £40k of licences and hardware, landing at "
                          "£700k a year."),
                "bullets": [
                    "Coordinator saving funds the paging system four times over",
                    "Coordinators move to routine scheduling, no headcount cut",
                    "Setup costs pay back inside five months",
                ],
                "source": "Repairs cost bridge, finance sign-off, Sep 2026",
                "exhibit": {"exhibit_id": "EX-BRIDGE",
                            "kind": "waterfall",
                            "unit": "£k a year",
                            "categories": ["Today", "Coordinator time",
                                           "Paging system", "Three-lane"],
                            "values": [820, -160, 40, 700],
                            "totals": [0, 3],
                            "source": ("Repairs cost bridge, finance "
                                       "sign-off, Sep 2026")},
                "notes": ("The bridge kills the cost objection before it is "
                          "raised — the saving pays for the system and "
                          "£120k besides."),
            },
        ],
        "transition": None,
    },
]

CONCLUSION = {
    "restate": ("Three lanes sorted by script at first contact, automated "
                "emergency dispatch, the one-hour standard met at winter "
                "peak, £120k a year saved."),
    "key_assumption": ("The 96% pilot sort accuracy holds at full volume; "
                       "accuracy is audited weekly for the first quarter "
                       "and the script revised if it slips below 93%."),
    "next_action": ("Call handler training starts 6 October; the three "
                    "lanes go live for all patches on 3 November."),
}

ASK = {
    "decision": "Sign off the three-lane triage go-live on 3 November",
    "gate": ("Delay a patch if its weekly sort audit falls below 93% "
             "accuracy"),
    "owner": "Head of repairs",
    "date": "3 Nov 2026",
}

NEXT_STEPS = [
    ("Complete call handler training, all shifts", "Head of repairs",
     "31 Oct 2026"),
    ("Confirm paging licences and rota cover", "Operations manager",
     "20 Oct 2026"),
]

MAX_VINTAGE_MONTHS = 6

EXHIBIT_REGISTER = [
    {"exhibit_id": "EX-PILOT",
     "message": ("96% of pilot calls landed in the correct lane, and "
                 "mis-sorts default to the faster lane"),
     "chart_form": "bar", "source_deck": "",
     "data_vintage": "2026-08", "decision": "NEW", "changes": "",
     "vintage_accepted": False, "vintage_reason": ""},
    {"exhibit_id": "EX-QUEUE",
     "message": ("Emergency dispatch falls from 4.1 hours to 41 minutes at "
                 "winter peak; routine waits grow twenty minutes"),
     "chart_form": "table", "source_deck": "",
     "data_vintage": "2026-09", "decision": "NEW", "changes": "",
     "vintage_accepted": False, "vintage_reason": ""},
    {"exhibit_id": "EX-BRIDGE",
     "message": ("The cost bridge lands at £700k a year — the coordinator "
                 "saving funds the paging system four times over"),
     "chart_form": "waterfall", "source_deck": "",
     "data_vintage": "2026-09", "decision": "NEW", "changes": "",
     "vintage_accepted": False, "vintage_reason": ""},
]
