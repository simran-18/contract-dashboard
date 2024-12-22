Dynamic Contract Management Dashboard
Overview
This is a Dynamic Contract Management Dashboard built using React.js that allows users to manage contracts with real-time updates. Users can view, search, filter, sort, edit, and create contracts. The dashboard simulates real-time updates using mock data and WebSocket-like functionality.
Features
- View Contracts: Display a list of contracts, including contract ID, client name, and contract status.
- Search, Filter, and Sort: Search contracts by attributes, filter them based on status, and sort them by contract ID or client name.
- Edit Contract: Open a modal to edit contract details.
- Create New Contract: Add a button that opens a form to create a new contract.
- Real-Time Updates: Contracts' statuses can be dynamically updated, simulating real-time data updates.
- Responsive UI: The application is fully responsive, designed using Tailwind CSS to ensure usability across devices.
- Dark and Light Mode: Toggle between dark and light modes for a customizable user experience.
Tech Stack
- Frontend: React.js, Tailwind CSS
- State Management: Context API
- Real-Time Simulation: Mock APIs / WebSocket
- Form Validation: Client-side validation for contract creation and editing
- Version Control: Git, GitHub
Setup Instructions
Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn
Steps
1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd contract-dashboard
   ```
3. Checkout to the demo branch:
   ```bash
   git checkout demo
   ```
4. Install the dependencies:
   ```bash
   npm install
   ```
   or if you prefer **yarn**:
   ```bash
   yarn install
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```
   or with **yarn**:
   ```bash
   yarn dev
   ```
6. Open the application in your browser at `http://localhost:5173`.
Environment Variables
If there are any environment variables required (e.g., for real-time updates or API keys), create a `.env` file in the root of the project and add the variables as follows:
```
REACT_APP_API_URL=<your-api-url>
REACT_APP_SOCKET_URL=<your-socket-url>
```
Local Development Guide
Running the Project
To run the project locally, simply use the development server as mentioned above:
```bash
npm run dev
```
This will start a development server on `http://localhost:5173`. The application will automatically reload if you make any changes to the code.
Building for Production
To create a production-ready build of the application, run:
```bash
npm run build
```
This will create an optimized build of your application in the `dist/` folder. You can deploy it to your preferred hosting provider.

Deployment Instructions
Netlify (or other static hosting)
1. Push the changes to your GitHub repository.
2. Go to [Netlify](https://www.netlify.com/), sign in, and create a new site from Git.
3. Select your repository and deploy.
Vercel
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/), sign in, and create a new project.
3. Connect your GitHub repository and deploy.

License
This project is licensed under the MIT License - see the LICENSE file for details.
