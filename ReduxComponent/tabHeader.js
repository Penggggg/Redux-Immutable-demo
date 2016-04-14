import React, { Component, PorpTypes } from 'react'
import Immutable, {Map} from 'immutable'

export default class TabHeader extends Component {
	shouldComponentUpdate(nextProps){
		return !Immutable.is(Immutable.fromJS(nextProps), Immutable.fromJS(this.props));
	}
	render (){
		const active = this.props.tabIndex 
		return (
			<div>
				<ul className="nav nav-tabs">
					<li onClick={() => this.clickTabs(1)} className={this.getClass(1)}><a >标签1</a></li>
					<li onClick={() => this.clickTabs(2)} className={this.getClass(2)}><a >标签2</a></li>
				  </ul>
			</div>
		)
	}

	getClass(index){
		return index == this.props.tabIndex.get('indexTab') ? 'active' : ''
	}

	clickTabs(index) {
		this.props.onClickTab(index)
	}

}
