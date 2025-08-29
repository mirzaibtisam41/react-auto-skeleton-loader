# React Auto Skeleton Loader

A lightweight React utility to automatically generate **skeleton loaders** for any component's children. No need to manually write skeletons for text, images, inputs, videos, audio, SVGs, or canvas — `AutoSkeleton` handles them all.

## 🚀 Features

- ✅ Auto-detects element type (`text`, `img`, `input`, `video`, `audio`, `svg`, `canvas`, etc.)
- ✅ Wraps children and shows **skeleton placeholders** while `loading` is `true`
- ✅ Supports deeply nested elements (recursive rendering)
- ✅ Minimal setup — just wrap your component with `<AutoSkeleton>`
- ✅ Works seamlessly with **React** and **Next.js**

## 📦 Installation

### Using npm

```bash
npm install react-auto-skeleton-loader
Using yarn
bash
Copy code
yarn add react-auto-skeleton-loader
🛠️ Usage
javascript
Copy code
import { useState } from 'react';
import { AutoSkeleton } from 'react-auto-skeleton-loader';

function MyComponent() {
  const [loading, setLoading] = useState(true);

  // Simulate data fetch
  setTimeout(() => setLoading(false), 3000);

  return (
    <AutoSkeleton loading={loading}>
      <div className="user-profile" style={{ padding: '20px', maxWidth: '300px' }}>
        <img src="avatar.jpg" alt="User Avatar" style={{ width: '100px', borderRadius: '50%' }} />
        <h2>John Doe</h2>
        <p>Software Developer</p>
        <button>Follow</button>
      </div>
    </AutoSkeleton>
  );
}
✅ While loading is true, skeleton placeholders will automatically replace your elements. Once loading becomes false, your actual content will appear.

🎨 Supported Elements
Text (<p>, <h1>–<h6>, <span>, etc.)

Images (<img>)

Inputs (<input>, <textarea>)

Videos (<video>)

Audio (<audio>)

SVGs (<svg>)

Canvas (<canvas>)

Buttons, divs, spans, and any nested combination

🔧 Props
Prop	Type	Default	Description
loading	boolean	true	Whether to show skeleton placeholders or not
children	ReactNode	—	The content to wrap with skeletons

⚡ Tips
Wrap only the content you want skeletonized.

Perfect for loading states while fetching API data.

💡 Example: Nested Components
javascript
Copy code
<AutoSkeleton loading={loading}>
  <div>
    <h1>Dashboard</h1>
    <div className="cards">
      <div className="card">
        <img src="chart.png" alt="Chart" />
        <p>Sales Data</p>
      </div>
      <div className="card">
        <img src="chart2.png" alt="Chart" />
        <p>Revenue Data</p>
      </div>
    </div>
  </div>
</AutoSkeleton>
Even deeply nested children will automatically show skeleton loaders.
```
