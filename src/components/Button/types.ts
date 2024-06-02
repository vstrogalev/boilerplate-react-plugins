import { ReactNode } from "react";

export interface ButtonProps {
	type?: ButtonType;
	color: ButtonColor;
	count?: number;
	countAccent?: boolean;
	rounded?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	children?: ReactNode;
	className?: string;
}

export enum ButtonType {
	button = 'button',
	submit = 'submit',
}

export enum ButtonColor {
	blue = 'blue',
	primary = 'primary',
	secondary = 'secondary',
	outline = 'outline',
}