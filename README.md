# Sports Day Project

This project is a React application built using Vite and TypeScript. It displays event information in a card format, allowing users to select events, which are then stored in local storage. The project is structured with separate components for easy maintenance and scalability.

## Key Features
React + Vite + TypeScript: A modern setup for fast development and type safety.
React Router DOM: Used for smooth client-side routing between different views.
Local Storage Integration: Selected event IDs are stored in local storage for persistence across sessions.
Component-Based Architecture: The application is organized into separate components, making it easy to manage and extend.
ESLint: Ensures code quality and consistency across the project.
Getting Started

1. Clone the Repository

```bash
git clone https://github.com/yourusername/event-card-project.git
cd event-card-project
```

2. Install Dependencies
   Make sure you have Node.js installed. Then, install the necessary dependencies:

```bash
npm install
```

3. Run the Development Server
   Start the development server with:

```bash
npm run dev
```

4. Using ESLint
   ESLint is configured to help maintain consistent code quality. You can check for linting errors by running:

```bash
npm run lint
```

5. To automatically fix some common linting issues:

```bash
npm run lint:fix
```

6. Routing
   React Router DOM is used to manage navigation between different pages. Ensure that your components are linked appropriately for smooth transitions.

7. Local Storage
   Selected event IDs are saved to local storage, allowing users to maintain their selections even after refreshing the page or returning later.

## Project Structure
The project is organized as follows:

- src/components: Contains all reusable components, such as the Event Card Header Footer.
- src/pages: Houses the different pages of the application.
- src/utils: Utility functions, such as time formatting and local storage handlers.

## Customization
- You can easily modify or extend the application by editing the components in the src/components directory.
- Routing can be adjusted in the src/App.tsx file.

## License
[MIT](https://choosealicense.com/licenses/mit/)
This project is licensed under the MIT License. You are free to use, modify, and distribute this project in your own applications.
