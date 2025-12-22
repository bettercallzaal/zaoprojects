# 🧩 ZAO Project Hub: V1 Embed Guide

This guide provides the final, production-ready specifications for integrating the ZAO Projects Dashboard into your Webflow site or external platform.

---

## � The V1 Master Template
Copy and paste this code into a Webflow "Embed" element. This version is optimized for **speed**, **security**, and a **clean infrastructure aesthetic**.

```html
<!-- ZAO Infrastructure Hub Widget -->
<div id="zao-portal-container" style="position: relative; width: 100%;">
  <iframe 
    id="zao-iframe"
    src="https://zaoprojects.vercel.app/embed" 
    title="ZAO Ecosystem Project Progress"
    width="100%" 
    frameborder="0" 
    scrolling="no"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
    style="background: #050b14; min-height: 400px; display: block; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);"
  ></iframe>
</div>

<!-- Auto-Resizer Script: Essential for dynamic height -->
<script>
  window.addEventListener('message', function(e) {
    if (e.data.type === 'resize' && e.data.height) {
      const iframe = document.getElementById('zao-iframe');
      if (iframe) {
        // Smooth height adjustment
        iframe.style.height = e.data.height + 'px';
      }
    }
  }, false);
</script>
```

---

## 🎨 V1 Defaults & Parameters
The widget is pre-configured with the **Official ZAO Theme** (Blue/Yellow). You can customize it by adding parameters to the `src` URL.

### ⚙️ Functional Parameters

| Parameter | Default | Example | Description |
| :--- | :--- | :--- | :--- |
| `limit` | `20` | `?limit=5` | Number of projects to display. |
| `cols` | `1` | `?cols=2` | Grid columns (works best for wide layouts). |
| `category` | `All` | `?category=Platforms` | Filter by specific ecosystem sector. |
| `bg` | `#050b14` | `?bg=000000` | Custom background hex. Use `&bg=none` for transparent. |
| `deepdive` | `false` | `?deepdive=true` | Shows the high-detail "Details" button. |

### 🛠️ Example Custom URL:
`https://zaoprojects.vercel.app/embed?cols=2&bg=none&deepdive=true`

---

## �️ Best Practices Implemented
*   **Lazy Loading**: The widget only loads when it enters the viewport, keeping your main site fast.
*   **Security Sandbox**: Restricted to essentials to prevent cross-site scripting risks.
*   **ARIA Labels**: Fully accessible for screen readers and SEO crawlers.
*   **Mobile Optimized**: Component layout automatically tightens for smaller screens.

---

## 👨‍💻 JSON Data API
For developers who want to build custom lists in Webflow CMS or Wized:
**Endpoint:** `https://zaoprojects.vercel.app/api/projects`

---
*V1 Release: Decentralized Infrastructure Hub — 2025*
