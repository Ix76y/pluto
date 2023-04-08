import type { Meta, StoryObj } from '@storybook/svelte';

import Button from '../lib/Button.svelte';

const meta = {
    title: 'Pluto/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
    },
  } satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
      label: 'Button',
    },
};
