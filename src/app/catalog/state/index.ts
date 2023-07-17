import * as AppState from '../../state/app.state';
import { ItemsFeatureState } from './catalog.selector';

export interface State extends AppState.State {
  itemsFeature: ItemsFeatureState
}
