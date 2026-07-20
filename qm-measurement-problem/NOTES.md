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
- Lesson `0003` (where observables come from) written 2026-07-11 from a learner question about
  why angular-momentum *components* are observables but the *magnitude* seemingly isn't. Core:
  observables = self-adjoint generators of the symmetry group; \( \hat J^2 \) IS an observable
  (the Casimir) but a *label* of the irrep, fixed for an elementary particle's spin; capstone is
  Wigner's classification (particles = Poincaré irreps labeled by mass & spin Casimirs). Gently
  corrected the premise (magnitude² is observable). Note: this learner enjoys the symmetry/
  representation-theory angle — good vein to mine.
- Lesson `0004` (quantum Darwinism) written 2026-07-11 — the promised sequel to 0002. Objectivity
  = redundancy: the environment broadcasts many copies of the pointer observable; the information
  plateau & \( R_\delta \); no-cloning ⇒ only one objective basis; honest boundary (agreement, not
  definite outcomes — same limit as 0001). Experiments (Unden NV centers, Ciampini photonic).
- Lesson `0005` (why QM needs complex numbers) written 2026-07-11 from a rich conversation, at
  three depths: (I) Stern–Gerlach/MUBs + real-symmetric operators can't carry su(2); (II) why not
  \( \mathbb R^{2N} \) — Stone (observable=generator), commutator/Kähler, local tomography +
  \( \sigma_y\otimes\sigma_y \) + Renou 2021 experiment (with the honest tensor-product caveat and
  the 2025 debate); (III) Jordan–Lie → \( i \) via associativity+positivity, and GNS. Double-checked
  all statements (MUB counts, 10 vs 9 observable counting, κ²<0). Verified refs: Baez 1101.5690,
  Renou Nature 2021, Landsman, Strocchi, Stueckelberg 1960.
- Lesson `0006` (why every operator is linear except time reversal) written 2026-07-11 from a
  Sakurai margin question. Linearity = superposition axiom; the loophole is that symmetries need only
  preserve \( |\langle\cdot|\cdot\rangle|^2 \), so Wigner's theorem allows unitary OR antiunitary;
  continuous symmetries must be unitary; T is forced antiunitary (commutator argument + the
  energy-spectrum argument: a linear T needs \( H\to-H \), no ground state). \( \Theta=UK \),
  \( \Theta^2=(-1)^{2j} \), Kramers. Deliberately linked to 0005 (T conjugates the \( i \)). All
  statements double-checked (incl. \( \Theta^2=-1 \) for spin-½).
- Lesson `0007` (Lüders' rule) written 2026-07-12. Context (von Neumann's degenerate gap) → the rule
  (selective P_k rho P_k / Tr, non-selective sum P_k rho P_k) → justification at 3 levels (minimal
  disturbance + repeatability + the non-disturbance theorem; the unitary measurement-model derivation
  U=sum P_k ⊗ V_k, which ties to decoherence lesson 0001; conditional-state reading) → experiment
  (repeatability/QND, quantum Zeno [Itano 1990] & Zeno dynamics on a degenerate subspace [Schäfer
  2014], the direct NMR discrimination [Hegerfeldt-Mayato 2012 protocol; arXiv:1607.05723] favouring
  Lüders). Checked the measurement-model algebra (U unitary; trace → sum P_k rho P_k) and repeatability.
- Candidate next lessons: POVMs & generalized measurements (follow-on to 0007); Kramers degeneracy &
  C/P/T discrete symmetries (follow-on to 0006);
  quaternionic QM & why \( \mathbb C \) is the "Goldilocks" field (follow-on to 0005); Spectrum
  Broadcast Structures (sharper objectivity, follow-on to 0004);
  position as a Galilei-boost generator & the origin of \( [\hat x,\hat p]=i\hbar \) (follow-on to
  0003); uncertainty relations as representation theory (thread seeded in 0003); the Wigner's-friend
  no-go theorems; Bell nonlocality done carefully; objective-collapse tests.
