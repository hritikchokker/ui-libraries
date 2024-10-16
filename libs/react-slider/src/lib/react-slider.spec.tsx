import { render } from '@testing-library/react';

import ReactSlider from './react-slider';

describe('ReactSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactSlider />);
    expect(baseElement).toBeTruthy();
  });
});
