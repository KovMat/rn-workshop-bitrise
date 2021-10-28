// jest.mock('../utils/helpers');
import React from 'react';
import { render } from '@testing-library/react-native';
import { Game } from '.';
import { IQuiz } from '../interfaces';

jest.mock('../utils/helpers', () => {
  const og = jest.requireActual('../utils/helpers');
  return {
    __esModule: true,
    ...og,
    shuffle: jest.fn((arr) => arr),
  };
});

describe('Game', () => {
  const props = {
    currentIndex: 0,
    handleAnswerSelected: jest.fn(),
    isLoading: false,
    lives: 2,
    questions: [],
    onResetGame: jest.fn(),
    isLifelineUsed: false,
    setIsLifelineUsed: jest.fn(),
  };

  it('should match snapshot for default case', () => {
    const { toJSON } = render(<Game {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot with questions', () => {
    const question: IQuiz = {
      category: '1',
      correct_answer: 'correct',
      incorrect_answers: ['a', 'b', 'c'],
      difficulty: 'medium',
      question: 'Question',
      type: 'multiple',
    };

    const { toJSON } = render(<Game {...props} questions={[question]} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot while loading', () => {
    const { toJSON } = render(<Game {...props} isLoading />);
    expect(toJSON()).toMatchSnapshot();
  });
});
