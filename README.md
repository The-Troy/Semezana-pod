# SEMEZANA - Conversations for Change

A modern, responsive website for SEMEZANA, a bi-weekly conversation series that brings together diverse voices to discuss topics that matter, inspire change, and build meaningful connections.

## About SEMEZANA

SEMEZANA is hosted by **Devlins Jeremiah Muuo** and **Meek Amani**, who facilitate meaningful conversations every other Thursday via Google Meet. The platform serves as a space for:

- Bi-weekly live conversations on important topics
- Community-driven topic suggestions
- Interactive sessions with hosts and guests
- Building connections through meaningful dialogue

## Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Forms**: Topic suggestion form with validation
- **Host Profiles**: Dedicated sections for both hosts with photos
- **Episode Information**: Details about upcoming sessions
- **Contact Integration**: Easy ways for community members to get involved

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/The-Troy/Semezana-pod.git
   cd Semezana-pod
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About SEMEZANA and hosts
│   ├── Episodes.tsx    # Episode information
│   ├── Contact.tsx     # Topic suggestion form
│   └── Footer.tsx      # Site footer
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles

public/
├── Semezana logo.jpg   # Main logo
├── Devlins.jpg        # Devlins' profile photo
└── meek .jpg          # Meek's profile photo
```

## Customization

### Adding New Episodes
Update the `upcomingEpisode` object in `src/components/Episodes.tsx` with new episode information.

### Updating Host Information
Modify the host details in `src/components/About.tsx` to update bios, photos, or contact information.

### Changing Images
Replace images in the `public/` directory:
- `Semezana logo.jpg` - Main logo
- `Devlins.jpg` - Devlins' profile photo
- `meek .jpg` - Meek's profile photo

### Styling
The project uses Tailwind CSS. Modify classes in components or extend the configuration in `tailwind.config.js`.

## Deployment

The project is configured for easy deployment to various platforms:

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on every push

### Other Platforms
The built files in the `dist/` folder can be deployed to any static hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

For questions about the project or SEMEZANA:

- **Hosts**: Devlins Jeremiah Muuo & Meek Amani
- **Website**: [Live Site](https://dulcet-caramel-bcee30.netlify.app)
- **Repository**: [GitHub](https://github.com/The-Troy/Semezana-pod)

## License

This project is open source and available under the [MIT License](LICENSE).

---

**SEMEZANA** - Where every conversation matters and every voice counts.