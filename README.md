# Juri — Malaysia's Legal AI Assistant

Investor-facing landing page for Juri. Static HTML/CSS/JS, no build step.

## Local development

```
python3 -m http.server
```

Then open http://localhost:8000.

## Adding the demo video

Drop the recorded demo file in as `assets/video/demo.mp4`. The page automatically
detects whether the file exists — until it's added, the demo section shows a
"coming soon" placeholder; once added, the video plays normally.

## Deployment

Deployed on Render as a static site (see `render.yaml`). No build command needed.
