import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'
import { LogoWrapper } from './styles'

const VoucherHeader = ({ logo }) => {
  return (
    <Container>
      <LogoWrapper>
        <img
          className='logo-img'
          src={logo}
          alt='logo'/>
      </LogoWrapper>
    </Container>
  )
}

VoucherHeader.propTypes = {
  logo: PropTypes.string
}

export default VoucherHeader
