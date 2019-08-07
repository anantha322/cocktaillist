import React, { Component  } from 'react'
import { connect } from 'react-redux'
import AppActions from '../Redux/AppRedux'

const cocktailData = () => WrappedComponent => {
    class CocktailData extends Component {
        state = { cocktailItems: null }
        dataDownloaded = false
        componentDidMount() {
            if (!this.dataDownloaded && this.props.startup.active) {
                this.props.getAllCocktailItems()
            }
        }
        componentDidUpdate(prevProps) {
            if (this.props.startup.active !== prevProps.startup.active) {
                this.props.getAllCocktailItems()
            }

            if (this.props.cocktailItems !== prevProps.cocktailItems) {
                this.setState({ cocktailItems: this.props.cocktailItems })
                this.dataDownloaded = true
            }
        }
        render() {
            return <WrappedComponent {...this.state} {...this.props} />
        }
    }

    const mapStateToProps = state => ({
        startup: state.startup,
        cocktailItems: state.app.cocktailItems,
        loading: state.app.loading,
        error: state.app.error
    })

    const mapDispatchToProps = dispatch => ({
        getAllCocktailItems: () => dispatch(AppActions.getAllCocktailItemsRequest())
    })

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(CocktailData)
}

export default cocktailData