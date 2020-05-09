import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
// import LanguageSelector from './LanguageSelector'

class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState( { language });
    }
    render() {
        return (
            <div className="ui container">
                <div>
                    Select language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag np" onClick={() => this.onLanguageChange('nepali')} />
                </div>
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;