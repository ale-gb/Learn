# QM & the Measurement Problem — Glossary

Canonical terminology for this workspace. Terms are added once the learner has demonstrated
understanding of them. Once defined here, lessons use them consistently.

## Conventions
- Natural units \( \hbar = 1 \) unless a lesson says otherwise.
- "System / environment" split: \( S \) is the accessible subsystem, \( E \) the inaccessible
  many-degree-of-freedom remainder that gets traced out.

## Terms

_Established in lesson 0001 (the learner demonstrated working fluency with these)._

- **Density matrix** \( \rho \) — operator description of a state carrying both quantum
  superposition and classical uncertainty: \( \rho = \sum_i p_i|\psi_i\rangle\langle\psi_i| \).
  Diagonal entries: classical probabilities. Off-diagonal entries: **coherences**.
  \( \langle\hat O\rangle = \mathrm{Tr}(\rho\hat O) \).
- **Coherences** — the off-diagonal elements of \( \rho \); they encode superposition and are
  responsible for interference. Their survival or suppression is the whole story of decoherence.
- **Pure vs mixed state** — pure: \( \mathrm{Tr}(\rho^2)=1 \) (a state vector suffices);
  mixed: \( \mathrm{Tr}(\rho^2)\lt 1 \). Purity below 1 is the quantitative signature of lost
  coherence.
- **Partial trace** \( \rho_A = \mathrm{Tr}_B(\rho_{AB}) \) — the *unique* operation yielding a
  subsystem's effective state that reproduces all local measurement statistics when \( B \) is
  inaccessible. Converts entanglement into local classical ignorance.
- **Reduced density matrix** — the \( \rho_A \) obtained by partial-tracing out unobserved
  degrees of freedom.
- **Decoherence** — unitary entanglement of a system with an inaccessible environment such
  that, on tracing the environment out, the system's coherences are suppressed by the
  environment-state overlap \( \langle E_i|E_j\rangle \to 0 \). Produces the *appearance* of
  collapse with no non-unitary step.
- **Pointer states / einselection** — the environment-selected (usually near-classical, e.g.
  position) states that are robust against environmental monitoring; environment-induced
  superselection fixes the basis in which decoherence occurs.
- **Which-path information** — the record, left in the environment, of which alternative a
  system took. Decoherence *is* the irreversible leakage of which-path information; its presence
  (orthogonal environment states) destroys interference, its absence (identical environment
  states) preserves it.
- **Fringe visibility** \( V = \frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}} = \gamma \) — the
  contrast of an interference pattern; equals the surviving coherence \( \gamma = 1-f \), where
  \( f \) is the decohered fraction. Lets you read the coherent fraction directly off a screen.
- **The measurement problem** — the tension between linear unitary evolution (which keeps the
  universe in a superposition) and the observation of single, definite outcomes. Decoherence
  explains loss of interference and basis selection but **not** why one outcome is realized.
