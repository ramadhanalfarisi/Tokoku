import React, { Component } from 'react'
import { connect } from 'react-redux'
import BarChartComponent from '../../Component/Dashboard/BarChartComponent'
import DoughnutChartComponent from '../../Component/Dashboard/DoughnutChartComponent'
import LinesChartComponent from '../../Component/Dashboard/LinesChartComponent'
import './DashboardContainer.css'

class DashboardContainer extends Component {

    componentDidMount() {
        this.props.handlePath(window.location.pathname)
    }

    render() {
        return (
            <div>
                <BarChartComponent />
                <div className="parent-chart">
                    <div className="chart-item">
                        <LinesChartComponent />
                    </div>
                    <div className="chart-item">
                        <DoughnutChartComponent />
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        path: state.path,
        title: state.title
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePath: (value) => dispatch({ type: 'HANDLE_PATH', value: value })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
