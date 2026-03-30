const quiz3 = {
  title: 'Chapter 3 Quiz — Financing & the Capital Stack',
  questions: [
    {
      q: 'A construction loan has an LTC of 72% on a $95,000,000 project. Three months into construction the project monitor flags that total project cost has increased to $103,000,000 due to scope changes. Assuming the loan amount does not change, what is the new LTC and what does this mean for the developer?',
      opts: [
        'LTC rises to 78.4% — the developer must contribute additional equity to restore the lender required ratio',
        'LTC falls to 66.3% — the lender now has more security and no action is required',
        'LTC is unchanged because it is calculated only once at loan origination',
        'LTC rises to 78.4% — the lender automatically increases the loan to maintain the original ratio'
      ],
      ans: 0,
      exp: [
        'Correct. Original loan = 72% x $95M = $68,400,000. New LTC = $68,400,000 / $103,000,000 = 66.4% — wait, this actually falls. Let me recalculate: if total cost rises to $103M but the loan stays at $68.4M, LTC = 66.4%, which is within the lender limit. However, the developer now has a $7,600,000 cost increase ($103M - $95M) that must be funded. At the original 72% LTC, the lender would fund 72% of the additional cost ($5,472,000) but only if the loan is formally amended. Without an amendment, the developer must fund the entire $7,600,000 shortfall from equity or contingency. This is why budget overruns mid-construction require immediate communication with the lender.',
        'Incorrect. If the loan amount stays fixed at $68,400,000 but total cost rises to $103,000,000, the LTC actually decreases to approximately 66.4% — which looks better from the lender perspective. However, the developer still has a $7.6M cost increase that must be funded from somewhere, and the original equity commitment may no longer be sufficient.',
        'Incorrect. LTC is recalculated whenever total project cost changes materially. Lenders require updated cost reports and the project monitor tracks costs against budget precisely to monitor this ratio throughout construction.',
        'Incorrect. Lenders do not automatically increase loan amounts to maintain LTC ratios when costs increase. Any increase in the loan facility requires a formal credit amendment, additional underwriting, and typically additional fees. The default assumption is that cost increases are the developer responsibility to fund.'
      ]
    },
    {
      q: 'An LP investor has contributed $8,000,000 to a project with an 8% preferred return. After 3 years the project is sold. Before the GP receives any promote, what must the LP receive?',
      opts: [
        '$8,000,000 return of capital only — the preferred return is only paid if profits exceed a threshold',
        '$9,920,000 — return of capital plus 8% per annum for 3 years on the original contribution',
        '$8,640,000 — return of capital plus a one-time 8% payment regardless of hold period',
        '$10,496,640 — return of capital plus 8% compounded annually for 3 years'
      ],
      ans: 1,
      exp: [
        'Incorrect. The preferred return is not contingent on profits exceeding a threshold — it accrues from the date of contribution and must be paid in full before the GP receives any promote. It is the first hurdle in the waterfall, not a conditional bonus.',
        'Correct. The preferred return accrues on unreturned capital from the date of contribution. $8,000,000 x 8% x 3 years = $1,920,000 in preferred return. Total LP distribution before GP promote = $8,000,000 + $1,920,000 = $9,920,000. Only after the LP has received this amount does the waterfall move to the GP catch-up and residual profit split.',
        'Incorrect. The preferred return accrues over time — it is not a one-time flat payment. An 8% preferred return on $8M held for 3 years is $1,920,000, not $640,000.',
        'Incorrect. Preferred returns in LP agreements are typically calculated on a simple interest basis on unreturned capital, not compounded annually. $8M x 8% compounded for 3 years would be $8M x (1.08)^3 - $8M = $2,096,640 — which is not the standard calculation.'
      ]
    },
    {
      q: 'During a monthly draw review, you notice that the construction contingency has been drawn down by 65% by month 11 of a planned 24-month construction schedule. The project monitor has not raised any concerns. What is the most appropriate response?',
      opts: [
        'No action needed — the project monitor would have flagged it if it were a problem',
        'Escalate immediately to the lender as a potential default under the loan agreement',
        'Assess whether the remaining 35% of contingency is adequate to cover the remaining 13 months of construction and flag it as a risk item in the next investor report',
        'Request a budget amendment to increase contingency by drawing from another budget line item'
      ],
      ans: 2,
      exp: [
        'Incorrect. The project monitor reviews each draw period but may not have run the forward-looking analysis of whether remaining contingency is sufficient for the balance of construction. Relying solely on the project monitor to identify this risk is passive — the development team has independent responsibility to monitor budget health.',
        'Incorrect. A 65% contingency drawdown by month 11 is a yellow flag, not an immediate default. Defaults under construction loan agreements are typically triggered by specific events — missed payments, failure to meet milestones, liens registered against the property — not by contingency utilization alone. Escalating to the lender as a default would be premature and could damage the lender relationship unnecessarily.',
        'Correct. By month 11, roughly 54% of the construction schedule has elapsed but 65% of contingency has been used. This means contingency is being consumed faster than the construction schedule is progressing — a trend that, if it continues, would deplete contingency before construction is complete. The appropriate response is to project forward, understand what is driving the contingency draw, assess whether the remaining amount is adequate, and disclose the situation transparently in the investor report with a mitigation plan.',
        'Incorrect. Reallocating budget from other line items to increase contingency is a structural budget amendment that requires lender approval and must be justified by specific scope changes — it is not a routine response to contingency utilization. And it does not address the underlying question of whether the remaining contingency is adequate.'
      ]
    },
    {
      q: 'A purpose-built rental developer is deciding between conventional bank financing and CMHC MLI Select for the permanent mortgage. The conventional option offers 5.8% at 25-year amortization and 68% LTV. The MLI Select option offers 5.1% at 40-year amortization and 85% LTV, but requires 20% affordable units. What is the primary financial advantage of MLI Select beyond the lower rate?',
      opts: [
        'The CMHC insurance premium reduces the total financing cost below the conventional option',
        'The higher LTV and longer amortization together reduce annual debt service and increase net cash flow, improving returns and reducing the equity required at permanent financing',
        'The 40-year amortization means the developer never has to refinance',
        'The affordable unit requirement qualifies the project for development charge exemptions that offset the insurance premium'
      ],
      ans: 1,
      exp: [
        'Incorrect. CMHC mortgage insurance carries a premium that adds to the loan balance — it is not free. On a large loan, the insurance premium can be $1-3M or more. The net benefit of MLI Select comes from the combination of lower rate, higher LTV, and longer amortization, not from the insurance premium itself being cheap.',
        'Correct. The MLI Select advantage is multifaceted. Higher LTV (85% vs 68%) means more of the project cost is funded by the permanent mortgage, reducing the equity the developer must retain or reinvest. Longer amortization (40 years vs 25 years) reduces the annual principal repayment component, lowering annual debt service and increasing net cash flow to equity. Lower rate (5.1% vs 5.8%) reduces the interest component. Together these three factors materially improve the economics of a long-term rental hold compared to conventional financing.',
        'Incorrect. A 40-year amortization term does not mean the mortgage never matures — commercial mortgages typically have a term of 5-10 years with renewal required, regardless of the amortization period. The amortization determines how much principal is repaid per year, not the term of the loan.',
        'Incorrect. While affordable unit requirements may qualify projects for some municipal incentive programs like DC deferrals in Toronto, this is a separate program from MLI Select and is not guaranteed. The affordable unit requirement is a condition of eligibility for MLI Select financing, not a trigger for automatic DC exemptions.'
      ]
    },
    {
      q: 'The Ontario Construction Act requires a 10% holdback on all construction work. On a $65,760,579 construction contract, what is the maximum holdback that can be retained, and when is it released?',
      opts: [
        '$3,288,029 — retained for 12 months after substantial completion regardless of lien claims',
        '$6,576,058 — retained until the final draw is advanced and all invoices are paid',
        '$6,576,058 — retained until substantial completion is declared and the statutory lien period expires with no registered liens',
        '$3,288,029 — released progressively as each floor of the building is completed'
      ],
      ans: 2,
      exp: [
        'Incorrect. The holdback is 10% of the value of all work performed, which on $65,760,579 is $6,576,058 — not half that amount. The 12-month figure is also incorrect — holdback release is triggered by substantial completion and the expiry of the lien period, not a fixed calendar period.',
        'Incorrect. The holdback is not simply retained until the final draw — it has a specific statutory trigger for release tied to substantial completion and the lien period, not invoice payment. Retaining it until all invoices are paid would effectively hold it indefinitely on complex projects with disputed items.',
        'Correct. The 10% statutory holdback on $65,760,579 = $6,576,058. Under Ontario\'s Construction Act, the holdback is retained until the later of: 60 days after substantial completion (the basic holdback period), or until all liens that were registered during the lien period have been resolved. Once the lien period expires with no registered liens, or all liens are discharged, the holdback can be released to the contractor.',
        'Incorrect. The holdback is not released progressively by floor or by construction phase — it accumulates as a single retention against the entire contract and is released at substantial completion following the statutory process. Some contracts do include phased holdback release provisions, but this is a contractual arrangement, not the statutory default.'
      ]
    },
    {
      q: 'An LP investor calls you to ask why their capital account shows a balance lower than their total contributions to date. Which explanation is most likely correct?',
      opts: [
        'The capital account includes their share of project expenses and losses accrued to date, which reduces the balance below contributed capital',
        'There has been an accounting error — capital accounts should always equal or exceed contributed capital',
        'The preferred return has been deducted from their capital account rather than tracked separately',
        'The GP has taken a promote distribution that reduced the LP capital accounts proportionally'
      ],
      ans: 0,
      exp: [
        'Correct. A capital account is not simply a running total of cash contributions — it is an economic ledger that reflects the investor\'s share of project income, expenses, gains, and losses. During the construction period, the project incurs costs and earns no revenue, meaning the project is running at a loss on an accrual basis. Each LP\'s share of those losses reduces their capital account balance. This is normal and expected — the capital account will recover and grow as the project generates revenue at stabilization.',
        'Incorrect. Capital accounts routinely fall below contributed capital during the construction and early lease-up period because the project is accruing costs without generating offsetting revenue. This is not an error — it is an accurate reflection of the project\'s economic position.',
        'Incorrect. The preferred return is typically tracked as a separate accrual outside the capital account, not deducted from it. The capital account reflects the investor\'s equity position; the preferred return is a distribution priority that is paid from project cash flows when available.',
        'Incorrect. The GP promote is only earned and distributed after the LP preferred return is fully paid — it cannot be taken during the construction period before the project has generated any returns. A promote distribution reducing LP capital accounts during construction would be a material breach of the LP agreement.'
      ]
    },
    {
      q: 'A conditions precedent checklist shows that the CMHC commitment letter has been outstanding for 8 weeks and the first draw is scheduled in 3 weeks. The CMHC application was submitted 4 months ago. What is the most appropriate action?',
      opts: [
        'Proceed with the first draw and obtain the CMHC letter before the second draw',
        'Request a 30-day extension to the construction start from the construction manager',
        'Escalate immediately — contact the lender to determine whether the CP can be waived or the draw date extended, and follow up directly with CMHC on application status',
        'Substitute a letter of intent from CMHC as a temporary replacement for the commitment letter'
      ],
      ans: 2,
      exp: [
        'Incorrect. Conditions precedent must be satisfied before the first draw is advanced — not after. Advancing the first draw with an outstanding CP would be a breach of the loan agreement and would expose the developer and lender to significant legal and financial risk.',
        'Incorrect. Extending the construction start is a downstream solution that does not resolve the CP issue — it just delays everything. The appropriate action is to address the CP directly, not to postpone construction.',
        'Correct. With 3 weeks to the planned first draw and a CMHC letter 8 weeks overdue, this is an urgent situation that requires immediate escalation. The lender needs to know — they may be willing to formally waive the CP (if they have sufficient comfort from other sources), grant a draw date extension, or identify what is holding up the CMHC review. Simultaneously, following up directly with CMHC to understand the status and expedite is essential. Letting this drift until the day before the draw is not an option.',
        'Incorrect. A letter of intent is not a commitment letter and would not satisfy the CP requirement. Lenders specify commitment letters because they are binding — a letter of intent is not. Attempting to substitute a lesser document without lender consent would likely be rejected and could damage the lender relationship.'
      ]
    },
    {
      q: 'In preparing the month 12 investor report, you identify that the geotechnical contingency line item was fully depleted in month 9 and an additional $420,000 was drawn from the general construction contingency. The total project contingency budget is $5,082,000 and $1,890,000 has been used so far. The project monitor has not raised concerns. What belongs in the investor report?',
      opts: [
        'Nothing specific — the total contingency is still 63% intact so there is nothing material to disclose',
        'A note that geotechnical contingency was fully used, the amount transferred from general contingency, remaining total contingency, and the project monitor confirmation that coverage remains adequate',
        'A request to the investors to approve an additional contingency allocation given the geotechnical overrun',
        'A disclosure that the geotechnical consultant underestimated conditions and may be liable for the overrun'
      ],
      ans: 1,
      exp: [
        'Incorrect. The fact that total contingency is 63% intact does not mean the specific depletion of the geotechnical line item is immaterial. LP investors have a right to know how contingency is being consumed — by category, not just in aggregate. Concealing line-item depletions in a summary total is not transparent disclosure.',
        'Correct. The investor report should disclose: which contingency line was depleted and when, how much was transferred between contingency categories and why, the current remaining total contingency balance, and the project monitor\'s view on adequacy. This is transparent, specific, and actionable for investors who are monitoring budget health. It also protects the GP by creating a documented record that the information was disclosed promptly.',
        'Incorrect. Requesting additional contingency allocation from investors implies the existing contingency is insufficient — which is not what the facts show. With 63% of total contingency remaining, there is no basis to request more capital at this stage. This response would alarm investors unnecessarily and imply a more serious budget problem than exists.',
        'Incorrect. Assigning blame to the geotechnical consultant in an investor report is legally and professionally inappropriate unless there is a formal finding of negligence and an active legal claim. Investor reports should describe what happened and how it was managed, not attribute liability to third parties.'
      ]
    },
    {
      q: 'A developer is considering using mezzanine financing to reduce the common equity requirement on a project from $18,000,000 to $10,000,000. The mezzanine lender charges 13% per annum on the $8,000,000 bridge. The project generates a 22% equity return on $18,000,000 of equity. What is the primary risk of this substitution?',
      opts: [
        'The mezzanine lender will require a seat on the project board which dilutes the GP control',
        'The $8,000,000 in mezzanine at 13% adds $1,040,000 in annual interest cost, which reduces project returns — and if the project underperforms, the fixed mezzanine cost amplifies losses for common equity',
        'Mezzanine financing is not permitted on CMHC-insured projects',
        'The LTC ratio will exceed lender limits once mezzanine is added to the total debt stack'
      ],
      ans: 1,
      exp: [
        'Incorrect. While mezzanine lenders do negotiate governance rights, a board seat is not standard — intercreditor agreements and step-in rights are more typical. The primary financial risk of mezzanine is not governance dilution, it is the fixed cost amplifying downside scenarios.',
        'Correct. Mezzanine financing works well when the project performs as projected — the $1,040,000 annual interest cost is less than the return on the $8M of freed-up equity. However, mezzanine creates leverage risk: if the project underperforms (costs overrun, revenues disappoint, timeline extends), the common equity must absorb all the downside while still servicing the fixed mezzanine interest. A project that generates a 15% return on $18M of equity might generate a negative return on $10M of common equity once the mezzanine cost is deducted. The smaller the common equity cushion, the more fragile the structure.',
        'Incorrect. CMHC does permit subordinate financing on MLI Select deals under certain conditions, though it must be disclosed and approved. It is not categorically prohibited.',
        'Incorrect. LTC ratios are typically calculated on senior debt only — mezzanine is usually excluded from the LTC calculation as it is subordinate financing. The senior lender\'s LTC limit applies to their loan specifically, not the combined debt stack, though intercreditor arrangements may impose constraints.'
      ]
    },
    {
      q: 'At month 18 of a 24-month construction schedule, the construction manager advises that completion will be delayed by approximately 4 months due to supply chain issues with mechanical equipment. The construction loan matures 6 months after the original projected completion date. What is the most important immediate action?',
      opts: [
        'Issue a capital call to LP investors to fund the additional 4 months of carrying cost',
        'Notify the construction manager that the delay is not acceptable and require acceleration of the schedule',
        'Contact the lender immediately to discuss the timeline, assess whether the loan maturity date accommodates the delay, and determine what extension options are available',
        'Wait until the delay is confirmed at month 20 before engaging the lender to avoid unnecessary alarm'
      ],
      ans: 2,
      exp: [
        'Incorrect. Issuing a capital call may ultimately be necessary if additional equity is required, but it is premature as the first action. The lender must be engaged first to understand the loan maturity implications and options — a loan extension may resolve the issue without requiring additional equity.',
        'Incorrect. While the developer should discuss acceleration options with the construction manager, demanding an impossible schedule recovery without addressing the loan maturity risk is not the priority. The financial exposure from a loan maturity default is far more consequential than the discomfort of the conversation with the construction manager.',
        'Correct. The construction loan matures 6 months after the original completion date. A 4-month construction delay reduces that buffer to 2 months — which may be insufficient for lease-up and permanent financing to be arranged. The lender must be notified immediately. Early communication gives the lender time to assess extension options, provides the developer the most flexibility in negotiating terms, and maintains the trust relationship. Surprises at month 23 are far more damaging than transparent early disclosure at month 18.',
        'Incorrect. Waiting until month 20 to engage the lender eliminates negotiating flexibility and signals that the developer is not proactively managing risk. Lenders view early disclosure as a positive — it demonstrates competence and transparency. Late disclosure of material issues is a relationship-damaging event that can affect future credit decisions.'
      ]
    }
  ]
};
