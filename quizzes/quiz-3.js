const quiz3 = {
  title: "Chapter 3 Quiz — Financing & the Capital Stack",
  questions: [
    {
      q: "A developer wants to control a 1.2-acre site for 18 months while completing zoning approvals and lining up construction financing. They cannot commit to a full purchase yet. Which land control strategy best limits their downside exposure during this period?",
      opts: [
        "Close on the land immediately using a bridge loan so the lender sees committed equity",
        "Enter an option-to-purchase, paying a negotiated option fee to take the site off the market while completing entitlements and financing",
        "Sign a letter of intent with no financial commitment until the zoning is approved",
        "Acquire the land in a separate holding company with no personal guarantee"
      ],
      ans: 1,
      exp: [
        "Incorrect. Closing immediately with a bridge loan commits full capital, starts the interest clock, and ties up equity — all before the developer knows whether the zoning will be approved. The downside if the project does not proceed is the entire land value plus carrying costs.",
        "Correct. An option-to-purchase allows the developer to control the site for a fraction of the eventual purchase price. The maximum loss is the option fee — not the full land cost — if entitlements fail or financing cannot be arranged. This is why options are the preferred land control mechanism during the high-uncertainty early stages of development.",
        "Incorrect. A letter of intent typically does not obligate the seller to hold the site exclusively for the developer. Without a formal option agreement with consideration paid, the seller can continue marketing the property and accept another offer.",
        "Incorrect. The holding company structure addresses liability exposure but does not change the capital commitment or interest clock on a bridge loan. Closing through a holding entity still requires full capital deployment at acquisition."
      ]
    },
    {
      q: "A stabilized rental project generates $4,200,000 in annual NOI. A permanent lender is willing to lend at 65% LTV against a $70,000,000 appraised value, but also requires a minimum DSCR of 1.30x at a 5.5% interest rate on a 25-year amortization. The annual debt service on a $45,500,000 loan would be approximately $3,340,000. Which constraint actually limits the loan size?",
      opts: [
        "LTV — the maximum loan is $45,500,000 (65% x $70M) and the DSCR is comfortably met",
        "DSCR — the maximum loan supportable by NOI at 1.30x is approximately $43,130,000, which is lower than the LTV-constrained amount",
        "Neither — both constraints produce the same loan amount so the lender has no binding limit",
        "DSCR is only relevant for the construction loan, not the permanent mortgage"
      ],
      ans: 1,
      exp: [
        "Incorrect. You need to verify whether the NOI supports the debt service at the LTV-constrained loan amount. At $45.5M with $3,340,000 in annual debt service: DSCR = $4,200,000 / $3,340,000 = 1.257x — below the required 1.30x minimum. The DSCR test fails at the LTV-constrained loan amount, meaning the lender must reduce the loan until the DSCR clears 1.30x.",
        "Correct. Maximum supportable debt service at 1.30x DSCR = $4,200,000 / 1.30 = $3,230,769. The loan amount that produces that debt service is lower than $45,500,000 — meaning the DSCR constraint binds first. Lenders always size to the lower of the amount justified by LTC, LTV, and DSCR.",
        "Incorrect. Both constraints rarely produce the same loan amount — and even if they did by coincidence, the lender still underwrites to the lower of the two. The DSCR is an independent constraint on loan size that operates separately from LTV.",
        "Incorrect. DSCR is the most important metric for permanent mortgage underwriting. Construction lenders also stress-test DSCR to evaluate whether the projected NOI at stabilization will support the permanent loan that is supposed to take out the construction facility."
      ]
    },
    {
      q: "A construction loan has an LTC of 72% on a $95,000,000 project. Three months into construction the project monitor flags that total project cost has increased to $103,000,000 due to scope changes. Assuming the loan amount does not change, what is the new LTC and what does this mean for the developer?",
      opts: [
        "LTC rises to 78.4% — the developer must contribute additional equity to restore the lender-required ratio",
        "LTC falls to 66.4% — the lender now has more security, but the developer still must fund the $7,600,000 cost increase from equity or contingency",
        "LTC is unchanged because it is calculated only once at loan origination",
        "LTC rises to 78.4% — the lender automatically increases the loan to maintain the original ratio"
      ],
      ans: 1,
      exp: [
        "Incorrect. The loan amount stays fixed at $68,400,000 (72% x $95M). With total cost rising to $103M, the new LTC is $68,400,000 / $103,000,000 = 66.4% — which actually falls, not rises. However, the developer still has a $7.6M cost increase that must be funded.",
        "Correct. Original loan = 72% x $95M = $68,400,000. New LTC = $68,400,000 / $103,000,000 = 66.4% — the ratio improves from the lender perspective because the fixed loan is now a smaller share of a larger project. However, the $7,600,000 cost increase must be funded from somewhere: from contingency (if adequate), from additional equity, or through a formal loan amendment.",
        "Incorrect. LTC is recalculated whenever total project cost changes materially. Lenders require updated cost reports and the project monitor tracks costs against budget precisely to monitor this ratio throughout construction.",
        "Incorrect. Lenders do not automatically increase loan amounts to maintain LTC ratios when costs increase. Any increase in the loan facility requires a formal credit amendment, additional underwriting, and typically additional fees."
      ]
    },
    {
      q: "An LP investor has contributed $8,000,000 to a project with an 8% preferred return. After 3 years the project is sold. Before the GP receives any promote, what must the LP receive?",
      opts: [
        "$8,000,000 return of capital only — the preferred return is only paid if profits exceed a threshold",
        "$9,920,000 — return of capital plus 8% per annum simple interest for 3 years on the original contribution",
        "$8,640,000 — return of capital plus a one-time 8% payment regardless of hold period",
        "$10,496,640 — return of capital plus 8% compounded annually for 3 years"
      ],
      ans: 1,
      exp: [
        "Incorrect. The preferred return is not contingent on profits exceeding a threshold — it accrues from the date of contribution and must be paid in full before the GP receives any promote.",
        "Correct. The preferred return accrues on unreturned capital from the date of contribution. $8,000,000 x 8% x 3 years = $1,920,000 in preferred return. Total LP distribution before GP promote = $8,000,000 + $1,920,000 = $9,920,000.",
        "Incorrect. The preferred return accrues over time — it is not a one-time flat payment. An 8% preferred return on $8M held for 3 years is $1,920,000, not $640,000.",
        "Incorrect. Preferred returns in LP agreements are typically calculated on a simple interest basis on unreturned capital, not compounded annually."
      ]
    },
    {
      q: "A developer is presenting a deal structure to an institutional joint venture partner. The term sheet proposes: 80/20 LP/GP profit split up to a 15% IRR; 70/30 split between 15% and 20% IRR; 50/50 split above 20% IRR. The developer asks why the split improves for the GP at higher returns. What is the most accurate explanation?",
      opts: [
        "Tiered structures are designed to penalize the GP if the project underperforms below the first hurdle",
        "Tiered hurdle structures incentivize the GP to maximize returns — the GP only earns a larger profit share once it has delivered strong performance above each IRR threshold, aligning both parties interests",
        "The 50/50 split above 20% IRR is standard in all LP agreements regardless of deal type",
        "Tiered structures are used only when the GP contributes no equity — if the GP contributes capital, a single-tier waterfall applies"
      ],
      ans: 1,
      exp: [
        "Incorrect. Tiered structures are not designed as a penalty mechanism — they are designed as an incentive. The GP receives less of the profit at lower returns (which protects the LP) but earns a greater share as performance improves.",
        "Correct. Tiered hurdle structures are designed to more aggressively incentivize the GP as returns improve. The GP earns a larger share of profits only after delivering performance above each hurdle. This aligns interests: the LP gets priority protection at lower return levels, while the GP earns meaningful upside only for exceptional performance.",
        "Incorrect. There is no universal standard split — terms are negotiated between the developer and investor and vary based on track record, deal risk profile, and market conditions.",
        "Incorrect. Tiered structures are used across a wide range of deal types regardless of GP equity contribution."
      ]
    },
    {
      q: "A developer is pitching a purpose-built rental project with a CMHC MLI Select exit to two potential LP investors. Investor A wants 20%+ IRR. Investor B would accept 14% IRR given the CMHC-insured permanent financing path. Which return expectation is better calibrated to this project type, and why?",
      opts: [
        "Investor A — all development projects carry the same risk profile so 20%+ is always appropriate",
        "Investor B — a CMHC-exiting purpose-built rental carries lower execution risk than a speculative condo or a raw land play, so investors may accept returns toward the lower end of the development range",
        "Investor B — CMHC insurance guarantees the return to equity investors so no risk premium is required",
        "Investor A — the higher the return target, the better protected the investor is against downside scenarios"
      ],
      ans: 1,
      exp: [
        "Incorrect. Return thresholds move with the risk stage of the investment. A stabilized, CMHC-exiting rental project carries meaningfully lower execution risk than a speculative condo or a land play with entitlement risk.",
        "Correct. LP investors set return thresholds proportional to the risk they are taking on. A purpose-built rental with a CMHC MLI Select exit has a defined permanent financing path, income-producing stabilization mechanics, and government-backed insurance on the permanent mortgage — all of which reduce execution and exit risk. Investors in this category may accept 12-18% IRR depending on deal structure and market conditions.",
        "Incorrect. CMHC insurance covers the permanent lender against borrower default — it does not guarantee equity returns. LP investors remain exposed to construction cost overruns, lease-up shortfalls, and adverse market conditions.",
        "Incorrect. A higher return target does not protect investors — it simply makes deals harder to structure."
      ]
    },
    {
      q: "A construction loan agreement contains a clause making the borrower and guarantor jointly and severally liable for losses arising from fraud, material misrepresentation in any draw request or reporting document, failure to remit property taxes, or intentional waste of the mortgaged property. What type of provision is this, and what does it mean in practice?",
      opts: [
        "A standard default clause — it applies to all breaches of the loan agreement equally",
        "A bad-boy carve-out — it converts an otherwise non-recourse loan to full personal recourse if the developer engages in specified bad-faith conduct",
        "A subordination clause — it establishes the priority of the lender claim relative to other creditors",
        "A force majeure clause — it protects the borrower from liability in circumstances beyond their control"
      ],
      ans: 1,
      exp: [
        "Incorrect. Default clauses trigger lender remedies on the loan itself. This clause specifically makes the principals personally liable — a distinct and more severe consequence that applies only to the enumerated bad-faith triggers.",
        "Correct. This is a bad-boy carve-out — a standard provision in construction loans that converts a non-recourse loan to full personal recourse if the developer engages in specified conduct. The triggers listed — fraud, material misrepresentation in draw packages or reporting, failure to pay property taxes, and intentional waste — are the standard carve-out categories. Note the direct implication: material misrepresentation in a draw request or investor report is specifically listed as a carve-out trigger. Accuracy in your work is not just professional — it is legally consequential.",
        "Incorrect. A subordination clause governs priority between lenders. It does not create personal liability for the principals.",
        "Incorrect. Force majeure clauses excuse performance delays caused by events beyond the borrower control. This clause imposes additional liability for conduct entirely within the borrower control."
      ]
    },
    {
      q: "Why is the CMHC commitment letter typically listed as a condition precedent on a CMHC-insured construction loan, rather than something obtained after the first draw?",
      opts: [
        "CMHC requires the commitment letter to be issued before the building permit is granted",
        "The commitment letter confirms that a bankable permanent loan takeout is in place, giving the construction lender confidence they will be repaid at maturity — which is why the lender will not advance the first dollar without it",
        "The commitment letter is required by Ontario Construction Act before the holdback can be established",
        "CMHC issues the commitment letter automatically once the building permit is issued, so it is obtained as part of the same process"
      ],
      ans: 1,
      exp: [
        "Incorrect. The building permit and the CMHC commitment letter are separate processes managed by different authorities.",
        "Correct. Construction lenders advance funds with the expectation that a permanent loan will take out the construction facility at the end of the construction period. The CMHC commitment letter is binding evidence that a permanent lender has committed to provide that takeout. Without it, the construction lender bears the risk of having to extend or enforce a loan on an incomplete or unstabilized property.",
        "Incorrect. The holdback requirements under Ontario Construction Act are governed by statute and relate to the project owner obligations to contractors. They are independent of CMHC financing.",
        "Incorrect. CMHC approval is a formal multi-month process — it does not happen automatically or in parallel with the building permit."
      ]
    },
    {
      q: "A developer is modelling the economics of an MLI Select permanent mortgage at 85% LTV on a $95,000,000 stabilized value — a loan of $80,750,000. The CMHC insurance premium applicable is 2.75% of the insured amount. What is the premium, and how does it affect the permanent financing model?",
      opts: [
        "$2,220,625 — paid in cash at closing and treated as a one-time soft cost in the project budget",
        "$2,220,625 — typically added to the mortgage balance, increasing total debt to $82,970,625 and must be reflected in the project return analysis",
        "There is no premium — CMHC insurance is funded by the federal government and costs nothing to the borrower",
        "$2,220,625 — paid by the permanent lender, not the developer, so it does not affect project returns"
      ],
      ans: 1,
      exp: [
        "Incorrect. The premium amount is correct at $80,750,000 x 2.75% = $2,220,625, but the mechanics are wrong. CMHC insurance premiums are not typically paid in cash at closing — they are added to the mortgage balance.",
        "Correct. The premium = $80,750,000 x 2.75% = $2,220,625. CMHC insurance premiums are typically capitalized into the mortgage balance rather than paid in cash at closing. This means total debt rises to approximately $82,970,625. The premium must be reflected in the return model: it increases total debt outstanding, modestly increases annual debt service, and partially offsets the rate and amortization benefits of MLI Select.",
        "Incorrect. CMHC mortgage loan insurance is not government-funded from the borrower perspective — the premium is a real cost charged to the borrower.",
        "Incorrect. The insurance premium is ultimately a borrower cost, whether structured as a direct payment or capitalized into the loan."
      ]
    },
    {
      q: "A developer is deciding between conventional permanent financing and CMHC MLI Select for a purpose-built rental project. The conventional option offers 6.0% at 25-year amortization and 68% LTV. The MLI Select option offers 5.2% at 40-year amortization and 85% LTV, with an insurance premium of approximately 3.5% of the insured amount. What is the primary financial advantage of MLI Select beyond the lower rate?",
      opts: [
        "The CMHC insurance premium is deductible, which eliminates its cost in the first year",
        "The higher LTV and longer amortization together significantly reduce annual debt service and increase net operating cash flow to equity, while the higher LTV means more of the project cost is funded by the permanent mortgage and less equity needs to be tied up",
        "The 40-year amortization means the developer never has to refinance the permanent mortgage",
        "The affordable unit requirement qualifies the project for development charge exemptions that offset the insurance premium"
      ],
      ans: 1,
      exp: [
        "Incorrect. CMHC insurance premiums are a financing cost, not a tax deduction that eliminates the expense.",
        "Correct. The MLI Select advantage is multifaceted. Higher LTV (85% vs 68%) means the permanent mortgage funds a larger share of the project value — returning more equity to the developer. Longer amortization (40 years vs 25 years) reduces annual principal repayment, lowering annual debt service and increasing net cash flow to equity. Lower rate (5.2% vs 6.0%) reduces the interest component. Together these factors materially improve the economics of a long-term rental hold.",
        "Incorrect. Commercial mortgages under MLI Select have a defined term and must be renewed at maturity, regardless of the 40-year amortization period.",
        "Incorrect. While affordable unit requirements may qualify projects for some municipal incentive programs, this is a separate program from MLI Select and is not guaranteed."
      ]
    },
    {
      q: "A senior lender and a mezzanine lender have both provided financing on a development project. The project enters financial distress and the mezzanine lender wants to enforce its remedies immediately. The intercreditor agreement contains a 120-day standstill provision. What does this mean, and why does it exist?",
      opts: [
        "The mezzanine lender must wait 120 days before filing a lien on the property; after that it can enforce freely",
        "The mezzanine lender is prohibited from enforcing its remedies against the property for 120 days following the default, giving the senior lender priority to act first — and giving the developer time to cure the default",
        "The 120-day standstill applies only to the senior lender — the mezzanine lender can enforce immediately but must give 120 days notice to the developer",
        "Standstill provisions are only triggered if the senior loan is also in default; a mezzanine-only default allows immediate enforcement"
      ],
      ans: 1,
      exp: [
        "Incorrect. Standstill provisions are not the same as lien filing restrictions. The standstill prohibits the mezzanine lender from taking enforcement action against the property — no foreclosure, no receiver appointment, no enforcement of security during the standstill period.",
        "Correct. A standstill provision in an intercreditor agreement prohibits the mezzanine lender from enforcing its remedies against the property for a defined period (here, 120 days) following a default. The standstill exists for two reasons: it gives the senior lender priority to act on the property if needed, and it gives the developer an opportunity to cure the default. The standstill — combined with the subordinated repayment position — is why mezzanine debt commands a premium rate over senior debt.",
        "Incorrect. Standstill provisions constrain the mezzanine lender, not the senior lender. The senior lender retains full enforcement rights throughout.",
        "Incorrect. Intercreditor standstill provisions typically apply whenever the mezzanine lender seeks to enforce against the property — regardless of whether the senior loan is simultaneously in default."
      ]
    },
    {
      q: "A developer is considering using mezzanine financing to reduce the common equity requirement on a project from $18,000,000 to $10,000,000. The mezzanine lender charges 13% per annum on the $8,000,000 bridge. The project generates a 22% equity return on $18,000,000 of equity. What is the primary risk of this substitution?",
      opts: [
        "The mezzanine lender will require a seat on the project board, which dilutes GP control",
        "The $8,000,000 in mezzanine at 13% adds $1,040,000 in annual interest cost, which reduces project returns — and if the project underperforms, the fixed mezzanine cost amplifies losses for common equity",
        "Mezzanine financing is not permitted on CMHC-insured projects",
        "The LTC ratio will exceed lender limits once mezzanine is added to the total debt stack"
      ],
      ans: 1,
      exp: [
        "Incorrect. While mezzanine lenders do negotiate governance rights such as step-in rights and information rights, a board seat is not standard. The primary financial risk is the fixed cost amplifying downside scenarios.",
        "Correct. Mezzanine financing works when the project performs as projected — the $1,040,000 annual interest cost may be less than the return on the $8M of freed-up equity deployed elsewhere. However, mezzanine creates leverage risk: if the project underperforms, the common equity must absorb all downside while still servicing the fixed mezzanine interest.",
        "Incorrect. CMHC does permit subordinate financing on MLI Select deals under certain conditions — it must be disclosed and approved, but it is not categorically prohibited.",
        "Incorrect. LTC ratios are typically calculated on senior debt only — mezzanine is subordinate financing and is usually excluded from the LTC calculation."
      ]
    },
    {
      q: "It is month 7 of construction. Substantial completion is certified in month 19. The Certificate of Substantial Performance is published on the day of certification. A subcontractor files a lien claim in month 21 — 47 days after the publication date. Can the developer release the holdback to the general contractor?",
      opts: [
        "Yes — substantial completion has been certified so the holdback can be released immediately",
        "No — the lien claim was filed within the statutory lien period and the holdback cannot be released while a registered lien is outstanding",
        "Yes — the lien claim was filed after the 45-day lien period expired, so it is out of time and the holdback can be released",
        "No — the holdback can only be released after the final draw is advanced, regardless of liens"
      ],
      ans: 1,
      exp: [
        "Incorrect. Substantial completion certification is a necessary condition for holdback release, but not sufficient on its own. The statutory lien period must also expire without a registered lien claim before the holdback can be released.",
        "Correct. Under Ontario Construction Act, the lien period is 45 days from the date of publication of the Certificate of Substantial Performance. The lien was filed on day 47 — after the 45-day window closed — meaning it was filed out of time and is not a valid lien. However, the developer and their counsel must confirm the lien is invalid before releasing the holdback.",
        "Incorrect. You have the right factual result but need to verify the reasoning carefully. The lien was filed on day 47 — which is after the 45-day period expired. But confirming that is exactly why developers must track the lien period: a lien filed on day 44 would be valid and would block holdback release.",
        "Incorrect. Holdback release is tied to substantial completion and lien period expiry — not to the final draw."
      ]
    },
    {
      q: "During a monthly draw review, you notice that the construction contingency has been drawn down by 65% by month 11 of a planned 24-month construction schedule. The project monitor has not raised any concerns. What is the most appropriate response?",
      opts: [
        "No action needed — the project monitor would have flagged it if it were a problem",
        "Escalate immediately to the lender as a potential default under the loan agreement",
        "Assess whether the remaining 35% of contingency is adequate to cover the remaining 13 months of construction and flag it as a risk item in the next investor report",
        "Request a budget amendment to increase contingency by drawing from another budget line item"
      ],
      ans: 2,
      exp: [
        "Incorrect. The project monitor reviews each draw period but may not have run the forward-looking analysis of whether remaining contingency is sufficient for the balance of construction. The development team has independent responsibility to monitor budget health.",
        "Incorrect. A 65% contingency drawdown by month 11 is a yellow flag, not an immediate default. Defaults are triggered by specific events — missed payments, failure to meet milestones, registered liens — not by contingency utilization alone.",
        "Correct. By month 11, roughly 54% of the schedule has elapsed but 65% of contingency has been consumed. Contingency is being spent faster than the project is progressing. The appropriate response is to project forward, understand what is driving the draw, assess whether the remaining amount is adequate, and disclose the situation transparently in the investor report.",
        "Incorrect. Reallocating budget from other line items requires lender approval and must be justified by specific scope changes. It also does not address whether the remaining contingency is adequate."
      ]
    },
    {
      q: "A month 9 investor report contains the following sentence: 'Costs are tracking slightly above the cash flow projection but this is within the normal range for this stage of construction.' A detailed review shows the mechanical budget has been permanently increased by $380,000 and base construction costs are $1,446,981 ahead of schedule due to accelerated concrete pours. What is wrong with this disclosure?",
      opts: [
        "Nothing — the summary is accurate and LP investors do not need line-item detail",
        "The disclosure conflates two different types of variance — a permanent budget increase and a timing acceleration — and neither is explained with the specificity required for investor reporting",
        "The disclosure is too detailed — investor reports should summarize overall project status without line-item breakdown",
        "The disclosure is acceptable because both variances are within the overall project contingency"
      ],
      ans: 1,
      exp: [
        "Incorrect. LP investors have a contractual right to understand how their capital is being used. A vague sentence about costs being slightly above does not disclose the specific nature of the two variances, does not confirm whether the total budget has changed, and does not report remaining contingency.",
        "Correct. This disclosure has two problems. First, it conflates a permanent budget change (the mechanical change order is a genuine cost increase) with a timing variance (the accelerated concrete pours represent the same total cost, just pulled forward). These require fundamentally different disclosures. Second, investor reports must be specific: which category changed, by exactly how much, why, what the impact on total budget is, and what contingency remains.",
        "Incorrect. Investor reports during construction must include a line-item budget-to-actual, not just a narrative summary.",
        "Incorrect. The fact that both variances fall within contingency does not eliminate the disclosure obligation. Investors need to know contingency is being drawn, which categories are drawing it, and whether remaining coverage is adequate."
      ]
    },
    {
      q: "In preparing the month 12 investor report, you identify that the geotechnical contingency line item was fully depleted in month 9 and an additional $420,000 was drawn from the general construction contingency. The total project contingency budget is $5,082,000 and $1,890,000 has been used so far. What belongs in the investor report?",
      opts: [
        "Nothing specific — the total contingency is still 63% intact so there is nothing material to disclose",
        "A note that geotechnical contingency was fully used, the amount transferred from general contingency, remaining total contingency balance, and the project monitor confirmation that coverage remains adequate",
        "A request to investors to approve an additional contingency allocation given the geotechnical overrun",
        "A disclosure that the geotechnical consultant underestimated conditions and may be liable for the overrun"
      ],
      ans: 1,
      exp: [
        "Incorrect. The fact that total contingency is 63% intact does not mean the specific depletion of the geotechnical line item is immaterial. LP investors have a right to know how contingency is being consumed — by category, not just in aggregate.",
        "Correct. The investor report should disclose: which contingency line was depleted and when, how much was transferred between contingency categories and why, the current remaining total contingency balance, and the project monitor assessment of adequacy. This is transparent, specific, and actionable.",
        "Incorrect. Requesting additional contingency from investors implies the existing contingency is insufficient — which is not what the facts show. With 63% of total contingency remaining, there is no basis to request more capital.",
        "Incorrect. Assigning blame to the geotechnical consultant in an investor report is legally and professionally inappropriate unless there is a formal finding of negligence and an active claim."
      ]
    },
    {
      q: "At month 18 of a 24-month construction schedule, the construction manager advises that completion will be delayed by approximately 4 months due to supply chain issues with mechanical equipment. The construction loan matures 6 months after the original projected completion date. What is the most important immediate action?",
      opts: [
        "Issue a capital call to LP investors to fund the additional 4 months of carrying cost",
        "Notify the construction manager that the delay is not acceptable and require schedule acceleration",
        "Contact the lender immediately to discuss the timeline, assess whether the loan maturity date accommodates the delay, and determine what extension options are available",
        "Wait until the delay is confirmed at month 20 before engaging the lender to avoid unnecessary alarm"
      ],
      ans: 2,
      exp: [
        "Incorrect. Issuing a capital call may ultimately be necessary if additional equity is required, but it is premature as the first action. The lender must be engaged first to understand loan maturity implications.",
        "Incorrect. While the developer should discuss acceleration options with the construction manager, demanding schedule recovery without addressing the loan maturity risk is not the priority.",
        "Correct. The construction loan matures 6 months after the original completion date. A 4-month construction delay reduces that buffer to 2 months — which may be insufficient for lease-up and permanent financing to be arranged. The lender must be notified immediately. Early communication gives the lender time to assess extension options and maintains the trust relationship.",
        "Incorrect. Waiting until month 20 eliminates negotiating flexibility and signals that the developer is not proactively managing risk. Lenders view early disclosure as a positive — it demonstrates competence and transparency."
      ]
    },
    {
      q: "A conditions precedent checklist shows the CMHC commitment letter has been outstanding for 8 weeks and the first draw is scheduled in 3 weeks. The application was submitted 4 months ago. What is the most appropriate action?",
      opts: [
        "Proceed with the first draw and obtain the CMHC letter before the second draw",
        "Request a 30-day extension to the construction start from the construction manager",
        "Escalate immediately — contact the lender to determine whether the CP can be waived or the draw date extended, and follow up directly with CMHC on application status",
        "Substitute a letter of intent from CMHC as a temporary replacement for the commitment letter"
      ],
      ans: 2,
      exp: [
        "Incorrect. Conditions precedent must be satisfied before the first draw is advanced — not after. Advancing the first draw with an outstanding CP would be a breach of the loan agreement.",
        "Incorrect. Extending the construction start does not resolve the CP — it just delays everything. The appropriate action is to address the CP directly.",
        "Correct. With 3 weeks to the first draw and a CMHC letter 8 weeks overdue, this requires immediate escalation. The lender needs to know — they may be willing to formally waive the CP, grant a draw date extension, or identify what is holding up the CMHC review.",
        "Incorrect. A letter of intent is not a commitment letter and would not satisfy the CP. Lenders specify commitment letters because they are binding — a letter of intent is not."
      ]
    }
  ]
};
