const quiz1 = {
  title: 'Chapter 1 Quiz — Market Analysis & Feasibility',
  questions: [
    {
      q: 'A submarket has 2.8% vacancy and rents rising 9% year-over-year. A developer concludes this confirms a strong development opportunity. What is the critical flaw?',
      opts: [
        'Strong demand indicators still require a feasibility analysis to confirm the project can be built profitably',
        'Vacancy below 3% signals the market is too tight and new supply would destabilize rents',
        'Rising rents indicate a market peak — the project will likely deliver into a correction',
        'Vacancy and rent data are sufficient to confirm viability once zoning is verified'
      ],
      ans: 0,
      exp: [
        'Correct. Market indicators confirm demand exists but say nothing about whether the project pencils financially. Land cost, construction costs, and municipal fees all determine viability independently of market strength.',
        'Incorrect. Low vacancy is a positive demand signal, not a reason to pause. Developers actively target sub-3% vacancy markets — that is the condition that justifies building.',
        'Incorrect. Rising rents are a positive signal. There is no rule that rent growth predicts an imminent correction — this logic would prevent development in any strong market.',
        'Incorrect. Vacancy and rent data establish the demand case only. A project can be zoned correctly and still fail to pencil if costs outpace achievable rents.'
      ]
    },
    {
      q: 'A market shows gross absorption of 50,000 sf/month but net absorption of only 5,000 sf/month. What does this most likely indicate?',
      opts: [
        'The data is inconsistent — gross and net absorption should be within 10% of each other',
        'Most leasing activity reflects tenants relocating between buildings, not genuine market expansion',
        'Net absorption excludes sublease transactions, which explains the gap',
        'The market is growing strongly — gross absorption is the more reliable demand measure'
      ],
      ans: 1,
      exp: [
        'Incorrect. A large gap between gross and net absorption is not a data error — it is a common and meaningful signal. It indicates high tenant turnover or flight-to-quality dynamics where vacated space offsets new leasing.',
        'Correct. When gross absorption far exceeds net absorption, tenants are moving between buildings rather than expanding. The space vacated in older buildings offsets new leasing in newer ones, resulting in minimal true demand growth.',
        'Incorrect. Sublease transactions may be tracked separately but are not the standard explanation for this gap. The distinction between gross and net absorption is about vacated space, not transaction type.',
        'Incorrect. Gross absorption overstates demand growth when high tenant turnover is occurring. Net absorption — which subtracts vacated space — is the more meaningful measure of genuine market expansion.'
      ]
    },
    {
      q: 'Your 240-unit building is one of four projects delivering simultaneously, totalling 600 new units. The submarket absorbs 80 units/month. How long should you model for lease-up to 95% occupancy?',
      opts: [
        'About 3 months, since the market absorbs 80 units/month and your building is 240 units',
        'About 10 to 12 months, based on capturing a proportional share of monthly absorption',
        'About 7 months, since 600 units divided by 80 units/month gives the full market absorption period',
        'About 24 months, to apply a conservative buffer given the competitive supply environment'
      ],
      ans: 1,
      exp: [
        'Incorrect. Dividing your unit count by total market absorption assumes your project captures 100% of monthly demand — ignoring the three competing projects. Market absorption is shared across all competing supply.',
        'Correct. With four projects sharing 80 units/month of absorption, your project captures roughly 32 units/month (40% of supply). Reaching 95% occupancy — 228 units — takes approximately 7 months at that rate, with 10-12 months being the appropriate conservative modeling range.',
        'Incorrect. 7-8 months is the time for the entire market to absorb all 600 new units — not the time for your specific building. Your 40% share of supply means your lease-up extends beyond the total market absorption period.',
        'Incorrect. 24 months is overly pessimistic without evidence of a competitive disadvantage. At a 40% supply share of an 80-unit/month market, 24 months would imply absorbing fewer than 10 units/month — unsupported by the market data given.'
      ]
    },
    {
      q: 'A developer begins HBU analysis by calculating the residual land value for residential use, even though the site is zoned commercial. What is wrong with this approach?',
      opts: [
        'Residual land value is not a valid HBU method — comparable sales should be used instead',
        'The developer should start with maximal productivity, then test feasibility and permissibility',
        'Financial feasibility must follow physical and legal confirmation, not precede it',
        'HBU analysis only applies to unzoned greenfield sites, not sites with existing zoning'
      ],
      ans: 2,
      exp: [
        'Incorrect. Residual land value is a standard and widely accepted method for HBU analysis. The problem is not the tool — it is the sequence in which the analysis is being conducted.',
        'Incorrect. Maximal productivity is the final step of HBU, not the starting point. Beginning with the highest-value use before filtering for what is possible and permitted produces a result that may be unachievable.',
        'Correct. The HBU sequence is: physically possible, legally permissible, financially feasible, maximally productive. Testing financial feasibility for residential before confirming rezoning is achievable means modeling returns for a use that may never be approved.',
        'Incorrect. HBU analysis applies to all sites regardless of current zoning. It is especially important for sites where a developer believes a higher-value alternative use may be possible through rezoning.'
      ]
    },
    {
      q: 'A project has stabilized NOI of $3,200,000 and total project cost of $52,000,000. The market cap rate is 4.75%. What is the development spread?',
      opts: [
        'The spread is 1.40%, calculated as yield on cost of 6.15% minus the market cap rate of 4.75%',
        'The spread is 4.75%, equal to the market cap rate since no premium has been established yet',
        'The spread is 6.15%, which is the yield on cost before adjusting for leverage',
        'The spread cannot be determined without knowing the equity IRR and hold period'
      ],
      ans: 0,
      exp: [
        'Correct. Yield on cost = $3.2M / $52M = 6.15%. Development spread = 6.15% minus 4.75% = 1.40% or 140 basis points. A positive spread confirms the project builds value above what the stabilized asset would trade for in the market.',
        'Incorrect. The market cap rate is one input into the spread calculation, not the spread itself. The spread measures the premium above the cap rate that the developer earns for taking development risk.',
        'Incorrect. 6.15% is the yield on cost — the numerator of the spread calculation. The spread is the difference between yield on cost and the cap rate, not the yield on cost itself.',
        'Incorrect. Development spread requires only NOI, total project cost, and market cap rate. IRR and hold period are relevant to equity return analysis but are not needed to calculate development spread.'
      ]
    },
    {
      q: 'Your comp analysis shows a rent range of $2,100 to $2,900/month across 9 comparables. You propose $2,750/month. A lender asks you to justify this positioning. Which response is most defensible?',
      opts: [
        'The $2,750 figure is below the top of the range, which demonstrates we are not being aggressive',
        'The average of all nine comps is $2,500/month, so $2,750 is only 10% above average which is within a standard market adjustment',
        'Rental rates are projected to grow 5% annually, so $2,750 reflects forward-looking market pricing rather than current comparables',
        'Three of the nine comps achieved $2,750 or above, and our project matches their vintage, transit access, and amenity level'
      ],
      ans: 3,
      exp: [
        'Incorrect. Being below the ceiling is not a justification — it just confirms you are not at the extreme. The lender wants to know why your project warrants upper-mid positioning, not simply that you avoided the top.',
        'Incorrect. Framing a 10% premium over the average as a standard adjustment does not explain why your project merits above-average pricing. A lender needs a reason, not a characterization of the gap as acceptable.',
        'Incorrect. Positioning based on forward rent growth projections uses unconfirmed future assumptions rather than current market evidence. Current comps must support the base rent — growth projections belong in the cash flow model, not the rent justification.',
        'Correct. This response identifies which specific comps support the $2,750 figure, explains the attributes that justify the positioning, and implicitly acknowledges the full comp set. It shows analytical rigor and gives the lender a basis to evaluate the assumption independently.'
      ]
    },
    {
      q: 'Site A has a residual land value of $14M under current zoning. Site B is worth $9M as-is but $18M if rezoning succeeds — a 60% probability. Which offers better risk-adjusted value?',
      opts: [
        'Site B, because $18M exceeds $14M and the rezoning probability is above 50%',
        'Site A, because certainty always outweighs upside potential in development land acquisition',
        'Site B, because its expected value of $14.4M marginally exceeds Site A — though the advantage is slim given execution risk',
        'Site A, because rezoning timelines make Site B financially equivalent once time value is applied'
      ],
      ans: 2,
      exp: [
        'Incorrect. Comparing only the upside scenario ignores the 40% probability the rezoning fails and Site B is worth $9M. Expected value must account for both outcomes.',
        'Incorrect. Certainty is valuable but does not automatically outweigh upside. The correct approach is to quantify the risk-adjusted value of both options before concluding which is superior.',
        'Correct. Site B expected value = (60% x $18M) + (40% x $9M) = $14.4M, marginally above Site A at $14M. However the advantage is thin given rezoning risk and timeline uncertainty — a developer would likely need to pay no more than $9M to protect the downside, making Site A more compelling in practice.',
        'Incorrect. Time value is a real consideration but is not the primary basis for comparing the two sites. The expected value analysis is the correct starting framework, and timeline risk is a secondary consideration on top of that.'
      ]
    },
    {
      q: 'A developer presents a feasibility study showing 22% IRR to equity partners but has not prepared sensitivity analysis. An equity partner asks what happens if rents are 10% lower and costs run 8% over simultaneously. What does the absence of this analysis reveal?',
      opts: [
        'The base case IRR has not been stress-tested, so the true risk profile of the investment is unknown',
        'The developer is appropriately focused on the base case — downside scenarios are the lender concern',
        'A 22% base case provides sufficient buffer — the stressed IRR will likely remain acceptable',
        'Simultaneous cost overruns and revenue shortfalls are too unlikely to require formal modeling'
      ],
      ans: 0,
      exp: [
        'Correct. Without sensitivity analysis, no one in the room — including the developer — knows whether the 22% IRR holds under realistic stress. A 22% base case with a 5% stressed IRR is a fundamentally different investment than one that holds at 16%. Equity cannot properly assess risk without this analysis.',
        'Incorrect. Sensitivity analysis is a developer responsibility, not a lender function. Equity partners specifically need downside scenarios to assess whether the return profile justifies the risk they are being asked to take.',
        'Incorrect. The adequacy of the buffer cannot be assumed — it depends on cost structure, leverage, and timeline, none of which can be assessed without running the stressed scenario.',
        'Incorrect. Simultaneous cost overruns and revenue shortfalls are among the most common development outcomes — both tend to occur in the same deteriorating macro environment.'
      ]
    },
    {
      q: 'A mixed-use project has strong residential demand. The developer models retail at $45/sf net rent based on one comparable lease signed 14 months ago. What is the most significant weakness?',
      opts: [
        'A single comp is statistically insufficient — retail analysis requires a minimum of five comparables',
        'The lease is 14 months old and must be excluded — only comps within 12 months are acceptable',
        'Retail demand has its own supply dynamics and drivers — one dated comp does not establish submarket viability',
        'Ground-floor retail in mixed-use buildings always achieves below-market rents due to limited frontage'
      ],
      ans: 2,
      exp: [
        'Incorrect. There is no minimum number of comparables required. One well-chosen recent comp can be more defensible than five poorly selected ones. The issue is not the count — it is the lack of demand analysis.',
        'Incorrect. There is no hard rule excluding comps older than 12 months. Older comps can still be relevant, particularly in markets with limited new leasing activity. They should be flagged, not automatically excluded.',
        'Correct. Retail demand is driven by trade area spending capacity, foot traffic, and competitive supply — none of which are captured in a single dated lease. One comp establishes a price point but says nothing about whether the submarket can absorb new retail supply at all.',
        'Incorrect. Ground-floor retail does not systematically achieve below-market rents. In high-density locations the residential population above can support premium retail pricing. Performance depends on location and trade area, not building type.'
      ]
    },
    {
      q: 'A developer uses 2021 construction cost benchmarks in a current feasibility study. Current costs are 35% higher. They argue the market will correct. What is the core risk?',
      opts: [
        'Understated costs inflate the projected margin, causing the developer to justify a land price the project cannot support at current economics',
        'The contingency reserve will be insufficient, requiring a future equity top-up to complete the project',
        'The lender will reject the feasibility study and require a quantity surveyor report before advancing funds',
        'Using outdated benchmarks violates the development firm duty of care to its equity investors'
      ],
      ans: 0,
      exp: [
        'Correct. Understating construction costs by 35% makes the profit margin appear higher than it is, which in turn justifies paying more for land. A developer who acquires a site at a price only supported by 2021 costs may find the project unviable once current costs are applied — one of the most documented causes of project cancellations in the 2022-2024 period.',
        'Incorrect. Contingency adequacy is a separate issue. The core risk is not project completion — it is overpaying for land based on a cost estimate that does not reflect current market reality.',
        'Incorrect. Lender pushback is a consequence of submitting a weak analysis, not the primary risk. Even if a lender accepted the 2021 benchmarks, the developer would still be making a flawed land acquisition decision.',
        'Incorrect. Using outdated benchmarks is an analytical error and a business risk — it is not a legal duty of care violation in the standard sense. The risk is financial, not fiduciary.'
      ]
    }
  ]
};
