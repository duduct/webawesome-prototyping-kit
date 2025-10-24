# Agents.md

## Table of Contents
- [Project Setup](#project-setup)
- [Development Workflow](#development-workflow)
- [Tailwind Classes](#tailwind-classes)
- [Webawesome Guidelines](#webawesome-guidelines)
- [Tabulator](#tabulator)
- [Figma MCP](#figma-mcp)
- [Design Guidelines](#design-guidelines)
- [Design Patterns](#design-patterns)

---

## Project Setup
- Inject Webawesome css in the header: `https://early.webawesome.com/webawesome@3.0.0-beta.6/dist/styles/webawesome.css`
- Inject Webawesome load in the header with `type="module"`: `https://early.webawesome.com/webawesome@3.0.0-beta.6/dist/webawesome.loader.js`
- Inject custom icon library script with `type="module"`: `./js/icon-library.js`
- Inject app css `./dist/main.css`
- Apply `text-20 text-gray-8 font-sans leading-20` to body tag
- Keep `./src/main.css` intact, add more css files if needed

## Development Workflow

This project uses Tailwind CSS v4 with PostCSS configuration. The build process is handled through npm scripts:

### Available Scripts
- `npm run dev` - Start complete development environment (CSS watching + live server)
- `npm run build` - Build production CSS (minified)
- `npm run build-css` - Build CSS with watch mode (CSS only)
- `npm run serve` - Start local development server with live reload (server only)

### Development Process
1. Run `npm run dev` to start the complete development environment
2. Edit files in `./src/` directory or HTML files
3. CSS automatically rebuilds to `./dist/main.css`
4. Browser automatically refreshes on any changes
5. Use 127.0.0.1 instead of localhost to load JS properly

### Running the Development Server
Simply run one command for the complete development experience:
```bash
npm run dev
```

This will simultaneously:
- Watch and rebuild CSS when you make changes to `./src/main.css`
- Start a local server with live reload
- Automatically open your browser
- Refresh the page when you make changes to HTML or CSS files

### File Structure
- `./src/main.css` - Source CSS with Tailwind imports and custom theme
- `./dist/main.css` - Built CSS (auto-generated, don't edit directly)
- `./postcss.config.mjs` - PostCSS configuration with Tailwind plugin
- `./assets/icons/` - Custom SVG icons for Webawesome components
- `./js/icon-library.js` - Custom icon library registration script

---

## Tailwind Classes
This project use custom Tailwind set up, please use the correct custom CSS classes when implementing the design.

### Spacings
- 2px: p-2, m-2, h-2, w-2
- 4px: p-4, m-4, h-4, w-4
- 8px: p-8, m-8, h-8, w-8
- 12px: p-12, m-12, h-12, w-12
- 16px: p-16, m-16, h-16, w-16
- 20px: p-20, m-20, h-20, w-20
- 24px: p-24, m-24, h-24, w-24
- 28px: p-28, m-28, h-28, w-28
- 32px: p-32, m-32, h-32, w-32
- 40px: p-40, m-40, h-40, w-40
- 48px: p-48, m-48, h-48, w-48
- 56px: p-56, m-56, h-56, w-56
- 64px: p-64, m-64, h-64, w-64

### Width & Height Utilities
- Fixed widths: `w-[220px]`, `w-[360px]` (for sidebars)
- Full width: `w-full`
- Auto width: `w-auto`
- Fixed heights: `h-32`, `h-48`, `h-64` (use custom spacing values)
- Full height: `h-full`
- Auto height: `h-auto`

### Colors
- Primary: 1, 2, 3, 4, 5
- Danger: 1, 2, 3, 4, 5
- Warning: 1, 2, 3, 4, 5
- Success: 1, 2, 3, 4, 5
- Gray: 1, 2, 3, 4, 5, 6, 7, 8, 9

### Text Colors
- Primary: `text-primary-1` to `text-primary-5`
- Danger: `text-danger-1` to `text-danger-5`
- Warning: `text-warning-1` to `text-warning-5`
- Success: `text-success-1` to `text-success-5`
- Gray: `text-gray-1` to `text-gray-9`
- Default: `text-gray-8` (most common)

### Background Colors
- Primary: `bg-primary-1` to `bg-primary-5`
- Danger: `bg-danger-1` to `bg-danger-5`
- Warning: `bg-warning-1` to `bg-warning-5`
- Success: `bg-success-1` to `bg-success-5`
- Gray: `bg-gray-1` to `bg-gray-9`
- Default: `bg-white`

### Border Colors
- Primary: `border-primary-1` to `border-primary-5`
- Danger: `border-danger-1` to `border-danger-5`
- Warning: `border-warning-1` to `border-warning-5`
- Success: `border-success-1` to `border-success-5`
- Gray: `border-gray-1` to `border-gray-9`
- Default: `border-gray-3` (dividers)

### Corner radius
- 2px: `rounded-2`
- 3px: `rounded-3`
- 4px: `rounded-4`
- 8px: `rounded-8`
- 12px: `rounded-12`
- 16px: `rounded-16`
- 20px: `rounded-20`

### Typography
- Default font: `font-sans`
- Default text color: `text-gray-8`
- `font-sans` is SF Pro on Mac, Segoe UI on Windows

#### Font Sizes & Use Cases
- `text-10` (10px): Small labels, captions
- `text-11` (11px): Small text, secondary info
- `text-12` (12px): Small body text
- `text-13` (13px): Default body text
- `text-15` (15px): Large body text
- `text-17` (17px): Small headings
- `text-20` (20px): Medium headings
- `text-23` (23px): Large headings

#### Line Heights
- `leading-16` (16px): Condensed text
- `leading-20` (20px): Default line height
- `leading-24` (24px): Comfortable reading
- `leading-28` (28px): Spacious text
- `leading-32` (32px): Large text spacing

#### Common Typography Patterns
```html
<!-- Body text -->
<p class="text-13 text-gray-8 leading-20">Default body text</p>

<!-- Large body text -->
<p class="text-15 text-gray-8 leading-24">Large body text</p>

<!-- Small text -->
<p class="text-11 text-gray-6 leading-16">Secondary information</p>

<!-- Heading -->
<h1 class="text-20 text-gray-8 leading-28 font-sans">Page heading</h1>
```

## Webawesome guidelines
- Prefer to use Webawesome components for most of the time, especially when converting a Figma instance.
- Webawesome homepage: https://webawesome.com/
- Webawesome components: https://webawesome.com/docs/components/
- Always check online documentation before implementing the components

### Avatar
- Webawesome avatar: https://webawesome.com/docs/components/avatar/
- Figma avatar component has 3 sizes
- 32px -> `<wa-avatar style="--size: 2rem">`
- 24px -> `<wa-avatar style="--size: 1.5rem">`
- 20px -> `<wa-avatar style="--size: 1.25rem">`
- 16px -> `<wa-avatar style="--size: 1rem">`
- Prefer using initial avatar, example: `<wa-avatar initials="WA" label="Avatar with initials: WA"></wa-avatar>`

#### Complete Avatar Examples
```html
<!-- Initials avatar -->
<wa-avatar initials="SL" label="Avatar with initials: SL"></wa-avatar>

<!-- Image avatar -->
<wa-avatar src="path/to/image.jpg" label="User avatar"></wa-avatar>

<!-- Different sizes -->
<wa-avatar style="--size: 1rem" initials="XS"></wa-avatar>
<wa-avatar style="--size: 1.5rem" initials="SM"></wa-avatar>
<wa-avatar style="--size: 2rem" initials="MD"></wa-avatar>
```

### Button
- Webawesome button: https://webawesome.com/docs/components/button/
- Button Primary -> `<wa-button variant="brand">`
- Ghost button -> `<wa-button appearance="outlined">`
- Minimal button -> `<wa-button appearance="plain">`
- Button with leading icon + text: Icon's `slot="start"`
- Button with text + trailing icon: Icon's `slot="end"`
- Button with only icon: Icon's `slot=""`

#### Complete Button Examples
```html
<!-- Primary button -->
<wa-button variant="brand">Save Changes</wa-button>

<!-- Ghost button -->
<wa-button appearance="outlined">Cancel</wa-button>

<!-- Minimal button -->
<wa-button appearance="plain">Learn More</wa-button>

<!-- Button with leading icon -->
<wa-button variant="brand">
  <wa-icon name="Plus" library="Anduin" slot="start"></wa-icon>
  Add Item
</wa-button>

<!-- Button with trailing icon -->
<wa-button appearance="outlined">
  Download
  <wa-icon name="Download" library="Anduin" slot="end"></wa-icon>
</wa-button>

<!-- Icon-only button -->
<wa-button appearance="plain">
  <wa-icon name="EllipsisHorizontal" library="Anduin" slot=""></wa-icon>
</wa-button>
```

### Icons
- Webawesome icon: https://webawesome.com/docs/components/icon#custom-icons
- Use custom icon from `assets/icons/*.svg` files instead of the default one
- Two ways to use custom icons: inline `src` attribute or custom library

#### Icon Usage Methods

**Method 1: Inline src (current approach)**
```html
<!-- Basic icon -->
<wa-icon src="assets/icons/Usersingle.svg"></wa-icon>

<!-- Icon with size -->
<wa-icon src="assets/icons/Usersingle.svg" style="--size: 1.5rem"></wa-icon>

<!-- Icon in button -->
<wa-button variant="brand">
  <wa-icon src="assets/icons/Plus.svg" slot="start"></wa-icon>
  Add User
</wa-button>
```

**Method 2: Custom library (new approach)**
```html
<!-- Basic icon -->
<wa-icon name="Usersingle" library="Anduin"></wa-icon>

<!-- Icon with size -->
<wa-icon name="Usersingle" library="Anduin" style="--size: 1.5rem"></wa-icon>

<!-- Icon in button -->
<wa-button variant="brand">
  <wa-icon name="Plus" library="Anduin" slot="start"></wa-icon>
  Add User
</wa-button>
```

#### Icon Naming Convention
- Icon names must match SVG filenames exactly (case-sensitive)
- Examples: "Search", "Filter", "Plus", "Usersingle", "EllipsisHorizontal"
- Available icons: Check `assets/icons/` directory for complete list

### Input/Textarea
- Webawesome input: https://webawesome.com/docs/components/input/
- Webawesome textarea: https://webawesome.com/docs/components/textarea/

#### Input Examples
```html
<!-- Basic input -->
<wa-input placeholder="Enter your name"></wa-input>

<!-- Input with label -->
<wa-input label="Email Address" placeholder="user@example.com"></wa-input>

<!-- Input with error -->
<wa-input label="Password" type="password" error="Password is required"></wa-input>

<!-- Textarea -->
<wa-textarea label="Description" placeholder="Enter description"></wa-textarea>
```

### Select/Dropdown
- Webawesome select: https://webawesome.com/docs/components/select/

#### Select Examples
```html
<!-- Basic select -->
<wa-select>
  <wa-option value="option1">Option 1</wa-option>
  <wa-option value="option2">Option 2</wa-option>
</wa-select>

<!-- Select with label -->
<wa-select label="Choose Category">
  <wa-option value="tech">Technology</wa-option>
  <wa-option value="design">Design</wa-option>
</wa-select>
```

### Checkbox/Radio
- Webawesome checkbox: https://webawesome.com/docs/components/checkbox/
- Webawesome radio: https://webawesome.com/docs/components/radio/

#### Form Control Examples
```html
<!-- Checkbox -->
<wa-checkbox>I agree to the terms</wa-checkbox>

<!-- Radio group -->
<wa-radio-group>
  <wa-radio value="option1">Option 1</wa-radio>
  <wa-radio value="option2">Option 2</wa-radio>
</wa-radio-group>
```

### Badge
- Webawesome badge: https://webawesome.com/docs/components/badge/

#### Badge Examples
```html
<!-- Status badge -->
<wa-badge variant="success">Active</wa-badge>
<wa-badge variant="warning">Pending</wa-badge>
<wa-badge variant="danger">Error</wa-badge>

<!-- Number badge -->
<wa-badge variant="brand">5</wa-badge>
```

### Dialog/Modal
- Webawesome dialog: https://webawesome.com/docs/components/dialog/

#### Dialog Examples
```html
<!-- Basic dialog -->
<wa-dialog>
  <wa-dialog-header>
    <h2>Confirm Action</h2>
  </wa-dialog-header>
  <wa-dialog-body>
    <p>Are you sure you want to delete this item?</p>
  </wa-dialog-body>
  <wa-dialog-footer>
    <wa-button appearance="outlined">Cancel</wa-button>
    <wa-button variant="brand">Delete</wa-button>
  </wa-dialog-footer>
</wa-dialog>
```

### Divider
- Webawesome divider: https://webawesome.com/docs/components/divider/

#### Divider Examples
```html
<!-- Basic divider -->
<wa-divider></wa-divider>

<!-- Vertical divider -->
<wa-divider vertical></wa-divider>
```

## Tabulator
- This project use Tabulator for rendering data table.
- Tabulator link: https://tabulator.info/
- Turn off Filter feature by default
- Turn off Pagination by default
- If the table has More button, use `EllipsisHorizontal.svg` icon
- This project already has customized tabulator in the main.css file, no need to add extra styling

### Basic Tabulator Setup
```html
<div id="example-table"></div>

<script>
const table = new Tabulator("#example-table", {
  data: [
    {id: 1, name: "John Doe", email: "john@example.com", status: "Active"},
    {id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive"}
  ],
  columns: [
    {title: "Name", field: "name", width: 200},
    {title: "Email", field: "email", width: 250},
    {title: "Status", field: "status", width: 120},
    {
      title: "Actions", 
      width: 100,
      formatter: function(cell, formatterParams) {
        return `<wa-button appearance="plain">
          <wa-icon name="EllipsisHorizontal" library="Anduin"></wa-icon>
        </wa-button>`;
      }
    }
  ],
  layout: "fitDataTable",
  pagination: false,
  movableColumns: false,
  resizableColumns: false
});
</script>
```

### Common Column Formatters
```javascript
// Status badge formatter
{
  title: "Status",
  field: "status",
  formatter: function(cell, formatterParams) {
    const value = cell.getValue();
    const variant = value === "Active" ? "success" : "danger";
    return `<wa-badge variant="${variant}">${value}</wa-badge>`;
  }
}

// Avatar formatter
{
  title: "User",
  field: "name",
  formatter: function(cell, formatterParams) {
    const name = cell.getValue();
    const initials = name.split(' ').map(n => n[0]).join('');
    return `<wa-avatar style="--size: 1.5rem" initials="${initials}"></wa-avatar> ${name}`;
  }
}
```

## Figma MCP
- Convert Figma instance to Webawesome components if possible
- Convert Figma auto layout to flex and Tailwind CSS classes if possible
- Ignore letter-spacing when see SF Pro font
- Use `font-sans` when see SF Pro font
- Ignore fixed height if the frame is auto layout and the height is hug content
- When the frame height is fixed, use correct custom Tailwind CSS classes instead of the default one, example: height: 32px -> h-32 (32px) instead of h-4 (default class)
- When the frame height is auto, then don't add `h-*` classes
- When see a table, implement it with Tabulator
- When see an icon, check its component name to use the corresponding one in `assets/icons` folder
- For layout: prefer `flex` or `grid` over `absolute`

## Design Guidelines
### Typography
- Body font size: `13px/20px`
- Body large: `15px/24px`
- Body small: `11px/16px`
- Default color: `gray-8`
- Secondary color: `gray-7`
- Tertiary color: `gray-6`
- Disabled color: `gray-5`
- Placeholder color: `gray-5`
- Link color: `primary-4`
- Danger color: `danger-4`
- Warning color: `warning-5`

### Colors
- Background default: white
- Background gray: `gray-1`
- Container divider: `gray-3`

## Design Patterns
- Apply these design patterns when users didn't attach a design image or Figma file
- Use fixed width for the sidebar, normally between `220px` to `360px`, example: `w-[220px]`

## Pattern Templates
- Reference patterns from `patterns/*` directory when building prototypes
- These templates provide complete, working examples of common layouts and components
- Use them as starting points or reference implementations

### Available Pattern Templates
- `patterns/data-table-layout.html` - Data Table Layout with header, search, filters, and content area
  - Complete page structure with header and main content
  - Search input with icon and filter button
  - Action buttons (neutral and brand variants)
  - Content placeholder area ready for Tabulator integration
  - Responsive layout with proper spacing and typography
  - Includes Tabulator CSS and JS integration

### Using Pattern Templates
1. Copy the relevant pattern template as a starting point
2. Modify the content, styling, and components as needed
3. Replace placeholder content with actual data and functionality
4. Maintain the established layout structure and spacing
5. Follow the same component patterns and class naming conventions

### Common Layout Examples

#### Card Layout
```html
<div class="bg-white border border-gray-3 rounded-8 p-24">
  <h3 class="text-17 text-gray-8 leading-24 mb-16">Card Title</h3>
  <p class="text-13 text-gray-7 leading-20 mb-20">Card description text goes here.</p>
  <div class="flex gap-12">
    <wa-button variant="brand">Primary Action</wa-button>
    <wa-button appearance="outlined">Secondary</wa-button>
  </div>
</div>
```

#### Form Layout
```html
<div class="bg-white border border-gray-3 rounded-8 p-24">
  <h2 class="text-20 text-gray-8 leading-28 mb-24">User Settings</h2>
  <div class="space-y-20">
    <wa-input label="Full Name" placeholder="Enter your name"></wa-input>
    <wa-input label="Email" type="email" placeholder="user@example.com"></wa-input>
    <wa-select label="Role">
      <wa-option value="admin">Administrator</wa-option>
      <wa-option value="user">User</wa-option>
    </wa-select>
  </div>
  <div class="flex gap-12 mt-32">
    <wa-button variant="brand">Save Changes</wa-button>
    <wa-button appearance="outlined">Cancel</wa-button>
  </div>
</div>
```

#### Sidebar Layout
```html
<div class="flex h-full">
  <!-- Sidebar -->
  <div class="w-[240px] bg-gray-1 border-r border-gray-3 p-24">
    <h3 class="text-15 text-gray-8 leading-24 mb-20">Navigation</h3>
    <nav class="space-y-8">
      <a href="#" class="block p-12 text-13 text-gray-7 hover:bg-gray-2 rounded-4">Dashboard</a>
      <a href="#" class="block p-12 text-13 text-gray-7 hover:bg-gray-2 rounded-4">Users</a>
      <a href="#" class="block p-12 text-13 text-gray-7 hover:bg-gray-2 rounded-4">Settings</a>
    </nav>
  </div>
  
  <!-- Main Content -->
  <div class="flex-1 p-24">
    <h1 class="text-23 text-gray-8 leading-32 mb-24">Page Title</h1>
    <p class="text-13 text-gray-7 leading-20">Main content goes here.</p>
  </div>
</div>
```

#### Table with Actions
```html
<div class="bg-white border border-gray-3 rounded-8">
  <div class="p-24 border-b border-gray-3">
    <div class="flex justify-between items-center">
      <h3 class="text-17 text-gray-8 leading-24">Users</h3>
      <wa-button variant="brand">
        <wa-icon name="Plus" library="Anduin" slot="start"></wa-icon>
        Add User
      </wa-button>
    </div>
  </div>
  <div id="users-table"></div>
</div>
```