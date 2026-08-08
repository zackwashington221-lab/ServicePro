# ServicePro 3D design direction

## Goal

Make ServicePro feel dependable, modern, and human through subtle depth and
motion. The 3D treatment should explain the service journey and build trust; it
must never make booking a technician slower or harder.

## Visual language

- Use the existing blue-led palette and rounded, elevated surfaces from
  `website/src/styles.css`.
- Prefer editorial 3D illustrations: technicians, tools, maps, homes, status
  markers, and verified-service badges. Existing hero and service artwork is
  the visual reference.
- Create depth with layered cards, soft ambient shadows, radial gradients,
  translucent panels, and restrained CSS perspective transforms.
- Keep text, actions, and prices in normal document flow. 3D elements are
  decorative unless an accessible equivalent interaction is supplied.

## Recommended interactions

| Surface | Treatment | Behaviour |
| --- | --- | --- |
| Homepage hero | Layered technician scene | Shift the illustration and floating cards slightly with pointer movement. |
| Service cards | Elevated tiles | Lift 2–4px and tilt slightly on hover; do not move layout. |
| Booking journey | Map and route illustration | Reveal each stage with a short fade/translate animation. |
| Trust signals | Verification badge and metrics | Use depth, not excessive looping animation. |

## Interaction rules

- Animate only `transform` and `opacity` where possible.
- Keep ordinary motion between 150ms and 400ms; use easing that settles rather
  than bounces.
- Respect `prefers-reduced-motion`: remove parallax, tilt, and nonessential
  transitions.
- Make hover-only effects optional; touch users must receive the same content
  and actions without hover.
- Avoid WebGL or large 3D libraries unless the feature genuinely requires a
  manipulable 3D scene. CSS layers and optimised static artwork are the default.

## Implementation location

- Website routes: `website/src/routes/`
- Shared customer-site components: `website/src/components/site/`
- Shared tokens and utilities: `website/src/styles.css`
- Static illustrations: `website/src/assets/`

## Quality bar

Test at mobile and desktop widths, retain readable contrast over artwork, give
meaningful illustrations appropriate `alt` text (or empty `alt` when purely
decorative), and ensure the page remains useful before an image or animation
loads.
