import fetchMock from 'jest-fetch-mock';

// Remove native click animation warning
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

fetchMock.enableMocks();
