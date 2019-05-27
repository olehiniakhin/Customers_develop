import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'semantic-ui-react'
import { Modal as StyledModal } from './styles'

const Modal = ({ isOpen, onClose, children, nav }) => {
  return (
    <Transition visible={isOpen} animation='fade down' duration={500}>
      <StyledModal open={isOpen} onClose={onClose}>
        { children }
      </StyledModal>
    </Transition>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Modal
