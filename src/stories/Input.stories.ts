import type { Meta, StoryObj } from '@storybook/svelte';

import Input from '../lib/Input.svelte';

const meta = {
    title: 'Pluto/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
    },
  } satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Input',
    },
};

export const ExampleWithPrefix: Story = {
    args: {
        label: 'Website',
        prefix: 'https://',
        placeholder: 'domain.com',
    },
};

export const ExampleWithSuffix: Story = {
    args: {
        label: 'Email',
        suffix: '@email.com',
        placeholder: 'Email',
    },
};

export const PasswordInput: Story = {
    args: {
        label: 'Password',
        labelPosition: 'left',
        inputType: 'password',
        placeholder: 'Password',
    },
};