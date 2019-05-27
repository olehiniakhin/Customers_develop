import styled from 'styled-components'
import { Modal as SemanticModal } from 'semantic-ui-react'

export const Modal = styled(SemanticModal)`
  &&&&&& {
    width: 100vw !important;
    height: auto;
    min-height: 100vh !important;
    border-radius: 0 !important;
    margin: 0 !important;
    
    .content {
      padding: 0 !important;
    }
  }
`
