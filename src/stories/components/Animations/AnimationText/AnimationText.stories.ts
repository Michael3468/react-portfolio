import type { Meta, StoryObj } from '@storybook/react';

import AnimationText from './index';

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: AnimationText,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AnimationText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'frontend developer',
    animationType: 'words',
    delayChildren: 1,
  },
};

export const Secondary: Story = {
  args: {
    text: 'frontend developer',
    animationType: 'letters',
    delayChildren: 1,
    staggerChildren: 0.05,
    hiddenX: -20,
    hiddenY: -20,
  },
};
