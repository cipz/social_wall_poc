# Simple Social Wall

An animated social media wall built with Next.js and Tailwind CSS. Features a scrolling gallery of polaroid-style posts with random rotations and spacing for a natural, hand-placed appearance.

## Quick Start

### Prerequisites

- Node.js 18+ 
- Docker (optional)

### Local Development

1. **Install dependencies:**
   ```bash
   cd social_wall/social_wall_frontend
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Docker Deploymen

1. **Build and run with Docker Compose:**
   ```bash
   cd social_wall
   docker-compose up --build
   ```

2. **Access the application:**
   Navigate to `http://localhost:3000`

3. **Stop the application:**
   ```bash
   docker-compose down
   ```

## Project Structure

```
social_wall/
├── social_wall_frontend/     # Next.js application
│   ├── app/                  # App router pages
│   ├── data/                 # JSON data files
│   ├── pictures/             # Image assets
│   └── components/           # React components
├── Dockerfile               # Production Docker build
├── docker-compose.yml       # Docker Compose configuration
└── README.md               # This file
```

## Customization

### Adding New Polaroids

Edit `social_wall_frontend/data/polaroids.json`:

```json
{
  "src": "/path/to/image.jpg",  // Local file path or URL
  "alt": "Image description",
  "caption": "Your caption here ✨",
  "profileSrc": "/path/to/profile.jpg",  // Local file path or URL
  "profileAlt": "Profile description",
  "hashtags": "#your #hashtags #here"
}
```

**Image Sources:**
- **Local files**: Use paths like `/pictures/image.jpg` (relative to the `public` folder)
- **External URLs**: Use full URLs like `https://example.com/image.jpg`
- **Profile images**: Same options apply for profile pictures

### Modifying Animations

- **Scroll Speed**: Adjust the animation duration in `globals.css`
- **Rotation Range**: Modify `getRandomRotation()` in `page.tsx`
- **Spacing**: Adjust `getRandomSpacing()` in `page.tsx`

### Styling

The application uses Tailwind CSS v4. Custom styles can be added to:
- `app/globals.css` for global styles
- Component files for component-specific styles

## License

This project is open source and available under the [MIT License](LICENSE).
