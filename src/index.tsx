import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, useRef } from 'react';
import clsx from 'clsx';

import './styles/variables.scss';
import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	return (
		<div
			className={clsx(styles.main)}
      >
			Hello
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
