import View from './view.js';
import {html} from '../utils.js';

/**
 * @extends {View<PlaceholderViewState>}
 */
class PlaceholderView extends View {
customElements.define('placeholder-view', PlaceholderView);

export default PlaceholderView;
