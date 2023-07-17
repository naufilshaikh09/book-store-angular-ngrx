import * as AppState from '../../state/app.state';
import { CartFeatureState } from './cart.selector';

export interface State extends AppState.State {
  cartFeature: CartFeatureState
}
