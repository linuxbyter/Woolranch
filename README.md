# Wool Ranch - Next.js Investment Platform

A modern investment platform built with Next.js 14, TypeScript, and PostgreSQL.

## Features

- User authentication (register/login)
- MPesa deposits via Intasend STK Push
- Referral system
- Dashboard with balance and stats
- Team management

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Payments**: Intasend API (MPesa STK Push)
- **Styling**: Tailwind CSS

## Deployment

### 1. Vercel Deployment

1. Push code to GitHub
2. Connect to Vercel at https://vercel.com
3. Import the repository
4. Add environment variables:
   - `DATABASE_URL` - PostgreSQL connection string
   - `JWT_SECRET` - Random secure string
   - `INTASEND_PUBLISHABLE_KEY` - From Intasend dashboard
   - `INTASEND_SECRET_KEY` - From Intasend dashboard
   - `INTASEND_ENVIRONMENT` - "sandbox" or "live"
   - `NEXT_PUBLIC_BASE_URL` - Your Vercel app URL

### 2. Database Setup (Neon/Supabase/Railway)

1. Create a PostgreSQL database
2. Get the connection string
3. Add `DATABASE_URL` to Vercel environment variables
4. Prisma will auto-migrate on first deploy

### 3. Intasend Setup

1. Sign up at https://intasend.com
2. Get API keys from dashboard
3. Add to Vercel environment variables

## Local Development

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Start development server
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values.

## API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/user` - Get current user data
- `POST /api/deposits` - Create deposit
- `GET /api/deposits` - List user deposits
- `POST /api/deposits/webhook` - Intasend payment webhook

## License

Private - Client Project
