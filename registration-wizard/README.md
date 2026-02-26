# Registration Wizard

A modern, multi-step registration wizard built with React and Vite. This application provides a seamless user experience for collecting and validating user information through an intuitive step-by-step form process.

## ✨ Features

- **Multi-Step Form**: A 3-step registration process (Personal Info → Account Details → Review)
- **Form Validation**: Comprehensive schema-based validation using industry-standard patterns
- **Progress Tracking**: Visual progress bar showing completion status
- **Data Persistence**: Form data is maintained across steps
- **Review & Confirm**: Final review page before submission
- **Success Screen**: Confirmation message upon successful registration
- **Responsive Design**: Mobile-friendly interface
- **Fast Performance**: Built with Vite for lightning-fast development and production builds

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/registration-wizard.git
cd registration-wizard
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 📂 Project Structure

```
src/
├── components/
│   ├── ProgressBar.jsx          # Progress indicator component
│   ├── RegistrationWizard.jsx   # Main wizard controller
│   ├── Step1PersonalInfo.jsx    # Personal information form
│   ├── Step2AccountDetails.jsx  # Account credentials form
│   ├── Step3Review.jsx          # Review and confirmation
│   └── SuccessScreen.jsx        # Success message
├── schemas/
│   └── wizardSchema.js          # Validation schemas
├── App.jsx                      # Root component
├── main.jsx                     # Application entry point
└── index.css                    # Global styles
```

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling
- **ESLint** - Code quality

## 🎯 How It Works

1. **Step 1** - Collect personal information (name, email, phone)
2. **Step 2** - Collect account credentials (username, password)
3. **Step 3** - Review all entered information
4. **Success** - Display confirmation message

Each step includes validation to ensure data quality before moving to the next step.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Support

For support, please open an issue on the GitHub repository.
