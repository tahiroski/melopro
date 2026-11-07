# MeloPro — Project Guidelines & Architecture

## Purpose
MeloPro is a lightweight, private, mobile-first personal finance and debt tracking web application designed for seamless use across desktop computers and smartphones.

## Key Principles
1. **Zero External Dependencies / High Performance:**
   - Keep the application fast, responsive, and reliable without requiring heavy node_modules or complex build steps.
   - Works immediately when opened in any modern browser.

2. **Mobile-First & Desktop Adaptive (PWA Ready):**
   - Must look and feel like a native mobile app on phones (iOS & Android) with comfortable touch targets (minimum 44px) and smooth transitions.
   - Expands gracefully to an ergonomic dashboard layout on desktop screens.

3. **Multi-User Data Isolation:**
   - Different users on their own phones/devices have completely independent storage (`localStorage`).
   - The application also provides an in-app Profile Switcher (e.g., "Benim Bütçem", "Arkadaşım", or custom profile names) so multiple accounts can live safely on the same device without data collisions.

4. **Reliability & Privacy:**
   - No telemetry, no ad scripts, 100% private data stored locally on the user's device.
   - Robust JSON export/import for effortless backups and device-to-device transfers.
