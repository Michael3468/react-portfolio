import type { Meta, StoryObj } from '@storybook/react';

import github from '../../../assets/images/icons/gitHub-black.svg';
import ButtonIconWithLink from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: ButtonIconWithLink,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ButtonIconWithLink>;

export default meta;
type Story = StoryObj<typeof meta>;

const roundButtonBorderRadius = 9999;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    link: 'https://github.com',
    buttonText: 'Github',
    img: github,
    altText: 'github icon',
    borderRadius: roundButtonBorderRadius,
  },
};

export const Secondary: Story = {
  args: {
    link: 'https://example.com',
    buttonText: 'Github',
    img: github,
    altText: 'github icon',
  },
};

export const SizePrimary: Story = {
  args: {
    link: 'https://github.com',
    buttonText: 'Github',
    img: github,
    altText: 'github icon',
    buttonWidth: 100,
    buttonHeight: 30,
    borderRadius: roundButtonBorderRadius,
  },
};

export const SizeSecondary: Story = {
  args: {
    link: 'https://example.com',
    buttonText: 'Github',
    img: github,
    altText: 'github icon',
    buttonWidth: 100,
    buttonHeight: 30,
  },
};

export const NoIconPrimary: Story = {
  args: {
    buttonText: 'Github',
    borderRadius: roundButtonBorderRadius,
  },
};

export const NoIconSecondary: Story = {
  args: {
    buttonText: 'Github',
  },
};

export const ColoredButtonIconPrimary: Story = {
  args: {
    buttonText: 'Github',
    backgroundColor: 'green',
    fontColor: 'white',
    borderColor: 'blue',
    boxShadowColor: 'purple',
    img: github,
    borderRadius: roundButtonBorderRadius,
  },
};

export const ColoredButtonIconSecondary: Story = {
  args: {
    buttonText: 'Github',
    backgroundColor: 'green',
    fontColor: 'white',
    borderColor: 'blue',
    boxShadowColor: 'purple',
    img: github,
  },
};

const buttonGradientToBottom = 'linear-gradient(to bottom, rgb(255, 255, 255), rgba(0, 0, 0, 0.5))';

export const GradientToBottomIconPrimary: Story = {
  args: {
    buttonText: 'Github',
    backgroundColor: buttonGradientToBottom,
    img: github,
    borderRadius: roundButtonBorderRadius,
  },
};

export const GradientToBottomIconSecondary: Story = {
  args: {
    buttonText: 'Github',
    backgroundColor: buttonGradientToBottom,
    img: github,
  },
};

export const GradientToBottomPrimary: Story = {
  args: {
    buttonText: 'Github',
    backgroundColor: buttonGradientToBottom,
    borderRadius: roundButtonBorderRadius,
  },
};

export const GradientToBottomSecondary: Story = {
  args: {
    buttonText: 'Github',
    backgroundColor: buttonGradientToBottom,
  },
};
