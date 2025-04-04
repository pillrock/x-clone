# X-Clone UI 🚀 <unfinished>

A modern, responsive clone of X (formerly Twitter) built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates advanced UI implementations and modern web development practices.

![X-Clone UI Preview](public/preview.png)

## ✨ Features

- 🎯 Pixel-perfect UI clone of X's interface
- 📱 Fully responsive design
- 🔄 Real-time-like interactions
- 🖼️ Dynamic image loading with ImageKit integration
- 🎭 Modal-based navigation
- 📍 Sticky header with smart scroll detection
- 🔍 Profile view with dynamic routing
- 🎨 Modern and clean UI with Tailwind CSS

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Image Processing:** ImageKit.io
- **State Management:** React Hooks
- **Routing:** Next.js App Router
- **Code Quality:** ESLint, Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/pillrock/x-clone.git
cd x-clone
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env` file in the root directory and add your ImageKit credentials:

```env
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_url_endpoint
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
x-clone-ui/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable UI components
│   ├── utils/              # Utility functions
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
├── styles/                # Global styles
└── ...config files
```

## 🎯 Key Components

- **Feed:** Dynamic content feed with post rendering
- **LeftBar:** Navigation sidebar with responsive design
- **ModalCover:** Reusable modal component for photos and posts
- **ImageKit Integration:** Optimized image loading and processing
- **Profile Page:** Dynamic user profiles with sticky header

## 🔧 Configuration

### ImageKit Setup

The project uses ImageKit for image optimization. Make sure to:

1. Create an ImageKit account
2. Set up your environment variables
3. Configure the ImageKit client in `src/components/ImageKit.tsx`

### Tailwind Configuration

Customize the design system in `tailwind.config.js`:

- Colors
- Typography
- Breakpoints
- Custom utilities

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from X (Twitter)
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- ImageKit for image optimization

---

Made with ❤️ by [PillRock]
