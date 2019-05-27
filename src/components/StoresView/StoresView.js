import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Icon, Container } from 'semantic-ui-react'
import PartnersList from './PartnersList'
import { Nav, ContentWrapper, Header } from './styles'

class StoresView extends Component {
  
  componentWillMount () {
    this.props.fetchStores()
  }

  render () {
    const { closeView, partners, isFetchingStores } = this.props
    return (
      <div>
        <Nav>
          <a href='#' className='back-link shy text-smoke' // eslint-disable-line 
            onClick={(e) => {
              e.preventDefault()
              closeView()
            }}
          >
            <Icon className='back-icon' name='chevron left' />&nbsp;
            <span className='shy text-smoke'>
              <FormattedMessage
                id='stores.back'
                defaultMessage={'Voucher'}
              />
            </span>
          </a>
        </Nav>
        <Container>
          <ContentWrapper>
            <Header>
              <h1 className='partners-heading'>
                <FormattedMessage
                  id='stores.list'
                  defaultMessage={'Our Partners'}
                />
              </h1>
              <p className='text-smoke partners-subhead'>
                <FormattedMessage
                  id='stores.youCanUseThere'
                  defaultMessage={'You can spend your voucher in those stores.'}
                />
              </p>
            </Header>
            { <PartnersList isFetching={isFetchingStores} partners={partners} /> }
          </ContentWrapper>
        </Container>
      </div>
    )
  }
}

StoresView.propTypes = {
  fetchStores: PropTypes.func.isRequired,
  closeView: PropTypes.func.isRequired,
  partners: PropTypes.array.isRequired
}

export default StoresView
