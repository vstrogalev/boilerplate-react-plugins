import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import clsx from 'clsx';

import './styles/variables.scss';
import './styles/index.scss';
import styles from './styles/index.module.scss';
import { Button } from './components/Button';
import { ButtonColor } from './components/Button/types';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	return (
		<div
			className={clsx(styles.main)}
      >
			Hello
      <Button color={ButtonColor.blue}>Click me</Button>
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
