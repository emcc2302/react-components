import React from 'react';
import { Typography } from './Typography';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography variant="h4" color="primary">Primary Text</Typography>
      <Typography variant="h4" color="secondary">Secondary Text</Typography>
      <Typography variant="h4" color="error">Error Text</Typography>
      <Typography variant="h4" color="success">Success Text</Typography>
    </div>
  ),
};