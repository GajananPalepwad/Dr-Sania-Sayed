# Dr. Sania A Sayed – Eye Specialist Website (React)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher) — download from https://nodejs.org
- npm (comes with Node.js)

### Setup Steps

1. **Unzip** this folder anywhere on your computer.

2. **Open a terminal / command prompt** inside the `dr-sania-website` folder.

3. **Install dependencies:**
   ```bash
   npm install
   ``` 
 
4. **Start the development server:**
   ```bash
   npm start
   ```

5. The website will open automatically at **http://localhost:3000**

---

## 📁 Project Structure

```
dr-sania-website/
├── public/
│   ├── index.html          ← HTML entry point
│   └── images/             ← All 10 uploaded photos
│       ├── img-headshot-1.jpeg
│       ├── img-headshot-2.jpeg
│       ├── img-surgery.jpeg
│       ├── img-conference.jpeg
│       ├── img-camp-desk.jpeg
│       ├── img-camp-consult.jpeg
│       ├── img-wellness-1.jpeg
│       ├── img-wellness-2.jpeg
│       ├── img-ptosis-ba.jpeg
│       └── img-cataract-ba.jpeg
├── src/
│   ├── index.js            ← React entry point
│   ├── index.css           ← All global styles
│   └── App.jsx             ← All React components
└── package.json
```

## ✏️ Customisation

- **Phone number**: Search for `98XXX XXXXX` in `App.jsx` and replace with the real number.
- **WhatsApp link**: Find `wa.me/91XXXXXXXXXX` and replace with the real number.
- **Email**: Replace `dr.sania@kjsmc.edu.in` if needed.
- **Images**: Replace any file in `public/images/` — keep the same filename.

## 🏗️ Build for Production


```bash
npm run build
```
This creates a `build/` folder ready to upload to any web host.
