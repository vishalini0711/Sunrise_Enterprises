# Assets

Product, facility, and hero photography is currently hotlinked from
Unsplash (see the `images` object in `src/utils/data.js`) rather than
stored here, so the repo stays lightweight.

To use your own photography instead:
1. Drop image files into this folder (e.g. `transformer-1.jpg`).
2. Import them normally in a component:
   ```jsx
   import transformerImg from "../assets/transformer-1.jpg";
   ```
3. Replace the corresponding URL in `src/utils/data.js`'s `images` object,
   or pass the imported image directly wherever a component expects
   `product.img` / `images.xxx`.
