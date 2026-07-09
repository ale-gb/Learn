# Quantum Field Theory Glossary

Canonical terminology for this workspace. Terms are added only once the user has
demonstrated understanding of them — this is a record of compressed, *earned*
knowledge, not an intro reference. Once a term is defined here, every lesson uses
it consistently.

## Conventions
- **Metric signature:** mostly-plus is common in relativity, but the QFT texts we
  anchor on (Tong, Peskin, Schwartz) use **mostly-minus**, \( \eta_{\mu\nu} = \mathrm{diag}(+1,-1,-1,-1) \).
  We adopt **mostly-minus** to match them.
- **Natural units:** \( \hbar = c = 1 \) unless a lesson says otherwise.
- **Index notation:** Greek indices \( \mu,\nu = 0,1,2,3 \) (spacetime); Latin \( i,j = 1,2,3 \) (space).

## Terms

_Added from extra-curricular lesson `x0001` (2026-07-09), where the user demonstrated
working fluency with these. They recur throughout QFT (thermal field theory,
entanglement entropy, the effective-action "integrate out" logic)._

- **Density matrix** \( \rho \) — operator description of a quantum state that carries
  both quantum superposition and classical (statistical) uncertainty:
  \( \rho = \sum_i p_i |\psi_i\rangle\langle\psi_i| \). Diagonal entries are classical
  probabilities; off-diagonal entries are **coherences**. Expectation values:
  \( \langle\hat O\rangle = \mathrm{Tr}(\rho\hat O) \).
- **Pure vs mixed state** — pure: maximal knowledge, \( \mathrm{Tr}(\rho^2)=1 \) (a single
  state vector suffices). Mixed: \( \mathrm{Tr}(\rho^2)<1 \). The purity dropping below 1
  is the quantitative signature of lost coherence.
- **Partial trace** \( \rho_A = \mathrm{Tr}_B(\rho_{AB}) \) — the *unique* operation giving
  a subsystem's effective state that reproduces all local measurement statistics when the
  rest of the system is inaccessible. Turns entanglement into local classical ignorance.
- **Reduced density matrix** — the state \( \rho_A \) obtained by partial-tracing out the
  unobserved degrees of freedom.
- **Decoherence** — the (unitary) process by which a system entangles with an
  inaccessible environment, so that tracing the environment out suppresses the system's
  off-diagonal coherences by the environment-state overlap
  \( \langle E_i|E_j\rangle \to 0 \). Produces the *appearance* of collapse without any
  non-unitary step.
- **Pointer states / einselection** — the (usually near-classical, e.g. position) states
  singled out as robust against environmental monitoring; environment-induced
  superselection determines the basis in which decoherence occurs.
