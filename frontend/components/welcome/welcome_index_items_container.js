import { connect } from 'react-redux';
import WelecomIndexItems from './welcome_index_items';
import { requestAllEvents } from '../../actions/event_actions';



const mSTP = (state) => ({
    events: this.state.entities
})

const mDTP = (dispatch) => ({
    requestAllEvents: () => dispatch(requestAllEvents()),
})

export default connect(mSTP, mDTP)(WelecomIndexItems);