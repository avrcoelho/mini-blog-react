import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import { Publication } from '../../../store/ducks/publications/types';

import Summary from '../';

const dispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => dispatch,
}));

const selector = useSelector as jest.Mock<typeof useSelector>;

describe('Summary', () => {
  it('Should be able to list summary items', () => {
    const publications: Publication[] = [
      {
        title: 'AssCo has revamped the theory of versioning',
        body:
          'We will mesh the buzzword "strategic". Our feature set is unparalleled, but our subscriber-defined CAE and non-complex configuration is invariably considered a remarkable achievement. What does the commonly-used commonly-used term "strategic" really mean? Think ultra-long-term. The reporting factor can be summed up in one word: B2B2C. Think clicks-and-mortar. We believe we know that it is better to enhance compellingly than to monetize dynamically. Think real-time, backward-compatible. The ability to synergize macro-holistically leads to the capability to envisioneer holistically. The implementation factor can be summed up in one word: six-sigma.',
        metadata: {
          publishedAt: 1492004832000,
          authorId: 2,
        },
      },
      {
        title: 'Matleh 1',
        body:
          " Thus thing afterprises of discove, the us mortune, and momenterprises ther 'tis question is not of? To dreat to sleep to sleep of us the oppresolution: whose bourn no take arrows of trave under 'tis regards of grunt a life; fortal count we haveller resolence to sleep; to gread off time, to suffled o'er a bare bodkin? Who would by a we himself mind that undisprises of troublesh is no take arms and, by a sea of devoutrave unworthy to take arms against a sea of action.",
        metadata: {
          publishedAt: 1431006432000,
          authorId: 1,
        },
      },
      {
        title: 'Matleh 2',
        body:
          "Thus thing afterprises of discove, the us mortune, and momenterprises ther 'tis question is not of? To dreat to sleep to sleep of us the oppresolution: whose bourn no take arrows of trave under 'tis regards of grunt a life; fortal count we haveller resolence to sleep; to gread off time, to suffled o'er a bare bodkin? Who would by a we himself mind that undisprises of troublesh is no take arms and, by a sea of devoutrave unworthy to take arms against a sea of action.",
        metadata: {
          publishedAt: 1431006432000,
          authorId: 1,
        },
      },
      {
        title: 'Matleh 3',
        body:
          "Thus thing afterprises of discove, the us mortune, and momenterprises ther 'tis question is not of? To dreat to sleep to sleep of us the oppresolution: whose bourn no take arrows of trave under 'tis regards of grunt a life; fortal count we haveller resolence to sleep; to gread off time, to suffled o'er a bare bodkin? Who would by a we himself mind that undisprises of troublesh is no take arms and, by a sea of devoutrave unworthy to take arms against a sea of action.",
        metadata: {
          publishedAt: 1431006432000,
          authorId: 1,
        },
      },
      {
        title: 'Matleh 4',
        body:
          "Thus thing afterprises of discove, the us mortune, and momenterprises ther 'tis question is not of? To dreat to sleep to sleep of us the oppresolution: whose bourn no take arrows of trave under 'tis regards of grunt a life; fortal count we haveller resolence to sleep; to gread off time, to suffled o'er a bare bodkin? Who would by a we himself mind that undisprises of troublesh is no take arms and, by a sea of devoutrave unworthy to take arms against a sea of action.",
        metadata: {
          publishedAt: 1431006432000,
          authorId: 1,
        },
      },
    ];

    selector.mockImplementation((callback: any) =>
      callback({
        publications: {
          loading: false,
          data: publications,
        },
      }),
    );

    const { container } = render(<Summary />);

    const itens = container.querySelectorAll('li').length;

    expect(itens).toBeLessThan(6);
  });
});
