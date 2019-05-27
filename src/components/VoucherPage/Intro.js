import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Grid , Header, Container} from 'semantic-ui-react'
import { IntroWrapper } from './styles'
import CustomIntl from "../../utils/CustomIntl"


const consumedVoucher = (text) => 

      text || <FormattedMessage
       id='voucher.spentText'
       defaultMessage={'Thank you for using your e-voucher. We hope it made your time more enjoyable.'}
     />


const expiredVoucher = (text) =>
 text ||
     <FormattedMessage
      id='voucher.expiredText'
      defaultMessage={'We apologize but your e-voucher has reach it\'s expiration date.'}/> 


const WelcomeMessage = ({ description , styles}) => {
  return (
    <Container textAlign={styles.instructions.alignmentText}>
      <p style={{fontSize:styles.instructions.size+'px', color:styles.instructions.color}}>
      {description}
      </p>
    </Container>
  )
}

const Intro = ({ amount, title, isConsumed, isExpired ,onStoresLinkClick, styles ,intl: { formatMessage }, voucher }) => 
{
return (
  <Grid.Row>
    <Grid.Column width={8} mobile={16} tablet={10} largeScreen={8}>
      <IntroWrapper>
        <Header size='huge' style={{color:styles.titles.color}} className='thin text-night voucher-title'>
          { !isConsumed && !isExpired && CustomIntl(voucher, "title") }
          { isConsumed && CustomIntl(voucher, "consumedTitle")}
          { isExpired && CustomIntl(voucher, "expiredTitle")}
        </Header>
        <p className='text-smoke voucher-title-detail'>
          {
            !isConsumed && !isExpired &&
            <WelcomeMessage
              amount={amount}
              onStoresLinkClick={onStoresLinkClick}
              formatMessage={formatMessage}
              description={CustomIntl(voucher,"instruction")}
              styles={styles}
            />
          }
           <p className='text-smoke voucher-title-detail' style={{color:styles.instructions.color, fontSize:styles.instructions.size+'px'}}>
              { isConsumed && consumedVoucher(CustomIntl(voucher, "consumedInstruction"))}
              { isExpired && expiredVoucher(CustomIntl(voucher, "expiredInstruction"))}
          </p>

        </p>
      </IntroWrapper>
    </Grid.Column>
  </Grid.Row>
)
}
Intro.propTypes = {
  intl: PropTypes.object.isRequired,
  isConsumed: PropTypes.bool.isRequired,
  isExpired: PropTypes.bool.isRequired,
  onStoresLinkClick: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired
}

export default injectIntl(Intro)
