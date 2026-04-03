const quiz2 = {
  title: 'Chapter 2 Quiz — Site Selection & Due Diligence',
  questions: [
    {
      q: 'A developer is evaluating a site under a conditional purchase agreement. The Phase 1 ESA comes back with no Recognized Environmental Conditions. What does this finding confirm?',
      opts: [
        'The soil and groundwater are clean and no further environmental investigation is required',
        'No indicators of contamination were found through desktop review and site reconnaissance, but soil conditions are not yet tested',
        'The site qualifies for residential development under Ontario site condition standards',
        'The vendor is not liable for any future environmental remediation costs'
      ],
      ans: 1,
      exp: [
        'Incorrect. A Phase 1 ESA does not test soil or groundwater — it is a desktop and visual study only. A clean Phase 1 means no indicators were found, not that contamination is absent.',
        'Correct. A Phase 1 ESA involves reviewing historical records, regulatory databases, and conducting a site walkthrough — no physical sampling. Its output is a statement about whether indicators of contamination exist, not whether the soil is actually clean. A Phase 2 with physical sampling is the only way to confirm soil conditions.',
        'Incorrect. Qualification under Ontario site condition standards is determined by Phase 2 ESA lab results compared against O. Reg. 153/04 benchmarks — not by a Phase 1 desktop review.',
        'Incorrect. Vendor liability for environmental conditions is determined by the terms of the purchase agreement and applicable law, not by the Phase 1 findings. A clean Phase 1 does not extinguish vendor liability if contamination is later discovered.'
      ]
    },
    {
      q: 'During excavation on a development site, contaminated soil is encountered beyond the area identified in the Phase 2 ESA. The original remediation budget was $500,000. What does this situation most commonly reflect?',
      opts: [
        'An error in the Phase 2 ESA methodology that gives rise to a claim against the environmental consultant',
        'A normal characteristic of contamination plumes, which are rarely fully captured by borehole sampling programs',
        'Evidence that the vendor concealed known contamination during the due diligence process',
        'A failure by the developer to commission a sufficient number of boreholes during Phase 2'
      ],
      ans: 1,
      exp: [
        'Incorrect. Phase 2 ESAs are sampling programs with inherent uncertainty — they characterize contamination based on discrete borehole locations, not a comprehensive scan of every cubic metre of soil. Finding more contamination than sampled does not constitute negligence by the consultant.',
        'Correct. Contamination plumes in soil and groundwater are heterogeneous and do not follow predictable boundaries. Phase 2 sampling programs characterize conditions at specific borehole locations and interpolate between them — they routinely underestimate the full extent of contamination. This is why experienced developers apply meaningful contingency to remediation estimates and include scope expansion provisions in their budgets.',
        'Incorrect. While vendor concealment does occur, the more common and statistically likely explanation is simply that borehole sampling did not fully capture the extent of the plume — which is a known limitation of the methodology, not evidence of fraud.',
        'Incorrect. The number of boreholes in a Phase 2 program is determined by the environmental consultant based on site size, REC locations, and the regulatory standard of care. More boreholes reduce uncertainty but cannot eliminate it — soil contamination can exist between even closely spaced sampling points.'
      ]
    },
    {
      q: 'A title search reveals that a 4-metre wide utility easement crosses the proposed tower footprint diagonally. The developer has three options: redesign around it, apply to the City to relocate it, or negotiate a price reduction. Which factor most determines the right course of action?',
      opts: [
        'The age of the easement — older easements are generally easier to challenge or remove',
        'Whether the easement holder is a private company or a municipality, since private easements can be purchased',
        'The relative impact of each option on project returns compared to the cost and timeline of pursuing it',
        'The developer preference — all three options are financially equivalent if negotiated properly'
      ],
      ans: 2,
      exp: [
        'Incorrect. The age of an easement has no bearing on how easily it can be removed or challenged. A registered easement, regardless of age, is a valid encumbrance on title until formally discharged by the easement holder.',
        'Incorrect. While it is true that private easements can sometimes be purchased or discharged by agreement, the identity of the easement holder is just one factor — and not the determining one. Municipal easements for utilities are generally not removable without significant process, but private ones can also be difficult to discharge if the holder has no incentive to cooperate.',
        'Correct. The correct framework is a financial comparison: redesigning the footprint has an immediate quantifiable impact on revenue; relocating the easement has a known cost and a 12-18 month timeline with carrying cost implications; negotiating a price reduction shifts the economic burden to the vendor. The right choice depends on which option produces the best project return, accounting for both direct costs and timeline risk.',
        'Incorrect. The three options are not financially equivalent. Redesigning reduces revenue permanently. Relocating the easement adds time and cost with uncertain outcome. Negotiating a price reduction has no timeline impact and may be the most efficient path if the vendor is willing. These are materially different outcomes.'
      ]
    },
    {
      q: 'A geotechnical report recommends a raft slab foundation with CFA piles rather than the conventional spread footings assumed in the initial feasibility estimate. The developer argues this finding was foreseeable given the urban location and should not affect the land price negotiation. Is this reasoning sound?',
      opts: [
        'Yes — geotechnical risk is a standard development risk that should be priced into the original feasibility assumptions',
        'No — geotechnical conditions are site-specific and cannot be assumed until the investigation is complete, making the finding a legitimate basis for renegotiation',
        'Yes — foundation system selection is an architectural decision that can be value-engineered after closing without affecting project returns',
        'No — the vendor is always responsible for geotechnical conditions since they have owned the land longest'
      ],
      ans: 1,
      exp: [
        'Incorrect. While geotechnical risk is a known category of development risk, the specific conditions on any given site are not foreseeable without investigation. Assuming spread footings in a feasibility study is a reasonable starting assumption — but it is explicitly an assumption that must be confirmed by a geotechnical report. When the report reveals a more expensive system is required, that is new information that changes the economics.',
        'Correct. Geotechnical conditions vary dramatically from site to site even within the same neighbourhood, depending on soil type, depth to bedrock, groundwater levels, and adjacent construction history. The Phase 2 geotechnical investigation exists specifically to replace the initial assumption with site-specific data. A finding that adds $1.2M in foundation cost is new information that was not present when the land price was negotiated and provides legitimate grounds for renegotiation.',
        'Incorrect. Foundation system selection is a structural engineering decision driven by soil conditions — it cannot be arbitrarily changed through value engineering. A raft slab on CFA piles is specified because the soil conditions require it, not because it was chosen casually.',
        'Incorrect. Vendor liability for geotechnical conditions is generally not implied by property ownership — it would need to be established through specific representations in the purchase agreement or evidence of non-disclosure of known conditions.'
      ]
    },
    {
      q: 'A developer pays $16,000,000 for a site based on feasibility modeling that assumes rezoning to 6.0 FSR will be approved within 18 months. The rezoning is denied 26 months later. What is the most accurate description of what went wrong analytically?',
      opts: [
        'The developer should have used a higher discount rate to account for the additional time',
        'The land price was justified by an approval that had not been obtained, creating a gap between the price paid and what the site could support under existing permissions',
        'The rezoning consultant failed to properly assess the political risk of the application',
        'The developer should have purchased the site under a longer conditional period to allow more time for the rezoning'
      ],
      ans: 1,
      exp: [
        'Incorrect. A higher discount rate addresses the time value of money but does not resolve the fundamental problem — the land was priced on density that was never approved. Even with a higher discount rate, a denied rezoning means the project cannot be built as modeled.',
        'Correct. This is the classic rezoning risk error. The land price of $16M was justified by a 6.0 FSR program — but 6.0 FSR did not exist in the zoning bylaw. The developer paid for density they did not own. When the rezoning was denied, the site reverted to its as-of-right value, which may be a fraction of $16M. The correct approach is to base the acquisition price on as-of-right density and model the rezoning upside separately under a clearly labeled scenario with a probability discount.',
        'Incorrect. While a better political risk assessment might have identified concerns with the application, the more fundamental analytical error was paying a land price that was only justified by an approval that had not been granted.',
        'Incorrect. A longer conditional period is a process solution, not an analytical one. The problem was not that the developer needed more time to discover the risk — it was that the land price was justified by an outcome that was uncertain by definition.'
      ]
    },
    {
      q: 'What is the primary purpose of commissioning a survey during site due diligence, distinct from the title search?',
      opts: [
        'The survey confirms zoning designations and development rights, while the title search identifies ownership history',
        'The survey physically confirms the exact site boundaries and identifies any encroachments, while the title search identifies registered legal interests',
        'The survey is required by the lender, while the title search is required by the developer legal team',
        'The survey identifies environmental conditions at the surface, while the title search covers subsurface rights'
      ],
      ans: 1,
      exp: [
        'Incorrect. Zoning designations and development rights are confirmed through the municipal zoning bylaw and the planning department, not through a survey. A survey deals with physical boundaries, not regulatory permissions.',
        'Correct. A title search is a legal review of registered documents — it tells you who owns the land and what legal interests are registered against it. A survey is a physical measurement — it tells you exactly where the boundaries are in the real world, whether structures respect those boundaries, and whether any encroachments exist onto or from adjacent properties. Both are required because a discrepancy can exist between what is registered and what is physically on the ground.',
        'Incorrect. While both the lender and the developer require surveys and title searches, the distinction between the two is not based on who requires them — it is based on what information each one provides.',
        'Incorrect. Surveys deal with physical property boundaries and the location of structures relative to those boundaries. Environmental conditions at the surface are assessed through the Phase 1 and Phase 2 ESA process, not through a survey.'
      ]
    },
    {
      q: 'A developer is evaluating two comparable sites. Site A has as-of-right zoning for the intended program and no known environmental issues. Site B requires rezoning for the same program and has a Phase 1 REC that will require a Phase 2 ESA. Site B is priced 20% lower. What additional analysis is needed before concluding Site B is the better value?',
      opts: [
        'A comparison of the architects available to design on each site',
        'Quantification of the rezoning timeline and probability, Phase 2 findings, and the carrying cost impact of both uncertainties on project returns',
        'A market study confirming that demand will still exist by the time Site B is ready to develop',
        'Confirmation that the municipality will not require an Official Plan Amendment for Site B in addition to the rezoning'
      ],
      ans: 1,
      exp: [
        'Incorrect. Architect availability is not a relevant input into a site value comparison — the same design team could work on either site.',
        'Correct. A 20% price discount on Site B may or may not compensate for the risks. The rezoning could take 2-4 years, adding substantial carrying cost. The Phase 2 ESA could reveal remediation costs ranging from negligible to several million dollars. The probability of rezoning approval affects expected value. All of these need to be quantified and modeled before concluding that the 20% discount makes Site B better value — it may not be sufficient, or it may actually be an underpricing of the discount required.',
        'Incorrect. While a market study is relevant to any development project, it is not the additional analysis needed to compare the two sites. The question is whether the 20% price discount compensates for the Site B-specific risks — which requires analyzing those risks specifically, not reconfirming market demand.',
        'Incorrect. Whether an OPA is needed is a relevant planning risk that should be investigated, but it is one component of the broader rezoning risk analysis — not the primary additional analysis needed. The question asks what is needed before concluding Site B is better value, which requires a comprehensive risk-adjusted comparison.'
      ]
    },
    {
      q: 'During due diligence, your firm discovers that the site contains an existing tenanted commercial building with 3 years remaining on the lease. The vendor did not disclose this proactively. What is the most significant development implication?',
      opts: [
        'The lease must be honoured until expiry, which delays the construction start and adds 3 years of holding cost to the project timeline',
        'The tenant can be immediately evicted since development approvals supersede existing lease agreements',
        'The lease obligation must be assessed against the project timeline — it may or may not affect the critical path depending on when construction is planned to begin',
        'The vendor is in breach of the purchase agreement and the developer is entitled to terminate without penalty regardless of the conditional period status'
      ],
      ans: 2,
      exp: [
        'Incorrect. While the lease must generally be honoured, it does not automatically add 3 years to the project. If entitlements and permitting take 2-3 years, the lease may expire naturally before construction needs to begin. The impact depends entirely on the relationship between the lease term and the project timeline.',
        'Incorrect. Development approvals do not supersede existing lease agreements. A tenant with a valid lease has legal rights to occupy the premises for the remaining term regardless of the developer intentions, subject to any specific termination provisions in the lease.',
        'Correct. The lease is a timing constraint, not an automatic project-killer. A developer planning a 30-month entitlement process before construction may find that a 36-month lease presents no conflict at all. Conversely, a developer who needs vacant possession in 12 months faces a significant problem. The right response is to understand the project timeline, compare it to the lease expiry, and determine whether the lease represents a real constraint or a manageable one — and price or negotiate accordingly.',
        'Incorrect. Non-disclosure of a tenancy may or may not constitute a breach of the purchase agreement depending on the specific representations made. Even if it does, the appropriate remedy is negotiation or specific legal remedies — not an automatic right to terminate without penalty in all circumstances.'
      ]
    },
    {
      q: 'A servicing assessment reveals that the municipal sanitary sewer serving the project area is operating near capacity. The City indicates that a trunk sewer upgrade will be required as a condition of development approval, at an estimated cost of $2,400,000 to be funded by the developer. This cost was not included in the original feasibility. How should it be treated?',
      opts: [
        'As a development charge, since it is a municipal infrastructure cost that should have been captured in the DC calculation',
        'As a hard cost, since it involves physical construction work on underground infrastructure',
        'As a site-specific soft cost that must be added to the feasibility model and factored into the land price negotiation',
        'As an optional cost that the developer can defer by phasing the project to stay below the capacity threshold'
      ],
      ans: 2,
      exp: [
        'Incorrect. Development charges are standardized fees calculated based on unit count and bylaw rates. A site-specific infrastructure upgrade required as a condition of approval is a separate, project-specific cost that is not captured in the DC calculation and does not substitute for it.',
        'Incorrect. While a trunk sewer upgrade does involve physical construction, it is not part of the developer hard construction budget — it is a municipal infrastructure cost that the developer is required to fund as a condition of approval. It is more accurately categorized as a site-specific soft cost or servicing contribution.',
        'Correct. A site-specific servicing cost required as a condition of development approval is a real project cost that must be added to the feasibility model. It was not present when the land price was negotiated, which means the land price was implicitly too high by $2,400,000. This finding provides legitimate grounds to renegotiate the purchase price downward or, if the vendor will not reduce the price, to walk away if the project no longer meets return thresholds.',
        'Incorrect. Phasing a project to stay below a capacity threshold may or may not be feasible depending on the development program, and it would not necessarily defer the sewer upgrade requirement indefinitely. The City typically assesses infrastructure needs based on the full proposed development, not individual phases.'
      ]
    },
    {
      q: 'At the end of a 60-day due diligence period, a developer has findings that reduce project returns from 22% to 15% margin. The firm threshold is 18%. The vendor offers a $1,000,000 price reduction but will not go further. After the reduction, the margin recovers to 16.5%. What is the most analytically rigorous next step?',
      opts: [
        'Accept the vendor offer since 16.5% is close to the 18% threshold and the location justifies a small exception',
        'Walk away immediately since 16.5% is below the stated threshold and exceptions undermine investment discipline',
        'Quantify what additional concessions or value-adds would be needed to reach 18%, then decide whether pursuing them is realistic before the conditional period expires',
        'Request a 30-day extension to the conditional period to allow more time to negotiate'
      ],
      ans: 2,
      exp: [
        'Incorrect. While location quality is a legitimate qualitative factor, accepting below-threshold returns because a deal is close without a structured analytical justification is not rigorous — it is rationalization. The question is whether 16.5% is genuinely acceptable given all risk factors, not whether it feels close enough.',
        'Incorrect. While investment discipline around return thresholds is important, a mechanical walk-away without first determining whether the gap can be closed through additional negotiation or value creation is also not rigorous. The right answer is to know exactly what is needed before deciding whether to walk.',
        'Correct. The gap between 16.5% and 18% is approximately 1.5 percentage points. The developer should calculate exactly how much additional price reduction, or what other concessions (vendor take-back financing, extended closing, assumption of remediation risk by vendor) would bridge that gap. Then assess whether those concessions are realistic to obtain within the remaining conditional period. This produces a clear decision: if the gap can be closed, negotiate for it; if it cannot, walk away with full information rather than accepting below-threshold returns or walking away prematurely.',
        'Incorrect. Requesting an extension may be tactically useful in some circumstances, but it does not resolve the analytical question of whether the project is viable at the current offer. An extension without a clear plan for how the additional time will be used to improve the economics is not a strategy — it is a delay.'
      ]
    },
    {
      q: 'A developer is preparing to acquire a vacant urban infill site and commission the due diligence scope. The site sits adjacent to a ravine and has no history of industrial use. Which due diligence item is most likely to be underweighted in an initial scope?',
      opts: [
        'Phase 1 ESA — the site has no industrial history so environmental review is unnecessary',
        'Natural heritage assessment and a potential Section 28 permit from the Conservation Authority, given proximity to the ravine',
        'Title search — vacant sites rarely have encumbrances registered on title',
        'Geotechnical investigation — infill sites in established areas have predictable soil conditions'
      ],
      ans: 1,
      exp: [
        'Incorrect. Phase 1 ESAs are standard practice regardless of industrial history. Non-industrial uses can also create RECs, and a Phase 1 is typically required by lenders for any acquisition. Skipping it entirely would be an unusual and risky position.',
        'Correct. Ravines in Ontario are typically regulated areas under the Conservation Authorities Act. Development within or adjacent to the regulated boundary requires a Section 28 Permit from the applicable Conservation Authority (e.g., TRCA). Additionally, ravine edges may support natural heritage features — significant valleylands, wildlife habitat, or fish habitat — that trigger Provincial Policy Statement protections. Neither of these is captured in a standard ESA or geotechnical scope and is easily missed in an initial due diligence checklist.',
        'Incorrect. Vacant sites can and do carry registered encumbrances — easements, rights of way, restrictive covenants, and outstanding liens. A title search is non-negotiable regardless of current site condition.',
        'Incorrect. Geotechnical conditions in urban infill areas vary significantly depending on fill history, proximity to water features, and depth to bedrock — none of which can be assumed from location alone. The 9700 Yonge project found groundwater at less than 1 metre depth despite being in an established urban area.'
      ]
    },
    {
      q: 'A developer acquires a former commercial site and intends to develop a residential condominium. The Phase 2 ESA confirms contamination below Ontario residential site condition standards — meaning no remediation is required. Can the developer proceed directly to a building permit application?',
      opts: [
        'Yes — if no remediation is required, there are no further environmental obligations before building permit',
        'No — a Record of Site Condition must still be filed with the Ministry of the Environment and Conservation and Parks before a building permit for a sensitive use can be issued',
        'Yes — the Phase 2 ESA report serves as the environmental clearance required by the municipality',
        'No — the developer must first obtain a Certificate of Approval from the Ministry before changing the land use'
      ],
      ans: 1,
      exp: [
        'Incorrect. The absence of a remediation requirement does not eliminate the RSC obligation. The Record of Site Condition is required whenever a property transitions from a less sensitive use to a more sensitive use, regardless of whether contamination was found. The RSC documents the site condition at a point in time and provides a regulated assurance to the municipality and lender.',
        'Correct. Under O. Reg. 153/04, a Record of Site Condition must be filed with the Ministry of the Environment, Conservation and Parks and acknowledged on the Environmental Site Registry before a building permit can be issued for a sensitive use on a property that was previously a commercial or industrial use. The RSC must be certified by a Qualified Person. Even a clean Phase 2 result does not bypass this requirement — the RSC is the formal instrument that documents the transition, and lenders will require it as a condition of construction financing.',
        'Incorrect. A Phase 2 ESA report is a consultant document — it is not a government-issued clearance and does not substitute for the RSC process. The municipality will not accept it as clearance for building permit purposes on a use-change site.',
        'Incorrect. A Certificate of Approval is not the relevant instrument here. The correct provincial mechanism for documenting environmental suitability on a use-change site is the Record of Site Condition process under O. Reg. 153/04.'
      ]
    },
    {
      q: 'A Stage 1 Archaeological Assessment is commissioned for an urban infill site. The consultant concludes the site has archaeological potential due to proximity to a historic watercourse and known pre-contact Indigenous activity in the area. The existing building was constructed in 1962. What is the most appropriate next step?',
      opts: [
        'Proceed with demolition and construction — the 1962 construction means any archaeological resources were already disturbed',
        'Commission a Stage 2 field assessment with systematic test pitting to determine whether intact archaeological resources are present beneath the existing construction',
        'Apply to the City for a heritage permit to allow development to proceed without further assessment',
        'Notify Indigenous consultation groups only if Stage 2 testing actually finds artifacts'
      ],
      ans: 1,
      exp: [
        'Incorrect. Prior construction does not automatically eliminate archaeological potential. A Stage 1 conclusion that the site has archaeological potential means the consultant believes intact deposits may survive beneath the existing building footprint — particularly in areas that were not fully excavated in 1962 or where the building rests on shallow footings. The Stage 1 finding must be acted on before development proceeds.',
        'Correct. When a Stage 1 assessment concludes a site has archaeological potential, a Stage 2 field assessment is required. Stage 2 involves systematic test pit excavation at defined intervals across the site, including beneath any areas not fully disturbed by prior construction. Provincial clearance based on the Stage 2 results is required before building permits can be issued. Skipping Stage 2 based on the assumption that prior construction eliminated all resources is not an acceptable approach under the Ontario Heritage Act.',
        'Incorrect. There is no municipal heritage permit process that substitutes for the provincial archaeological assessment requirement. Archaeological clearance is a provincial process administered through the Ministry of Citizenship and Multiculturalism, not the municipality.',
        'Incorrect. Indigenous and community consultation in relation to archaeological potential begins at the Stage 1 or Stage 2 phase — not only after artifacts are found. Many municipalities and the province require early notification and engagement with potentially affected Indigenous communities as part of the assessment process, regardless of whether material is ultimately discovered.'
      ]
    },
    {
      q: 'A feasibility model for a proposed high-rise residential project in Toronto does not include Development Charges, Community Benefits Charges, or cash-in-lieu of parkland. The project was modeled based on hard and soft construction costs plus land. What is the risk of this omission?',
      opts: [
        'Minimal — DCs and CBCs are negotiable with the municipality and can be reduced or waived for residential projects',
        'The omission could understate total project cost by several million dollars, making the land price appear supportable when it is not',
        'Moderate — DCs are recoverable through higher unit pricing so they do not affect the feasibility margin',
        'The omission is standard practice at the early feasibility stage and will be corrected at building permit'
      ],
      ans: 1,
      exp: [
        'Incorrect. Development Charges and Community Benefits Charges in Ontario are statutory levies set by municipal by-law — they are not negotiable in ordinary circumstances. DCs in Toronto for high-density residential can exceed $50,000-$100,000 per unit. A 300-unit project could carry $15M-$30M in combined municipal levies.',
        'Correct. Omitting Development Charges, CBCs, and parkland cash-in-lieu from a feasibility model can understate total project cost by tens of millions of dollars on a large high-rise project. If the land price was set based on a feasibility that excluded these costs, the project will fail to meet return thresholds once they are properly included. This is one of the most common errors in early-stage feasibility modeling and one of the most consequential — the mistake is embedded in the land acquisition, which cannot be undone after closing.',
        'Incorrect. While higher pricing could theoretically absorb cost increases, the market sets pricing — not the developer. Levies increase cost without a corresponding increase in what buyers will pay. Their impact flows directly through to reduced project margin.',
        'Incorrect. Deferring the inclusion of DCs and CBCs to the building permit stage means they will not be factored into the land price negotiation, which happens years earlier. By the time a building permit is submitted, the developer has already committed to a land price that did not account for them. These costs must be modeled accurately before any land offer is made.'
      ]
    },
    {
      q: 'Before beginning a site search for a 400-unit purpose-built rental tower, a team argues that market validation is unnecessary because rental demand in the GTA is "obviously strong." What is the most significant risk of proceeding on this basis?',
      opts: [
        'The developer may select a site in a location the municipality will not support for rental housing',
        'The development program may be sized or priced based on a broad market assumption rather than the specific submarket absorption, competitive supply, and pricing reality the project will actually face',
        'The team will not have a market study to include in the rezoning application package',
        'The risk is minimal — rental demand in major urban markets is consistently strong and site-specific validation adds little value'
      ],
      ans: 1,
      exp: [
        'Incorrect. Municipal support for rental housing is a planning and zoning question, not a market question. A market validation study does not determine what a municipality will permit — that is determined through the zoning and Official Plan review process.',
        'Correct. "Rental demand is strong in the GTA" is a regional observation, not a submarket analysis. A developer who proceeds without market validation risks acquiring a site and designing a program based on assumptions about pricing, unit mix, and absorption that do not reflect the competitive dynamics of the specific location. A submarket with 2,000 new rental units in the pipeline or declining demographic support may not sustain the rent levels and absorption pace the feasibility model requires — regardless of headline GTA rental trends. Market validation is site-specific and program-specific, not regional.',
        'Incorrect. While a formal market study is part of many rezoning application packages, the purpose of pre-site market validation is not to produce a document for submission — it is to test whether the development program is viable before committing to an acquisition.',
        'Incorrect. Broad market strength does not eliminate the need for submarket-level validation. Significant rental projects have failed in strong markets because their specific location, unit mix, or pricing did not align with local demand — despite a healthy regional market backdrop.'
      ]
    }
  ]
};
