# ServicePro

## Reliable home services, delivered by verified professionals

ServicePro is a full-service marketplace for booking trusted field-service professionals. It brings customers, technicians, and operations teams together in one platform: customers can find and book a service, technicians can manage approved work from the mobile app, and administrators can oversee the entire operation from a secure dashboard.

## Who it serves

| Audience | What ServicePro provides |
| --- | --- |
| Customers | A simple way to discover services, choose verified technicians, make bookings, and follow the job status. |
| Technicians | A dedicated mobile workspace for applying, becoming verified, managing jobs, earnings, availability, and support. |
| Administrators | A centralized control center for bookings, technicians, customers, payments, content, support, and reporting. |

## Customer website features

- **Service discovery** — Browse services including electrical, plumbing, air conditioning, carpentry, painting, cleaning, pest control, appliance repair, mechanic, and generator repair.
- **Verified technician directory** — Explore technician profiles with their service specialties, location, experience, ratings, completed work, availability, and hourly rate.
- **Straightforward booking** — Select a service and technician, add appointment and address details, and submit a standard or emergency booking.
- **Emergency dispatch** — Create urgent service requests for time-sensitive issues.
- **Booking tracking** — Signed-in customers can privately track a booking and view its assigned technician and status.
- **Transparent information** — Service pages, pricing plans, FAQs, customer testimonials, and a contact form help customers make informed decisions.
- **Technician applications** — Professionals can submit an application and supporting documents to join the platform.

## Technician mobile app features

- **Guided onboarding and secure access** — Includes welcome screens, login, password recovery, OTP verification, and password reset.
- **Detailed application workflow** — A multi-step registration process captures personal and contact details, professional experience, service categories, working areas, service radius, identification, photo, certificates, licenses, emergency contact, and bank information.
- **Verification-based access** — Technicians only receive dashboard access after approval; rejected applications can be corrected and resubmitted, while suspended and blocked states are safely handled.
- **Job management** — View active jobs, job details, job history, status filters, and invoices.
- **Daily operations dashboard** — Quick access to calendar, earnings, documents, and settings from a technician-focused home screen.
- **Scheduling and communication** — Calendar views, leave requests, notifications, inboxes, and chat support help technicians stay coordinated.
- **Professional profile tools** — Manage personal and professional information, working areas, bank details, documents, password, legal details, preferences, and help/support.

## Administration and operational features

- **Secure role-based administration** — Authentication, protected sessions, profile management, password updates, and the ability to revoke unfamiliar active sessions.
- **Operations dashboard** — At-a-glance metrics for revenue, bookings, customers, completed service mix, technician approvals, and weekly activity.
- **Booking management** — Review booking details, schedules, statuses, emergency requests, and customer information.
- **Technician verification** — Review submitted applications and documents, then approve, reject, suspend, or manage technician availability.
- **Customer, service, payment, and review management** — Maintain the marketplace catalogue and monitor its commercial and service quality data.
- **Support management** — Organize and respond to customer support tickets.
- **Notifications** — Receive live alerts for contact submissions, bookings, technician activity, payments, and system events; administrators can also notify approved technicians.
- **Reporting and content management** — View operational reports and update website content, including homepage messaging and information blocks.

## Platform foundation

ServicePro is structured as three independently deployable applications:

| Component | Technology | Responsibility |
| --- | --- | --- |
| `website/` | React, TypeScript, TanStack Start, Tailwind CSS | Customer-facing website and admin dashboard |
| `backend/` | Express, TypeScript, MongoDB, Socket.IO | REST API, authentication, data, uploads, notifications, and real-time events |
| `mobile/` | React Native, Expo, TypeScript | Technician mobile experience |

The API also includes request validation, JWT-based authentication, refresh-token sessions, upload validation, rate limiting, OpenAPI documentation, and real-time notification delivery.

## Local development

Install dependencies and run each component from its own directory:

```sh
# Customer website
cd website && npm install && npm run dev

# API
cd backend && npm install && npm run dev

# Technician mobile app
cd mobile && npm install && npm run start
```

Copy the provided environment examples before running services that need configuration. The website API endpoint is configured with `VITE_API_BASE_URL`.

## Project links

[GitHub repository](https://github.com/hariskhalid366/gleam-field) · [Website](https://github.com/hariskhalid366/gleam-field/tree/main/website) · [Mobile app](https://github.com/hariskhalid366/gleam-field/tree/main/mobile)
