import classNames from "classnames";

import styles from '../styles/Button.module.css';

export const Button = ({
	 children,
	 variant,
	 type='button',
	 rootClassName,
	 wide,
	 disabled,
	 onClick,
	 ...restProps
}) => {
	return (
		<button
			{...restProps}
			type={type}
			className={classNames(
				styles.button,
				styles[`button--${variant}`],
				wide && styles.wide,
				rootClassName,
			)}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
