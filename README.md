# SkillXchange - Swap Skills, Grow Together

SkillXchange is a modern web platform that connects learners with mentors, facilitating skill exchange and professional growth. Built with React, TypeScript, and Supabase, it offers a seamless experience for both mentors and students.

![SkillXchange Landing Page](<![Image](https://github.com/user-attachments/assets/bd606d9f-110b-4aba-ad0a-2204b9d2b68c)>)

## 🌟 Features

- **Dual Role System**: Users can switch between mentor and student roles
- **Skill-Based Matching**: Find mentors based on specific skills and expertise
- **Real-Time Chat**: Built-in messaging system for seamless communication
- **Session Scheduling**: Flexible booking system for learning sessions
- **Profile Management**: Comprehensive profile system with ratings and reviews
- **Gig Creation**: Mentors can create and manage their teaching offerings

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Supabase account

### Clone and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/skillxchange.git
   cd skillxchange
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:

   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   RESEND_API_KEY=your_resend_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📸 Preview

### Student Dashboard

![Student Dashboard](<![Image](https://github.com/user-attachments/assets/79f064ae-7cce-4b63-9fd8-d1dcf2293663)>)
Browse and connect with mentors in your areas of interest.

### Mentor Dashboard

![Mentor Dashboard](<![Image](https://github.com/user-attachments/assets/d1bc3a35-4d95-4fa0-8feb-d910a92f7f56)>)
Manage your gigs, schedule, and student interactions.

## 🛠 Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: React Hooks
- **Backend**: Supabase
- **Real-time Features**: Supabase Realtime
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL (via Supabase)
- **Email**: Resend
- **Icons**: Lucide React

## 📦 Project Structure

```
skillxchange/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   ├── types/         # TypeScript type definitions
│   └── lib/           # Library configurations
├── supabase/
│   ├── migrations/    # Database migrations
│   └── functions/     # Edge functions
└── public/           # Static assets
```

## 🔐 Environment Variables

Required environment variables:

- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `RESEND_API_KEY`: Your Resend API key for email functionality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Guru Sai Pradeep** - _Initial work_ - [YourGitHub](https://github.com/GURU-SAI-PRADEEP-Y/SkillXChange_3.0)

## 🙏 Acknowledgments

- Special thanks to the Supabase team for their amazing platform
- Lucide React for the beautiful icons
