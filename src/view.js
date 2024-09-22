import {createRoot} from 'react-dom/client';
import domReady from '@wordpress/dom-ready';
import App from './components/App/App';

domReady( function () {
	// eslint-disable-next-line no-undef
	const root = createRoot( document.getElementById( 'app' ) );
	root.render( <App />, root );
} );
