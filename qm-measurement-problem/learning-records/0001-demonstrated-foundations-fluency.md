# 0001 — Founding record: demonstrated fluency in QM foundations tooling

This workspace was created on 2026-07-09 to collect single-focus lessons on quantum
measurement and foundations. Its founding lesson (`0001`) was consolidated from a dialogue the
learner brought in; that dialogue is strong evidence of current fluency — genuine reasoning,
not just recognition — across the tooling this whole topic will lean on.

## What the learner demonstrably understands (from their own reasoning)
- **Density-matrix formalism:** pure vs mixed, coherences as off-diagonal terms, purity
  \( \mathrm{Tr}(\rho^2) \), expectation values via \( \mathrm{Tr}(\rho\hat O) \). Said the math
  "makes perfect sense"; wanted intuition, not mechanics.
- **Partial trace:** understood the uniqueness derivation (the operation reproducing local
  statistics) and the physical reading (ignoring \( B \) averages over it, turning entanglement
  into classical ignorance in \( A \)).
- **Decoherence:** entanglement + vanishing environment overlap \( (1-\epsilon)^N \to 0 \)
  giving an apparently-collapsed reduced density matrix.
- **Independent deductions** (the strongest signal): invented the "disjoint supports" objection
  and grasped why linearity / CPTP maps defeat it; independently reasoned that a visible
  interference pattern proves most electrons did *not* collapse — i.e. re-derived fringe
  visibility \( V = \gamma = 1-f \).
- Comfortable with entanglement, Wigner's friend, the quantum→classical transition, and the
  shape of the measurement problem (definite outcomes; Copenhagen vs Many-Worlds).

## Implications for teaching this topic
- **Do not re-teach the toolkit** (density matrices, partial trace, entanglement, decoherence).
  Use it as a shared language; reference lesson 0001 / the glossary when invoking it.
- Zone of proximal development is at the level of *interpretation, subtlety, and sharper
  foundational results* — e.g. explicit einselection and the pointer-basis question, the
  Wigner's-friend no-go theorems, Bell/nonlocality done carefully, objective-collapse tests.
- Lessons must be logically airtight and must separate physics from interpretation; the learner
  will spot and dislike any hand-waving or smuggled interpretation-as-fact.
- Curiosity-driven: expect future lessons to be prompted by specific questions the learner
  raises rather than by a syllabus. Meet the question asked, then place it in the wider map.

## Provenance note
The founding lesson previously lived in the QFT workspace as extra-curricular lesson `x0001`;
it was moved here (as `0001`) when this dedicated topic was created. The QFT workspace retains
a learning record noting the same demonstrated knowledge, because it informs QFT teaching too
(don't re-derive density matrices there either).
