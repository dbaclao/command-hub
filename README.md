# Command Hub

A centralized workspace for all personal tooling and utilities, built with modern web technologies that focus on performance and developer experience.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Charts:** [Recharts](https://recharts.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## Key Features

- **Command Palette:** Integrated `cmdk` for fast and keyboard-first navigation.
- **Data Visualization:** Interactive charts and graphs powered by `recharts`.
- **Modern UI:** Clean, accessible components from Radix UI and Shadcn.
- **Theme Support:** Dark/Light mode support with `next-themes`.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

This project uses the Next.js App Router structure:

- `/app`: Pages, layouts, and route handlers.
- `/components`: Reusable UI components (shadcn/ui).
- `/lib`: Utility functions and shared libraries.
- `/hooks`: Custom React hooks.
- `/public`: Static assets served directly.

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about utility-first CSS.
- [Shadcn UI Documentation](https://ui.shadcn.com/docs) - read the documentation for the components.
