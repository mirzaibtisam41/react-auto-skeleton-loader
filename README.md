# React Auto Skeleton Loader

A lightweight React utility to automatically generate **skeleton loaders** for any component's children. No need to manually write skeletons for text, images, inputs, videos, audio, SVGs, or canvas — AutoSkeleton handles them all.

## 🚀 Features

- ✅ Auto-detects element type (`text`, `img`, `input`, `video`, `audio`, `svg`, `canvas`, etc.)
- ✅ Wraps children and shows **skeleton placeholders** while `loading` is true
- ✅ Supports deeply nested elements (recursive rendering)
- ✅ Works seamlessly with **React** and **Next.js**

## 📦 Installation

# with npm

npm install react-auto-skeleton-loader

# or with yarn

yarn add react-auto-skeleton-loader

🛠️ Usage

import { AutoSkeleton } from 'react-auto-skeleton-loader';

function MyComponent() {
const [loading, setLoading] = useState(true);

return (
<AutoSkeleton loading={loading}>
<div className="user-profile">
<img src="avatar.jpg" alt="User Avatar" />
<h2>John Doe</h2>
<p>Software Developer</p>
<button>Follow</button>
</div>
</AutoSkeleton>
);
}
