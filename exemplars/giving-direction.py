# -*- coding: utf-8 -*-
# EXEMPLAR — pattern: GIVING DIRECTION ("we want to do X, we need you to do
# Y — here is how"). Paste everything below this header between the DATA
# markers of generate_standalone_deck.py or generate_presentation_deck.py
# and run. All content is fictional (Harbourside Clinics).
# Signature moves of this pattern: the question is "how?", the key line runs
# in TIME order (the sequence is the argument), the ask lands on the readers
# themselves — the thing they must do and the date they must do it by.
# Chart paths exercised: single-series bar with highlight, single-series line.

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
    "title": "Move every clinic to shared booking by 30 June",
    "subtitle": "Direction — booking platform migration",
    "author_line": "Operations team",
    "date": "20 Apr 2026",
    "audience": "Clinic managers and reception leads",
    "presence": "standalone",
    "archetype": "direction",
    "footer_tag": "Demonstration content — every name and number is fictional",
}

SCQA = {
    "tone_order": "SCA",
    "situation": ("Harbourside runs three clinics on three separate booking "
                  "systems. Reception teams manage 2,100 appointments a week "
                  "across them."),
    "complication": ("Double-bookings and missed referrals now cost 90 staff "
                     "hours a month, and the legacy licences expire on "
                     "30 June with no renewal option."),
    "question": ("How do the clinics move to the shared platform before the "
                 "licences expire?"),
}

GOVERNING_THOUGHT = ("Migrate clinic by clinic over eight weeks — Eastgate "
                     "first, then Marina, then Hillcrest — with two-week "
                     "parallel running at each site.")

KEY_LINE_ORDER = "time"

KEY_LINE = [
    {
        "tag": "SEQUENCE",
        "assertion": ("Eastgate migrates first because its data is already "
                      "clean"),
        "why_it_matters": ("The order is not preference. Eastgate proves the "
                           "method on the cleanest data, so Marina and "
                           "Hillcrest inherit a tested runbook rather than "
                           "a theory."),
        "supports": [
            {
                "assertion": ("Eastgate's records passed validation with a "
                              "2% error rate"),
                "prose": ("The platform vendor validated all three record "
                          "sets in April. Eastgate cleared with 2% field "
                          "errors against 11% at Marina and 19% at "
                          "Hillcrest, so it converts with the least manual "
                          "correction."),
                "bullets": [
                    "Error rates decide the order — cleanest site first",
                    "Marina and Hillcrest get eight extra weeks of cleaning",
                    "Validation re-runs monthly until each site converts",
                ],
                "source": "Vendor data validation report, Apr 2026",
                "exhibit": {"exhibit_id": "EX-ERRORS",
                            "kind": "bar",
                            "unit": "% of records with field errors",
                            "categories": ["Eastgate", "Marina", "Hillcrest"],
                            "values": [2, 11, 19],
                            "highlight": 0,
                            "source": ("Vendor data validation report, "
                                       "Apr 2026")},
                "notes": ("The order falls out of the data, not preference — "
                          "say that plainly and the site rivalry question "
                          "never comes up."),
            },
            {
                "assertion": ("Reception training takes one week per site "
                              "with cover booked"),
                "prose": ("Each site trains its reception team in the week "
                          "before cutover. Agency cover holds the front desk "
                          "for four half-days per site, already booked and "
                          "budgeted at £3,400 in total."),
                "bullets": [
                    "Four half-days of agency cover per site, pre-booked",
                    "Training happens on the live platform, not a sandbox",
                    "Cover cost already sits inside the migration budget",
                ],
                "source": "Migration plan v3, training schedule, Apr 2026",
                "exhibit": None,
                "notes": ("Reassure the leads: cover is booked and paid — "
                          "training is not extra load on their teams."),
            },
        ],
        "transition": ("With the order set, the timeline holds only if "
                       "parallel running is disciplined."),
    },
    {
        "tag": "CUTOVER",
        "assertion": ("Two-week parallel running protects every site's "
                      "appointments"),
        "why_it_matters": ("Parallel running is the safety net: both systems "
                           "stay live, reception reconciles daily, and "
                           "cutover happens only after five consecutive "
                           "clean days."),
        "supports": [
            {
                "assertion": ("Bookings run on both systems until five clean "
                              "days accrue"),
                "prose": ("During parallel running every appointment is "
                          "entered in both systems and reconciled at close "
                          "of day. A site cuts over only after five "
                          "consecutive days with zero unmatched bookings, "
                          "and any mismatch resets the counter."),
                "bullets": [
                    "Daily reconciliation owned by the site lead",
                    "Five consecutive clean days trigger cutover",
                    "Any unmatched booking resets the counter",
                ],
                "source": "Migration plan v3, cutover criteria, Apr 2026",
                "exhibit": {"exhibit_id": "EX-RAMP",
                            "kind": "line",
                            "unit": "Weekly appointments on the shared platform",
                            "categories": ["Wk 1", "Wk 2", "Wk 3", "Wk 4",
                                           "Wk 5", "Wk 6", "Wk 7", "Wk 8"],
                            "values": [260, 700, 700, 1400, 1400, 2100,
                                       2100, 2100],
                            "source": ("Migration plan v3, volume ramp, "
                                       "Apr 2026")},
                "notes": ("The ramp chart shows reception the shape of the "
                          "eight weeks — steps with pauses, not a cliff."),
            },
            {
                "assertion": ("Licences lapse on 30 June and the plan lands "
                              "thirteen days early"),
                "prose": ("The legacy vendor has confirmed licences end on "
                          "30 June and will not extend month to month. The "
                          "eight-week plan completes Hillcrest's cutover on "
                          "12 June, leaving thirteen working days of slack."),
                "bullets": [
                    "No month-to-month extension exists — the date is hard",
                    "Hillcrest completes 12 June, thirteen working days early",
                    "Slack absorbs one full reset of the clean-day counter",
                ],
                "source": "Legacy vendor termination letter, Mar 2026",
                "exhibit": None,
                "notes": ("If asked what happens if we miss: there is no "
                          "fallback system — that is exactly why the slack "
                          "exists."),
            },
        ],
        "transition": None,
    },
]

