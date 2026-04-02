const quiz4 = {
  title: 'Chapter 4 Quiz — Entitlements, Zoning & Permits',
  questions: [
    // ─── EXISTING QUESTIONS (preserved) ───────────────────────────────────────
    {
      q: 'A developer acquires a site where the Official Plan designates the land as Employment Area and the zoning permits light industrial uses only. The intended development is a 25-storey residential rental tower. What approvals are required before a building permit can be issued?',
      opts: [
        'A Zoning Bylaw Amendment only — the Official Plan designation is a guideline, not a legal requirement',
        'An OPA to change the land use designation, a ZBA to establish residential permissions and density, and Site Plan Approval for the detailed design',
        'Site Plan Approval only — residential use is permitted as-of-right under the Provincial Policy Statement',
        'An OPA only — once the Official Plan designation is changed, the zoning updates automatically'
      ],
      ans: 1,
      exp: [
        'Incorrect. The Official Plan is not merely a guideline — it is a statutory document under the Planning Act that must be amended before a conflicting ZBA can be approved. A ZBA that conflicts with the Official Plan designation will not be supportable at the municipal level and would face significant risk at the OLT.',
        'Correct. Converting Employment Area land to residential use requires an OPA to change the land use designation — one of the most politically complex planning applications in Ontario given provincial employment land protections. Once the OPA is approved, a ZBA is required to establish the specific residential permissions, density, height, and development standards. Site Plan Approval then reviews the detailed design before the building permit is issued. All three approvals are required in sequence.',
        'Incorrect. The Provincial Policy Statement supports residential intensification but does not override municipal zoning or Official Plan designations. It cannot be used to bypass the municipal planning process entirely.',
        'Incorrect. Zoning bylaws do not update automatically when an OPA is approved. The OPA changes the policy framework, but a separate ZBA is required to update the specific legal development standards that apply to the property.'
      ]
    },
    {
      q: 'A developer submits a ZBA application and receives a completeness determination 6 weeks later. The statutory 120-day decision clock begins. At day 125, no decision has been made. What option does the developer now have and why might they choose not to use it immediately?',
      opts: [
        'The developer can demand an immediate approval — the municipality has lost its right to refuse after the statutory period',
        'The developer can appeal to the OLT on non-decision grounds, but may strategically wait if productive negotiations with the municipality are underway',
        'The developer can bypass the municipality and apply directly to the Province for approval',
        'The developer has no recourse — the 120-day period is a target, not an enforceable deadline'
      ],
      ans: 1,
      exp: [
        'Incorrect. The expiry of the statutory timeline does not result in automatic approval. It gives the applicant the right to appeal to the OLT as if the application had been refused — the municipality retains the ability to approve or refuse the application, but the applicant now has a parallel process available.',
        'Correct. After 120 days without a decision, the applicant can file an OLT appeal on non-decision grounds. However, filing immediately may not be the best tactic if the municipality is actively engaged, comments are being addressed, and there is a realistic path to a council decision within a reasonable additional period. The OLT appeal is best used as leverage — the threat of a full hearing motivates the municipality to resolve the application — rather than as the first move in an adversarial process.',
        'Incorrect. There is no mechanism to bypass municipal planning authority and apply directly to the Province for site-specific planning approval except in very limited circumstances that do not apply to standard development applications.',
        'Incorrect. The 120-day period is an enforceable statutory deadline under the Planning Act. It is not merely a target. The applicant gains a specific legal right — the right to appeal to the OLT — upon its expiry.'
      ]
    },
    {
      q: 'A 28-storey mixed-use project receives ZBA approval with a Holding (H) symbol tied to the completion of a Transportation Demand Management plan. What does this mean practically for the developer?',
      opts: [
        'The ZBA approval is invalid until the H symbol is removed — the developer cannot proceed to SPA or building permit until the TDM plan is approved and the H symbol bylaw is passed',
        'The H symbol is a minor administrative condition that does not affect the development timeline in practice',
        'The developer can proceed directly to building permit since the ZBA has been approved, and address the H symbol during construction',
        'The H symbol requires the developer to reduce the proposed density until the TDM plan demonstrates adequate transportation capacity'
      ],
      ans: 0,
      exp: [
        'Correct. A Holding symbol is a legal provision embedded in the ZBA that prevents the development rights from being exercised until specified conditions are met. The developer cannot obtain a building permit, and typically cannot advance the SPA process to final approval, while the H symbol remains in place. To remove it, the developer must complete the required TDM plan, submit it for municipal review and approval, and then obtain a separate bylaw amendment removing the H symbol. This process adds time and cost and should be anticipated in the project schedule.',
        'Incorrect. A Holding symbol is a legal restriction, not an administrative formality. Failure to remove it before proceeding to building permit would result in the permit being refused or, if issued in error, potentially voided. It is a genuine timeline risk that must be managed.',
        'Incorrect. The H symbol cannot be ignored during construction. It is a registered condition on the zoning approval that must be formally removed by bylaw before development can proceed. Proceeding to building permit without removing the H symbol is not a legal option.',
        'Incorrect. The Holding symbol does not itself require density reductions — it is a process condition (complete the TDM plan) not a substantive planning condition (reduce the density). Once the TDM plan is approved and the H symbol removed, the full permitted density can be developed.'
      ]
    },
    {
      q: 'Two comparable sites are available. Site A has a secured ZBA approval with all appeal periods expired and no outstanding conditions. Site B has identical physical characteristics but is in the early stages of a ZBA application with no approval yet. Site A is priced 35% higher. Is the premium justified?',
      opts: [
        'No — both sites will eventually receive approval, so the premium simply reflects the time value of the approval period',
        'Yes — Site A has eliminated rezoning risk entirely, which represents genuine value creation that the market prices into land value',
        'No — the 35% premium is excessive since SPA and building permit still need to be obtained for both sites',
        'Yes, but only if the developer intends to sell the site rather than build on it'
      ],
      ans: 1,
      exp: [
        'Incorrect. The premium is not merely about time value — it is about risk elimination. Site B carries real probability that the ZBA is refused, approved with unacceptable conditions, or delayed by years. Site A has none of that risk. The market prices the removal of that uncertainty as a genuine value premium, not just a carrying cost calculation.',
        'Correct. A secured entitlement is a fundamentally different asset than an unentitled site. The ZBA approval on Site A has eliminated the single largest planning risk — the possibility of refusal, the uncertainty of timeline, the carrying cost of years of entitlement process. This risk elimination has real financial value. The 35% premium reflects what the market believes that risk elimination is worth. Whether it is the right premium depends on how risky the Site B application is assessed to be — but the concept of an entitlement premium is legitimate and well-established.',
        'Incorrect. The fact that SPA and building permit are still required for both sites does not eliminate the value of the ZBA approval. SPA and building permit are procedural steps with relatively predictable timelines and low refusal risk. The ZBA is the high-risk, high-uncertainty step. Its removal from the equation is where the premium resides.',
        'Incorrect. The entitlement premium is equally relevant whether the developer builds or sells. A developer who builds captures the premium through reduced carrying costs, lower financing risk, and a more certain project timeline. The premium is not limited to sites intended for resale.'
      ]
    },
    {
      q: 'A planning consultant recommends filing an OLT appeal on non-decision grounds even though the municipality is still actively reviewing the application. The developer is reluctant, worried it will damage the relationship with the planning department. What is the most accurate assessment of this situation?',
      opts: [
        'The developer is right to be concerned — OLT appeals are adversarial and will permanently damage the relationship with the municipality',
        'Filing a non-decision appeal is a standard industry practice that creates a parallel process, and experienced municipal planners understand it as a legitimate tactic rather than a hostile act',
        'The OLT appeal should only be filed if negotiations have completely broken down — it is a last resort, not a strategic tool',
        'The planning consultant is wrong — the statutory timeline is a target and filing an appeal before a decision is made is premature regardless of elapsed time'
      ],
      ans: 1,
      exp: [
        'Incorrect. While relationship management with municipalities is genuinely important, OLT non-decision appeals are so commonly used in the Ontario development industry that experienced municipal planners treat them as a routine procedural tool rather than a hostile act. The filing itself does not prevent continued negotiation — in fact, it typically accelerates it by creating a deadline both sides have an incentive to avoid.',
        'Correct. Filing an OLT appeal on non-decision grounds is standard practice in the Ontario development industry. It creates a parallel process that gives both parties an incentive to reach a negotiated resolution — the developer avoids the cost and uncertainty of a full hearing, and the municipality avoids having the decision made by the OLT rather than by elected councillors. Experienced municipal planners expect this tactic and do not interpret it as bad faith. The key is maintaining a constructive working relationship through the process, which skilled planning consultants do routinely.',
        'Incorrect. Treating the OLT appeal as a last resort ignores how it is actually used in practice. It is a strategic tool that is filed based on elapsed time and the state of the process, not only when negotiations have broken down. Filing it earlier creates more runway for negotiated resolution before a hearing date is set.',
        'Incorrect. The 120-day statutory timeline is an enforceable deadline, not a target. After 120 days without a decision on a complete application, the applicant has a clear legal right to appeal. The planning consultant is correctly identifying that this right exists and advising on whether to exercise it.'
      ]
    },
    {
      q: 'A Site Plan Approval submission for a 22-storey rental building receives comments from the City requiring the relocation of the loading area from the east side of the building to the west side to address a conflict with a planned cycling infrastructure improvement. The architect estimates this requires significant redesign and adds $340,000 in construction cost. What is the most appropriate response?',
      opts: [
        'Refuse the City comment and submit a revised plan keeping the loading area on the east side with a justification memo',
        'Accept the comment and incorporate the change, updating the construction budget and flagging the variance in the next investor report',
        'Appeal the SPA comment to the OLT as an unreasonable imposition on the development',
        'Request that the City fund the $340,000 redesign cost as compensation for the infrastructure conflict'
      ],
      ans: 1,
      exp: [
        'Incorrect. Refusing municipal SPA comments and resubmitting without change is rarely effective and typically results in the same comment being repeated, adding months to the process. Unless the comment is technically incorrect or legally unjustifiable, the more efficient path is to engage constructively, understand the underlying concern, and find a design solution.',
        'Correct. SPA comments, while sometimes frustrating, are generally legitimate design requirements that must be addressed to obtain approval. The appropriate response is to work with the architect to implement the required change, update the construction cost budget to reflect the $340,000 addition, manage the change within contingency if available, and disclose the variance in the next investor report with a clear explanation. This keeps the SPA process moving and maintains the relationship with municipal staff.',
        'Incorrect. SPA comments are not appealable to the OLT in the same way that OPA/ZBA decisions are. The SPA process is a detailed design review, not a planning policy decision. Attempting to appeal design review comments to the OLT would be procedurally inappropriate and would not succeed.',
        'Incorrect. Municipalities are not obligated to compensate developers for the cost of design changes required through the SPA process, even when those changes are driven by infrastructure planning decisions. This approach would be rejected and would damage the working relationship with municipal staff.'
      ]
    },
    {
      q: 'A developer is preparing a feasibility model for a site that requires both an OPA and a ZBA. They assume a 24-month entitlement timeline based on a comparable project completed by their firm. What is the most significant flaw in this methodology?',
      opts: [
        'Past projects are never a reliable guide to future timelines because each municipality processes applications differently',
        'A 24-month assumption is too conservative for a combined OPA/ZBA — the process typically takes 12-18 months in the GTA',
        'The comparable project may have had different political dynamics, policy context, and municipal staff capacity — applying its timeline to a new application without adjusting for these factors is not rigorous',
        'The feasibility model should not include an entitlement timeline at all — carrying costs should be modeled as a fixed budget, not a time-based calculation'
      ],
      ans: 2,
      exp: [
        'Incorrect. Past projects from the same firm in the same municipality are actually a relevant reference point. The problem is not that comparable projects are irrelevant — it is that applying a single comparable without adjustment is not sufficiently rigorous.',
        'Incorrect. A 24-month assumption for a combined OPA/ZBA is actually optimistic, not conservative. As noted in the chapter, combined OPA/ZBA processes in the GTA typically take 30-60 months. A 24-month assumption likely understates the timeline risk on a combined application.',
        'Correct. Every planning application is different in ways that materially affect its timeline. The ward councillor may be more or less supportive of intensification. The community may be more or less organized in opposition. The municipal planning department may be more or less backlogged. The policy context may have shifted. The application may face a novel issue not present in the comparable project. Using a comparable timeline as a starting point is reasonable — but it must be adjusted for these site-specific and time-specific factors, and should be stress-tested with conservative scenarios.',
        'Incorrect. The entitlement timeline is a direct driver of carrying costs and must be modeled as such. A fixed budget approach ignores the compounding cost of delays and produces a feasibility model that understates timeline risk. Time-based carrying cost modeling is the correct approach.'
      ]
    },
    {
      q: 'Under the 2023 Planning Act amendments, third-party appeal rights to the OLT were restricted for certain types of applications. What was the policy rationale for this change?',
      opts: [
        'To protect developers from frivolous appeals that were being used to extract compensation from development projects',
        'To reduce the ability of community groups to obstruct housing supply applications that are consistent with provincial intensification policies',
        'To give municipalities more control over the planning process by reducing OLT jurisdiction',
        'To streamline the OLT process by reducing the number of parties in each hearing'
      ],
      ans: 1,
      exp: [
        'Incorrect. While some appeals may be frivolous, the policy rationale was not primarily about protecting developers from bad-faith claims. It was about a specific public policy objective — accelerating housing supply — by removing procedural obstacles to approvals that are already consistent with provincial policy.',
        'Correct. The 2023 amendments were a deliberate provincial intervention in response to the housing supply crisis. The Province concluded that third-party appeals were being used by community groups opposed to intensification as a tool to delay or block housing projects that were already consistent with provincial policy objectives. By restricting appeal rights for applications that meet minimum density and housing supply requirements, the Province sought to reduce the ability of NIMBY opposition to obstruct housing supply through the OLT process.',
        'Incorrect. The amendments did not give municipalities more control — if anything, they gave the Province more control by limiting the ability of local community groups to contest provincial housing supply priorities through the tribunal process. Municipalities retain their planning authority but face stronger provincial direction to approve housing supply.',
        'Incorrect. Reducing the number of parties in hearings may be an incidental effect of the amendments, but it was not the stated or primary rationale. The driver was housing supply policy, not OLT process efficiency.'
      ]
    },
    {
      q: 'A developer is deciding whether to purchase Site A, which requires a combined OPA/ZBA estimated at 42 months, or Site B, which requires a ZBA only estimated at 22 months. Both projects have identical projected returns once built. Monthly carrying cost is $185,000 for each site. What is the financial value of the 20-month difference in entitlement timeline?',
      opts: [
        '$1,850,000 — representing 10 months of carrying cost at the midpoint of the difference',
        '$3,700,000 — representing the full 20 months of additional carrying cost on Site A',
        '$3,700,000 in carrying cost, but this must be weighed against Site A potentially having higher development potential if the OPA unlocks greater density',
        '$1,850,000, since only half the carrying cost difference is attributable to entitlement risk — the other half reflects normal development timeline variability'
      ],
      ans: 2,
      exp: [
        'Incorrect. The carrying cost difference is not calculated at the midpoint — it is the full 20 months of additional carrying cost that Site A requires. 20 x $185,000 = $3,700,000. There is no basis for halving the calculation.',
        'Incorrect. The $3,700,000 figure is mathematically correct but the answer is incomplete. In a real decision between two sites, the carrying cost difference must be weighed against all other factors, including whether the OPA process on Site A unlocks development potential — higher density, better program — that generates returns exceeding the $3,700,000 additional cost. A raw carrying cost comparison without considering the value of what the OPA might enable is not a complete analysis.',
        'Correct. The 20-month carrying cost difference is $3,700,000 (20 x $185,000). However, this is not the complete answer to the site selection question. Site A requires an OPA precisely because it is likely seeking permissions beyond what the Official Plan currently contemplates — which may mean greater density, a better program, or a higher-value development outcome that justifies the additional cost and time. The $3,700,000 carrying cost premium is the price of the OPA process. Whether it is worth paying depends on what the OPA unlocks in terms of development potential and project returns.',
        'Incorrect. There is no basis for allocating half the carrying cost difference to normal variability. The 20-month difference is a direct and quantifiable consequence of the OPA requirement on Site A. The full $3,700,000 is attributable to that additional approval requirement.'
      ]
    },
    {
      q: 'A project receives final ZBA approval and the 20-day council appeal period expires without any appeals being filed. The developer immediately proceeds to SPA submission. Six months later, a community group files a court application for judicial review of the ZBA approval, arguing the municipality did not properly consider a heritage impact. What is the impact on the SPA process?',
      opts: [
        'The SPA process is automatically suspended until the judicial review is resolved',
        'The SPA process can continue but the developer proceeds at risk — if the judicial review succeeds and the ZBA is quashed, any SPA approval and subsequent building permit could be voided',
        'The judicial review has no impact on the SPA process since the appeal period has already expired',
        'The developer must halt the SPA process and resubmit the ZBA application with a Heritage Impact Assessment before proceeding'
      ],
      ans: 1,
      exp: [
        'Incorrect. A judicial review application does not automatically suspend the SPA process — there is no statutory provision that pauses subsequent planning approvals while a court reviews a prior decision. The developer can continue the SPA process.',
        'Correct. A judicial review is a court challenge to the legal validity of the ZBA decision. If the court grants the review and quashes the ZBA approval, the legal foundation for the SPA approval — and any subsequent building permit — would be undermined. The developer can continue the SPA process, but does so knowing that a successful judicial review could invalidate the entire approval chain. This is a risk management decision: proceeding generates SPA approval faster if the judicial review fails, but investing significant consultant fees in SPA while the ZBA is legally challenged carries real financial exposure. Legal counsel should advise on the probability of the judicial review succeeding and the appropriate risk mitigation.',
        'Incorrect. The expiry of the OLT appeal period closes the tribunal appeal route, but it does not bar a court application for judicial review. Judicial review and OLT appeals are separate legal processes with different grounds, timelines, and parties. The expiry of one does not foreclose the other.',
        'Incorrect. There is no automatic requirement to halt the SPA process and resubmit the ZBA upon a judicial review being filed. The judicial review is a court process that runs in parallel to the planning process. The developer can continue with SPA while the judicial review proceeds, subject to the risk described in the correct answer.'
      ]
    },

    // ─── NEW QUESTIONS ─────────────────────────────────────────────────────────

    // PPS 2024 / Provincial Framework
    {
      q: 'Effective October 20, 2024, Ontario consolidated its provincial planning policy framework. What changed and why does it matter to a developer whose ZBA application was submitted in August 2024?',
      opts: [
        'The PPS and A Place to Grow were merged into the Provincial Planning Statement 2024 (PPS 2024). The August 2024 application may be assessed under the prior framework under transition rules — which policy applies is a material question for the planning consultant',
        'The PPS was repealed and replaced with PPS 2024, which automatically applies to all applications regardless of submission date',
        'A Place to Grow was repealed but the PPS 2020 remains in force. The August 2024 application is assessed under the PPS 2020 only',
        'The consolidation was administrative only and does not affect the policy framework applicable to any existing applications'
      ],
      ans: 0,
      exp: [
        'Correct. The Provincial Planning Statement 2024 consolidated the prior PPS and A Place to Grow into a single instrument effective October 20, 2024. Applications submitted before that date may be entitled to be assessed under the prior policy framework under transition rules — meaning the prescriptive intensification targets and policy language of A Place to Grow could still apply to the August 2024 application. Whether this is advantageous or not depends on the specifics of the application. It is a question that must be confirmed with the planning consultant and, on complex applications, legal counsel, because the answer can affect the defensibility of the application and the municipality\'s ability to refuse it.',
        'Incorrect. The consolidation does not retroactively apply PPS 2024 to all pending applications. Transition rules exist precisely to determine which policy framework governs applications that were in process before the change took effect.',
        'Incorrect. Both the PPS 2020 and A Place to Grow were superseded by PPS 2024. Neither document remains in force as a standalone instrument after October 20, 2024 — though their substance may still govern specific applications under transition rules.',
        'Incorrect. The consolidation was substantive, not merely administrative. Among other changes, the prescriptive density minimums for Major Transit Station Areas that existed under A Place to Grow were replaced with more outcomes-based language. These policy differences are real and can affect the defensibility of specific applications.'
      ]
    },

    // Secondary Plans
    {
      q: 'A developer is evaluating a site in a Toronto neighbourhood that has a Secondary Plan adopted five years ago. The Official Plan designates the site as Mixed Use, which the developer\'s planning consultant has confirmed is consistent with the proposed development. What additional step is required before concluding the application is OPA-compliant?',
      opts: [
        'No additional step — Official Plan conformity is sufficient. Secondary Plans are aspirational documents and do not legally constrain OPA/ZBA applications',
        'The Secondary Plan must be reviewed in full, since it sits between the Official Plan and the zoning bylaw and may impose height limits, density ranges, or design policies that conflict with the proposal',
        'The Secondary Plan only applies during Site Plan Approval, not during the OPA/ZBA stage',
        'A Secondary Plan can be overridden by the Provincial Policy Statement if the proposed development supports housing supply objectives'
      ],
      ans: 1,
      exp: [
        'Incorrect. Secondary Plans are statutory planning documents adopted under the Planning Act. They are not aspirational — they have the same legal status as the Official Plan and are binding on OPA/ZBA applications within their area. A ZBA that conflicts with a Secondary Plan is no more defensible than one that conflicts with the Official Plan.',
        'Correct. A Secondary Plan is a more detailed layer of land use policy that applies to specific neighbourhoods or growth areas and sits between the Official Plan and the zoning bylaw in the planning hierarchy. Where a Secondary Plan exists, it typically establishes area-specific height policies, density ranges, built form standards, and public realm requirements that must be satisfied — and that can be more restrictive than the broader Official Plan designation. Confirming OP conformity without reviewing the applicable Secondary Plan leaves a significant gap in the entitlement risk assessment. Many development applications that appear OP-conforming at first glance are constrained by Secondary Plan policies that were not identified until deep into the planning process.',
        'Incorrect. Secondary Plan policies are reviewed throughout the entire planning process — including during OPA and ZBA review, not just SPA. Planning staff will assess the application against the Secondary Plan from the outset and will flag conflicts in their initial comments.',
        'Incorrect. The PPS supports housing supply but does not override Secondary Plans in the same way it limits municipalities\' ability to refuse certain density applications. The relationship between the PPS and Secondary Plan policies is more nuanced and must be assessed application by application with experienced planning counsel.'
      ]
    },

    // Minor Variance — four tests
    {
      q: 'A developer proposes a minor variance to increase the permitted building height from 11 metres to 13.5 metres on a mid-rise infill project that otherwise conforms to zoning. The Committee of Adjustment must apply four tests under s.45(1) of the Planning Act. Which of the following correctly states those four tests?',
      opts: [
        'The variance must be minor; it must be technically necessary; it must not reduce the property\'s market value; and it must be supported by neighbouring landowners',
        'The variance must be minor; it must be desirable for the appropriate development of the land; it must maintain the general intent of the Official Plan; and it must maintain the general intent of the zoning bylaw',
        'The variance must be minor; it must not create shadow impacts; it must be consistent with the PPS; and it must be approved by the ward councillor',
        'The variance must be minor; it must be consistent with the neighbourhood character; it must not require additional parking; and it must be endorsed by the planning department'
      ],
      ans: 1,
      exp: [
        'Incorrect. Technical necessity, market value impact, and neighbour support are not among the four statutory tests. Neighbour consent can influence the Committee\'s exercise of discretion in practice, but it is not one of the legal tests.',
        'Correct. Section 45(1) of the Planning Act requires the Committee of Adjustment to be satisfied on all four counts: the variance is minor in nature; it is desirable for the appropriate development or use of the land, building, or structure; it maintains the general intent and purpose of the Official Plan; and it maintains the general intent and purpose of the zoning bylaw. All four tests must be satisfied — failure on any one of them is grounds for refusal. For a height increase from 11 to 13.5 metres, the Committee would assess whether the increase is genuinely minor in the context of the neighbourhood, whether it is consistent with the OP\'s built form policies, and whether the bylaw\'s general height framework is preserved.',
        'Incorrect. Shadow analysis may be a practical concern the Committee weighs, and PPS consistency is relevant background, but neither is one of the four statutory tests. Ward councillor approval is not a test at all — councillors sit on the Committee of Adjustment only if they are members, and their personal approval is not a legal criterion.',
        'Incorrect. Neighbourhood character and parking adequacy may inform the Committee\'s factual assessment, but they are not the four statutory tests. Planning staff endorsement is relevant evidence but is not itself a test the Committee must satisfy.'
      ]
    },

    // Draft Plan of Condominium
    {
      q: 'A developer completes SPA approval for a 180-unit highrise condominium in Toronto and immediately begins marketing units for pre-sale. The targeted occupancy date is 36 months from now. What critical approval milestone has the developer omitted from their project schedule that directly affects the closing date for pre-sale buyers?',
      opts: [
        'The building permit — without it, occupancy cannot be granted regardless of SPA approval',
        'The Draft Plan of Condominium registration — without it, unit closings cannot legally occur even if the building is fully constructed and occupied',
        'The Site Plan Agreement execution — without it, the municipality will not issue a building permit',
        'The Community Benefits Charge payment — without it, title cannot be transferred to individual unit buyers'
      ],
      ans: 1,
      exp: [
        'Incorrect. The building permit is a required milestone and must be in the schedule, but it is not the answer here. The building permit allows construction to begin. Occupancy permits allow residents to move in. But for a condominium, even after occupancy is granted, unit closings — the legal transfer of title to buyers — cannot occur until the Draft Plan of Condominium is registered with the Land Registry Office.',
        'Correct. A Draft Plan of Condominium is a mandatory Planning Act approval that establishes the legal unit boundaries and common element structure of the condominium corporation. It must be submitted, reviewed, approved by the municipality, and then registered with the Land Registry Office before any unit closings can occur. In the GTA, Draft Plan of Condominium registration typically takes 6-12 months from submission. If this milestone is omitted from the project schedule, the projected closing dates — and therefore the revenue recognition dates and construction loan repayment assumptions — will all be wrong. Buyers\' lawyers will not permit closings to proceed without confirmed registration, and delays in registration directly delay the developer\'s ability to repay the construction loan.',
        'Incorrect. The Site Plan Agreement must be executed before the building permit is issued, which makes it an earlier milestone in the schedule. It is a genuine required step but it is not the one omitted here — the question describes a scenario where SPA has already been obtained.',
        'Incorrect. The CBC is payable as a condition of ZBA approval and is typically paid before or concurrent with building permit issuance. While it must be paid, its payment does not directly gate individual unit closings in the way that condominium registration does.'
      ]
    },

    // Conservation Authority
    {
      q: 'A developer is performing due diligence on a 2-acre infill site in the west end of Toronto. The site is adjacent to a tributary of the Humber River and the eastern quarter of the property is shown on a mapping overlay as falling within the TRCA regulated area. What is the correct due diligence response?',
      opts: [
        'No special action required — Conservation Authority permits are a formality for urban infill sites and are routinely issued alongside building permits',
        'The regulated area should be treated as unbuildable and excluded from the development program entirely',
        'A TRCA pre-consultation should be arranged before acquisition to understand the permit requirements, setback obligations, and any natural heritage studies required — the regulated portion may affect buildable area and add a parallel approval track',
        'The developer should request that the municipality rezone the regulated portion to eliminate the TRCA overlay before completing the acquisition'
      ],
      ans: 2,
      exp: [
        'Incorrect. Conservation Authority permits for sites within regulated areas are not formalities — they are substantive approvals issued on the CA\'s own timeline by a separate body that operates independently from the municipality. TRCA review can require natural heritage assessments, floodproofing analysis, and buffer setbacks that are not captured in the municipal planning process. Underestimating the CA\'s role is a common and costly mistake.',
        'Incorrect. The regulated area is not automatically unbuildable. TRCA regulated areas include floodplain, hazard lands, and buffer zones adjacent to watercourses, but the extent of development restriction depends on the specific conditions of the regulated portion — some regulated land can be developed with appropriate mitigation, while other portions genuinely cannot. The correct response is to understand the constraint through pre-consultation, not to assume the worst.',
        'Correct. TRCA pre-consultation before acquisition is the appropriate response for any site within or adjacent to a regulated area. The pre-consultation will clarify: what portion of the site is within the regulated area; what setbacks or buffers TRCA will require; what studies are needed (floodplain analysis, natural heritage inventory, etc.); and whether the proposed development program is achievable on the buildable portion. This information is material to the land price, the development program, and the project timeline. TRCA approval runs parallel to SPA and is not within the municipality\'s power to accelerate — it must be planned as a separate critical path item.',
        'Incorrect. Municipal rezoning has no effect on TRCA regulatory jurisdiction. The TRCA\'s authority to regulate development within regulated areas derives from the Conservation Authorities Act, not from the zoning bylaw. A zoning change cannot remove TRCA jurisdiction over a regulated area.'
      ]
    },

    // Development Charges
    {
      q: 'A developer is preparing a feasibility model for a 210-unit purpose-built rental highrise in Toronto. Their land cost is $22M and they have budgeted $450,000 for the Community Benefits Charge. Their planning consultant flags that the municipal fee budget is materially incomplete. What is the most likely missing cost category, and roughly what order of magnitude should the developer be modelling?',
      opts: [
        'Building permit fees — typically $500,000-$800,000 for a project of this size',
        'Development Charges and Education Levies — at GTA highrise residential rates, the combined obligation on a 210-unit building could be in the range of $9M-$12M or more, dwarfing the CBC',
        'Parkland dedication — typically $200,000-$300,000 on a Toronto infill site',
        'OPA/ZBA application fees — typically $150,000-$250,000 in Toronto'
      ],
      ans: 1,
      exp: [
        'Incorrect. Building permit fees are a legitimate cost item and should be in the budget, but they are not the most significant missing item. At a typical Toronto building permit fee rate (a percentage of construction value), fees on a rental highrise are typically in the $350,000-$500,000 range — material, but not the category that would make a feasibility model "materially incomplete."',
        'Correct. Development Charges under the Development Charges Act are one of the largest cost items in any Ontario residential development pro forma and are entirely separate from the CBC. At Toronto highrise residential DC rates of approximately $40,000-$50,000 per unit as of 2024-2025, a 210-unit building generates a DC obligation of $8.4M-$10.5M — plus Education Development Charges on top of that. Together, these can approach or exceed $10M-$12M on a project of this size. Omitting DCs from the feasibility model while only budgeting $450,000 for the CBC produces a cost model that is off by tens of millions of dollars — a fatal error in underwriting.',
        'Incorrect. Parkland dedication is a genuine missing item, and at Toronto rates it can reach $1M-$2M+ on a larger site with significant land value. It should absolutely be in the budget. However, it is not the primary or most impactful missing category compared to Development Charges, which are an order of magnitude larger.',
        'Incorrect. OPA/ZBA application fees are a real cost — typically in the range of $90,000-$150,000 for a major application in Toronto — and should be in the soft cost budget. However, they are not the most significant missing item and were likely captured in the entitlement consulting budget even if not itemized separately.'
      ]
    },

    // DC Freeze
    {
      q: 'A developer submits a building permit application for a 195-unit rental tower in Vaughan in March 2025. Vaughan subsequently passes a DC By-law amendment in September 2025 increasing residential DC rates by 18%. The building permit is issued in November 2025. Which DC rate applies to this project?',
      opts: [
        'The September 2025 rate — DC rates apply at the time of permit issuance, not at the time of application',
        'The March 2025 rate — the developer froze the applicable DC rate at the time of building permit application',
        'An average of the March 2025 and September 2025 rates, prorated for the time between application and issuance',
        'The rate at the time of ZBA approval, since that is when the development rights were established'
      ],
      ans: 1,
      exp: [
        'Incorrect. DC rates do not automatically apply at the time of permit issuance. The Development Charges Act provides a freeze mechanism specifically to protect developers from rate increases between the date of building permit application and the date of issuance. If the developer submitted the building permit application in March 2025, the rates in effect at that time are locked in.',
        'Correct. The Development Charges Act allows a developer to freeze applicable DC rates at the time of building permit application. By submitting the application in March 2025, the developer locked in the rates then in effect. When Vaughan increased rates by 18% in September 2025, that increase did not apply to the pending permit application. The November 2025 permit is issued at the March 2025 rates. On a 195-unit project, an 18% rate increase could represent $1.5M-$2.5M in additional DCs — the freeze mechanism provides a material financial protection that developers should always exercise as early as possible.',
        'Incorrect. There is no averaging mechanism in the Development Charges Act. The freeze locks in the rate at the time of application. Once frozen, only the rate in effect at that time applies.',
        'Incorrect. DC rates are not frozen at ZBA approval — they are frozen at building permit application. The period between ZBA approval and building permit application is often 12-24 months or more, during which rates can and do increase. A developer who waits until the last moment to submit the building permit application exposes themselves to DC rate increases during that window.'
      ]
    },

    // Parkland Dedication
    {
      q: 'A developer\'s initial feasibility model for a Toronto condominium project includes the following municipal fee line items: Development Charges ($9.2M), Education Levies ($780K), Community Benefits Charge ($610K), and Building Permit Fees ($420K). The total is $11.01M. A senior colleague reviews the model and says one significant mandatory cost is missing. What is it?',
      opts: [
        'Section 37 contributions — these are required in addition to the CBC on applications above a certain height threshold',
        'Parkland Dedication — a mandatory exaction under s.42 of the Planning Act, payable prior to building permit, that is not captured in any of the line items listed',
        'Conservation Authority permit fees — these are charged per unit and can be significant on urban sites',
        'HST on municipal fees — all fees listed are subject to HST which must be separately modelled'
      ],
      ans: 1,
      exp: [
        'Incorrect. Section 37 agreements have been replaced by the Community Benefits Charge for new applications — the CBC is already in the model. There is no separate Section 37 obligation on a new application in addition to the CBC. Legacy Section 37 obligations only exist on applications that were approved under the prior regime.',
        'Correct. Parkland Dedication under s.42 of the Planning Act is a mandatory exaction — entirely separate from the CBC, DCs, and Education Levies — that requires developers to either dedicate parkland or pay a cash-in-lieu amount as a condition of development approval. In Toronto, the cash-in-lieu calculation is based on land value or per-unit rates under the City\'s alternative rate by-law. On a mid-to-large residential project, parkland dedication can range from several hundred thousand dollars to well over $1M depending on site area, land value, and unit count. It must be included as a hard cost in the pro forma and is payable prior to building permit issuance.',
        'Incorrect. Conservation Authority permit fees are real costs but are typically modest in absolute terms — generally in the range of $5,000-$25,000 for the permit itself. They are not in the same magnitude category as the missing item and would not be described as "significant" relative to the other line items in the model.',
        'Incorrect. Municipal fees under the Development Charges Act, the Planning Act, and the Education Development Charges regime are generally not subject to HST in the same way that private-sector services are. HST treatment of development fees is a specific tax question for the project\'s accountants, but it is not the clearly identifiable missing line item in this context.'
      ]
    },

    // Negotiation dimension
    {
      q: 'At pre-consultation for a 19-storey mixed-use rental application in Markham, the planning department\'s standard pre-consultation checklist requires a Pedestrian Level Wind Study, a Sun/Shadow Study, a Traffic Impact Study, a Noise Study, a Functional Servicing Report, a Stormwater Management Report, and a full Heritage Impact Assessment. The developer\'s planning consultant reviews the list and says "we should push back on a few of these." What is the basis for that position?',
      opts: [
        'There is no basis — pre-consultation requirements are legally mandated by the Planning Act and cannot be modified',
        'The planning consultant is wrong — submitting all required studies without objection is the best way to maintain a positive relationship with the municipality',
        'Many pre-consultation requirements involve professional judgment about what is warranted for a specific site and application. An experienced consultant can negotiate scope reductions for studies that are not justified by site conditions — for example, challenging the Heritage Impact Assessment if no heritage properties are nearby',
        'The developer should ignore the checklist and submit only the studies they believe are necessary, then respond to agency comments'
      ],
      ans: 2,
      exp: [
        'Incorrect. Pre-consultation requirements are not fully mandated by statute. The Planning Act requires municipalities to establish pre-consultation processes, but the specific studies required for a given application are determined by municipal staff through professional judgment — not by an immutable legal checklist. The scope is negotiable.',
        'Incorrect. Accepting every requirement without review is not strategically sound and does not necessarily produce better outcomes. A competent planning consultant\'s job includes identifying requirements that are not justified by the site conditions and engaging constructively with staff to narrow or eliminate them. This is a normal part of professional advocacy and is not antagonistic to the working relationship.',
        'Correct. Pre-consultation requirements reflect staff judgment about what studies are warranted, and that judgment is informed by general practice rather than specific site conditions. An experienced planning consultant reviewing the checklist against actual site conditions may legitimately argue, for example, that a Heritage Impact Assessment is not warranted if there are no heritage properties on or adjacent to the site; or that the scope of the Traffic Impact Study can be reduced if trip generation is modest. Negotiating study scope at pre-consultation — rather than accepting the full list and spending $30,000-$50,000 on an unnecessary study — is a concrete value-add that experienced consultants provide. This is a broader principle: much of the entitlement process that appears to be technical and fixed is in fact resolved through professional negotiation.',
        'Incorrect. Submitting an application without the studies identified at pre-consultation will almost certainly result in an incompleteness determination. The statutory clock will not start, and the application will sit in limbo until the missing materials are provided. This approach delays the process and damages credibility with staff — the opposite of the desired outcome.'
      ]
    },

    // OLT / OMB history
    {
      q: 'A senior colleague refers to "OMB approval" when describing the entitlement history of a property acquired by the firm in 2017. You are reviewing the title records and related planning documents. What does this reference mean and what body would handle an equivalent appeal today?',
      opts: [
        'OMB stands for Ontario Municipal Board, the predecessor planning appeal tribunal. It was replaced by the Local Planning Appeal Tribunal (LPAT) in 2017, and then by the Ontario Land Tribunal (OLT) in 2021. An equivalent appeal today would go to the OLT',
        'OMB stands for Ontario Ministry of Buildings, which handled building permit appeals before jurisdiction was transferred to municipal building departments',
        'OMB was a predecessor body to the Committee of Adjustment and handled minor variance appeals. These are now heard by the OLT',
        'OMB stood for Ontario Municipal Board and it was eliminated in 2019 with no successor — planning appeals can now only proceed through the court system'
      ],
      ans: 0,
      exp: [
        'Correct. The Ontario Municipal Board (OMB) was Ontario\'s primary planning appeal tribunal for decades and was known for its developer-friendly record. It was replaced by the Local Planning Appeal Tribunal (LPAT) in April 2017, which had more restricted jurisdiction. LPAT was then merged with several other adjudicative bodies to form the Ontario Land Tribunal (OLT) in June 2021. References to OMB decisions or OMB approval conditions in title documents and planning histories are common, particularly for properties entitled before 2017. Those conditions remain binding — the change in the tribunal\'s name did not affect the enforceability of prior decisions. An equivalent planning appeal today would be filed with and heard by the OLT.',
        'Incorrect. There is no body called the Ontario Ministry of Buildings. Building permit appeals in Ontario are handled through the Building Code Commission (for technical disputes) and through the courts (for legal questions). The OMB had nothing to do with building permit administration.',
        'Incorrect. The Committee of Adjustment handles minor variance and consent applications at the municipal level. Its decisions can be appealed — historically to the OMB, and now to the OLT — but the Committee of Adjustment itself was never replaced by or merged into either body.',
        'Incorrect. The OMB was not eliminated without a successor. It was replaced first by LPAT and then by the OLT, which continues to exercise planning appeal jurisdiction today.'
      ]
    }
  ]
};
