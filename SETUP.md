# FIT CARDIAC DIAGNOSTIC CENTRE - Website

A modern, responsive website for FIT CARDIAC DIAGNOSTIC CENTRE built with Next.js, TypeScript, and Tailwind CSS.

## 🏥 About

FIT CARDIAC DIAGNOSTIC CENTRE provides comprehensive cardiac diagnostic services in Mississauga, Ontario, Canada. This website offers information about our services, statistics about heart disease in Canada, and online forms for patient contact and physician referrals.

**Address:** 3530 Derry Road East (#110), Mississauga, ON, L4T 4E3  
**Email:** fitcdcinfo@gmail.com  
**Fax:** (905) 248-3183

## ✨ Features

- **Animated Splash Screen** with clinic logo and heartbeat effect
- **Heart Disease Statistics** - Canadian heart disease data and prevalence
- **Services Overview** - Complete list of diagnostic services offered
- **Contact Form** - Online form with email notifications
- **Physician Referral Form** - Online referral submission for healthcare providers
- **Mission & Vision** - Clear presentation of clinic goals
- **Responsive Design** - Mobile-first, works on all devices
- **Fast Performance** - Built with Next.js 14 for optimal speed

## 🏗️ Services Provided

1. **Cardiology Consultation**
2. **Internal Medicine (Cardiology)**
3. **Echocardiogram**
4. **Stress Echocardiogram**
5. **Exercise Stress Test**
6. **Heart Monitor (Holter)**
7. **Resting ECG**

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd fitcardiac-website
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Email Configuration for Contact & Referral Forms
# For Gmail:
# 1. Go to Google Account settings
# 2. Enable 2-Step Verification
# 3. Generate an App Password for "Mail"
# 4. Use that App Password here

EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-here
```

**Important:**

- Never commit `.env.local` to version control
- Use a dedicated email account or app-specific password
- For Gmail, enable 2-Step Verification and create an App Password

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📧 Email Configuration

The contact and referral forms use Nodemailer to send emails. To set this up:

### For Gmail:

1. Go to your Google Account settings
2. Security → 2-Step Verification (enable it)
3. Security → App passwords → Generate new app password
4. Select "Mail" and your device
5. Copy the 16-character password
6. Add to `.env.local` as `EMAIL_PASSWORD`

### For Other Email Providers:

You can modify the transporter configuration in:

- `app/api/contact/route.ts`
- `app/api/referral/route.ts`

Example for custom SMTP:

```typescript
const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
fitcardiac-website/
├── app/
│   ├── api/
│   │   ├── contact/          # Contact form API endpoint
│   │   └── referral/         # Referral form API endpoint
│   ├── about/                # About page
│   ├── contact/              # Contact page with form
│   ├── referral/             # Physician referral form
│   ├── services/             # Services listing page
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── CTA.tsx               # Call-to-action component
│   ├── Features.tsx          # Services showcase
│   ├── Footer.tsx            # Site footer with contact info
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Homepage hero section
│   ├── HeartDiseaseStats.tsx # Canadian heart disease statistics
│   ├── MissionVision.tsx     # Mission and vision cards
│   ├── SplashScreen.tsx      # Animated loading screen
│   └── Testimonials.tsx      # Patient testimonials
├── public/
│   ├── logo.jpeg             # Clinic logo
│   └── robots.txt
└── .env.local.example        # Environment variables template
```

## 🎨 Design Features

- **Colors:**

  - Primary Teal: `#14B8A6`
  - Primary Green: `#10B981`
  - Secondary Gray: `#1F2937`

- **Animations:**
  - Framer Motion for smooth page transitions
  - Heartbeat pulse effect on splash screen
  - Hover effects on interactive elements
  - Scroll-triggered animations

## 📱 Pages

1. **Home** (`/`) - Hero, stats, services, testimonials
2. **About** (`/about`) - Clinic information
3. **Services** (`/services`) - Detailed service listings
4. **Facilities** (`/facilities`) - Facility information
5. **Contact** (`/contact`) - Contact form and information
6. **Referral** (`/referral`) - Physician referral form
7. **Blog** (`/blog`) - Health articles (placeholder)
8. **FAQ** (`/faq`) - Frequently asked questions (placeholder)

## 🔧 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Nodemailer** - Email sending functionality
- **Lucide React** - Icon library

## 📝 Forms

### Contact Form

- User information (name, email, phone)
- Subject selection
- Message textarea
- Email notification to clinic

### Physician Referral Form

- Physician details
- Patient information
- Service selection (checkboxes)
- Clinical history
- Urgency level
- Online submission with email notification
- Print/PDF download option

## 🔐 Security Notes

- Environment variables are kept in `.env.local` (not committed)
- Email credentials use app-specific passwords
- Form validation on client and server
- CORS protection via Next.js API routes

## 🚢 Deployment

The site can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

Remember to add environment variables in your hosting platform's dashboard.

## 📞 Support

For technical issues or questions about the website:

- Email: fitcdcinfo@gmail.com
- Fax: (905) 248-3183

## 📄 License

© 2024 FIT CARDIAC DIAGNOSTIC CENTRE. All rights reserved.

---

**Where Every Heartbeat Matters** ❤️
