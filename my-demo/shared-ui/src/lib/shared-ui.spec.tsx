import { render } from '@testing-library/react';

import MyDemoSharedUi from './shared-ui';

describe('MyDemoSharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyDemoSharedUi />);
    expect(baseElement).toBeTruthy();
  });
});
