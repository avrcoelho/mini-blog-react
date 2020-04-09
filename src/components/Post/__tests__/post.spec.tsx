import React from 'react';
import { render } from '@testing-library/react';
import { formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Post } from '../../List';

import PostComponent from '../';

describe('Post', () => {
  it('Should be able to show of the post data', () => {
    const postData: Post = {
      title: 'Matleh',
      body:
        "Thus thing afterprises of discove, the us mortune, and momenterprises ther 'tis question is not of? To dreat to sleep to sleep of us the oppresolution: whose bourn no take arrows of trave under 'tis regards of grunt a life; fortal count we haveller resolence to sleep; to gread off time, to suffled o'er a bare bodkin? Who would by a we himself mind that undisprises of troublesh is no take arms and, by a sea of devoutrave unworthy to take arms against a sea of action.",
      metadata: {
        publishedAt: 1431006432000,
      },
      author: {
        name: 'Jemma Chadwick',
        id: 1,
      },
    };

    const { getByTestId, getByText } = render(
      <PostComponent data={postData} />,
    );

    expect(getByTestId('title-post')).toContainElement(
      getByText(postData.title),
    );
    expect(getByTestId('body-post')).toContainElement(getByText(postData.body));
    expect(getByTestId('date-post')).toContainElement(
      getByText(
        formatDistanceToNow(postData.metadata.publishedAt, {
          locale: pt,
        }),
      ),
    );
    expect(getByTestId('author-post')).toContainElement(
      getByText(postData.author.name),
    );
  });
});
