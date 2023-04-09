import type { Meta, StoryObj } from '@storybook/svelte';

import CheckBox from '../lib/CheckBox.svelte';

const meta = {
    title: 'Pluto/Checkbox',
    component: CheckBox,
    tags: ['autodocs'],
    argTypes: {
    },
  } satisfies Meta<CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        
    },
};