# 🧩 ZAO Widget: Embed Anywhere

You can now embed your ZAO project data into any website (Webflow, Framer, WordPress, etc.) using two methods: a **No-Code Iframe** or a **JSON API**.

---

## 1. No-Code Iframe (Recommended)
The easiest way to show your top projects. Just copy and paste this code into an "Embed" or "HTML" block in Webflow.

### Simple Widget (Top 3 Projects)
```html
<iframe 
  src="https://zaoprojects.vercel.app/embed?limit=3" 
  width="100%" 
  height="600px" 
  frameborder="0" 
  style="background: transparent;"
></iframe>
```

### Advanced Options (Query Params)
You can customize the widget by adding parameters to the URL:

- `limit`: Number of projects to show (e.g. `limit=1`)
- `category`: Filter by sector (e.g. `category=Platforms`)
- `cols`: Number of columns for larger areas (e.g. `cols=2`)

**Example (2 Platforms in Grid):**
`https://zaoprojects.vercel.app/embed?limit=2&category=Platforms&cols=2`

---

## 2. JSON API (For Developers)
If you want to build your own custom UI in Webflow or use a library like FinSweet, you can fetch the raw data directly from our API.

**Endpoint:** `https://zaoprojects.vercel.app/api/projects`

### Fetch Example (JavaScript):
```javascript
fetch('https://zaoprojects.vercel.app/api/projects?limit=3')
  .then(response => response.json())
  .then(data => {
    console.log("ZAO Projects Data:", data);
    // Render your custom UI here
  });
```

### Supported Filters:
- `?limit=5`
- `?category=Ecosystem`
- `?id=wavewarz` (get a specific project)

---

## 🎨 Styling Note
The Iframe widget automatically uses the **ZAO Dark/Teal** theme with a transparent background, so it will blend perfectly into any site that has a dark background.
