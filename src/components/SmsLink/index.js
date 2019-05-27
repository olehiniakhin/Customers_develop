import React, { Component } from 'react';

const ua = navigator.userAgent;

let uaIndex;

const getOs = () => {
    let os;

    if (ua.match(/iPad/i) || ua.match(/iPhone/i)) {
        os = 'iOS';
        uaIndex = ua.indexOf('OS ');
    }
    else if (ua.match(/Android/i)) {
        os = 'Android';
        uaIndex = ua.indexOf('Android ');
    }
    else {
        os = null;
    }
    return os;
}

class SmsLink extends Component {
    constructor (props) {
        super(props)
        this.state = {
            os:getOs()
        }
    }

     getVersion = () => {
         let version;
         let os = getOs()
        if (os === 'iOS' && uaIndex > -1) {
            version = ua.substr(uaIndex + 3, 3).replace('_', '.');
        }
        else if (os === 'Android' && uaIndex > -1) {
            os = ua.substr(uaIndex + 8, 3);
        }
        else {
            version = null;
        }
        return version;
    }
    

    
      isMobile = () => {
        
        return this.state.os !== null
    }

    generateLink = () => {
        let replaceBody = false;
        let hrefValue = "sms:+33644644649?body=Je souhaite recevoir mon coupon de réduction(note:envoyer sans modifié)";
        switch (getOs()) {
            case 'iOS':
                if (parseFloat(this.getVersion()) <= 8) {
                    replaceBody = ';';
                } else {
                    replaceBody = '&';
                }
                break;
            default:
                break;
        }
        if (replaceBody) {
            hrefValue=hrefValue.replace(/\?body=/, replaceBody + 'body=');
        }

        return (<a href={hrefValue}>Obtenir votre coupon</a>)
    }

    render() {
        return (
            <div>
                {this.generateLink()}
            </div>
        );
    }
}

export default SmsLink;
