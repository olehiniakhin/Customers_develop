import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { NotFoundWrapper } from './styles'

class NotFound extends Component {
  render () {
    return (
      <NotFoundWrapper>
        <div className='message-container'>
          <p className='notfound-notice'>
            <FormattedMessage
              id='messages.notFound'
              defaultMessage={'Dear customer, this e-voucher does not exist.'}
            />
          </p>
        </div>
      </NotFoundWrapper>
    )
  }
}

export default NotFound
