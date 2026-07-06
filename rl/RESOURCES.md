# Reinforcement Learning Resources

## Knowledge

- [Book: _Reinforcement Learning: An Introduction_ (2nd ed.) — Sutton & Barto](http://incompleteideas.net/book/the-book-2nd.html)
  The canonical theory text — free, official PDF from the authors. Use for: MDP formalism, dynamic programming, TD learning, eligibility traces, classical foundations everything else builds on. Slower-paced than needed for basics we're skipping, but unmatched as a reference for precise definitions and proofs.
- [Course: CS285 — Deep Reinforcement Learning (UC Berkeley), Sergey Levine](https://rail.eecs.berkeley.edu/deeprlcourse/)
  Graduate-level, continually updated with current research. Use for: policy gradients, actor-critic, model-based RL, offline RL, exploration, meta-learning — the bridge from classical theory to what's actually used in modern research. Best single source for "current SOTA mechanics with rigor."
  Gap noted: lecture videos are periodically refreshed but not always in sync with the latest slides — check the current semester's playlist link on the course page.
- [Docs: Spinning Up in Deep RL — OpenAI](https://spinningup.openai.com/en/latest/)
  Short, clean conceptual writeups paired with clean reference implementations (VPG, PPO, DDPG, TD3, SAC). Use for: fast, precise refreshers on a specific algorithm before implementing it. Explicitly in maintenance mode (not being extended to newer algorithms), so treat it as a foundation-era reference, not a source for SOTA.
- [Course: Hugging Face Deep RL Course](https://huggingface.co/learn/deep-rl-course/en/unit1/introduction)
  Applied, hands-on, unit-based, free. Use for: getting something training quickly, environment/tooling literacy (Gymnasium, Stable-Baselines3), and as a template for how to structure a hands-on exercise.
- [Library + docs: Brax — Google](https://github.com/google/brax)
  JAX-native differentiable rigid-body physics, runs simulation and training on the same accelerator. Use for: GPU-parallel continuous-control environments, the primary framework for controller-optimization work in JAX.
- [Library + docs: MJX (MuJoCo XLA)](https://mujoco.readthedocs.io/en/stable/mjx.html)
  MuJoCo reimplemented for XLA/JAX — GPU/TPU-parallel, `vmap`-able. Use for: high-fidelity contact-rich simulation (locomotion, manipulation) at massive parallelism; the current standard for serious sim-to-real work in JAX.
- [Library: gymnax](https://github.com/RobertTLange/gymnax)
  JAX reimplementations of classic control/bsuite-style environments. Use for: fast iteration on algorithm implementations before scaling to Brax/MJX.
- [Library: PureJaxRL](https://github.com/luchris429/purejaxrl)
  End-to-end JAX RL training loops (env + algorithm) compiled together with `jit`/`vmap`; reports >1000x wall-clock speedups over naive PyTorch loops by keeping everything on-device. Use for: the reference pattern for how modern JAX-native RL training pipelines are actually structured — this is the "GPU-parallelizable env framework" fluency the job requires.
- [Survey: "Deep Reinforcement Learning in the Era of Foundation Models" (2026)](https://www.mdpi.com/2073-431X/15/1/40)
  Recent peer-reviewed survey connecting classical deep RL to RLHF/RLAIF and foundation-model training. Use for: orienting how classical RL ideas map onto current LLM-alignment and foundation-model uses — useful breadth even though the user's focus is control/agents, since interviews increasingly assume this connection.
- [Article: "AI 101: The State of Reinforcement Learning in 2025" — Turing Post](https://www.turingpost.com/p/stateofrl2025)
  Accessible field-level survey of where RL research stood entering 2025-26. Use for: a fast orientation read on current trends before going deep on any one of them; treat as a map, not a primary source.

## Wisdom (Communities)

- [r/reinforcementlearning](https://www.reddit.com/r/reinforcementlearning/)
  Main general RL community on Reddit — active discussion of papers, implementation debugging, career questions. Use for: sanity-checking intuitions, asking "is this a known failure mode" questions, job-market discussion.
- [RL Discord (maintained by the community around CleanRL / Costa Huang)](https://github.com/vwxyzjn/cleanrl#support-and-getting-involved)
  Practitioner-focused, strong signal on implementation details and reproducing published results. Use for: getting help when an implementation trains but doesn't match paper numbers — a very common and otherwise hard-to-debug RL problem.

## Gaps
- No single up-to-date, high-trust course specifically on JAX-native RL engineering (Brax/MJX/PureJaxRL patterns) — currently stitched together from each library's own docs/examples. Revisit periodically; this area moves fast.
- No dedicated resource yet identified for RL for controller optimization specifically (vs. general continuous control) — flag if the job narrows further in this direction.
