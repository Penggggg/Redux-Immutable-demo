import { combineReducers } from 'redux'
import { CLICK_TAB } from '../ReduxActions/actions'
import { fromJS, Map } from 'immutable'

const showTabIndex = 1;
const newState = Map({
	indexTab : 1
})


export function tabsState(state = newState, action){
	switch (action.type){
		case CLICK_TAB:
			return state.set('indexTab', action.tabIndex)
		default:
			return state
	}
}

const tabState = combineReducers({
	tabsState
})

export default tabState