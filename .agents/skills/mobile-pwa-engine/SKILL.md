---
name: mobile-pwa-engine
description: >-
  Use this skill when developing mobile-first Progressive Web Apps (PWA), ensuring
  offline stability, multi-profile user data isolation (preventing data mixing between users/devices),
  and native mobile app feel (home screen installation, viewport meta, touch optimization).
---

# Mobile PWA & Multi-Profile Data Engine Skill

This skill governs best practices for zero-backend and hybrid mobile-friendly web apps that require strong user isolation, mobile home screen installation, and high stability across desktop and smartphones.

## 1. PWA & Mobile Stability

- **Viewport Configuration:**
  `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">`
  Prevents unwanted double-tap zoom while ensuring native app proportions.
- **PWA Manifest & App Shell:**
  - Standalone display mode (`"display": "standalone"`) hides the browser URL bar when installed to Home Screen.
  - Theme colors configured for iOS Status Bar and Android Chrome navigation bar.
- **Offline First:**
  The core app logic must run without requiring an active internet connection.

## 2. Multi-User & Multi-Profile Data Isolation

To allow friends, family, or different devices to use the application without mixing data:

1. **Device-Level Isolation (Zero-Config):**
   - Each browser instance (different phones or different browsers) utilizes an independent `localStorage` sandbox.
   - When User A opens the web app on their phone and User B opens it on theirs, they NEVER share or overwrite each other's data.

2. **In-App Multi-Profile Engine:**
   - The app provides an active profile identifier (e.g., `currentProfileId = 'profile_tahir'`, `profile_friend`, etc.).
   - Database schema partitions records by profile:
     ```json
     {
       "activeProfileId": "default",
       "profiles": [
         { "id": "default", "name": "Benim Bütçem", "avatar": "👤" },
         { "id": "friend_1", "name": "Arkadaşımın Bütçesi", "avatar": "⭐" }
       ],
       "data": {
         "default": { "items": [] },
         "friend_1": { "items": [] }
       }
     }
     ```
   - Switching profiles instantly switches the active dataset without reloading or leaking data.

3. **Backup & Cross-Device Transfer:**
   - 1-click JSON Export & Import per profile or all profiles.
   - Optional QR code export for rapid phone-to-PC or PC-to-phone data transfer.
