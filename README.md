# PixoAI - AI Image Generator

PixoAI is an innovative platform that transforms text into visually stunning images using cutting-edge AI technology. With a user-friendly interface and seamless integration with Google OAuth for login, PixoAI makes it easy to bring your imagination to life.

## Features

- **AI-powered Image Generation**: Enter a prompt, and PixoAI will generate a unique image based on your input.
- **Google OAuth Authentication**: Secure and easy login with Google, powered by NextAuth.
- **Profile Page**: View all of your previously generated images on your profile page.
- **Create Page**: Effortlessly create new images using a simple prompt input.
- **Home Page**: Browse general information and get started with the platform.

## Pages

- **Home Page**: Introduction and overview of PixoAI.
- **Create Page**: The core page where users can input a text prompt to generate images.
- **Profile Page**: Displays all the images you’ve generated in the past, allowing easy access to previous creations.

## Tech Stack

- **Next.js**: For building the frontend and backend of the application.
- **NextAuth**: Used for secure authentication with Google OAuth.
- **Tailwind CSS**: Styling the application with modern, responsive designs.
- **Prisma**: ORM for managing database operations.
- **Framer Motion**: Used for smooth animations across the app.
- **Shadcn UI**: For accessible and customizable UI components.
- **Zod**: Schema validation for ensuring input integrity.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pratiksonthaliya/pixo-ai.git
   cd pixo-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file and add your environment variables:
     ```env
     DATABASE_URL=your-database-url
     NEXTAUTH_URL=http://localhost:3000
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     ```

4. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm start`: Runs the production server.

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the project for production.
- `yarn start`: Runs the production server.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.