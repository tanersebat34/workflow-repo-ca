# Workflow Assignment - Development Setup

This project demonstrates a proper **development workflow**. I have configured ESLint, Prettier, and implemented pre-commit hooks. I have also added unit tests (Vitest) and end-to-end tests (Playwright) to ensure code quality and functionality.

## Setup Instructions

To set up the project:

1. **Fork the Repository**: I forked the repository from Noroff to my GitHub account.

2. **Clone the Project**:

   ```bash
   git clone https://github.com/<your-username>/workflow-repo-ca.git
   cd workflow-repo-ca
   ```

3. **Create a New Branch**: I created the `workflow` branch to manage all my changes:

   ```bash
   git checkout -b workflow
   ```

4. **Install Dependencies**: Run the following command:
   ```bash
   npm install
   ```

## Development Tools

I have configured the following tools for the project:

- **ESLint**: Configured to handle test globals.
- **Prettier**: Used for code formatting.
- **Pre-commit Hooks**: Ensures linting and formatting before code is committed.

## Testing

For testing, I used the following tools and wrote tests as described below:

1. **Unit Testing (Vitest)**:

   - **isActivePath Function**:
     - Returns `true` if paths match or the root path is `/` or `/index.html`.
     - Returns `false` when paths do not match.
   - **getUserName Function**:
     - Returns the username saved in local storage.
     - Returns `null` if no user exists.

2. **End-to-End Testing (Playwright)**:
   - **Login Test**:
     - Valid credentials allow successful login.
     - Invalid credentials display an error message.
   - **Navigation Test**:
     - Navigates to the home page.
     - Waits for the venue list to load.
     - Verifies "Venue details" text on the details page.

## Scripts

I used the following npm scripts during the project:

- **Install Dependencies**:

  ```bash
  npm install
  ```

- **Run ESLint**:

  ```bash
  npm run lint
  ```

- **Format Code**:

  ```bash
  npm run format
  ```

- **Run Unit Tests (Vitest)**:

  ```bash
  npm run test
  ```

- **Run End-to-End Tests (Playwright)**:
  ```bash
  npm run test:e2e
  ```

## Environment Variables

I created a `.env` file in the root directory. Here’s an example structure:

```plaintext
Test-user-email=<your_username>
Test-user-pass=<your_password>
```

- **`.env`** is added to `.gitignore` to protect sensitive information.
- **`.env.example`** contains the required variables for reference.

## Checklist

- [x] Configured ESLint to handle test globals.
- [x] Installed and configured Prettier.
- [x] Added pre-commit hooks for linting and formatting.
- [x] Wrote and passed unit tests using Vitest.
- [x] Wrote and passed end-to-end tests using Playwright.
- [x] Updated the README with setup and usage details.
- [x] Added `.env` to `.gitignore` and created `.env.example`.

## Contributing

All work was completed in the **`workflow`** branch. To contribute:

1. Open a Pull Request (PR) from `workflow` to the default branch.
2. Request feedback and incorporate changes as needed.

### Submission

I submitted the open PR link to Moodle. The PR is from the `workflow` branch to the default branch of my forked repository.
