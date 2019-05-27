import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Icon, Input, Button, Transition } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import { EmailInputCard } from './styles'
import lockIcon from '../../assets/images/lock.svg'

class EmailInput extends Component {
  state = {
    inputValue: null,
    inputError: null,
    inputTouched: false,
  }

  onInputChange = (e) => {
    e.preventDefault()
    this.setState({
      inputValue: e.target.value,
      inputError: null,
      inputTouched: true
    })
  }

  onButtonClick = () => {
    const { inputValue } = this.state
    const { onSubmit } = this.props
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!inputValue || !emailRegex.test(inputValue.toLowerCase())) {
      this.setState({
        inputError: 'invalidEmail'
      })
    } else {
      onSubmit(inputValue)
    }
  }

  render () {
    const {
      isConfirmLoading,
      isRequestSuccessfully
    } = this.props
    
    const {
      inputError, inputTouched
    } = this.state
    const { visible } = this.props

    return (
      <EmailInputCard visible={visible}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <img src={lockIcon} className='lock-icon' alt='lock icon' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={1} style={{ paddingTop: '0' }}>
            <Transition
              visible={isRequestSuccessfully}
              animation='fade'
            >
              <Grid.Column width={14} stretched>
                <p className='confirmation-text'>
                  <FormattedMessage id='messages.confirmationEmailSend' />
                </p>
              </Grid.Column>
            </Transition>
            <Transition
              visible={!isRequestSuccessfully}
              animation='fade'
            >
              <Grid.Column width={14} stretched>
                <p>
                  <FormattedMessage id='instructions.emailInput' />
                </p>
                <Input
                  iconPosition='left'
                  placeholder='Email'
                  onChange={this.onInputChange}
                  error={!!inputError}
                >
                  <Icon name='at' />
                  <input />
                </Input>
                <Transition
                  visible={inputError}
                  animation='fade down'
                  duration={{ hide: 500, show: 500 }}
                  unmountOnHide={false}
                  mountOnShow={false}
                >
                  <p className='input-error'>
                    {
                      inputError ? <FormattedMessage id={`messages.${inputError}`} /> : <span style={{ opacity: '0' }}>...</span>
                    }
                  </p>
                </Transition>
                {
                  !inputError && <p className='input-error' />
                }
              </Grid.Column>
            </Transition>
          </Grid.Row>
          <Grid.Row centered style={{ paddingTop: '0' }}>
            <Grid.Column width={8} stretched>
              <Button
                animated='fade'
                icon
                labelPosition='right'
                onClick={this.onButtonClick}
                disabled={(!inputTouched || !!inputError)}
                className={`email-submit-button ${!isRequestSuccessfully ? 'visible' : 'invisible'}`}
                loading={isConfirmLoading}
                >
                <FormattedMessage id='buttons.send' />
                <Icon name='paper plane' />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </EmailInputCard>
    )
  }
}

EmailInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default EmailInput
