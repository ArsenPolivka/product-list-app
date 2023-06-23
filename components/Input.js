import classNames from 'classnames';

import styles from '../styles/Input.module.css';

export const Input = ({
	 label,
	 hideLabel,
	 value,
	 name,
	 type = 'text',
	 placeholder,
	 disabled,
	 onChange,
	 required,
	 rootClassName,
	 inputRootClassName,
	 error
}) => {
	return (
		<label className={classNames(
			styles['input-wrapper'],
			rootClassName,
		)}
		>
      <span className={classNames(
	      styles.label,
	      hideLabel && 'visually-hidden',
      )}
      >
        {label}
      </span>

			<input
				className={classNames(styles.input, inputRootClassName, error && styles.error)}
				required={required}
				disabled={disabled}
				type={type}
				value={value}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
			/>

			{error && <span className={styles.errorMessage}>{error}</span>}
		</label>
	);
};
