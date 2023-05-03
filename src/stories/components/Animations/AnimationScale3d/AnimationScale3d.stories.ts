import type { Meta, StoryObj } from '@storybook/react';

import AnimationScale3d from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: AnimationScale3d,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AnimationScale3d>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Hello world',
    transitionTimes: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
    duration: 1,
  },
  parameters: {
    componentSource: {
      code: `
const stringArr = "String to animate each letter".split('');

<p>
  {stringArr.map((letter, index) => (
    <AnimationScale3d key={index}>
      // there are must be one '\\' before u00A0
      {letter === ' ' ? '\\u00A0' : letter}
    </AnimationScale3d>
  ))}
</p>
      `,
      language: 'javascript',
    },
  },
};
