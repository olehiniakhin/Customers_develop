import React from 'react'
import ReactSlider from 'react-slider'
import { Icon, Modal, Header, Button } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import { addTransaction } from '../../modules/vouchers/actions'
import CustomIntl from "../../utils/CustomIntl"

class TransactionSlider extends React.Component {
    constructor (props) {
      super(props)
      this.state = { 
        sliderValue: 0,
        transactionError: false,
      }
    }
    timer = (type) => {
      this.setState({
        sliderValue: this.state.sliderValue + (type === "positive" ? 1 : -1)
      })
      if(this.state.sliderValue < 1 || this.state.sliderValue > 99 ) { 
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
    afterHandler = (value) => {
      this.setState({
        sliderValue:value,
      })
      clearInterval(this.intervalId);
      this.intervalId = setInterval(
        () => this.timer(value > 70 ? "positive" : "negative"), 
        10
      );
    }

    updateResult = (TransactionResult) => {
        if(TransactionResult === 'SUCCESS'){
          this.setState({ sliderValue: 10 })
        }else{
          this.setState({ transactionError:true, sliderValue: 0 })
        }
    }

    waringMessage = (text) => {
      return(
        text || <FormattedMessage
                id='voucher.warningSliderMessage'
                defaultMessage={'🆘 Are you sure you want to continue? Once swiped, there is no going back 🚨 '}
              />
      )
    }
    
    componentWillUnmount(){
      clearInterval(this.intervalId);
    }
    handleCancel = () => this.setState({ sliderValue: 0,transactionError:false })
    addTransaction = () => {
      addTransaction(this.props.token)
      .then(TransactionResult => this.updateResult(TransactionResult))
      .catch(err => this.setState({ transactionError:true, sliderValue: 0 }))
    }
    render () {
      
      return (
        <div id="slider-container">
          {
            <div className="slider-label"><FormattedMessage id='voucher.slideDemand'/></div>
          }
          { <ReactSlider
              orientation='horizontal'
              ariaLabel='This is a single handle'
              className='horizontal-slider'
              minDistance={10}
              defaultValue={this.state.sliderValue}
              value={this.state.sliderValue}
              snapDragDisabled={true}
              pearling= {true}
              onAfterChange={this.afterHandler}
              color={this.props.color}
            >
              <Icon name="arrow right" size="small"/>
            </ReactSlider>
          }
          <Modal
            open={ this.state.sliderValue > 99 || this.props.displayModal === 'true'}
            header={<Header icon='check'/>}            
          >
           <Modal.Content>
           <p>
             {
               this.waringMessage(CustomIntl(this.props.voucher, 'modalSliderWarningText'))
             }
              
            </p>
           </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.handleCancel}>
                <Icon name='remove' /><FormattedMessage id='voucher.no'defaultMessage={'no'}/>
              </Button>
              <Button color='red' onClick={this.addTransaction }>
                <Icon name='checkmark' /> <FormattedMessage id='voucher.yes'defaultMessage={'yes'}/>
              </Button>
            </Modal.Actions>
          </Modal>
          <Modal
            open={ this.state.transactionError  }
            content='We are sorry but there was an error validating this voucher. Please contact Admin support'
            actions={
              [
                { 
                  key: 'errorok', 
                  content: 'Ok', 
                  primary: true, 
                  onClick: this.handleCancel 
                }
              ]
            }
          />
        </div>
      )
    }
  }

  export default TransactionSlider;
  