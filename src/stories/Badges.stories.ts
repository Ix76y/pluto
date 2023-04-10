import type { Meta, StoryObj } from '@storybook/svelte';

import Badge from '../lib/Badge.svelte';

const meta = {
    title: 'Pluto/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
    },
  } satisfies Meta<Badge>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
      variant: 'primary',
    },
};

export const Neutral: Story = {
    args: {
      variant: 'neutral',
    },
};

export const Success: Story = {
    args: {
      variant: 'success',
    },
};

export const Warning: Story = {
    args: {
      variant: 'warning',
    },
};

export const Danger: Story = {
    args: {
      variant: 'danger',
    },
};