/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Meta, StoryObj } from '@storybook/react';
import { TemplateName } from '.';

const meta: Meta<typeof TemplateName> = {
	title: 'TemplateName',
	component: TemplateName,
	parameters: {
		tag: 'centered',
	},
	tags: ['autodocs'],
	args: {},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TemplateName>;

export const Primary: Story = {
	args: { },
};

export const Secondary: Story = {
	args: {  },
};
