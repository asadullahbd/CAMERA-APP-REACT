Demo: https://camera-app-react-gamma.vercel.app

Camera App
This project is a simple React-based camera application that uses the react-webcam library to capture photos from the user's webcam. It also includes features to preview, download, and refresh captured images. Bootstrap and React-Bootstrap are used for styling and layout.

Features
Webcam Integration: Capture images directly from the user's webcam.
Image Preview: Display the captured image within the app.
Image Download: Download the captured image in JPEG format.
Responsive Design: Optimized for different screen sizes using Bootstrap.
Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v16 or higher recommended)
npm or yarn (npm v7 or higher)
Installation
Clone the repository:
git clone https://github.com/asadullahbd/CAMERA-APP-REACT.git

Navigate to the project directory:
cd camera-app

Install dependencies:
npm install

Usage
Development Server
Run the development server:
npm run dev

The app will be available at http://localhost:5173.

Build for Production
Create a production build:
npm run build

Preview Production Build
Preview the production build locally:
npm run preview

How It Works
The app uses the react-webcam library to access the user's webcam.
The "Capture" button takes a snapshot using the webcam and displays it in the app.
The "Download Image" button lets users save the captured image locally as a JPEG file.
The "Refresh" button clears the captured image and resets the interface.
Technologies Used
React: Frontend framework for building the UI.
React-Webcam: Library for webcam integration.
React-Bootstrap: Styling and layout components.
Bootstrap: Framework for responsive design.
Vite: Development environment and bundler for fast builds.
Dependencies
Runtime Dependencies

react: ^18.3.1
react-dom: ^18.3.1
react-webcam: ^7.2.0
bootstrap: ^5.3.3
react-bootstrap: ^2.10.7
Development Dependencies

vite: ^6.0.3
eslint: ^9.17.0
Plugins for React and ESLint
License
This project is licensed under the MIT License. See the LICENSE file for details.

Author
Created by Asad.