import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

vi.mock('next/router', () => ({
  push: vi.fn(),
  back: vi.fn(),
  events: {
    on: vi.fn(),
    off: vi.fn(),
  },
  asPath: vi.fn().mockReturnThis(),
  beforePopState: vi.fn(() => null),
  useRouter: () => ({
    push: vi.fn(),
    query: vi.fn(() => ({
      id: null,
    })),
  }),
}));
