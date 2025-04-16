// TextInput.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput'; // adjust import if needed

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter something...',
  },
};
