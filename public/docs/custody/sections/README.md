# Custody Documentation - Modular Structure

## Overview
The custody documentation has been refactored into a modular structure for better maintainability and easier content updates.

## Directory Structure
```
/docs/custody/
├── index.html                    # Main layout file with JavaScript loader
├── index.html.backup             # Backup of original monolithic file
└── sections/
    └── en/                       # English section files
        ├── introduction.html
        ├── quick-start.html
        ├── authentication.html
        ├── mpc-architecture.html
        ├── omnibus-system.html
        ├── balance-structure.html
        ├── deposit-handling.html
        ├── withdrawal-handling.html
        ├── balance-verification.html
        ├── deposit-flow.html
        ├── withdrawal-flow.html
        ├── approval-workflow.html
        ├── webhooks.html
        ├── webhook-security.html
        └── webhook-setup.html
```

## How It Works

### Main Layout (index.html)
The main `index.html` file contains:
- HTML structure (head, body)
- Header with language switcher
- Sidebar navigation menu
- Empty content container (`<div id="content-container"></div>`)
- JavaScript loader that dynamically fetches section content

### Section Files
Each section file contains ONLY the content for that section:
- No `<html>`, `<head>`, or `<body>` tags
- Pure HTML content starting with the section heading
- All formatting, code blocks, and tables preserved
- Prism.js code highlighting maintained

### JavaScript Loader
The loader in `index.html` handles:
1. Hash-based navigation (`#section-name`)
2. Dynamic content fetching from `/docs/custody/sections/en/{section}.html`
3. Loading indicators during fetch
4. Error handling for missing sections
5. Prism.js re-highlighting after content loads
6. Active menu item highlighting
7. Scroll to top on section change

## Adding New Sections

1. Create a new HTML file in `/sections/en/`
2. Add only the content (no wrapper tags)
3. Update the sidebar in `index.html`:
   ```html
   <a href="#new-section" class="menu-item ...">New Section</a>
   ```
4. Add mapping in the JavaScript `sectionMap`:
   ```javascript
   'new-section': 'new-section'
   ```

## Benefits

1. **Maintainability**: Each section is independent and easy to update
2. **Performance**: Only loads the section being viewed
3. **Scalability**: Easy to add new sections or languages
4. **Code Organization**: Clear separation of concerns
5. **Size Reduction**: Main file reduced from 4648 lines to 227 lines

## Language Support

To add Korean translations:
1. Create `/sections/ko/` directory
2. Copy English section files and translate
3. Update language detection logic in JavaScript loader
4. Korean link already exists in header: `/docs/custody/index.ko.html`

## Testing

Test the modular structure:
1. Open `/docs/custody/index.html`
2. Click different sidebar menu items
3. Verify sections load correctly
4. Check browser console for any errors
5. Test direct hash URLs: `/docs/custody/index.html#balance-structure`
6. Verify Prism.js syntax highlighting works

## Migration Notes

- Original file backed up as `index.html.backup`
- All 15 sections successfully extracted
- Balance Management sections (new) included:
  - balance-structure.html
  - deposit-handling.html
  - withdrawal-handling.html
  - balance-verification.html
- Webhook content preserved with all 15 events
- All Tailwind CSS classes maintained
- Prism.js integration intact

## Rollback

To rollback to the original monolithic file:
```bash
cp index.html.backup index.html
```
