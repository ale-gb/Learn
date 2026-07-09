# Notes

## Teaching preferences
- **Concept-first, always.** Lead with intuition and the conceptual "what is really
  going on." Walk through derivations when they illuminate; offer heavy calculation
  as *optional depth*, never as a gate to progress. Priority order: conceptual
  mastery ≫ Standard Model ≫ reading the masters ≫ computing things.
- **Rigor paired with intuition.** For every mechanism, give both the "how" and the
  "why it makes sense." A derivation without its motivating idea counts as a miss.
- **Dedicated warm-up first.** Spend the opening lessons deliberately rebuilding
  prerequisites (least action / Lagrangian & Hamiltonian mechanics; special
  relativity + covariant index notation; the quantum harmonic oscillator and QM
  essentials) before entering QFT proper.
- **Open-ended lesson length**, but still one tightly-scoped idea per lesson.
- **Strong-but-rusty foundation:** treat the theoretical-physics background as real
  but needing re-activation — re-anchor prerequisites, don't silently assume them,
  and don't re-teach them from zero either.

## Learner context
- Master's in theoretical physics; ~10 years since graduation; one (bad) QFT course.
- Current job involves no physics. This is a passion project — no deadline, no exam,
  no career driver. Understanding for its own sake is the whole point.

## Conventions locked in
- Mostly-minus metric \( (+,-,-,-) \); natural units \( \hbar = c = 1 \). (See GLOSSARY.md.)
- Anchor text: **Tong's QFT notes** for the foundations arc; **Zee** for extra
  intuition; **Schwartz** for the Standard Model arc; **Peskin** as the computational
  reference; **Weinberg/Coleman** for deepest "why."

## Working notes
- Workspace created 2026-07-06.
- Lesson 0001 (orientation: why QFT had to exist) written first; it also lays out the
  warm-up roadmap so the user can see the path. Next planned: warm-up I — the
  principle of least action / Lagrangian mechanics.
- 2026-07-09: a decoherence / measurement-problem lesson was briefly written here as an
  "extra-curricular" lesson, then promoted into its own dedicated sibling topic,
  `qm-measurement-problem/` (a collection of single-focus QM-foundations lessons). QFT
  lessons stay on the main sequential track; foundations excursions live in that sibling
  topic now, not here.
- That excursion still informs QFT teaching: the user demonstrated strong fluency with
  density matrices, partial trace, and decoherence (see learning-record 0002). Do not
  re-teach those; use them as tools. Bridge to make later: "system + environment /
  integrate out" == integrating out heavy/short-distance modes in QFT (flag when we reach RG).
