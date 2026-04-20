const quiz7 = {
  title: 'Chapter 7 Quiz — Procurement & Contracting',
  questions: [

    // Q1 — correct: B (1)
    {
      q: 'A developer using CCDC 5A has just completed trade procurement. The pre-tender Class C hard cost estimate was $88M. Awarded trade packages total $93.5M. The project manager instructs the Senior Analyst to submit the first draw package using the original $88M budget while the variance is "under investigation." What is the correct response and why?',
      opts: [
        'Proceed with the original $88M budget in the draw package — lenders understand that pre-tender estimates carry a Class C accuracy range and will not flag a 6% variance as a reporting concern, provided the contingency line has sufficient headroom to absorb it.',
        'Do not submit the draw package on the original budget. The draw package must reflect the actual contracted position — $93.5M — with a line-by-line reconciliation explaining what drove the variance, whether contingency absorbs it, and disclosure to the lender. Submitting a package the developer knows understates actual costs is a material misrepresentation covered by the loan\'s bad-boy carve-out provisions.',
        'Submit the draw package using $88M, but attach a footnote disclosing the $5.5M variance. Lenders typically treat footnoted disclosures as compliant submissions and will not withhold the advance, provided the project monitor\'s site inspection is current.',
        'Direct the CM to redistribute $5.5M across existing trade package lines to avoid showing a single large overrun. Spreading the variance across multiple line items keeps each individual deviation within acceptable tolerances and reduces the risk of triggering a lender review.'
      ],
      ans: 1,
      exp: [
        'Incorrect. The Class C accuracy range is a planning tool — it does not justify knowingly submitting an inaccurate draw package. The chapter is explicit that post-tender budget reconciliation is Senior Analyst terrain, and that the budget must be updated to reflect actual procurement results before the first draw is submitted.',
        'Correct. The chapter identifies post-tender budget reconciliation as a core Senior Analyst responsibility. Submitting a draw package that the developer knows understates actual project costs is a material misrepresentation. Bad-boy carve-out provisions in the construction loan agreement convert the non-recourse loan to full personal recourse for exactly this conduct — and the chapter specifically states that Senior Analyst draw packages are covered by these provisions. The reconciled budget must accompany the first draw.',
        'Incorrect. Disclosing a variance in a footnote while presenting an inaccurate headline figure does not constitute accurate disclosure. A lender relying on the draw package summary would have a false picture of the project\'s cost position. This approach does not avoid the misrepresentation; it perpetuates it.',
        'Incorrect. Redistributing costs between line items to mask a known overrun is the most serious option — it is deliberate falsification of the project\'s financial position. This conduct falls squarely within what bad-boy carve-out provisions are designed to address and could constitute fraud.'
      ]
    },

    // Q2 — correct: D (3)
    {
      q: 'Under CCDC 5A, the CM acts as the developer\'s agent and all trade contracts are held directly by the developer. Under CCDC 5B, the CM holds all trade contracts in its own name. A developer with a lean internal team is considering which structure to use for a 24-storey rental tower. Which of the following most accurately captures the trade-off between the two forms and the correct selection for this scenario?',
      opts: [
        'CCDC 5A and 5B are functionally identical for cost transparency purposes — both require the CM to maintain open-book accounts accessible to the developer. The choice is purely administrative: 5A is used on projects below $50M and 5B on larger projects, reflecting CCDC\'s own recommended thresholds for contract size.',
        'CCDC 5B provides better cost transparency because the CM, holding all trade contracts directly, has more complete visibility into actual trade costs and can report them more accurately to the developer. CCDC 5A creates information gaps because the developer holds contracts it lacks the capacity to monitor closely.',
        'CCDC 5A is always preferable regardless of team capacity because it gives the developer direct contractual privity with every trade, creating stronger legal recourse in the event of trade contractor default, non-payment disputes, or lien claims than is available under CCDC 5B.',
        'CCDC 5A provides maximum cost transparency — the developer holds all trade contracts directly and sees every actual trade cost — but requires a capable internal team to manage those relationships. CCDC 5B trades transparency for a single point of contractual responsibility, better suiting a lean team. For this developer, CCDC 5B is the appropriate choice.'
      ],
      ans: 3,
      exp: [
        'Incorrect. CCDC 5A and 5B are not functionally identical for cost transparency. Under 5A the developer holds all trade contracts and sees every actual cost directly. Under 5B the CM holds contracts and the developer\'s visibility is mediated through the CM\'s reporting. The chapter also does not describe project size thresholds — the choice is driven by the developer\'s internal team capacity and risk preferences.',
        'Incorrect. This reverses the transparency dynamic. CCDC 5A — not 5B — provides maximum transparency because the developer holds contracts directly. Under 5B, the developer contracts only with the CM; trade-level cost visibility depends on open-book reporting provisions in the 5B agreement and is less direct than under 5A.',
        'Incorrect. While CCDC 5A does give the developer direct contractual privity with trades, the chapter does not identify this as the basis for always preferring 5A. For a lean internal team, holding 15–30 trade contracts directly creates an administrative burden the team cannot manage effectively. The chapter specifically recommends 5B for developers who want a single point of contractual responsibility and have leaner teams.',
        'Correct. The chapter\'s comparison is precise. CCDC 5A maximises cost transparency because the developer holds all trade contracts directly and costs flow through at actual cost — but this requires a capable internal team to manage those contract relationships. CCDC 5B provides a single point of contractual responsibility, which suits developers with leaner teams by concentrating all trade management accountability in the CM. For this developer, 5B is the correct choice.'
      ]
    },

    // Q3 — correct: A (0)
    {
      q: 'A developer is running a competitive tender for the structural concrete trade package on a 28-storey tower. After bid levelling, the three submissions show Contractor X at $11.2M, Contractor Y at $11.8M, and Contractor Z at $12.4M. The CM recommends awarding to Contractor X. During levelling review, the cost consultant flags that Contractor X\'s formwork labour rate is $17/sf — compared to $25/sf and $26/sf for Y and Z. The CM argues this reflects Contractor X\'s superior crew efficiency. What is the correct analytical response?',
      opts: [
        'The $8/sf formwork labour gap against two independently aligned competitors is a material anomaly that cannot be explained by efficiency alone. Labour productivity differences between experienced contractors rarely exceed 10–15%. Before award, the developer must meet with Contractor X to understand the basis of the rate, verify it is firm and not an error, and check their track record on comparable pours — because a below-cost bid often signals a contractor planning to recover margin through change orders.',
        'Accept the award to Contractor X. Bid levelling has already normalized all scope differences, so the remaining price difference reflects genuine cost efficiency. The CM\'s statement about superior crew efficiency is plausible and does not require independent verification before a levelled award can proceed.',
        'Disqualify Contractor X on the basis that a price more than 15% below the average of competing bids is non-compliant under CCDC tendering standards, which require all bids to fall within a competitive range before the developer can legally make an award.',
        'Award to Contractor Y as the middle bidder. When one bid appears anomalously low against two closely-aligned competitors, awarding to the median price is the industry-standard approach, as it reflects the most defensible market rate and reduces the risk of a challenged award.'
      ],
      ans: 0,
      exp: [
        'Correct. The chapter is explicit that bid levelling establishes scope comparability — it does not validate whether individual line item prices are realistic. A 31% formwork labour rate departure from two independently aligned competitors is a red flag. The two most common explanations are a pricing error (which will surface as a change order claim or a request to correct) or deliberate buy-in at a below-cost rate with the intent to recover through aggressive change order management. Both outcomes are financially damaging. The correct response is to investigate before awarding.',
        'Incorrect. Bid levelling does not validate line item pricing — it only normalizes scope. A material anomaly in a key labour component requires investigation regardless of how thorough the levelling exercise was. The CM\'s assertion of superior efficiency is unverified and insufficient justification for an award on an item showing a 31% rate departure.',
        'Incorrect. There is no CCDC tendering standard imposing a 15% competitive range requirement that triggers automatic disqualification. Disqualification on this basis has no foundation in the chapter\'s procurement framework. The appropriate response is investigation, not disqualification.',
        'Incorrect. Awarding to the median bidder is not an industry standard practice and has no basis in the chapter\'s evaluation framework. Awards are made on demonstrated qualifications, a reliable price, and track record — not by splitting the difference between an anomalous low and a higher bid.'
      ]
    },

    // Q4 — correct: C (2)
    {
      q: 'A contract clause in the proposed CCDC 5A supplementary conditions states: "The Construction Manager shall not be liable to the Owner for any delay or additional cost arising from the acts or defaults of any Trade Contractor, provided the Construction Manager has exercised reasonable diligence in the management of such party." The developer\'s legal counsel flags this for review. What is the most accurate analysis of this clause?',
      opts: [
        'The clause is a standard CCDC 5A provision that simply codifies the CM\'s existing obligations under the standard form. Accepting it does not change the risk allocation because the CCDC 5A default already limits CM liability to a reasonable diligence standard for trade performance.',
        'The clause benefits the developer by creating a clearly defined and enforceable diligence standard against which the CM\'s performance can be measured. Without this language, the developer would have difficulty proving CM negligence in a dispute, making the clause a valuable addition to the supplementary conditions.',
        'The clause substantially limits the CM\'s liability for trade contractor performance — which is the CM\'s primary function. If a subtrade causes a three-month delay, the developer cannot recover from the CM as long as the CM claims reasonable diligence, even if the CM recommended that contractor. The developer bears all financial consequences of trade failures with severely constrained recourse — a risk transfer the chapter identifies as one institutional developers and lenders rarely accept without modification.',
        'The clause only affects claims arising from trade contractor insolvency or abandonment. For all other types of trade contractor default — including schedule delay, deficient workmanship, and scope disputes — the standard CCDC 5A liability provisions remain fully in force regardless of this supplementary condition.'
      ],
      ans: 2,
      exp: [
        'Incorrect. The CCDC 5A standard terms do not already limit CM liability to a "reasonable diligence" standard for trade performance. This supplementary condition is a material modification that reduces CM liability below the standard form\'s default position. The chapter treats it explicitly as a risk transfer to the developer, not a restatement of existing obligations.',
        'Incorrect. The clause does not benefit the developer. It limits the CM\'s liability rather than defining a standard the developer can enforce against the CM. By setting "reasonable diligence" as the ceiling rather than the floor of CM accountability, it makes it harder — not easier — for the developer to recover losses arising from trade contractor failures.',
        'Correct. The chapter\'s AE-7.5 exercise addresses this exact clause. The CM\'s core function is managing trade contractors. By limiting liability to "reasonable diligence," this clause means the developer bears all financial consequences of trade failures — cost overruns, delay damages, deficiency correction — with limited recourse to the CM. On a CM-delivered project where the developer\'s primary avenue of recovery for trade performance issues runs through the CM, this is a significant and adverse risk transfer.',
        'Incorrect. The clause is not limited to insolvency or abandonment scenarios. The language covers "any delay or additional cost arising from the acts or defaults of any Trade Contractor" — which is broad enough to encompass schedule delay, quality failures, scope disputes, and coordination failures. There is no carve-back preserving standard CCDC liability for other default types.'
      ]
    },

    // Q5 — correct: B (1)
    {
      q: 'Ontario\'s Construction Act requires the owner to retain a statutory holdback of 10% from each progress payment and hold it in trust until the lien period expires following substantial performance. A project manager instructs the Senior Analyst to process a $4.2M CM invoice in full without deduction, arguing that the CM\'s strong track record makes the holdback "a formality." What is the correct position?',
      opts: [
        'Process the full $4.2M as instructed. The statutory holdback is a default requirement that can be waived by mutual agreement between the owner and the CM. Given the CM\'s strong track record and the developer\'s confidence in the relationship, waiving the holdback for this draw cycle is a reasonable exercise of contractual discretion.',
        'Process $3.78M and retain $420,000 as statutory holdback. The 10% holdback cannot be waived by contract regardless of the parties\' relationship or the CM\'s track record — it is a mandatory statutory obligation under the Construction Act. Processing the full invoice would put the developer in breach of the Act and would be flagged by the lender\'s project monitor as a draw compliance failure.',
        'Process the full $4.2M but create a separate internal ledger entry for the $420,000 to track it as a notional holdback. As long as the developer can demonstrate the amount has been mentally reserved, the statutory obligation is satisfied without the operational friction of actually withholding payment.',
        'Escalate to legal counsel before processing the invoice. The statutory holdback requirement applies only to trade contractor invoices — CM management fee and general conditions billings are professional service fees excluded from the holdback regime under the Construction Act\'s definition of "price."'
      ],
      ans: 1,
      exp: [
        'Incorrect. The statutory holdback cannot be waived by mutual agreement, regardless of the relationship between the owner and contractor. The chapter is unambiguous: the 10% holdback cannot be waived by contract and overrides any contractual arrangement purporting to reduce or eliminate it. The CM\'s track record is irrelevant to a statutory obligation.',
        'Correct. The chapter states precisely: the owner must retain 10% of each progress payment and hold it in trust — $4.2M × 10% = $420,000. This is a statutory obligation under Ontario\'s Construction Act that cannot be waived by contract. The holdback must be reflected in every progress payment under every construction contract, including CM agreements, and lenders verify holdback compliance as part of draw review. Failing to retain it creates a statutory breach and a draw compliance failure.',
        'Incorrect. A notional ledger entry does not satisfy the statutory holdback obligation. The Act requires the owner to actually retain the funds and hold them in trust — not merely record them internally. The holdback exists to protect subtrade and supplier lien rights, which requires the funds to be genuinely withheld from the contractor.',
        'Incorrect. The statutory holdback applies to all progress payments under construction contracts — including CM fee and general conditions billings. There is no exemption for professional service components of a CM agreement. The chapter explicitly states the holdback applies to every progress payment, and the legal classification of a CM agreement as a construction contract under the Act is settled.'
      ]
    },

    // Q6 — correct: D (3)
    {
      q: 'A developer\'s CM recommends sole-sourcing the elevator package to a preferred supplier on an LP-structured rental tower project. The CM argues the supplier has a proven track record on two prior projects and the competitive field for elevators is thin. The developer has two institutional LP investors. What is the correct process before accepting this recommendation?',
      opts: [
        'Accept the recommendation based on the CM\'s professional judgment. Elevator packages are highly specialized and the thin competitive field effectively renders competitive tendering impractical. The CM\'s prior relationship with the supplier constitutes demonstrated performance, which is one of the three conditions the chapter identifies as justifying sole source.',
        'Reject the recommendation and run a full competitive tender regardless of market conditions. Sole-source procurement is never defensible on a project with institutional LP investors because competitive tendering is a fiduciary obligation to all investors that overrides project-level efficiency considerations.',
        'Request one informal comparison price from a competing supplier before accepting the sole-source recommendation. A documented second price demonstrates due diligence and satisfies the competitive procurement expectations of institutional LPs without the administrative burden of a full tender process.',
        'Require the CM to provide written justification for the sole-source recommendation; review the LP agreement to confirm whether it imposes specific competitive procurement requirements; seek documented approval from the developer\'s principal; and only proceed if those governance steps are satisfied — because sole-source is not the CM\'s decision to make unilaterally.'
      ],
      ans: 3,
      exp: [
        'Incorrect. The CM\'s prior relationship alone does not satisfy the sole-source justification standard without developer review and approval. The chapter is clear: sole-source requires explicit justification and developer approval — it is not the CM\'s decision to make unilaterally. On an LP-structured project the developer must also confirm whether the partnership agreement imposes additional competitive procurement requirements.',
        'Incorrect. The chapter does not categorically prohibit sole-source on LP-structured projects. It requires that it be explicitly justified, developer-approved, and compliant with any LP agreement requirements. Blanket rejection without reviewing the LP agreement and the CM\'s justification is not the correct response.',
        'Incorrect. An informal second price is not competitive procurement and does not satisfy LP governance requirements if the partnership agreement mandates a formal competitive process. The chapter\'s framework requires documented justification and developer-principal approval — not a price check substitute.',
        'Correct. The chapter is precise: sole-source procurement requires explicit justification, developer approval, and — on LP-structured projects — compliance with any competitive procurement requirements in the partnership agreement. These requirements exist because the developer\'s obligations run to their institutional investors, not just to the project\'s cost efficiency. A sole-source award made without following this process could constitute a breach of the LP agreement.'
      ]
    },

    // Q7 — correct: A (0)
    {
      q: 'The chapter\'s AE-7.3 exercise identifies three potential scope gaps in a mechanical/electrical tender package on a 22-storey rental tower. One item is the thermostats and zone control panels for individual suite HVAC units. The mechanical scope covers systems "within the building envelope" and the electrical scope covers "power distribution, lighting, and low-voltage systems." Why is this item a scope gap rather than clearly assigned, and what is the consequence of leaving it unresolved at tender?',
      opts: [
        'The thermostat item sits at the mechanical/electrical interface — thermostats control mechanical HVAC equipment but require low-voltage electrical wiring and panel connections. Without explicit scope language assigning both the hardware and the wiring to one trade, each trade can legitimately exclude the item assuming the other covers it. Discovered during construction, this becomes a change order priced without competitive pressure — the same item that might cost $45,000 at tender can become a $75,000 change order in the field.',
        'The thermostat item is clearly within the electrical scope. "Low-voltage systems" is a standard industry term that encompasses all building automation and HVAC control wiring. The mechanical trade\'s responsibility ends at the HVAC equipment itself — all controls wiring, regardless of the equipment it serves, belongs to the electrical contractor.',
        'The thermostat item is clearly within the mechanical scope. Thermostats are integral components of the HVAC system the mechanical contractor is installing, and industry practice in Ontario assigns all controls associated with mechanical equipment to the mechanical trade regardless of the voltage level involved.',
        'The thermostat item is a scope gap only if the project uses a BAS (building automation system). For projects using individual suite thermostats without a central BAS, the item is too minor to represent a meaningful scope gap, and the construction manager can resolve it at the time of installation without a formal scope assignment or change order.'
      ],
      ans: 0,
      exp: [
        'Correct. The chapter\'s AE-7.3 solution identifies thermostat and zone control panels as a scope gap between mechanical and electrical precisely because the item spans both trades. The thermostats control mechanical HVAC equipment — suggesting mechanical scope — but require low-voltage electrical wiring — suggesting electrical involvement. Neither scope document addresses the interface explicitly. Without a pre-tender addendum assigning the full scope to one trade, both contractors can exclude the item. The cost consequence is significant: a competitively priced $45,000 scope item becomes a $75,000 change order when discovered during construction with no competitive pressure.',
        'Incorrect. "Low-voltage systems" in the electrical scope does not automatically capture all HVAC controls wiring. The mechanical scope\'s reference to HVAC systems creates an equally valid claim that thermostats — as direct controls for mechanical equipment — belong to the mechanical trade. The chapter treats this as a genuine ambiguity requiring explicit resolution, not a clear electrical assignment.',
        'Incorrect. Ontario industry practice does not uniformly assign all controls wiring to the mechanical trade regardless of voltage. The precise scope assignment depends on the tender documents — which in this scenario are ambiguous. The chapter\'s exercise treats this as a gap requiring a formal addendum, not a settled mechanical responsibility.',
        'Incorrect. The chapter does not distinguish between BAS and non-BAS projects in identifying this as a scope gap. Individual suite thermostats require low-voltage wiring and panel connections regardless of whether a central BAS is present. The scope gap exists at any scale — the financial consequence of an unresolved gap is material and requires a formal addendum before tender regardless of system complexity.'
      ]
    },

    // Q8 — correct: C (2)
    {
      q: 'After levelling, three CM proposals for a 28-storey tower show: Firm A at $13,475,000 (superintendent: 22 years high-rise, CPM schedule, $150M bonding, 4 comparable tower references); Firm B at $12,040,000 (superintendent: 8 years mid-rise, general phasing, $60M bonding, 1 comparable tower reference); Firm C at $12,590,000 (superintendent: 15 years high-rise, CPM schedule, $120M bonding, 3 comparable tower references). The developer\'s CFO argues Firm B should be selected on cost. What is the most defensible counter-position?',
      opts: [
        'Firm A represents the best value. On a complex 28-storey tower, the most experienced superintendent and the highest bonding capacity are the paramount selection criteria, and the additional $1,435,000 above Firm B is a justified premium for the risk reduction Firm A\'s credentials provide.',
        'The CFO is correct — after a rigorous levelling exercise, cost should be the tiebreaker. Firm B\'s general phasing methodology and mid-rise experience are concerns that can be mitigated by close developer oversight during construction, and the $550,000 saving against Firm C compounds positively across the project\'s return metrics.',
        'Firm C represents the best value. The $550,000 gap over Firm B is approximately 0.6% of a $95M project. Firm C\'s 15-year high-rise superintendent, CPM methodology, adequate bonding capacity, and three comparable references each represent financial risk reduction — a single month of schedule delay on a 30-month project generates carrying costs that dwarf the cost difference, making Firm C\'s qualitative advantages worth more than the apparent saving.',
        'Firm B should be selected but with a contractual requirement that they hire a more experienced superintendent before mobilization. Substituting a higher-calibre superintendent eliminates the primary qualitative concern while preserving the cost advantage, making Firm B the optimal selection once this condition is satisfied.'
      ],
      ans: 2,
      exp: [
        'Incorrect. The chapter does not suggest selecting the most expensive proposal as the default best value. Firm A\'s credentials are strong but the question is whether the additional $1,435,000 over Firm C is justified — and the chapter\'s AE-7.4 solution does not reach that conclusion. The balanced evaluation points to Firm C as the best value proposition.',
        'Incorrect. The chapter explicitly rejects the principle that cost should be the tiebreaker after levelling on a complex high-rise. Firm B\'s qualitative deficiencies — mid-rise experience, no CPM schedule, marginal bonding capacity, thin reference base — are not issues that developer oversight can adequately mitigate over 30 months of construction. These gaps generate compounding problems: RFI backlogs, subtrade management failures, and schedule drift.',
        'Correct. The chapter\'s AE-7.4 solution reaches this precise conclusion. After levelling, the $550,000 difference is 0.6% of the $95M hard cost budget. On a 30-month schedule, a single month of delay from inadequate site leadership costs more than that in carrying costs alone. Each of Firm C\'s qualitative advantages — superintendent experience relevant to a concrete high-rise, CPM capability, $120M bonding headroom (versus Firm B\'s marginal $60M), and three comparable references — represents real financial risk reduction that the cost difference does not justify sacrificing.',
        'Incorrect. Requiring a contractor to substitute a different superintendent before mobilization is not a reliable mitigation. The chapter specifically states that it is standard practice to require contractors to name their proposed superintendent in their bid and commit to keeping that individual on the project. A selection predicated on replacing the bid superintendent undermines the evaluation framework and may create disputes about what was represented at award.'
      ]
    },

    // Q9 — correct: D (3)
    {
      q: 'A builder\'s risk insurance certificate on a 30-storey rental tower expired 11 days ago. The project manager tells the Senior Analyst the renewal is "in process" and instructs them to proceed with the month-9 draw submission. The draw conditions checklist requires a current certificate naming the lender as additional insured. What is the correct response and why?',
      opts: [
        'Proceed with the draw submission and note the lapse in the cover letter. Construction lenders are experienced with brief insurance renewal gaps and routinely advance funds on projects in good standing, provided the renewal is confirmed before the following draw cycle. A 11-day gap is well within the tolerance lenders apply in practice.',
        'Proceed with the draw submission but instruct the CM to pause all high-risk work — formwork stripping, crane picks, and concrete pours — until the certificate is renewed. Limiting site activity to lower-risk operations during the gap period reduces the probability of an insured event occurring, making the submission defensible.',
        'Contact the lender before submitting to request a one-cycle waiver of the insurance condition. Lenders can grant administrative waivers for short-duration lapses when a renewal is clearly in process, and obtaining explicit lender consent converts the deficient submission into a compliant one.',
        'Do not submit the draw until a current certificate is in hand. The expired certificate means the project is currently uninsured against physical loss — fire, flood, wind, vandalism — and the lender\'s security interest in a potentially $30–50M partially constructed asset is unprotected. Submitting a draw package with a known condition deficiency is not a compliant submission, and the lender\'s draw conditions are contractual preconditions, not guidelines subject to informal tolerance.'
      ],
      ans: 3,
      exp: [
        'Incorrect. The chapter does not describe a lender tolerance window for insurance lapses. Builder\'s risk conditions are contractual preconditions to the advance obligation — a lender who advances anyway has not waived the condition for future draws. More critically, the project is genuinely uninsured during the gap, regardless of what the cover letter says.',
        'Incorrect. Restricting site activity to lower-risk work does not restore insurance coverage. The project remains uninsured against all categories of physical loss — including those unrelated to the restricted activities. Construction sites have continuous exposure across all insured perils; selective work restrictions are not a substitute for valid coverage.',
        'Incorrect. While engaging the lender is not wrong, characterising a waiver as converting a deficient submission into a compliant one is incorrect. Lenders do not have a standard practice of granting one-cycle insurance waivers. The chapter identifies maintaining a current builder\'s risk certificate as a standing, continuous condition — not an occasional compliance matter subject to discretionary waiver.',
        'Correct. The chapter is explicit: maintaining a current builder\'s risk certificate with the lender named as additional insured is a standing condition of the construction loan throughout the construction period. An 11-day lapse means the project is uninsured against physical loss during that period. In month 9 of a high-rise, work in place may represent $30–50M of unprotected value. The draw cannot be submitted until the certificate is current — obtaining it is a precondition to submission, not a parallel activity.'
      ]
    },

    // Q10 — correct: B (1)
    {
      q: 'Ontario\'s 2019 Construction Act amendments introduced prompt payment provisions requiring owners to pay contractors within 28 days of invoice, and contractors to pay subtrades within 7 days of receiving payment. A developer\'s internal draw cycle — package preparation, project manager review, lender site inspection, and advance processing — consistently takes 32–35 days from the CM\'s invoice. What is the legal exposure and what must the developer do?',
      opts: [
        'There is no legal exposure. The 28-day clock runs from the date the lender advances funds to the developer, not from the CM\'s invoice date. Since the developer pays the CM within 2–3 days of receiving the lender\'s advance, the statutory obligation is being met and the overall cycle length is irrelevant.',
        'The developer is in consistent breach of the Construction Act. The 28-day clock runs from the CM\'s invoice to the developer — the lender\'s processing time does not extend this window. The CM has statutory remedies including the right to suspend work after a prescribed notice period. The developer must restructure the draw cycle — through earlier package preparation, pre-cleared documentation, or coordinated inspection scheduling — to bring the advance within the 28-day window.',
        'The exposure is limited to a one-time administrative penalty assessed by the Ministry of Labour. The developer should register a prompt payment compliance plan with the ministry, which suspends the penalty during the improvement period and provides a formal framework for bringing the cycle within the statutory timeline.',
        'The 28-day prompt payment obligation applies only to trade contractor invoices — it does not apply to the CM management fee and general conditions billings under a CCDC 5A agreement, which are classified as professional services exempt from the prompt payment regime under the Construction Act\'s definitions.'
      ],
      ans: 1,
      exp: [
        'Incorrect. The chapter is explicit: the 28-day obligation runs from the owner receiving the contractor\'s invoice — not from when the lender advances funds to the developer. The developer is responsible for the full cycle time, including lender processing. If the CM invoices on day 1 and the developer advances on day 33, the developer is in breach regardless of the internal allocation of that 33-day period.',
        'Correct. The chapter identifies prompt payment as a statutory obligation creating a direct operational constraint on the draw cycle. A 32–35 day cycle is a consistent breach. The CM\'s statutory remedies include the right to suspend work after issuing a notice of non-payment — a risk the developer cannot dismiss. The correct response is structural: restructure the process so that from CM invoice receipt to advance payment, the total elapsed time is under 28 days. This may require earlier package preparation, coordinating the lender\'s inspection earlier in the cycle, or pre-clearing standard documentation.',
        'Incorrect. Prompt payment breaches under the Construction Act do not generate administrative penalties payable to the Ministry of Labour. The act creates private legal remedies — the contractor\'s right to dispute non-payment and to suspend work — not a regulatory penalty regime administered by a ministry. There is no compliance plan filing mechanism described in the chapter.',
        'Incorrect. The prompt payment provisions apply to all construction contracts under the Act — including CM agreements. The chapter makes no distinction between CM fee billings and trade invoices for prompt payment purposes. CM agreements are construction contracts under the Act, and all invoices under them are subject to the 28-day regime.'
      ]
    }

  ]
};
