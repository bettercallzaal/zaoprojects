# 🧩 ZAO Widget: Embed Anywhere

You can now embed your ZAO project data into any website (Webflow, Framer, WordPress, etc.) using two methods: a **No-Code Iframe** or a **JSON API**.

---

## 1. No-Code Iframe (Recommended)
The easiest way to show your top projects. Just copy and paste this code into an "Embed" or "HTML" block in Webflow.

### Simple Widget (Auto-Resizing)
```html
<div id="zao-embed-container">
  <iframe 
    id="zao-iframe"
    src="https://zaoprogress.vercel.app/embed?limit=3" 
    width="100%" 
    frameborder="0" 
    scrolling="no"
    style="background: transparent; min-height: 400px;"
  ></iframe>
</div>

<script>
  window.addEventListener('message', function(e) {
    if (e.data.type === 'resize') {
      const iframe = document.getElementById('zao-iframe');
      if (iframe) {
        iframe.style.height = e.data.height + 'px';
      }
    }
  }, false);
</script>
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
