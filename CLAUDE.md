# Repo structure

This repo hosts multiple `/teach` topics side by side, one per top-level subdirectory (e.g. `rl/`). Each subdirectory is a self-contained teaching workspace with its own `MISSION.md`, `RESOURCES.md`, `GLOSSARY.md`, `NOTES.md`, `learning-records/`, `lessons/`, `assets/`, and `reference/`, per the `teach` skill's format. When starting or resuming a `/teach` session, operate inside the subdirectory for that topic — don't mix files from different topics at the repo root.

When the teach skill is used:
1. Determine the topic from the user's message, or ask if unclear.
2. cd into that topic's folder and treat IT as the teaching workspace —
   its own MISSION.md, RESOURCES.md, NOTES.md, lessons/,
   learning-records/, reference/, assets/.
3. Never create workspace files (MISSION.md, lessons/, etc.) at the
   repo root.
4. To start a new topic, create a new top-level folder with that structure.

# Working conventions

Commit and push all work directly to `main`. Don't open pull requests.


