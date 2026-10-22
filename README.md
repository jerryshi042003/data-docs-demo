# Data Docs — Systems explained

Five interactive stories about commission reporting, marketing audiences, CRM handoffs, authorized questions, and report lineage. Authored by Jerry Shi as an independent documentation demonstration.

All people, organizations, policies, rates, records, identifiers, and values are fictional. This project contains no employer source code, exports, credentials, or live integrations. It illustrates general patterns and makes no claim about any employer's current operational state or original system authorship.

## Run locally

Requires Node.js 20+ and Python 3.

```sh
npm test
npm run build
npm start
```

Open http://127.0.0.1:43861. Pages remain readable without JavaScript. Interactions run entirely in browser memory. No dependencies, analytics, cookies, network data calls, or external font requests are required.

`build.mjs` authors the five HTML stories. `dist/model.js` contains the illustrative contracts, `dist/app.js` connects controls to those contracts, and `dist/style.css` defines the shared reading layout. `tests/contracts.test.mjs` covers meaningful boundaries and retry behavior.

The commission example deliberately uses a per-allocation component deduction; it is not a financial recommendation or a real commission policy. Authorization is a teaching model, not production access control.
