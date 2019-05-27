import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import Notifications, { notify } from '../Notifications'

class Layout extends Component {
  componentWillMount () {
    const { intl: { formatMessage } } = this.props

    if (window) {
      window.addEventListener('online', notify.hide)
      window.addEventListener('offline', () => {
        notify.show(formatMessage({ id: 'messages.noConnection' }))
      })
    }
  }

  render () {
    return (
      <div>
        <Notifications />
        { this.props.children }
      </div>
    )
  }
}

export default injectIntl(Layout)
