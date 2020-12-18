import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props) {
        super(props)
        this.confirmFavorites = this.confirmFavorites.bind(this)
        this.savedSettings = this.savedSettings.bind(this)

        this.state = {
            page: 'dashboard',
            ...this.savedSettings(), // when called, will spread results over rest of previous properties
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }

    }

    confirmFavorites() {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        })
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello'
        }))
    }

    setPage = page => this.setState({ page })

    savedSettings() {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'))
        if (!cryptoDashData) {
            return { page: 'settings', firstVisit: true }
        }
        return {}
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

