# ServicePro project structure

ServicePro is organised as three independent applications: the public website
and admin dashboard, the backend API, and the technician mobile application.

```text
gleam-field/
├── website/                         # Customer website and admin dashboard
│   ├── src/
│   │   ├── routes/                  # TanStack file-based routes
│   │   ├── components/
│   │   │   ├── site/                # Navbar, footer, and public-site layout
│   │   │   ├── admin/               # Admin dashboard layout and utilities
│   │   │   └── ui/                  # Reusable UI primitives
│   │   ├── assets/                  # Images and visual assets
│   │   ├── data/                    # Demo and display data
│   │   ├── hooks/                   # Reusable React hooks
│   │   ├── lib/                     # API client and shared utilities
│   │   ├── styles.css               # Tailwind theme tokens and global styles
│   │   ├── router.tsx               # Router configuration
│   │   └── start.ts                 # TanStack Start client entry
│   ├── public/                      # Public static files
│   ├── package.json
│   └── vite.config.ts
│
├── backend/                         # Express API and real-time services
│   ├── src/
│   │   ├── config/                  # Environment, database, logging, Swagger
│   │   ├── middleware/              # Authentication, validation, and error flow
│   │   ├── models/                  # Mongoose data models
│   │   ├── modules/                 # Feature modules and route handlers
│   │   │   ├── auth/                # Authentication and session management
│   │   │   ├── bookings/            # Booking lifecycle
│   │   │   ├── technicians/         # Technician profiles and verification
│   │   │   ├── services/            # Service catalogue
│   │   │   ├── users/               # User administration
│   │   │   ├── payments/            # Payment operations
│   │   │   ├── notifications/       # User and admin notifications
│   │   │   ├── support/             # Support tickets
│   │   │   ├── reviews/             # Reviews and moderation
│   │   │   ├── content/             # Public website content
│   │   │   └── admin/               # Administrative reporting and controls
│   │   ├── sockets/                 # Socket.IO events
│   │   ├── scripts/                 # Admin and demo-data seeding
│   │   ├── test/                    # API tests
│   │   ├── utils/                   # Shared API helpers
│   │   └── server.ts                # API application entry
│   ├── public/uploads/              # User-uploaded files
│   ├── docker-compose.yml
│   └── package.json
│
├── mobile/                          # Expo React Native technician app
│   ├── index.ts                     # Expo registration entry
│   ├── App.tsx                      # Application provider composition
│   ├── src/
│   │   ├── navigation/              # Root stack and bottom tabs
│   │   ├── screens/                 # Auth, jobs, profile, messages, and more
│   │   ├── components/              # Shared mobile components
│   │   ├── context/                 # Authentication and app-data contexts
│   │   ├── redux/                   # Store, slices, and API state
│   │   ├── theme/                   # Theme tokens and provider
│   │   ├── data/                    # Constants and local data
│   │   ├── helpers/                 # Shared helpers
│   │   ├── middlewares/             # Mobile middleware
│   │   └── types/                   # TypeScript types
│   ├── android/                     # Native Android project
│   ├── ios/                         # Native iOS project
│   ├── assets/                      # Mobile image assets
│   ├── app.json                     # Expo configuration
│   └── package.json
│
├── AGENTS.md                        # Agent collaboration instructions
├── API-INTEGRATION.md                # Web-to-API integration status
├── 3D design.md                     # 3D website design direction
├── README.md                         # Product and local setup overview
└── server.md                         # Server documentation
```

## How the applications connect

```text
Website (website/) ── REST API ──> Backend (backend/) ──> MongoDB
        │                                  │
        └────── Socket.IO notifications ───┘

Mobile (mobile/) ─── REST API / Socket.IO ─┘
```

## Common commands

Run commands from the application directory they belong to.

| Application | Development | Verification |
| --- | --- | --- |
| Website | `cd website && npm run dev` | `cd website && npm run build` |
| Backend | `cd backend && npm run dev` | `cd backend && npm run typecheck` or `npm test` |
| Mobile | `cd mobile && npm run start` | `cd mobile && npm run typecheck` |

## Conventions

- Keep web route files in `website/src/routes/`; shared web UI belongs in
  `website/src/components/`.
- Keep backend business logic inside the relevant `backend/src/modules/` feature
  directory, and shared behaviour in middleware, models, configuration, or
  utilities as appropriate.
- Keep the mobile `App.tsx` focused on provider composition. Add screens and
  navigation through `mobile/src/screens/` and `mobile/src/navigation/`.
- Use the `@/` alias within the website and mobile source trees for imports from
  their respective `src/` directories.
