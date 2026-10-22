---
name: Data Docs
description: Restrained documentation with inspectable systems examples.
colors:
  ink: "#17202a"
  muted: "#596571"
  line: "#e3e6e8"
  blue: "#2458d3"
  wash: "#eef3fd"
  paper: "#ffffff"
  success: "#236442"
  error: "#963c2f"
typography:
  headline:
    fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "38px"
    fontWeight: 730
    lineHeight: 1.16
    letterSpacing: "-0.035em"
  title:
    fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "25px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.65
rounded:
  field: "5px"
  control: "6px"
  node: "8px"
  simulation: "12px"
spacing:
  compact: "8px"
  small: "12px"
  medium: "16px"
  inset: "22px"
  section: "24px"
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
  simulation:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.simulation}"
---

# Design System: Data Docs

## Overview

**Creative North Star: "The Readable System"**

Read mode preserves the established white documentation canvas, blue top rule, persistent navigation and modest headings. The visual character is quiet, compact and explanatory. Text, controls and directional diagrams carry the work; decorative imagery is absent.

A reader can change one input and inspect the result beside its explanation. Native controls and disclosures keep the page familiar, while static text keeps each story readable without JavaScript.

**Key Characteristics:**

- White surfaces with neutral dividers and restrained blue interaction cues.
- One sans-serif reading family with compact headings and readable body text.
- Visible inputs, intermediate values, outcomes and text-labeled states.

## Colors

The palette uses cool neutrals for reading and one clear blue for interaction. Frontmatter values are normative and correspond to the stylesheet's named custom properties.

- **Interaction blue:** links, keyboard focus, active navigation and the top rule.
- **Selection wash:** the active navigation item, highlighted result and button hover.
- **Paper, ink, muted and line:** white canvas, primary text, supporting text and thin boundaries.
- **Success green and error red:** semantic outcomes, always accompanied by text.

**The Text Before Color Rule.** Every outcome remains understandable without its color.

## Typography

The sans-serif stack begins with Inter and falls back to native system fonts. The site does not bundle or fetch Inter; its actual rendered family depends on local availability. Code uses the browser's monospace default.

Frontmatter defines the desktop headline, section title, body and form label roles. Subheadings use 18px/1.4. Supporting copy is generally 13–15px; the lead is 17px. Paragraphs stop at 72ch. Result numbers use stronger weight; receipts and summary values use tabular numerals. At 760px and below, the page headline becomes 30px, section titles 23px and lead text 16px.

## Layout

The desktop shell is capped at 1336px with 24px side padding, a 216px story rail, an article track up to 760px, a 160px contents rail and 42px gaps. The sticky header has a 3px blue top rule, a 57px inner row and a 1px bottom border. Story navigation and contents stay visible during desktop reading.

At 1150px and below, the contents rail disappears and the story rail becomes 190px with a 32px gap. At 760px and below, the page becomes one column with 20px side padding; JavaScript enables a menu toggle, while navigation remains readable without JavaScript. At 380px and below, side padding becomes 16px. At 1500px and above, the shell's top padding increases from 38px to 48px.

Sections use generous vertical separation and thin top rules. Simulation controls wrap. The question selector occupies a full row. Process sequences stack vertically on phones; lineage paths remain distinct before they meet at the visible report.

## Elevation & Depth

Surfaces are flat, separated by thin borders and pale fills. Only search results use a shadow (`0 8px 24px #17202a15`) to identify an overlay. No decorative elevation is applied to diagrams or simulations.

## Shapes

The radius scale distinguishes small fields, controls, diagram nodes and simulation containers. Borders are generally 1px. Step numbers are circles. Tables and section dividers remain straight and unobtrusive.

## Components

- **Buttons:** white, ink text, a gray border and compact padding; hover uses the selection wash and blue border. Disabled buttons have half opacity. Keyboard focus uses a 3px blue outline with a 3px offset.
- **Fields:** native number inputs, selects and checkboxes. Fields fill their label width; labels sit above selects and number inputs. The commission payment field visibly names and enforces its $30–$600 range. The question selector spans the controls row.
- **Navigation and search:** muted story links become blue on a pale active background. Story and section links retain direct URLs. Search uses a pale input and a bordered result overlay. Mobile navigation is controlled by a labeled menu button.
- **Simulation containers:** rounded bordered frames combine a pale control band, readable result area and summary strip. Calculation steps expose intermediate values; receipts align labels and values; query examples pair an answer with applied scope.
- **Directional diagrams:** neutral bordered nodes use arrows to express sequence. The marketing loop adds an explicit return path. Release and data paths are independent lanes that meet at the report; they are never drawn as one serial pipeline.
- **Disclosure:** native details and summary elements hold optional explanations behind a thin top divider. Essential system steps remain visible.

Smooth anchor scrolling and a 350ms ease-out background flash are the only motion patterns in the stylesheet. Reduced-motion preferences remove them. The no-JavaScript notice explains that stories remain readable while interactive controls require JavaScript.

## Do's and Don'ts

### Do

- Do preserve the white reading canvas, blue top rule and persistent story navigation.
- Do place explanations beside results and label every state in text.
- Do keep native controls, keyboard focus and readable no-JavaScript content.
- Do adapt directional diagrams to the available width without merging independent paths.

### Don't

- Don't replace the documentation layout with a slide deck, modal sequence or unrelated card grid.
- Don't use decorative imagery or color alone to explain a state.
- Don't compress the question selector or hide essential system steps inside disclosures.
