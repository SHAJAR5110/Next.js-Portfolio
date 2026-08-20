# Content Database

Everything visible on the portfolio is driven from this folder. You should never
need to open a component file to change text, images or links.

```
src/database/
├── profile.js    → your name, roles, bio, socials, navigation
├── projects.js   → every project: name, image, description, tags, links
├── about.js      → skills / experience / education / certifications + stat counters
└── index.js      → re-exports everything (import { projects } from "@/database")
```

---

## Adding a project

1. Open `projects.js`.
2. Copy this block and paste it near the top of the `projects` array:

```js
{
  id:          "my-project",
  name:        "My Project",
  description: "One or two sentences about what it does and what you built.",
  image:       "/images/projects/my-project.png",
  tags:        ["ai", "web"],
  stack:       ["Next.js", "OpenAI"],
  github:      "https://github.com/SHAJAR5110/my-project",
  live:        "https://my-project.vercel.app",
  featured:    true,
  year:        2026,
},
```

3. Save. The card appears immediately — filters, counts and search all update on
   their own.

### Ordering

Cards render in **exactly the order they appear in this file**, top to bottom.
Nothing re-sorts them. To move a project on the page, move its block up or down
in the `projects` array. Newest work belongs at the top.

### Field reference

| Field         | Required | What it does                                                      |
| ------------- | -------- | ----------------------------------------------------------------- |
| `id`          | yes      | Unique key. Lowercase, hyphens, no spaces.                          |
| `name`        | yes      | Card title.                                                         |
| `description` | yes      | Card body. Two sentences reads best.                                |
| `image`       | no       | Path to artwork. Omit it and a category graphic is used.            |
| `tags`        | yes      | Which filter chips the project appears under. Ids from `categories`. |
| `stack`       | no       | Small tech chips on the card.                                       |
| `github`      | no       | Renders the code button. Omit to hide it.                           |
| `live`        | no       | Renders the preview button. Omit to hide it.                        |
| `featured`    | no       | `true` shows a "Featured" badge on the card. Does not affect order. |
| `year`        | no       | Shown in the card corner.                                           |

---

## Adding an image

1. Save the file into **`public/images/projects/`**.
2. In `projects.js`, set `image` to the path **without** the `public` part:

```js
image: "/images/projects/my-screenshot.png"
```

**Guidelines**

- Size: **1200 × 750** (16:10) is ideal — the grid crops to that ratio.
- Format: `.webp` if you can, otherwise `.png` or `.jpg`.
- Weight: keep under **400 KB**. Large files slow the grid down noticeably.
- Skipping the field is fine. A code-art SVG matched to the project's first tag
  is used automatically, so a card never renders blank.

---

## Available tags

Defined in the `categories` array at the top of `projects.js`:

`all` · `ai` · `web` · `mern` · `python` · `hackathon` · `backend` · `npm` · `other`

To add a new filter chip, append to `categories` and add a matching entry to
`fallbackImages`:

```js
// in categories
{ id: "mobile", label: "Mobile Apps" },

// in fallbackImages
mobile: "/code-other.svg",
```

---

## Editing your details

- **Name, roles, bio, photo, availability pill** → `profile.js`
- **Social links** → the `socials` array in `profile.js`
  (`icon` must be `"github"`, `"linkedin"` or `"mail"` — add more in
  `src/app/components/SocialIcon.jsx`)
- **Navbar items** → the `navigation` array in `profile.js`
- **Stat counters** → the `stats` array in `about.js`
- **About tabs** → the `aboutTabs` array in `about.js`

---

## Rules that keep things from breaking

- Every `id` must be unique across the `projects` array.
- Every entry in `tags` must match a `categories` id, or the project will not
  show under any filter.
- Image paths always start with `/` and never include `public`.
- Keep the trailing comma after each project object.
