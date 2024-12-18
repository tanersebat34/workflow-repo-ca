# Workflow Assignment - Development Setup

This README contains details about my workflow setup for this project, including development tools, testing, and steps I followed.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
3. [Development Tools](#development-tools)
4. [Testing](#testing)
   - [Unit Tests](#unit-tests)
   - [End-to-End Tests](#end-to-end-tests)
5. [Scripts](#scripts)
6. [Environment Variables](#environment-variables)
7. [Checklist](#checklist)

---

## Project Overview

This project demonstrates a proper **development workflow**. I have configured ESLint, Prettier, and implemented pre-commit hooks. I have also added unit tests (Vitest) and end-to-end tests (Playwright) to ensure code quality and functionality.

---

## Setup Instructions

1. **Fork the Repository**:
   I forked the repository from Noroff class repository to my GitHub account.

2. **Clone the Project**:

´´´bash
git clone https://github.com/<your-username>/workflow-repo-ca.git
´´´

´´´bash
cd workflow-repo-ca
´´´

3. Create a New Branch:
   I created the workflow branch to manage all my changes:

´´´bash
git checkout -b workflow
´´´

4. Install Dependencies:
   Run the following command

´´´bash
npm install
´´´

---

## Development Tools

ESLint & Prettier
• Configured ESLint to support test globals.
• Set up Prettier for code formatting.
• Pre-commit hooks were added to ensure linting and formatting before commits.

**Testing**
Unit Tests (Vitest)
I used Vitest to write unit tests for two functions:

1. isActivePath Function:
   • Returns true if paths match or the root path is / or /index.html.
   • Returns false when paths do not match.
2. getUserName Function:
   • Returns the username saved in local storage.
   • Returns null if no user exists.

End-to-End Tests (Playwright)
I configured Playwright for e2e testing: 1. Login Test:
• Valid credentials allow successful login.
• Invalid credentials display an error message. 2. Navigation Test:
• Navigates to the home page.
• Waits for the venue list to load.
• Verifies “Venue details” text on the details page.

Scripts

Here are the npm scripts I used:
• Install Dependencies:
´´´bash
npm install
´´´

• Run ESLint:
´´´bash
npm run lint
´´´

• Format Code:
´´´bash
npm run format
´´´

• Run Unit Tests (Vitest):
´´´bash
npm run test:unit
´´´

• Run End-to-End Tests (Playwright):
´´´bash
npm run test:e2e
´´´

---

## Environment Variables

I created a .env file in the root directory. Here’s an example structure:
´´´bash
LOGIN_USER=<your_username>
LOGIN_PASS=<your_password>
´´´
• .env is added to .gitignore to protect sensitive information.
• .env.example contains the required variables for reference.

---

### Checklist

• Configured ESLint to handle test globals.
• Installed and configured Prettier.
• Added pre-commit hooks for linting and formatting.
• Wrote and passed unit tests using Vitest.
• Wrote and passed end-to-end tests using Playwright.
• Updated the README with setup and usage details.
• Added .env to .gitignore and created .env.example.

---

### Contributing

1. All work should be done in the workflow branch.
2. Open a Pull Request (PR) from workflow to the default branch.
3. Request feedback and make updates as needed.
