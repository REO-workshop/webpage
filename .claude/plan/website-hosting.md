# REO-2 Website — Hosting Plan

## Recommendation

**GitHub Pages + a static template — specifically the `al-folio` / `academicpages`
style, or clone the TerraBytes site directly** (its source is public and MIT-ish
by convention). Reasons:

- Free, fast, versioned via git — matches how workshops actually iterate
  (announce dates → update speakers → post schedule).
- Custom domain support (e.g. `reo-workshop.github.io` or `reo-workshop.org`).
- The community references (TerraBytes, EarthVision, MORSE) all use GH Pages.
  Attendees expect this look; a Google Sites page reads as "provisional."
- Trivial handover: next year's organizers fork the repo, bump content, redeploy.

## Concrete options, ranked

1. **Fork TerraBytes and reskin (fastest, ~1 day).**
   Repo: https://github.com/terrabytes-workshop/terrabytes-workshop.github.io
   It's plain HTML + a bit of JS (countdown, nav). Swap logos, palette, content
   from `content/website.md`. Deploy under `reo-workshop.github.io`.
   Pros: proven look, minimal build system, no framework churn.
   Cons: hand-edit HTML; less structured for content updates.

2. **Jekyll `al-folio` template (~1-2 days).**
   Pros: markdown-native (paste sections from `website.md` almost verbatim),
   built-in support for people/schedule/news, easy dark mode, well-maintained.
   Cons: adds a Ruby toolchain locally (or rely on GH Actions build).

3. **Astro or Next.js static site (~2-3 days).**
   Pros: cleanest DX, componentized speakers/schedule.
   Cons: overkill for a single-page workshop site; more to maintain.

**My pick: option 1** — the visual bar is set by TerraBytes and copying that
template gets us there with the least yak-shaving. Move to Jekyll only if
future editions want a shared, evolving template across REO-N.

## Domain

- Free path: `reo-workshop.github.io` (owned by a `reo-workshop` GH org).
- Paid path: `reo-workshop.org` (~12 EUR/year) — worth it, survives edition
  changes and looks canonical in citations.

## Setup steps (option 1)

1. Create GH org `reo-workshop` (or use an existing one).
2. Create repo `reo-workshop.github.io`.
3. Clone TerraBytes source, strip their content, drop in ours from
   `content/website.md`. Update palette/logos.
4. Enable Pages on `main` branch, root.
5. (Optional) Point custom domain via CNAME record.
6. Add a `CNAME` file and enable HTTPS.

## What's in `content/website.md`

A single source-of-truth draft with all copy: hero, about, CFP, topics,
tracks, dates, speakers, schedule, organizers, PC, D&I, footer. Placeholders
`{{...}}` mark things needing confirmation (dates, contact email, submission
URL, sponsor logos).

## Open questions before build

- Confirm workshop email + mailing list.
- Confirm final workshop date once NeurIPS accepts.
- Confirm CMT link once created.
- Which sponsor logos to include (ESA definitely; IBM/TUM/ETH/... ?).
- Domain: stick with `github.io` subdomain or buy `reo-workshop.org`?
