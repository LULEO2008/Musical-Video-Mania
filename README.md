# Musical Video Mania

PowerPoint-style web presentation for a 12-video student MV showcase.

## Files

- `index.html` opens the deck.
- `styles.css` controls the cinematic 16:9 visual system.
- `script.js` contains all slide data and generates the 16 slides.
- `assets/` is reserved for replacement thumbnails, posters, screenshots, and QR images.

The deck includes cinematic slide transitions, staggered card reveals, title/text entrance animation, QR/button pop-in, and a progress line above the slide.

## Edit MV Content

Open `script.js` and update the `mvItems` array:

- `title`
- `director`
- `team`
- `members`
- `duration`
- `genre`
- `summary`
- `thumbnail`
- `poster`
- `videoUrl`

Example:

```js
thumbnail: "assets/mv-01-thumbnail.jpg",
poster: "assets/mv-01-poster.jpg",
videoUrl: "https://example.com/video"
```

If `thumbnail` or `poster` is left blank, the deck shows a cinematic placeholder.

## Export

Open `index.html` in a browser and use the `Export` button, or press `Ctrl+P`.
Use landscape orientation and print/save as PDF. The print stylesheet outputs one 16:9 slide per page.

## Navigation

Use the on-screen controls or keyboard arrows to move through the deck.
Open a specific slide with `index.html?slide=3` or `index.html#slide-3`.
