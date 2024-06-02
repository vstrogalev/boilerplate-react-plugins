import { FC, useMemo } from 'react';
import styles from './Button.module.scss';
import { ButtonColor, ButtonProps } from './types';
import clsx from 'clsx';

export const Button: FC<ButtonProps> = ({
	type,
	color,
	count,
	countAccent,
	rounded,
	disabled,
	children,
	onClick,
	className,
}): JSX.Element => {
	const colorClass = useMemo(() => {
		switch (color) {
			case ButtonColor.blue:
				return styles.colorBlue;
			case ButtonColor.primary:
				return styles.colorPrimary;
			case ButtonColor.secondary:
				return styles.colorSecondary;
			case ButtonColor.outline:
				return styles.colorOutline;
		}
	}, [color]);

	return (
		<button
			className={clsx(
				styles.button,
				colorClass,
				rounded && styles.rounded,
				countAccent && styles.countAccent,
				className
			)}
			type={type}
			disabled={disabled}
			data-count={count}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
