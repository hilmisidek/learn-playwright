# Learn Playwright

This is my **Learn Playwright** repository! 🎭 This project is designed to help me get started with Playwright.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this repository, follow the steps below:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (>= v12)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Playwright](https://playwright.dev/)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/hilmisidek/learn-playwright.git
cd learn-playwright
npm install
```

## Project Structure

Here's an overview of the project structure:

```plaintext
learn-playwright/
├── .github/
│   └── workflows/
│       └── <workflow files>
├── pages/
│   └── <page object models>
├── tests/
│   └── <test files>
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
├── playwright.config.ts
└── <other files>
```

## Running Tests

To run the tests, use the following command:

```bash
npx playwright test
```

You can also run specific tests by providing the path to the test file:

```bash
npx playwright test path/to/your/test.spec.ts
```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
