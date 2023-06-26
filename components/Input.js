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
	 error,
	 textarea,
	 rows,
	 cols
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
			{textarea ? (
				<textarea
					className={classNames(styles.input, inputRootClassName, error && styles.error)}
					required={required}
					disabled={disabled}
					value={value}
					name={name}
					placeholder={placeholder}
					onChange={onChange}
					rows={rows}
					cols={cols}
				></textarea>
			) : (
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
			)}

			{error && <span className={styles.errorMessage}>{error}</span>}
		</label>
	);
};
