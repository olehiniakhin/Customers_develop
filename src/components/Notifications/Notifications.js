import React, { Component } from 'react'
import { Container, Transition } from 'semantic-ui-react'
import { NotificationsWrapper } from './styles'

let showFn = null
let hideFn = null

class Notifications extends Component {
  constructor () {
    super()

    this.state = {
      show: false,
      message: ''
    }

    this.hideNotification = this.hideNotification.bind(this)
    this.showNotification = this.showNotification.bind(this)

    showFn = this.showNotification
    hideFn = this.hideNotification
  }

  hideNotification () {
    this.setState({
      show: false
    })
  }

  showNotification (message) {
    this.setState({
      show: true,
      message
    })
  }

  render () {
    return (
      <div>
        {
          <Transition visible={this.state.show} animation='fade down' duration={500}>
            <NotificationsWrapper>
              <Container>
                <div className='message-wrapper'>
                  <div className='message-text'>{ this.state.message }</div>
                </div>
              </Container>
            </NotificationsWrapper>
          </Transition>
        }
      </div>
    )
  }
}

export const notify = {
  show: (message) => { showFn(message) },
  hide: () => { hideFn() }
}

export default Notifications
