import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import { Transition } from 'semantic-ui-react'
import PlusIcon from 'react-icons/lib/io/ios-plus-empty'
import MinusIcon from 'react-icons/lib/io/ios-minus-empty'
import {
  PartnerListItem,
  PartnerDetailWrapper,
  PartnerDescription,
  RestaurantWrapper
} from './styles'

const Restaurant = ({ restaurant, intl: { locale, formatMessage } }) => {
  return (
    <RestaurantWrapper>
      <h3 className='shy medium resturant-side'>
        { formatMessage({ id: (restaurant.side === 'air' ? 'stores.sideAir' : 'stores.sideLand') }) }:
      </h3>
      <ul className='resturant-details'>
        <li>{ restaurant.schedules[locale] }</li>
        <li>{ formatMessage({ id: 'stores.price' }) } $ - $$</li>
        <li>{ restaurant.location[locale] }</li>
      </ul>
    </RestaurantWrapper>
  )
}

const RestaurantWithIntl = injectIntl(Restaurant)

class Partner extends Component {
  constructor () {
    super()

    this.state = {
      isDetailOpen: false
    }

    this.toggleDetails = this.toggleDetails.bind(this)
  }

  toggleDetails () {
    this.setState({
      isDetailOpen: !this.state.isDetailOpen
    })
  }

  render () {
    const { partnerDetails, intl: { locale, formatMessage } } = this.props

    return (
      <PartnerListItem onClick={this.toggleDetails}>
        <div className='partner-image'>
          <img src={partnerDetails.logo_url} alt={partnerDetails.brand_name} />
        </div>
        <PartnerDescription>
          <div className='description-header'>
            <h3 className='partner-desc-hd'>{partnerDetails.description[locale]}</h3>
            <div className='collapse-icon'>
              {
                this.state.isDetailOpen ? <MinusIcon /> : <PlusIcon />
              }
            </div>
          </div>
          <Transition visible={this.state.isDetailOpen} animation='fade down' duration={250}>
            <PartnerDetailWrapper isOpen={this.state.isDetailOpen}>
              <h4 className='medium shy partner-detail-summary'>
                {partnerDetails.restaurants.length} { formatMessage({ id: 'stores.location' }) }
              </h4>
              {
                partnerDetails.restaurants.map(r => <RestaurantWithIntl key={r.location.en} restaurant={r} />)
              }
            </PartnerDetailWrapper>
          </Transition>
        </PartnerDescription>
      </PartnerListItem>
    )
  }
}

Partner.propTypes = {
  intl: PropTypes.object.isRequired,
  partnerDetails: PropTypes.object.isRequired
}

export default injectIntl(Partner)
