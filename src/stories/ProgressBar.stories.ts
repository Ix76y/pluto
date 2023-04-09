import type { Meta, StoryObj } from '@storybook/svelte';

import ProgressBar from '../lib/ProgressBar.svelte';

const meta = {
    title: 'Pluto/ProgressBar',
    component: ProgressBar,
    tags: ['autodocs'],
    argTypes: {
    },
  } satisfies Meta<ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinearWithLabel: Story = {
    args: {
      percentage: 0.25,
    },
};

export const LinearWithNoLabel: Story = {
  args: {
    percentage: 0.5,
    hideLabel: true,
  },
};

export const LinearWithSteps: Story = {
  args: {
    percentage: 0.75,
    steps: 5,
  },
};

export const LinearWithText: Story = {
  args: {
    percentage: 0.5,
    showText: 'Update In Progress...',
  },
};