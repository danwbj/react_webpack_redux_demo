
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as Actions from "../actions";
require('immutable');


import Home from '../views/Home.jsx'


function mapProps(state) {
    return {
        data: state.one.toJS().one_data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch),
    }
}

export default connect(mapProps,mapDispatchToProps)(Home);