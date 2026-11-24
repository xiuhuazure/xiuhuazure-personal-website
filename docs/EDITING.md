# Editing the "recent pages" videos

You can do all of this on github.com, in your browser. No software needed.

## 1. Open the file

1. Go to https://github.com/xiuhuazure/xiuhuazure-personal-website
2. Click `index.html`, then the pencil icon (Edit this file) at the top right.
3. Press Ctrl+F (Cmd+F on Mac) and search for `03 recent pages`. The video cards are just below it.

## 2. Get the video's ID

From a YouTube link like `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is the part after `watch?v=`:
`dQw4w9WgXcQ`. For a short link like `https://youtu.be/dQw4w9WgXcQ`, it's the part after the slash.

## 3. Add a video card

Copy this, and paste it right after the line `<div class="shelf">`:

```html
<a class="entry" href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank" rel="noopener">
  <div class="thumb thumb--photo">
    <img class="thumb__img" src="https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg" alt="" loading="lazy">
    <span class="thumb__play" aria-hidden="true"></span>
  </div>
  <div class="entry__meta">
    <span class="entry__cat">gameplay / genshin impact</span>
    <span class="entry__line">One sentence about the video.</span>
  </div>
</a>
```

Then change three things:

| Replace | With |
|---|---|
| `VIDEO_ID` (appears twice) | your video's ID |
| `gameplay / genshin impact` | the small label above the description |
| `One sentence about the video.` | a short description |

The thumbnail comes straight from YouTube, so you don't need to upload anything.

## 4. Choose the big card

The card with `class="entry entry--feature"` is the large one on the left.
Move `entry--feature` to the card you want featured, and make sure only one card has it.

## 5. Remove the sample cards

Each old placeholder card starts with `<a class="entry` and ends with `</a>`, and has `sample entry` in it.
Delete everything from its `<a` to its `</a>`. Keep three cards in total, so the layout stays balanced.

## 6. Save

Scroll down, click **Commit changes**, then **Commit changes** again.
Cloudflare publishes it in a minute or two. If it doesn't, open the Cloudflare Pages project and click **Create deployment** on `main`.

## Using your own picture instead of YouTube's

1. On GitHub, open the `assets/videos` folder, click **Add file**, then **Upload files**, and upload your image (JPG, 1280×720 is ideal).
2. In the card, change the `src` to `/assets/videos/your-file-name.jpg`.

## If something looks broken

Every `<a` needs its matching `</a>`, and every `<div` needs its `</div>`.
If the page looks wrong, open the file's **History** on GitHub to see the last version, or ask Claude to fix it.
