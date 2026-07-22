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

_Established in lesson 0003 (where observables come from)._

- **Generator (of a symmetry)** — the self-adjoint operator \( \hat G \) producing a continuous
  symmetry via \( U(s)=e^{-is\hat G/\hbar} \) (Stone's theorem). The fundamental observables of
  QM *are* these generators: momentum ← translations, angular momentum ← rotations, energy ←
  time translation, charge ← internal phase. Conserved when \( [\hat G,\hat H]=0 \) (Noether).
- **Casimir invariant** — an operator built from the generators that commutes with *all* of them
  (e.g. \( \hat J^2 \) for the rotation algebra, \( [\hat J^2,\hat J_i]=0 \)). It is constant on
  each irreducible representation, so it *labels* the representation rather than varying within
  it — hence a fixed property (like an elementary particle's spin magnitude), not a dynamical
  variable.
- **Complete set of commuting observables (CSCO)** — a maximal set of mutually commuting
  observables whose joint eigenvalues label states uniquely (e.g. \( \{\hat J^2,\hat J_z\} \),
  giving \( j \) and \( m \)). The commuting requirement is why you take one component *plus* the
  Casimir, never all three components.
- **Superselection rule** — a restriction forbidding coherent superpositions between certain
  sectors of the Hilbert space (e.g. different electric charge; different mass in Galilean QM;
  bosons vs fermions). Physical observables are block-diagonal across sectors, so an operator
  *linking* two sectors (like the relative phase between a charge-0 and charge-1 state) is not
  observable. A fixed Casimir label (an elementary particle's spin/mass) is effectively such a
  sector label.
_Established in lesson 0004 (quantum Darwinism)._

- **Quantum Darwinism** — the account (Zurek) of why the classical world is *objective*: the
  environment not only decoheres a system but stores **many redundant copies** of its einselected
  pointer observable, so many observers can each read a small environment fragment, agree, and not
  disturb the system. Explains intersubjective agreement — not the definite-outcome / Born-rule
  problem, which it inherits unchanged from decoherence.
- **Redundancy** \( R_\delta \) — the number of disjoint environment fragments each carrying all
  but a fraction \( \delta \) of the system's classical information; \( R_\delta = 1/f_\delta \)
  with \( f_\delta \) the fragment fraction needed. Large \( R \) *is* objectivity, quantified.
- **Information plateau** — the shape of \( I(\mathcal S{:}\mathcal F)=H_{\mathcal S}+H_{\mathcal F}-H_{\mathcal S\mathcal F} \)
  vs fragment size: a fast rise to \( H_{\mathcal S} \) (all the classical info, from a tiny
  fragment), a long flat plateau (extra fragments are redundant), then a jump to \( 2H_{\mathcal S} \)
  only when nearly all of \( \mathcal E \) is captured (the non-redundant quantum/coherence info).
  The plateau is the fingerprint of an objective, classical observable.

_Established in lesson 0005 (why QM needs complex numbers)._

- **Mutually unbiased bases (MUBs)** — bases such that a state sharp in one is uniform (equal
  probabilities) in the other. \( \mathbb R^2 \) admits at most 2; \( \mathbb C^2 \) admits 3 (the
  \( x,y,z \) Pauli eigenbases). Needing 3 for spin is one way to see why \( \mathbb R^2 \) fails.
- **Complex structure \( J \)** — the real-linear operation "multiply by \( i \)," \( J^2=-\mathbb 1 \).
  It is the *extra* structure that upgrades \( \mathbb R^{2N} \) to \( \mathbb C^N \); its physical job
  is to make the probability metric \( g \), the dynamical symplectic form \( \omega \), and system
  composition mutually compatible (\( g(u,v)=\omega(u,Jv) \), a **Kähler** structure).
- **Jordan–Lie algebra** — the real algebra of observables with a symmetric (Jordan) product
  \( A\circ B=\tfrac12(AB+BA) \) and an antisymmetric Lie bracket, linked by the Leibniz rule.
  Demanding a single *associative* positive product forces the combining coefficient to be
  imaginary (\( \kappa=\tfrac{i\hbar}{2} \)) — *deriving* \( i \) rather than assuming it.
- **Local tomography** — the requirement that a joint state be determined by local measurements and
  their correlations. Holds in complex QM (observable counts match); fails in real QM (e.g.
  \( \sigma_y\otimes\sigma_y \) is a global observable no local real measurement reaches).
- **GNS construction** (Gelfand–Naimark–Segal) — builds a Hilbert space from a \( C^* \)-algebra and
  a state \( \omega \): inner product \( \langle A,B\rangle=\omega(A^*B) \), quotient the null space
  \( \{A:\omega(A^*A)=0\} \), complete. The Hilbert space *emerges*; it is not postulated.

_Established in lesson 0006 (why operators are linear except time reversal)._

- **Wigner's theorem** — any symmetry (a map on states preserving \( |\langle\psi|\phi\rangle|^2 \))
  is represented by an operator that is either **unitary and linear** or **antiunitary and
  antilinear** — exactly two options, nothing between. Continuous symmetries (connected to the
  identity) must be unitary; only discrete symmetries can be antiunitary.
- **Antilinear / antiunitary operator** — antilinear: pulls scalars out conjugated,
  \( \Theta(c|\psi\rangle)=c^*\Theta|\psi\rangle \); antiunitary: also conjugates inner products,
  \( \langle\Theta\psi|\Theta\phi\rangle=\langle\psi|\phi\rangle^* \) (so still preserves
  \( |\langle\cdot|\cdot\rangle|^2 \)). The one licensed way an operator in QM is non-linear.
- **Time reversal \( \Theta \)** — the antiunitary symmetry \( \Theta=UK \) (\( K \) = complex
  conjugation): fixes position, flips momentum and spin. Forced to be antiunitary because reversing
  the dynamics \( U(t)\to U(-t) \) while keeping \( \Theta H\Theta^{-1}=H \) (energy bounded below)
  requires conjugating the \( i \) in \( e^{-iHt/\hbar} \).
- **Kramers degeneracy** — when \( \Theta^2=-\mathbb 1 \) (half-integer spin) and \( H \) is
  time-reversal invariant, every level is at least doubly degenerate, because \( |\psi\rangle \) and
  \( \Theta|\psi\rangle \) are orthogonal. A measurable consequence of \( \Theta \)'s antilinearity.

_Established in lesson 0007 (Lüders' rule)._

- **Lüders' rule** — the measurement-update (projection) postulate for a general observable
  \( A=\sum_k a_k P_k \). *Selective* (outcome \( a_k \) read): \( \rho\to P_k\rho P_k/\mathrm{Tr}(P_k\rho) \)
  with probability \( \mathrm{Tr}(P_k\rho) \). *Non-selective*: \( \rho\to\sum_k P_k\rho P_k \). Built
  from the eigen*projectors*, so basis-independent; the minimally-disturbing, repeatable update.
- **Selective vs non-selective measurement** — selective keeps the outcome (and collapses to the
  conditional state); non-selective averages over outcomes (\( \sum_k P_k\rho P_k \), = decoherence
  in the eigenbasis). The two differ only by whether the pointer record is kept.
- **Lüders vs von Neumann (degenerate case)** — for a degenerate observable, Lüders' rule preserves
  coherence *within* each eigenspace, killing only coherence *between* eigenvalues; von Neumann's
  basis-refined rule dephases within the eigenspace too (a physically finer measurement). Experiment
  (NMR, arXiv:1607.05723) favours Lüders.

_Established in lesson 0008 (joint probabilities & Fine's theorem)._

- **Joint measurability / joint observable** — two observables \( A,B \) are *jointly measurable* if
  there is a single measurement (effects \( E_{ab}\ge0 \), \( \sum_{ab}E_{ab}=\mathbb 1 \)) whose two
  marginals reproduce \( A \) and \( B \) in every state. For **sharp** (projective) observables this
  is possible **iff** \( [A,B]=0 \), and then \( E_{ab}=P^A_aP^B_b \). Dropping sharpness (POVMs) lets
  some non-commuting pairs be jointly measured at the cost of added noise (smeared marginals).
- **Kirkwood–Dirac distribution** — the quasi-probability \( Q_\rho(a,b)=\mathrm{Tr}(\rho\,P^B_bP^A_a) \).
  Has the correct \( A \)- and \( B \)-marginals, but for non-commuting \( A,B \) is complex/negative
  (its "effects" \( P^B_bP^A_a \) are not even Hermitian). Continuous-variable analogue: the **Wigner
  function** (correct \( x,p \) marginals, negative except for Gaussian pure states — Hudson's theorem).
- **Quasi-probability negativity** — the forced negativity/nonreality of any joint distribution for
  incompatible observables. Not a defect but a **resource**: Wigner/Kirkwood–Dirac negativity is a
  diagnostic of non-classicality, tied to contextuality and to quantum computational "magic."
- **Fine's theorem** — for a Bell/CHSH experiment, five statements are equivalent: a deterministic
  local hidden-variable model exists; a factorizable stochastic model exists; a single joint
  distribution over all four observables exists (returning the measured correlations); compatible
  joint distributions exist for all pairs/triples; the Bell/CHSH inequalities hold. Hence a CHSH
  violation *is* the non-existence of a joint distribution. (A. Fine, PRL 48, 291, 1982.)
- **Marginal problem (Vorob'ev)** — given joint distributions on overlapping compatible contexts,
  do they glue into one global joint distribution? Bell/CHSH is exactly the gluing condition;
  contextuality/nonlocality is its failure (sheaf-theoretic view of Abramsky–Brandenburger).

_Established in lesson 0009 (Frauchiger–Renner paradox)._

- **Relational consistency** — the theorem (lesson 0009, Part 1) that computing joint statistics
  from a single observer's frame (collapse for one's own measurement, unitary for a distant one)
  reproduces the global Born rule \( p(a,b)=\langle\Psi|P_a\otimes Q_b|\Psi\rangle \). Guaranteed by
  microcausality \( [P_a\otimes I,\,I\otimes Q_b]=0 \); it *is* lesson 0008's sharp joint observable
  \( E_{ab}=P_a\otimes Q_b \). Holds only for observables compared through actual physical interaction.
- **Wigner's friend** — an observer ("friend") sealed in an isolated lab who obtains a definite
  outcome, together with a super-observer outside who can treat the whole lab (friend included)
  unitarily and measure it in a basis that *interferes the friend's branches* (a **reversal
  measurement**). The tension: is the friend's outcome an absolute fact, or only a fact relative
  to the friend?
- **Frauchiger–Renner (FR) theorem** — turning quantum theory on agents who themselves use it,
  four nested observers can chain probability-one inferences to conclude \( p(\mathrm{ok},\mathrm{ok})=0 \),
  while the Born rule gives \( 1/12 \). Hence three assumptions cannot all hold: **(Q)** universality
  of QM, **(C)** composability of different agents' conclusions, **(S)** single absolute outcomes.
  Every interpretation drops at least one (the assignment is a heuristic, not a settled classification).
- **(Q)/(C)/(S) assumptions** — FR's three premises. (Q): quantum theory applies to macroscopic
  observers/labs. (C): one agent may import another agent's certainty into a joint Boolean chain.
  (S): each measurement yields one observer-independent fact. \( Q\wedge C\wedge S \) is inconsistent.
- **Local Friendliness (Bong et al.)** — a strictly stronger Wigner's-friend no-go than FR: the
  conjunction of **absoluteness of observed events** and **local agency** yields inequalities
  (a strengthening of CHSH) that quantum correlations violate; tested photonically (a photon as
  proxy "friend"). Fully developed in lesson 0010.

_Established in lesson 0010 (Local Friendliness inequalities)._

- **Absoluteness of Observed Events (AOE)** — the assumption that every *actually observed* event has
  a single absolute value, the same for all observers, whether or not anyone else looks. Weaker than a
  full hidden-variable assignment (it commits only to observed, not counterfactual, outcomes); the
  inequality-friendly cousin of FR's assumption (S). Denying it makes facts *perspectival* (relational).
- **Locality / Local Agency** — the LF locality premise: events on one wing are unaffected by the
  freely-chosen setting on the distant spacelike wing (operationally, no-signalling). Cavalcanti–Wiseman's
  **Local Agency** upgrades it to a causal principle: a free intervention is uncorrelated with any events
  outside its future light cone.
- **Local Friendliness polytope** — the convex set of correlations allowed by {AOE, Locality,
  No-Superdeterminism}. Nests strictly: **Local (Bell) ⊆ LF ⊆ No-signalling**. Equals the local
  polytope for 2 settings per side; strictly larger (new facets) once a party has 3 settings — which is
  why an LF violation *entails* a Bell violation but not conversely, making it strictly stronger.
- **LF inequality** — a facet of the LF polytope. In the simplest 3-setting scenario one facet is
  CHSH-shaped, \( |\langle A_2B_1\rangle+\langle A_2B_2\rangle+\langle A_3B_1\rangle-\langle A_3B_2\rangle|\le2 \),
  bound 2, violated by QM up to \( 2\sqrt2 \) — but derived from the weaker LF assumptions, not local
  causality. Confirmed in a six-photon experiment (~5σ).

- **Self-adjoint vs symmetric** — an observable must be *self-adjoint*, not merely *symmetric*
  (Hermitian on a domain): only self-adjointness gives the spectral theorem, real spectrum, and
  a unitary flow. Some classical observables (radial momentum on \( r>0 \), an oscillator's
  phase, time-of-arrival) have symmetric operators with **no self-adjoint extension**, so they
  are not quantum observables at all.

_Established in lesson 0002 (einselection)._

- **Preferred-basis problem** — the fact that "the density matrix goes diagonal" is empty until
  something singles out *which* basis is the stable, classical one (any \( \rho \) is diagonal in
  its own eigenbasis). Einselection is the resolution.
- **Pointer states / pointer basis** — the states left robust by the environment: the eigenstates
  of the observable the environment monitors. Superpositions of them decohere; they themselves
  persist and label the classical alternatives.
- **Commutativity criterion** — Zurek's rule for finding the pointer observable \( \hat\Pi \): it
  is the one commuting with the interaction, \( [\hat\Pi,\hat H_{\text{int}}]=0 \), so its
  eigenstates are recorded by the environment without being disturbed.
- **Predictability sieve** — the procedure that ranks candidate pure states by how slowly they
  lose purity (generate entropy) under system+environment dynamics; the survivors are the pointer
  states. For a position-monitored particle it selects Gaussian **coherent states** (minimum-
  uncertainty wave packets localized in phase space) — the seeds of classical trajectories.
