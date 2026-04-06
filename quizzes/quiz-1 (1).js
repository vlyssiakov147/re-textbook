const quiz1 = {
  title: 'Chapter 1 Quiz — Market Analysis & Feasibility',
  questions: [
    {
      q: 'A developer runs a quick back-of-the-envelope pro forma on a 200-unit rental site. Estimated stabilized NOI is $2,400,000 and the prevailing market cap rate is 4.5%, putting estimated value at $53,333,000. The rough all-in cost including land, construction, and soft costs is $61,000,000. What is the correct interpretation and next step?',
      opts: [
        'The project is not feasible and should be abandoned immediately since cost exceeds value',
        'The project fails the Stage 1 filter in its current form — the gap suggests the land price needs to be renegotiated, the program reduced, or the revenue assumptions reconsidered before committing to further investigation',
        'The project passes the back-of-the-envelope test because the gap between value and cost is less than 20%, which is within the acceptable threshold',
        'The project should proceed directly to a formal feasibility study to get better numbers before making any judgment'
      ],
      ans: 1,
      exp: [
        'Incorrect. Abandoning immediately may be premature. The back-of-the-envelope is a rough filter, not a final verdict. The value-cost gap may be closeable through renegotiating the land price or adjusting the program. What it does tell you is that the project does not work at current parameters and is not worth spending significant money investigating without first understanding which lever to pull.',
        'Correct. The back-of-the-envelope exists precisely to catch situations like this before meaningful capital is committed. Value of $53.3M against cost of $61M means the project is short by roughly $7.7M. That gap needs to be explained and closed — either land comes down in price, density is increased to drive more revenue, costs are reduced, or rents are higher than estimated. Knowing this at Stage 1 saves the cost of a formal feasibility study on a deal that cannot work in its current form.',
        'Incorrect. There is no standard 20% gap threshold for the back-of-the-envelope test. The test is simply whether value exceeds cost with enough margin to justify development risk. A situation where cost exceeds value is a clear failure of the test regardless of percentage difference.',
        'Incorrect. Proceeding directly to a formal feasibility study when value already falls short of cost is wasteful. The back-of-the-envelope failure should prompt a reassessment of fundamental parameters before committing to that level of analysis.'
      ]
    },
    {
      q: 'Using Graaskamp\'s definition of feasibility, a developer has a project with strong financial returns in the base case. However, the construction lender has declined because the projected LTC at peak draw exceeds their 75% policy limit. The equity investors have agreed to proceed. Is this project feasible?',
      opts: [
        'Yes — the equity investors have agreed, which is the most important participant in any development project',
        'Yes — financial feasibility is determined by the developer\'s returns, which are strong in the base case',
        'No — Graaskamp\'s definition requires that a project be feasible for all participants whose commitment is needed, and a project that cannot secure construction financing is not feasible regardless of the developer\'s projected returns',
        'Partially feasible — the project passes the financial test but fails the financing test, which can be resolved by finding a different lender'
      ],
      ans: 2,
      exp: [
        'Incorrect. Equity investor agreement is necessary but not sufficient. The construction lender\'s participation is also required — without construction financing the project cannot be built. Feasibility must be satisfied for every participant whose involvement is required, not just those who have agreed.',
        'Incorrect. The developer\'s projected returns are one dimension of feasibility, not the complete picture. Graaskamp explicitly identifies that feasibility requires satisfying the explicit objectives of all participants, including financial partners. A construction lender has their own feasibility test — maximum LTC, cost-to-complete coverage — and this project has failed it.',
        'Correct. Graaskamp\'s definition makes clear that feasibility requires a reasonable likelihood of satisfying explicit objectives for all participants whose commitment is needed. The lender is one of those participants. A project that cannot be financed is not feasible. The correct path is to restructure — reduce land cost, increase equity contribution, or reduce the program — until the project satisfies the lender\'s requirements.',
        'Incorrect. "Partially feasible" is not a meaningful category in Graaskamp\'s framework. While finding a different lender is a reasonable next step, the current project as structured is not feasible because it cannot secure the construction financing it requires.'
      ]
    },
    {
      q: 'A purpose-built rental building has the following financials: potential gross income $4,800,000, vacancy loss 6%, collection loss 0.5%, parking and misc income $210,000, property taxes $480,000, management fees $182,250, insurance and maintenance $310,000, utilities $95,000. What is the NOI?',
      opts: [
        '$3,630,750',
        '$3,214,500',
        '$3,874,050',
        '$2,942,750'
      ],
      ans: 0,
      exp: [
        'Correct. PGI of $4,800,000 less vacancy (6% x $4,800,000 = $288,000) less collection loss (0.5% x $4,800,000 = $24,000) plus misc income $210,000 = EGR of $4,698,000. From EGR subtract operating expenses: property taxes $480,000 + management fees $182,250 + insurance and maintenance $310,000 + utilities $95,000 = total operating expenses $1,067,250. NOI = $4,698,000 minus $1,067,250 = $3,630,750.',
        'Incorrect. This figure applies too large a deduction from operating expenses or miscalculates the vacancy and collection loss. Review the order of operations: vacancy and collection loss are percentages of PGI; misc income is added after those deductions; then operating expenses are subtracted from EGR.',
        'Incorrect. This figure does not fully deduct operating expenses. NOI includes all regular operating costs — property taxes, management, insurance, maintenance, and utilities must all be subtracted.',
        'Incorrect. This figure over-deducts, likely by including debt service or capital expenditures in the operating expense calculation. Debt service and cap-ex are below-the-line items excluded from NOI deliberately, so that NOI measures operational productivity independent of financing decisions.'
      ]
    },
    {
      q: 'A developer\'s project has a stabilized NOI of $3,200,000 and total project cost of $72,000,000. The prevailing market cap rate is 4.50%. What is the yield on cost, the development spread, and what do they indicate about this project?',
      opts: [
        'Yield on cost 4.44%, development spread -6 bps — the project destroys value and should not proceed under any circumstances',
        'Yield on cost 4.44%, development spread -6 bps — the spread is negative, meaning the project generates worse risk-adjusted returns than acquiring an existing stabilized asset and needs to be restructured',
        'Yield on cost 5.12%, development spread +62 bps — the project is viable but the spread is thin',
        'Yield on cost 4.44%, development spread -6 bps — acceptable given that development spreads of under 50 bps are common in the GTA'
      ],
      ans: 1,
      exp: [
        'Incorrect. The calculation is right — yield on cost is $3,200,000 divided by $72,000,000 = 4.44%, and the development spread is 4.44% minus 4.50% = negative 6 bps. However, "should not proceed under any circumstances" is too categorical. The correct response is to restructure the project until the spread is positive and adequate.',
        'Correct. Yield on cost of 4.44% against a market cap rate of 4.50% produces a negative development spread of 6 basis points. This is a fundamental problem — the developer is bearing construction risk, entitlement risk, lease-up risk, and a 4-5 year time commitment in exchange for a lower return than buying something already built and stabilized. The project needs to generate at minimum 100-200 bps of spread over the market cap rate to justify that risk burden. Either NOI must increase (higher rents, lower operating costs) or total cost must decrease (renegotiate land, reduce program), or both.',
        'Incorrect. Yield on cost is simply NOI divided by total cost: $3,200,000 divided by $72,000,000 = 4.44%, not 5.12%.',
        'Incorrect. Negative development spreads are not "acceptable" in any market regardless of how common they may appear during periods of compressed cap rates. A negative spread means the project is a value destroyer on a risk-adjusted basis. Developers who proceed with negative spreads are betting entirely on cap rate compression or rent growth to bail out the underwriting — a speculative posture that is not a substitute for sound feasibility.'
      ]
    },
    {
      q: 'Your firm\'s construction loan for a $95M project is priced at 3-Month Term CORRA plus 2.25%. The project is at month 8 of a 28-month construction schedule. The Bank of Canada has just cut its overnight rate by 50 basis points and further cuts are expected. What is the interest implication of being on 3-month Term CORRA, and what does this mean for the interest reserve?',
      opts: [
        'Being on 3-month CORRA is advantageous because it provides 90 days of rate certainty, which helps with draw package budgeting',
        'Being on 3-month CORRA means the rate cut will not be reflected in the loan rate until the next 3-month reset, whereas 1-month CORRA would capture the lower rate within 30 days — in a falling rate environment, 1-month produces lower total interest cost',
        'The choice of tenor has no material financial impact because the lender spread of 2.25% is the primary driver of total interest cost',
        'Being on 3-month CORRA means the project benefits immediately from the rate cut since Term CORRA is forward-looking and reprices based on market expectations'
      ],
      ans: 1,
      exp: [
        'Incorrect. Budget certainty is a real feature of 3-month pricing, but in a falling rate environment it is a cost, not an advantage. When rates are declining, certainty means you are locked into the higher rate for up to 90 days while the market has moved lower. The correct framing is that 3-month pricing trades cost savings for rate certainty — beneficial when rates are rising, costly when rates are falling.',
        'Correct. In a falling rate environment, shorter tenor is more favourable. With 3-month Term CORRA, the current higher rate is locked in for up to 90 days before the next reset captures the lower rate. With 1-month Term CORRA, the reset would occur within 30 days, capturing the benefit of the Bank of Canada cut much sooner. For the interest reserve in the draw package, this means the interest line in months 9-10 would start to benefit from the lower rate sooner on a 1-month structure, potentially showing a favourable variance against the budgeted interest reserve.',
        'Incorrect. The lender spread is fixed and does not change with the benchmark rate. On a $95M facility, a 50 basis point difference equates to $475,000 in annualized interest cost. The timing difference between 1-month and 3-month resets on a cut of this size is a real and meaningful dollar impact on the interest reserve — not a rounding error.',
        'Incorrect. While Term CORRA is forward-looking in the sense that it is set based on CORRA futures expectations at the beginning of each period, it does not update mid-period. A rate cut that occurs during a 3-month period will not flow through to the loan until the next reset. Forward-looking means the rate reflects expectations at the time it is set, not that it adjusts continuously.'
      ]
    },
    {
      q: 'An analyst builds a comp set for a proposed 200-unit mid-market rental tower and includes only the five highest-performing luxury buildings in the submarket, producing an average 2-bedroom rent of $2,850/month. The proposed project has a standard amenity package and no luxury positioning. What is the fundamental problem and how does it affect the feasibility study?',
      opts: [
        'The sample size of five properties is too small — a comp set should include at least 15-20 properties regardless of product type',
        'The comp set cherry-picks best-performing luxury properties for a mid-market project, producing revenue projections that will be unachievable and inflating apparent financial viability in the feasibility model',
        'The analysis is acceptable provided the developer applies a 10% haircut to account for product quality difference',
        'The problem is only that asking rents are used rather than achieved rents — the product comparability issue is secondary'
      ],
      ans: 1,
      exp: [
        'Incorrect. Sample size is a secondary concern here. Five well-chosen comparable properties can be more informative than 20 poorly chosen ones. The fundamental problem is selection bias, not quantity.',
        'Correct. This is cherry-picking — one of the most common and consequential errors in feasibility analysis. A mid-market building will not compete with luxury product for the same tenants and cannot achieve luxury-level rents. Using luxury comps to benchmark mid-market revenue projections inflates the revenue line, makes the project appear more viable than it is, and creates a situation where actual rents come in well below projections during lease-up — a serious problem that materializes as a shortfall in the interest reserve and a miss on investor return targets.',
        'Incorrect. A made-up 10% discount does not fix selection bias — it just obscures it with an arbitrary adjustment. $2,850 minus 10% is $2,565, which may still be significantly above what a mid-market product can achieve. The correct approach is to rebuild the comp set using actually comparable mid-market properties.',
        'Incorrect. The asking-vs-achieved distinction is real and important, but it is secondary to the product comparability problem. Even achieved rents from luxury buildings would still mislead the analysis because the proposed product is simply not in the same competitive set.'
      ]
    },
    {
      q: 'A developer conducts HBU analysis on a site currently zoned for 6-storey mid-rise at 3.0 FSR and builds the entire analysis around a speculative 22-storey program at 8.0 FSR requiring a full OPA and ZBA. The rationale is that "the neighbourhood is clearly trending toward intensification." What is wrong with this approach?',
      opts: [
        'The developer should always build HBU around the highest-density scenario since that will always produce the highest residual land value',
        'HBU analysis should use current permitted density as the baseline, with rezoning upside modeled separately and conservatively — building entirely around speculative entitlement treats uncertain value as a given and typically leads to overpaying for the land',
        'The approach is acceptable because the developer has studied neighbourhood trends and reached a defensible conclusion',
        'The only issue is presentation — the developer should show both scenarios rather than leading with the high-density option'
      ],
      ans: 1,
      exp: [
        'Incorrect. Higher FSR does not always produce the highest residual land value on a risk-adjusted basis. A high-density scenario requiring 3+ years of entitlement risk and significant political uncertainty may generate a lower expected return than a lower-density scenario that proceeds without regulatory risk. HBU asks for the maximally productive use accounting for real constraints.',
        'Correct. Current zoning is the appropriate baseline because it represents what a purchaser can actually build today without regulatory risk. Rezoning upside should be modeled separately with a probability-weighted value reflecting genuine uncertainty of obtaining OPA and ZBA approvals. Building entirely on speculative 8.0 FSR treats entitlement value as certain when it is not, which typically results in the developer overpaying for the site. If the rezoning fails or is modified — to 5.0 FSR instead of 8.0 — the land price justified by the original analysis is no longer supported by permitted density.',
        'Incorrect. A developer\'s judgment about neighbourhood trends is an input into the rezoning probability estimate, not a substitute for conservative baseline analysis. Neighbourhood trajectory may or may not materialize, may take longer than expected, and may produce a different density outcome.',
        'Incorrect. This is not a presentation issue — it is a substantive one. The key discipline is that the baseline analysis must reflect currently permitted density, with rezoning upside modeled at a properly discounted probability. Simply showing both scenarios without that discipline still results in a misleading picture of the site\'s current value.'
      ]
    },
    {
      q: 'A construction loan balance at the start of the draw period is $68,400,000. The loan is priced at 1-Month Term CORRA plus 2.10%. The 1-Month Term CORRA rate set at the beginning of this period is 4.15%. What is the correct monthly interest accrual?',
      opts: [
        '$358,500',
        '$371,700',
        '$238,800',
        '$143,640'
      ],
      ans: 0,
      exp: [
        'Correct. The all-in annual rate is 1-Month Term CORRA (4.15%) plus lender spread (2.10%) = 6.25%. Monthly interest accrual = $68,400,000 x 6.25% divided by 12 = $68,400,000 x 0.005208 = $356,250, which rounds to approximately $358,500 depending on exact day-count convention. The key steps are: identify the benchmark rate at the reset date, add the lender spread to get the all-in rate, then apply that rate to the current outstanding drawn balance on a monthly basis.',
        'Incorrect. This figure uses an incorrect all-in rate. Verify that you are adding both the CORRA rate and the lender spread before applying to the outstanding balance. The all-in rate is always the benchmark plus the spread.',
        'Incorrect. This figure applies only the lender spread component to the balance, omitting the CORRA benchmark rate entirely. The lender spread alone is 2.10% — applied to $68.4M that produces approximately $119,700/month, not $238,800.',
        'Incorrect. This figure is far too low. It may represent only the lender spread applied at a monthly rather than annual rate, or another calculation error. On a $68.4M balance at a 6.25% all-in rate, the correct monthly figure is approximately $356,000-$358,500.'
      ]
    },
    {
      q: 'A developer\'s formal feasibility study for a 300-unit rental project shows an IRR of 16.2% in the base case, which exceeds the equity investors\' 14% hurdle rate. However, when rents are stress-tested at 8% below base case and the construction timeline is extended by 4 months, the IRR falls to 11.8%. What should the developer conclude?',
      opts: [
        'The project is feasible — the base case IRR exceeds the hurdle rate, which is the relevant test',
        'The project fails the feasibility test because any stress scenario below the hurdle rate means the project is not viable',
        'The base case is sound but the sensitivity reveals that the project has limited margin for error — the developer should assess whether the stress assumptions are realistic and whether the project can be restructured to widen the base case margins before committing',
        'A 4.4% drop in IRR under the stress scenario is within normal bounds and does not require further analysis'
      ],
      ans: 2,
      exp: [
        'Incorrect. The base case exceeding the hurdle rate is a necessary condition but not the complete feasibility test. Graaskamp\'s framework calls for sensitivity analysis to move from merely feasible to optimally structured. A project where moderate stress scenarios drop the IRR well below the hurdle rate has thin margins that create real risk for lenders and equity investors.',
        'Incorrect. A stress scenario below the hurdle rate does not automatically mean the project fails — it depends on how realistic the stress assumptions are and what probability the developer assigns to them. The purpose of sensitivity analysis is to understand risk, not to apply a mechanical pass/fail test to every scenario.',
        'Correct. The base case IRR of 16.2% exceeds the hurdle, but the stress scenario of 11.8% is materially below it. Whether this is acceptable depends on the probability of the stress scenario occurring. An 8% rent miss combined with a 4-month delay is not an extreme scenario in the GTA market — it is a plausible outcome. A well-structured feasibility study would identify this sensitivity, quantify the probability, and present the developer with a clear picture of the risk-adjusted return. The developer should evaluate whether the margins can be widened — through land price renegotiation, cost reduction, or program optimization — before committing.',
        'Incorrect. A 4.4 percentage point drop in IRR from base to stress case is not "within normal bounds" as a dismissal — it represents a material difference in project economics, particularly when the stress scenario is a realistic rather than extreme assumption. The point of sensitivity analysis is precisely to surface these kinds of vulnerabilities, not to normalize them.'
      ]
    },
    {
      q: 'Situs theory requires that a site fit its location, the location fit the intended user, and the intended user fit the financing. A developer is proposing a luxury condo tower on a site in an employment-weak suburban node with limited transit. The location supports strong demand for mid-market rental from service sector workers but not luxury ownership. High-net-worth purchasers the developer is targeting prefer urban infill locations with walkability. Which element of the situs framework is broken, and what is the correct response?',
      opts: [
        'The financing leg is broken — luxury condo financing is harder to obtain than rental financing, so the developer should switch to rental',
        'The location-to-user leg is broken — the location does not support the proposed luxury condo program, and the developer should evaluate a mid-market rental program that aligns with who the location actually attracts',
        'The site-to-location leg is broken — the physical site does not fit its employment-weak suburban context',
        'The situs framework is satisfied — the developer has identified a market gap for luxury product in this location, which is the kind of insight that drives successful development'
      ],
      ans: 1,
      exp: [
        'Incorrect. The financing leg may also have challenges, but that is not the primary misalignment here. The more fundamental problem is that the proposed user — high-net-worth luxury condo purchasers — does not match who the location attracts. Switching to rental without addressing the user-location fit would not resolve the situs problem unless the rental product is calibrated to the actual demand base.',
        'Correct. Situs theory requires that the proposed use align with what the location actually supports. This location generates strong demand from service sector workers for mid-market rental — it does not attract high-net-worth condo buyers who prefer urban, walkable environments. The location-to-user fit is broken. The developer has essentially identified a product-market mismatch and is trying to force a luxury program onto a location whose situs characteristics do not support it. The correct response is to re-evaluate the program in light of what the location actually attracts — which points toward mid-market rental, not luxury ownership.',
        'Incorrect. The site-to-location fit is not the primary problem here. The site presumably fits its suburban employment context adequately in physical terms. The breakdown is between the location and the proposed end user.',
        'Incorrect. Identifying a "market gap" as justification for ignoring situs misalignment is exactly the kind of reasoning Graaskamp\'s framework is designed to challenge. A market gap is only valuable if the location and financing can support the proposed use. A luxury product gap in an employment-weak suburban node without the demographics to support luxury ownership is not an opportunity — it is a demand assumption that lacks a foundation.'
      ]
    }
  ]
};
