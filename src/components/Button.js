import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    // static contextType = LanguageContext; //contexttype
    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'पेस गर्नुहोस्'; 
    }
    renderButton(color) {
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {value => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }
    render() {
        // const text = this.context === 'english' ? 'Submit' : 'पेस गर्नुहोस्';
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

// Button.contextType = LanguageContext;

export default Button;