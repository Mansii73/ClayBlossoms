// Set test environment
process.env.NODE_ENV = 'test';

// Set test database URL
process.env.MONGODB_URI = 'mongodb://localhost:27017/clayblossoms-test';

// Set JWT secret for testing
process.env.JWT_SECRET = 'test-secret';

// Set frontend URL for testing
process.env.FRONTEND_URL = 'http://localhost:3000';

// Increase timeout for tests
jest.setTimeout(10000);

// Suppress console logs during tests
global.console = {
  ...console,
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
}; 