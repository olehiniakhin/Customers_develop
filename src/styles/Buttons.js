import styled from 'styled-components'
import { Button as SemanticButton } from 'semantic-ui-react'

const buttonBackgrounds = {
  primary: {
    normal: 'rgb(5, 16, 57)',
    hovered: 'rgb(7, 23, 80)'
  }
}

export const Button = styled(SemanticButton)`
  &&&&& {
    text-transform: uppercase;
    font-weight: normal;
    color: #fff;
    background-color: ${props => buttonBackgrounds[props.nature].normal};
    
    &:active:hover {
      background-color: ${props => buttonBackgrounds[props.nature].hovered};
    }
  }
`
