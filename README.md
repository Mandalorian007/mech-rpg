# Mech RPG Wiki & Builder

A comprehensive resource wiki and builder for a mech-focused tabletop RPG system, built with Next.js, TypeScript, and TanStack Table.

## 🚀 Live Development Server

The project is currently running at `http://localhost:3000`

## 📋 Project Overview

This application serves as both a wiki and builder for a mech-focused tabletop RPG system similar to D&D 5e but specialized for mechanical combat units. The system emphasizes:

- **Mech Customization**: Detailed chassis with hardpoint systems
- **Component Management**: Weapons, armor, and equipment specifications  
- **Data-Driven Design**: TypeScript interfaces with structured content
- **Modern UI**: TanStack Table for advanced data visualization

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 15.3.3 (App Router)
- **Language**: TypeScript 5.8.3 (Strict Mode)
- **Styling**: Tailwind CSS 4.1.10
- **Data Tables**: TanStack Table 8.21.3
- **Icons**: Lucide React 0.515.0
- **Package Manager**: pnpm

### Project Structure
```
src/
├── app/                     # Next.js App Router pages
│   ├── components/          # Components data table page
│   ├── armor/              # Armor data table page  
│   ├── mechs/              # Mechs data table page
│   ├── builder/            # Mech builder (TODO stub)
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Navigation, header, footer
│   ├── tables/             # TanStack Table components
│   └── builder/            # Builder components (empty)
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   └── utils.ts            # Utility functions
└── content/                # Data source files
    ├── index.ts            # Main data exports
    ├── components.ts       # Weapons & equipment data
    ├── armor.ts            # Armor specifications
    └── mechs.ts            # Mech chassis data
```

## 🎯 Core Features

### Current Implementation
- ✅ **Home Page**: Navigation hub with feature cards
- ✅ **Builder Stub**: Placeholder with planned features list
- ✅ **Data Structure**: Complete TypeScript interfaces
- ✅ **Content System**: Exportable data arrays ready for population
- ✅ **Responsive Design**: Mobile-friendly Tailwind CSS layout
- ✅ **Type Safety**: Strict TypeScript throughout

### Planned Features  
- 🔄 **TanStack Tables**: Advanced sorting, filtering, search
- 🔄 **Data Population**: Google Sheets integration
- 🔄 **Mech Builder**: Interactive drag-and-drop interface
- 🔄 **Export System**: Printable mech sheets

## 📊 Data Model

### Core Interfaces

```typescript
// Component system
interface Component {
  name: string;
  tonnage: number;
  projectileCount?: number;
}

// Armor specifications  
interface ArmorType {
  name: string;
  hpPerTon: number;
}

// Mech chassis
interface MechChassis {
  name: string;
  tonnage: number;
  mechType: MechType; // Light, Medium, Large, Siege
  maxArmorTonnage: number;
  baseSpeed: number;
  hexSpeed: number;
  hardpoints: HardpointLayout; // 8 body sections
}
```

### Content Organization
- **Components**: Weapons, equipment, ammunition (empty array)
- **Armor**: Protection types with HP/Ton ratios (empty array)
- **Mechs**: Chassis by type (Light/Medium/Large/Siege) (empty arrays)

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- pnpm package manager

### Installation & Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run linting and type checks
pnpm verify
```

### Development Scripts
- `pnpm dev` - Start development server
- `pnpm build` - Production build
- `pnpm start` - Start production server
- `pnpm lint` - ESLint checking
- `pnpm type-check` - TypeScript validation
- `pnpm verify` - Run lint + type-check

## 📝 Content Management

### Adding Data
1. **Components**: Edit `src/content/components.ts`
2. **Armor**: Edit `src/content/armor.ts`
3. **Mechs**: Edit `src/content/mechs.ts`
4. **Export**: All data auto-exports from `src/content/index.ts`

### Data Import Process (Planned)
1. Export data from Google Sheets as JSON/CSV
2. Transform to TypeScript arrays
3. Validate against interface types
4. Update content files

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones for mech-tech aesthetic
- **Secondary**: Gray scale for professional look
- **UI**: Consistent spacing and typography

### Component Classes
- `.btn-primary` - Primary action buttons
- `.btn-secondary` - Secondary actions  
- `.card` - Content containers
- `.table-cell` / `.table-header` - Table styling

## 🚀 Deployment

The project is configured for easy deployment to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any static hosting** (after `pnpm build`)

## 📚 Next Steps

### Phase 2: Table Implementation
1. Create reusable DataTable component with TanStack Table
2. Implement column definitions for each data type
3. Add sorting, filtering, and global search
4. Create specialized table components (ComponentsTable, ArmorTable, MechsTable)

### Phase 3: Data Integration  
1. Convert Google Sheets data to JSON/TypeScript
2. Populate content arrays with real data
3. Add data validation and error handling
4. Implement cross-referencing between data types

### Phase 4: Builder Development
1. Design mech builder interface
2. Implement drag-and-drop component installation
3. Add real-time validation (tonnage, hardpoints)
4. Create export functionality for mech sheets

## 🤝 Contributing

This project follows TypeScript best practices:
- Explicit return types for all functions
- No `any` types allowed
- Consistent import patterns (`@/` for internal modules)
- ESLint + Prettier for code quality

## 📄 License

ISC License - See package.json for details

---

**Status**: ✅ Core implementation complete, ready for data population and table development 