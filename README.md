# FanFare Admin Panel
# FanFare Admin Panel built with Next JS 12+, Material UI and TypeScript 

🚀 FanFare Admin Panel written in Next.js, Material UI and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, VSCode, Netlify, PostCSS, Material UI.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project. You can check a [Next js templates demo](https://creativedesignsguru.com/demo/nextjs-landing-page/).


### DEMO

Check out demo [live demo](https://github.com/FanFareBD/ffbd-admin/tree/beta).

### Features

Developer experience first:

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎨 Integrate with [Material UI](https://mui.com/)
- 💅 PostCSS for processing Material UI and integrated to `styled-jsx`
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 17
- ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- 🌈 Include a FREE theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Included Components

- <ListComponent/>	List Component with pagination
- <FilterComponent/>	Dynamic Filter Component
- <TabbarComponent/>	Tabbar Component.
- <ButtonComponent/>	Button Component	
- <SearchComponent/>	Search Component	
- <UploadTypeComponent/>	Upload Type Select Component	
		

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js and npm or yarn

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/FanFareBD/ffbd-admin.git
cd ffbd-admin
```

Then, you can run locally in development mode with live reload:

```
npm install
npm run dev 
```
or 
```
yarn
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project. For your information, Next JS need to take some time to compile the project for your first time.

```
.
├── README.md            # README file
├── next.config.js       # Next JS configuration
├── public               # Public folder
│   └── assets
│       └── images       # Image used by default template
├── src
│   ├── components       # Atomic background component
│   ├── hero             # Atomic hero component
│   ├── layout           # Atomic layout component
│   ├── navigation       # Atomic navigation component
│   ├── pages            # Next JS pages
│   ├── styles           # PostCSS style folder with Tailwind
│   ├── templates        # Default template
│   └── utils            # Utility folder
├── tailwind.config.js   # Material UI configuration
└── tsconfig.json        # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Material UI](https://mui.com/).

You can create an optimized production build with:

```
npm run build-prod
```

