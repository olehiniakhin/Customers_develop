import React from 'react'
import PropTypes from 'prop-types'
import { Dimmer, Loader } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import Partner from './Partner'
import { PartnersListWrapper } from './styles'

const PartnersList = ({ isFetching, partners }) => {
  return (
    <PartnersListWrapper>
      {
        isFetching &&
        <Dimmer inverted active>
          <Loader>
            <FormattedMessage
              id='messages.loading'
              defaultMessage={'Loading'}
            />
          </Loader>
        </Dimmer>
      }
      {
        partners.length > 0 && partners.map(p => <Partner key={p._id} partnerDetails={p} />)
      }
    </PartnersListWrapper>
  )
}

PartnersList.propTypes = {
  partners: PropTypes.array.isRequired
}

export default PartnersList
