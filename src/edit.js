import { useBlockProps } from '@wordpress/block-editor';
import App from './components/App/App';

import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<App />
		</div>
	);
}