CONCLUSION = {
    "restate": ("Clinic-by-clinic migration in eight weeks, cleanest data "
                "first, two-week parallel running at each site, complete "
                "thirteen working days before licences lapse."),
    "key_assumption": ("This rests on Marina and Hillcrest reaching under 5% "
                       "field errors by their conversion dates; monthly "
                       "validation re-runs track it."),
    "next_action": ("Eastgate's parallel running starts Monday 4 May; site "
                    "leads confirm reception rotas this week."),
}

ASK = {
    "decision": ("Confirm your site's training week and reception cover "
                 "rota by Friday 24 April"),
    "gate": ("Escalate to the operations director if any site's error rate "
             "is above 5% two weeks before its slot"),
    "owner": "Site leads, coordinated by the operations director",
    "date": "24 Apr 2026",
}

NEXT_STEPS = [
    ("Return signed-off reception rotas", "Site leads", "24 Apr 2026"),
    ("Book the vendor's go-live engineer for each cutover", "IT manager",
     "1 May 2026"),
]

MAX_VINTAGE_MONTHS = 6

EXHIBIT_REGISTER = [
    {"exhibit_id": "EX-ERRORS",
     "message": ("Eastgate's 2% error rate against 11% and 19% decides the "
                 "migration order"),
     "chart_form": "bar", "source_deck": "",
     "data_vintage": "2026-04", "decision": "NEW", "changes": "",
     "vintage_accepted": False, "vintage_reason": ""},
    {"exhibit_id": "EX-RAMP",
     "message": ("Appointments move to the shared platform in steps, not a "
                 "cliff — full volume by week six"),
     "chart_form": "line", "source_deck": "",
     "data_vintage": "2026-04", "decision": "NEW", "changes": "",
     "vintage_accepted": False, "vintage_reason": ""},
]
