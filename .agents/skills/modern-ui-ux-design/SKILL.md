---
name: modern-ui-ux-design
description: >-
  Use this skill when designing, styling, and refining web and mobile user interfaces
  with modern, clean aesthetics (Apple/Linear style, glassmorphism, responsive micro-interactions,
  accessible dark/light themes, and ergonomic financial dashboards).
---

# Modern UI/UX Design System Skill

This skill defines the visual hierarchy, component architecture, and interaction standards for high-performance, aesthetically pleasing web applications.

## 1. Visual Hierarchy & Design Principles

- **Minimalist & Content-First:** Prioritize data clarity over decorative fluff. Crucial numbers (income, expenses, net) must be instantly readable at a glance (`tabular-nums`).
- **Color System:**
  - Dark Mode: Deep neutral base (`#0b0f19` / `#0f172a`), elevated card surfaces (`#151d2e` / `#1e293b`), crisp borders (`#26334d` with subtle opacity).
  - Light Mode: Warm slate / off-white base (`#f8fafc`), pure white card surfaces (`#ffffff`), subtle borders (`#e2e8f0`).
  - Semantics: Green for Income / Success (`#10b981`), Red/Rose for Expense / Alert (`#f43f5e`), Amber for Due Soon (`#f59e0b`), Blue/Indigo for Highlights & Net Balance (`#3b82f6` / `#6366f1`).
- **Typography:**
  - System font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, sans-serif`).
  - High contrast ratios (WCAG AA compliant).
  - Numeric figures formatted with tabular numbers for alignment in tables and financial counters.

## 2. Responsive & Mobile-First Ergonomics

- **Touch Targets:** Minimum 44px x 44px clickable areas for buttons, checkboxes, and interactive tabs.
- **Thumb Zone Design:** Place high-frequency actions (Adding an expense, switching months, quick filter) within comfortable thumb reach on mobile screens.
- **Adaptive Layouts:** Single-column stacked cards on mobile (`< 640px`), 2-column grids on tablets (`640px - 1024px`), and 4-column KPI cards on desktop (`> 1024px`).
- **Modals & Drawers:** Full-width bottom sheets or centered floating dialogs with smooth backdrop blur (`backdrop-filter: blur(8px)`).

## 3. Micro-Interactions & Feedback

- **Transitions:** Fast and natural easing (`transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`).
- **Haptic/Visual Feedback:** Active scale effects on button press (`transform: active:scale(0.97)`).
- **Toast Notifications:** Ephemeral toast alerts for saves, deletes, and profile switching.
