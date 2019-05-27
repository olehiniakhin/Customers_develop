import styled from 'styled-components'
import { media } from '../../../utils/styledHelper'

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #f9f9fa url("images/not-found.png") center no-repeat;
  
  .message-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    
    ${media.maxTablet`
      height: 80%;
    `}
  }
  
  .notfound-notice {
    font-size: 20px;
    color: #888;
    padding: 0 20px;
    text-align: center;
  }
`
