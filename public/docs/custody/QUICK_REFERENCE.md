# Quick Reference - Modular Documentation

## File Locations

### Main Files
- **New index.html**: `/docs/custody/index.html` (227 lines)
- **Backup**: `/docs/custody/index.html.backup` (4,648 lines)
- **Sections**: `/docs/custody/sections/en/*.html` (15 files)

### Documentation
- **Summary**: `/docs/custody/REFACTORING_SUMMARY.md`
- **Maintenance Guide**: `/docs/custody/sections/README.md`
- **Quick Reference**: This file

## Section Files Created

| Section ID | Filename | Content |
|------------|----------|---------|
| introduction | introduction.html | Overview, features, blockchains |
| quick-start | quick-start.html | 5-minute setup guide |
| authentication | authentication.html | API keys, permissions |
| mpc-architecture | mpc-architecture.html | MPC 2-of-3 explanation |
| omnibus-system | omnibus-system.html | Omnibus wallet details |
| balance-structure | balance-structure.html | Double-entry accounting |
| deposit-handling | deposit-handling.html | Deposit balance updates |
| withdrawal-handling | withdrawal-handling.html | Withdrawal balance logic |
| balance-verification | balance-verification.html | Balance reconciliation |
| deposit-flow | deposit-flow.html | Deposit workflow |
| withdrawal-flow | withdrawal-flow.html | Withdrawal workflow |
| approval-workflow | approval-workflow.html | Approval process |
| webhook-events | webhooks.html | All 15 webhook events |
| webhook-security | webhook-security.html | Signature verification |
| webhook-setup | webhook-setup.html | Setup instructions |

## Usage Examples

### View a Section
```
/docs/custody/index.html#balance-structure
/docs/custody/index.html#webhooks
/docs/custody/index.html#quick-start
```

### Edit a Section
```bash
# Edit balance structure section
vim /docs/custody/sections/en/balance-structure.html

# Changes appear immediately on page reload
```

### Add New Section
```bash
# 1. Create section file
cat > /docs/custody/sections/en/new-section.html << 'EOF'
<h1 class="text-4xl font-bold mb-6">New Section</h1>
<p>Content here...</p>
EOF

# 2. Add to sidebar in index.html
# Find sidebar, add:
# <a href="#new-section" class="menu-item ...">New Section</a>

# 3. Add to sectionMap in index.html
# 'new-section': 'new-section'
```

## Rollback

```bash
cd /docs/custody
cp index.html.backup index.html
```

## Test URLs

- Introduction: `#introduction`
- Quick Start: `#quick-start`
- Balance Structure: `#balance-structure`
- Webhooks: `#webhook-events`
- Deposit Flow: `#deposit-flow`

## Key Features

✅ Dynamic section loading  
✅ Hash-based navigation  
✅ Loading indicators  
✅ Error handling  
✅ Prism.js code highlighting  
✅ Active menu tracking  
✅ 95% file size reduction  

## Support

For questions or issues, refer to:
- REFACTORING_SUMMARY.md (complete details)
- sections/README.md (maintenance guide)
