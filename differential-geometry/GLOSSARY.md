# Differential Geometry for Physics — Glossary

Canonical terminology for this workspace, added as it is established in lessons and used
consistently thereafter.

## Conventions
- \(M\) is a smooth manifold (spacetime, usually). Greek indices \(\mu,\nu=0,1,2,3\).
- "Bundle" means a smooth vector bundle unless stated (principal bundles are named explicitly).

## Terms

_Established in lesson 0001 (covariant derivatives live on bundles)._

- **Vector bundle** \(E \xrightarrow{\pi} M\) — a manifold that attaches a vector space (the
  **fibre** \(E_x\)) to each point \(x\in M\), smoothly. Examples: the tangent bundle \(TM\);
  the trivial line bundle \(M\times\mathbb{R}\); a complex line bundle for a wavefunction.
- **Fibre** \(E_x\) — the vector space sitting over the point \(x\). Fibres over different
  points are *different* vector spaces, with no automatic identification between them.
- **Section** — a field: a smooth choice of one vector \(s(x)\in E_x\) at every point. Vector
  fields are sections of \(TM\); functions are sections of \(M\times\mathbb{R}\); the
  wavefunction is a section of a complex line bundle.
- **Connection** — the *extra* structure on a specific bundle that defines **parallel
  transport**: how to carry a fibre element from one point to a neighbour so that sections can
  be compared and differentiated. Not canonical and not universal — each bundle needs its own.
- **Covariant derivative** (\(\nabla\) on \(TM\), \(D\) on a gauge bundle) — the derivative of
  a section built from a connection: \(\nabla_\mu V^\nu = \partial_\mu V^\nu + \Gamma^{\nu}{}_{\mu\lambda}V^\lambda\),
  \(D_\mu\psi = \partial_\mu\psi + iqA_\mu\psi\). Reduces to the plain \(\partial\) exactly when
  the relevant bundle is trivially connected.
- **Gauge / structure group** — the group of local symmetries acting on the fibres
  (e.g. \(\mathrm{U}(1)\) for electromagnetic phase, \(\mathrm{SO}(2)\) for a real doublet). A
  field is **charged** when this symmetry is local (gauged); charge — not being complex — is
  what forces a non-trivial connection term.
- **Curvature** — the failure of parallel transport to return a vector/phase to itself around
  a small closed loop; the Riemann tensor \(R^{\rho}{}_{\sigma\mu\nu}\) for the tangent
  connection, the field strength \(F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu\) for the
  \(\mathrm{U}(1)\) gauge connection.
