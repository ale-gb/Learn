# Notes

## Workspace format (what makes this topic different)
- This is a **collection of single-focus lessons**, not a sequential track. Each lesson nails
  one foundational idea. Lessons can be added in any order, as curiosity dictates — often
  sparked by a question or a conversation the learner brings in. No warm-up sequence, no fixed
  syllabus. (Contrast: the sibling QFT workspace *is* a sequential build.)
- Lessons are numbered `0001`, `0002`, … in creation order, but the numbering implies no
  prerequisite ordering between them.

## Teaching preferences (same learner as the QFT workspace)
- **Concept-first, intuition-forward.** Lead with "why is the formalism forced," not recipe.
- **Assume the technical toolkit.** The learner commands density matrices, partial trace,
  entanglement, and decoherence (demonstrated — learning-record 0001). Use freely; don't
  re-teach. When a lesson needs one of these, reference rather than derive.
- **Rigor + honesty about what's open.** Foundations is interpretation-laden; separate physics
  from interpretation explicitly, and flag genuinely unsettled questions as such. The learner
  reasons independently and will catch hand-waving.
- **Open-ended lesson length**, one idea per lesson.

## Learner context
- Master's in theoretical physics; ~10 years since; job has no physics. Passion project.
- Reasons independently and enjoys pushing a line of argument to its logical wall (evidenced by
  the dialogue behind lesson 0001 — invented the "disjoint supports" objection, re-derived
  fringe visibility).

## Conventions
- Natural units \( \hbar = 1 \); explicit "system + environment" split (see GLOSSARY.md).
- Assets (style.css / quiz.js / math.js) shared from `assets/`; teal accent distinguishes this
  topic from QFT (violet) and RL (rust). Write math as \( \ldots \) and \[ \ldots \].

## Cross-topic bridges to make
- "System + environment / integrate out the environment" (here) == integrating out heavy or
  short-distance modes in QFT. Make this explicit when the QFT track reaches renormalization.

## Working notes
- Workspace created 2026-07-09, by promoting the decoherence lesson (originally written as a
  QFT "extra-curricular" lesson `x0001`) into the founding lesson `0001` of this dedicated topic.
- Lesson `0002` (einselection: why the pointer basis is position) written 2026-07-09 — covers the
  preferred-basis problem, the commutativity criterion, why interactions monitor position, the
  predictability sieve / coherent states, and the contingency caveat (energy/flux pointer bases).
  Two forward threads seeded in it: decoherence-vs-dissipation timescales, and quantum Darwinism.
- Candidate next lessons: quantum Darwinism (why observers agree on classical facts — flagged as
  the natural 0003); the Wigner's-friend no-go theorems; Bell nonlocality done carefully; what
  actually distinguishes Many-Worlds from Copenhagen operationally; objective-collapse tests.
