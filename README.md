# User Authentication Form

## Project Overview
This is a simple user authentication form built using React with client-side validation. The form ensures that users provide:
- A valid email format.
- A strong password that includes:
  - At least one uppercase letter.
  - At least one number.
  - At least one special character.
  - Minimum six characters in length.

## Features
- Email format validation
- Strong password validation
- Form submission handling
- Basic authentication logic

## Tech Stack
- Frontend: React.js
- Styling: CSS

## Installation & Setup
1. Clone the repository:
      git clone https://github.com/your-username/auth-form.git
   cd auth-form
   
2. Install dependencies:
      npm install
   
3. Start the development server:
      npm start
   
4. Open `http://localhost:3000/` in your browser.

## File Structure

/auth-form
│── src
│   ├── components
│   │   ├── Login.js      # Login Form Component
│   ├── App.js            # Main App Component
│   ├── index.js          # Entry Point
│   ├── index.css         # Styles
│── public
│── package.json
│── README.md             # Project Documentation


## Usage
- Enter a valid email address.
- Enter a strong password (must meet all criteria).
- Click Login to authenticate.