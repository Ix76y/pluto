import type { Meta, StoryObj } from '@storybook/svelte';

import ProgressBar from '../lib/ProgressBar.svelte';

const meta = {
    title: 'Pluto/ProgressBars',
    component: ProgressBar,
    tags: ['autodocs'],
    argTypes: {
    },
  } satisfies Meta<ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Linear: Story = {
    args: {
      percentage: 0.25,
    },
};