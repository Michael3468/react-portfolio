import type { Meta, StoryObj } from '@storybook/react';

import TextAnimation from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/TextAnimation',
  component: TextAnimation,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Hello world',
  },
  parameters: {
    componentSource: {
      code: `
const stringArr = "String to animate each letter".split('');

<p>
  {stringArr.map((letter, index) => (
    <TextAnimation key={index}>
      // there are must be one '\\' before u00A0
      {letter === ' ' ? '\\u00A0' : letter}
    </TextAnimation>
  ))}
</p>
      `,
      language: 'javascript',
    },
  },
};
