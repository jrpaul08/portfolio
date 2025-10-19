# Components Structure

This directory contains all React components organized in their own folders for better maintainability and development practices.

## Structure

```
components/
├── Header/
│   ├── Header.tsx         # Component
│   └── Header.css         # Styles
├── Hero/
│   ├── Hero.tsx
│   └── Hero.css
├── About/
│   ├── About.tsx
│   └── About.css
├── Proficiencies/
│   ├── Proficiencies.tsx
│   └── Proficiencies.css
├── Projects/
│   ├── Projects.tsx
│   └── Projects.css
├── Tools/
│   ├── Tools.tsx
│   └── Tools.css
├── Contact/
│   ├── Contact.tsx
│   └── Contact.css
├── ProjectDetail/
│   ├── ProjectDetail.tsx
│   └── ProjectDetail.css
└── README.md              # This file
```

## Benefits

- **Modularity**: Each component is self-contained with its styles
- **Maintainability**: Easy to find and modify specific components
- **Scalability**: Easy to add new components following the same pattern
- **Direct Imports**: Clear, explicit import paths
- **Separation of Concerns**: Styles are co-located with components

## Usage

```tsx
// Import components directly
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
```
