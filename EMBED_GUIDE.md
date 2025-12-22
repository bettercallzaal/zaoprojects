# 🧩 ZAO Iframe: Master Integration Guide (2025)

This guide provides the definitive, production-ready iframe code for ZAO Projects, optimized for **Security**, **Performance**, and **Accessibility**.

---

## 🛠️ The Master Iframe Template
Copy and paste this code into your Webflow/HTML embed. This template follows modern best practices to ensure it won't slow down your site or leave it vulnerable.

```html
<!-- Accessibility: Descriptive wrapper for SEO -->
<div id="zao-portal-container" style="position: relative; width: 100%;">
  <iframe 
    id="zao-iframe"
    src="https://zaoprojects.vercel.app/embed?theme=zao" 
    title="ZAO Ecosystem Project Progress Dashboard"
    width="100%" 
    frameborder="0" 
    scrolling="no"
    loading="lazy"
    referrerpolicy="no-referrer"
    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
    style="background: transparent; min-height: 400px; display: block; border-radius: 12px;"
  ></iframe>
</div>

<!-- Parent-to-Child Communication (Resizer) -->
<script>
  window.addEventListener('message', function(e) {
    if (e.data.type === 'resize' && e.data.height) {
      const iframe = document.getElementById('zao-iframe');
      if (iframe) {
        // Smooth height adjustment to prevent layout shifts
        iframe.style.height = e.data.height + 'px';
      }
    }
  }, false);
</script>
```

---

## 🎨 Theme & Color Parameters
You can customize the look instantly by adding these tags to the `src` URL.

### 1. The ZAO Official Theme
**Colors:** Blue (#141e27) & Yellow (#e0ddaa)
- **Tag:** `&theme=zao`
- **Result:** Uses a deep void background with yellow progress bars and accents.

### 2. Custom Hex Colors
You can pass any color without the `#` symbol.
- **Primary Color:** `&primary=e0ddaa` (Changes bars and highlights)
- **Accent Color:** `&accent=141e27` (Changes glows and secondary elements)

---

## ⚙️ Functional Parameters

| Parameter | Default | Example | Description |
| :--- | :--- | :--- | :--- |
| `limit` | `20` | `&limit=3` | Number of projects (defaults to 20/All). |
| `cols` | `1` | `&cols=2` | Grid columns for wide layout areas. |
| `category` | `All` | `&category=Platforms` | Show only one sector of the fractal. |
| `branding` | `true` | `&branding=false` | Hides the "Powered by ZAO" footer. |
| `bg` | `none` | `&bg=000000` | Custom background color (use `none` for transparent). |
| `deepdive` | `false` | `&deepdive=true` | Shows the "Deep Dive" button on project cards. |

---

## 🚀 Best Practices & WHY We Use Them

1.  **`loading="lazy"`**: Defer loading the dashboard until someone actually scrolls to it. This saves your site's load time.
2.  **`sandbox`**: Security measure that prevents the iframe from "escaping" or doing things it shouldn't (like redirecting your main site).
3.  **`title="..."`**: Crucial for screen readers. It tells blind or visually impaired users exactly what is inside the iframe.
4.  **`referrerpolicy="no-referrer"`**: Privacy protection for your users.
5.  **Transparent Background**: We forced the root container to be transparent so it takes the color of your Webflow section automatically.

---

## 👨‍💻 JSON API (Advanced)
If you want to build a custom list using **Webflow CMS** or **Wized**, use our endpoint:
`https://zaoprojects.vercel.app/api/projects?theme=zao`
