---
name: Data Docs
description: Quiet architecture maps with inspectable synthetic systems examples.
colors:
  ink: "#17202a"
  muted: "#596571"
  line: "#e3e6e8"
  blue: "#2458d3"
  wash: "#eef3fd"
  paper: "#ffffff"
  success: "#236442"
  error: "#963c2f"
  map-blue: "#3474ba"
  map-wash: "#f4f8fc"
  map-boundary: "#b1c7dc"
  map-node-line: "#b9c7d4"
typography:
  headline:
    fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  title:
    fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0"
  body:
    fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  field: "5px"
  control: "6px"
  node: "6px"
  boundary: "8px"
  map-viewport: "7px"
  simulation: "12px"
spacing:
  compact: "8px"
  small: "12px"
  medium: "16px"
  inset: "22px"
  section: "26px"
components:
  button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 14px"
  button-hover:
    backgroundColor: "{colors.wash}"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "7px 9px"
    width: "100%"
  navigation-current:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.blue}"
    rounded: "{rounded.control}"
    padding: "9px 12px"
  system-boundary:
    backgroundColor: "{colors.map-wash}"
    rounded: "{rounded.boundary}"
  system-node:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.node}"
  simulation:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.simulation}"
---

# Design System: Data Docs

## Overview

**Creative North Star: "The Readable System"**

The accepted Shield architecture-map reference defines the quiet visual grammar: product logos, pale blue system boundaries containing white nodes, and labeled blue arrows. The white documentation canvas, blue top rule and story navigation remain. Short labels and compact typography give the map most of the space; ownership and access explanations open on demand.

Each of the five public stories remains a fictional, synthetic example. Actual business maps belong in separate private DataDocs surfaces. Reusing the visual grammar does not make the public examples a record of real business systems.

**Key Characteristics:**

- Product logos identify systems; nested boundaries express system containment.
- Labeled blue arrows expose handoffs, independent routes and return paths.
- Compact headings and short labels keep prose secondary to the map.
- Native controls and disclosures retain inspectable examples and accessible detail.

## Colors

Cool neutrals and pale blue boundaries keep the diagrams quiet. The existing interaction blue remains for navigation and controls; the map uses its own softer blue for arrows and node focus.

- **Interaction blue:** links, keyboard focus, active navigation and the top rule.
- **Map blue and map wash:** directional connections and contained system regions.
- **Map boundary and node line:** thin strokes distinguish containers from their white nodes.
- **Paper, ink, muted and line:** reading canvas, explanatory text and separators.
- **Success green and error red:** simulation outcomes accompanied by text.

**The Text Before Color Rule.** Every outcome remains understandable without its color.

## Typography

The page uses the existing Inter-first sans-serif stack with native system fallbacks. Inter is not bundled or fetched. The SVG renderer currently uses Arial with a sans-serif fallback; this is an implementation difference, not a second brand voice. Code retains the browser's monospace default.

Frontmatter records the page headline, section title, prose and control-label roles. Subheadings use 16px with a 1.4 line height. Headings, emphasis, buttons and current navigation use weight 500; ordinary prose and most labels use 400. The root still defaults to 16px, while paragraphs, lead copy and control labels explicitly use 15px. Checkbox labels retain weight 500 through their more specific existing selector. Main section and owner-detail prose allow up to 75ch; other paragraphs retain 72ch.

SVG title labels use 17px/500, node copy 14px, arrow labels 13px and workbook samples 12px in viewBox units. The diagram scales with its viewport; these are source units rather than guaranteed rendered pixel sizes. At 760px and below the page headline becomes 22px; section titles remain 18px. Reference-section headings retain 17px, and the outer supporting-detail summary retains its existing 16px rule.

**The Quiet Hierarchy Rule.** Use the compact heading scale and short labels; do not introduce oversized titles or additional weight tiers to compete with the map.

## Layout

The desktop shell and header are capped at 1500px. The shell has a 175px story rail and a flexible main column, separated by 34px; there is no visible contents rail. Desktop side padding remains 24px. The header retains its 3px blue top rule, 57px inner row and bottom divider. At 1000px and below, the story rail becomes 150px and the gap 22px. At 760px and below, the shell becomes one column with 16px side padding and a mobile navigation toggle. Wide screens retain the existing 48px shell top padding.

The map appears before the example, followed by an ownership/access disclosure. The example remains visible; rules and supporting material sit in a separate native disclosure. Sections use a 26px top margin and 20px top padding with thin separators.

The diagram retains its spatial arrangement on phones. Its inner viewport scrolls horizontally and the SVG has a minimum width of 850px. The surrounding page stays within the screen; map nodes do not become a stacked card list. The viewport can receive keyboard focus and carries a horizontal-scroll label.

## Elevation & Depth

Maps are flat. Pale system regions, thin boundary strokes and white nodes express containment without shadows. Only the search-results overlay uses the established shadow (`0 8px 24px #17202a15`).

## Shapes

System boundaries have gently curved corners (8px), white SVG nodes use 6px corners, and the outer scrolling viewport uses 7px corners. The renderer uses thin 1.4-unit boundary/node strokes and 1.8-unit arrow strokes. Fields, buttons and simulation frames retain their existing compact radius scale.

**The Containment Rule.** Nested boxes are a deliberate exception to the generic nested-card ban: they encode system containment in the architecture map, not decorative card hierarchy.

## Components

- **Architecture map:** real product logo assets identify named products. Pale blue group boundaries contain white nodes. Blue arrows carry concise handoff labels, with distinct return and parallel paths where the example requires them. Dashed strokes represent a proposed boundary or an explicitly dashed connection only when the graph data marks it.
- **System detail:** each SVG node links to a matching native disclosure. Its accessible title names the system; detail text explains the handoff and includes owner/access fields where supplied. The map remains readable before details are opened. Hover and keyboard focus strengthen the node's blue stroke.
- **Navigation and search:** direct story links use muted text, a pale active background and modest weight. Search remains a bordered overlay; the mobile menu is labeled. No visible contents rail competes with the diagram.
- **Controls and simulations:** native number fields, selects, checkboxes and compact buttons retain the synthetic examples. The question selector spans the controls row. Buttons use the selection wash on hover, clear keyboard focus and reduced opacity when disabled. Result emphasis is restrained; state remains text-labeled.
- **Supporting disclosure:** native details and summary elements hide secondary prose. Thin dividers preserve the documentation rhythm without adding another card surface.

Smooth anchor scrolling and the existing 350ms ease-out result flash remain the only stylesheet motion patterns. Reduced-motion preferences remove them. Static stories and disclosures remain readable without JavaScript; simulation controls need JavaScript.

## Do's and Don'ts

### Do

- Do preserve the accepted Shield map grammar: product logos, pale blue containment and labeled blue arrows.
- Do keep the map wide, labels short and headings modest.
- Do reveal ownership and access through linked details while keeping the system path visible.
- Do preserve independent release/data routes and explicit return paths.
- Do keep the five public stories synthetic and actual business maps separate in private DataDocs.

### Don't

- Don't replace the architecture map with a card grid or stacked mobile cards.
- Don't use decorative imagery, extra weight tiers or prose-heavy nodes to compete with the map.
- Don't remove nested system boundaries under a generic nested-card prohibition.
- Don't treat product logos or the shared visual grammar as evidence that a synthetic map describes a real business system.
