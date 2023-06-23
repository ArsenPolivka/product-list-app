import classNames from 'classnames';

import styles from '../styles/Container.module.css';

export const Container = ({ children, rootClassName }) => {
	return (
		<div className={classNames(styles.container, rootClassName)}>
			{children}
		</div>
	)
}
