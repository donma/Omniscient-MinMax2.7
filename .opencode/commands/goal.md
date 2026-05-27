---
description: Read or create the project goal file, then continue work according to it
agent: build
---

You are working inside this project.

Your first priority is to maintain and follow the project goal file:

@GOAL.md

If GOAL.md does not exist, create it first.

The GOAL.md file must contain these sections:

# Project Goal

## Main Goal
Describe the final target of this project in clear, concrete terms.

## Current Phase
Describe the current implementation phase.

## Non-Negotiable Rules
List rules that must not be violated.

## Done Criteria
List concrete conditions that prove the goal is complete.

## Current Status
Summarize what has already been completed.

## Next Actions
List the next 3 to 7 concrete implementation steps.

## Risk Notes
List blockers, fragile assumptions, or things that need verification.

When the user provides arguments after /goal, treat them as the newest goal update:

$ARGUMENTS

Your task:

1. Read the existing GOAL.md if it exists.
2. Merge the new user instruction into GOAL.md.
3. Do not delete useful previous context.
4. Rewrite GOAL.md so it is short, clear, and actionable.
5. After updating GOAL.md, explain:
   - current goal
   - current phase
   - next action
6. If code changes are needed, do not start coding yet unless the user explicitly asks you to continue.