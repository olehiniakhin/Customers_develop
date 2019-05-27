import React, {Component} from 'react'
import Clipboard from 'react-clipboard.js'

export default class VoucherInfo extends Component {
    constructor (data) {
      super()
      this.state = {
        storesModalOpen: false,
        keyValue: data.value,
      }
      this.clickData = this.clickData.bind(this)
      this.divStyle = {
        width: data.value.length *20
      };
    }
  
    clickData () {
      this.setState({
        storesModalOpen: !this.state.storesModalOpen
      });
      setTimeout(() => {
        this.setState({ storesModalOpen: false });
      }, 1000);
    }
  
    render () {
      return (
        <Clipboard component="div" className= { this.state.storesModalOpen ? 'relative_position active' : 'relative_position' } data-clipboard-text={ this.state.keyValue } button-title='Im a tooltip'>
            <div className='flex-element'>
              <input className='tokenWidth' value={ this.state.keyValue } style= {this.divStyle }/>
              <div className='relative_position'>
                <button className='copyData' title='Copy to Clipboard' onClick={this.clickData}>
                  <img className='clippy' src='https://clipboardjs.com/assets/images/clippy.svg' alt='Copy to clipboard'/>
                </button>
                <span className='toolTip'>Copied</span>
              </div>
            </div>
        </Clipboard>
      )
    }
  }