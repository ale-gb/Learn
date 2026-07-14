# Notes

## Workspace format
- A **collection of single-focus lessons** on the differential geometry underlying physics —
  manifolds, tensors, forms, Lie groups, bundles, connections, curvature. Lessons added in any
  order as questions arise (often from the learner's viewing of rigorous lecture courses).
- Numbered `0001`, `0002`, … in creation order; numbering implies no prerequisite ordering.

## Teaching preferences (same learner as the QFT & measurement-problem workspaces)
- **Concept-first, intuition-forward — but mathematically honest.** The learner is working
  through Schuller's *Geometrical Anatomy* course, so precise definitions (sections, fibres,
  structure groups, principal vs associated bundles) are welcome. Lead with the idea, then give
  the rigorous statement; don't hide the rigor and don't drown the idea in it.
- **Physics-facing always.** Tie every geometric structure to where it shows up (GR, gauge
  theory, QM) — that grounding is the point of the workspace.
- **Assume mathematical maturity**; rebuild specific machinery as needed, don't re-teach calculus.
- **Single idea per lesson**, open-ended length.

## Learner context
- Master's in theoretical physics; ~10 years since; passion project. Reasons independently and
  spots real conceptual gaps (the lesson-0001 question correctly diagnosed a bundle conflation
  before being told). Watching Schuller's lecture series.

## Conventions
- Shared assets (style.css / quiz.js / math.js) in `assets/`; **forest-green** accent
  distinguishes this topic (QFT violet, RL rust, measurement teal). Math as \( \ldots \) / \[ \ldots \].
- Anchor course: Schuller + Simon Rea notes; references Nakahara, Baez–Muniain, Frankel, Tong.

## Cross-topic bridges
- This workspace is the rigorous backbone of gauge theory — feed it into the **QFT** track when
  that reaches gauge fields / the Standard Model (connections = Christoffel & gauge potentials;
  curvature = Riemann & \(F_{\mu\nu}\)).

## Working notes
- Workspace created 2026-07-09; founding lesson `0001` (covariant derivatives live on bundles)
  consolidates a Q&A the learner brought in about Schuller's connections lecture: why
  \(\nabla_X f = X(f)\) but the wavefunction needs \(D\) — answer: different bundles, and the
  deciding property is *charge*, not complexness.
- Lesson `0002` (parallel transport = covariant derivative) written 2026-07-10 from a learner
  question: a non-circular, coordinate-free proof that Schuller's axiomatic \(\nabla\) and the
  parallel-transport limit define the same connection (transport ⇒ Leibniz by linearity of
  \(\Pi^{-1}\); axioms ⇒ transport by solving \(\nabla_{\dot\gamma}V=0\)); \(\Gamma\) is only the
  coordinate shadow. Seeds the curvature-as-holonomy thread.
- Candidate next lessons: curvature as holonomy (\(F_{\mu\nu}\) & Riemann as transport-around-a-
  loop) — the natural 0003; where the \(\Gamma\)'s emerge in a chart from \(\nabla_{\partial_i}\partial_j\);
  principal vs associated bundles; the exterior derivative & differential forms; Lie
  groups/algebras and how they act on fibres; the metric & Levi-Civita connection.
