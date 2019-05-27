import styled from 'styled-components'
import { media } from '../../../utils/styledHelper'

export const Nav = styled.div`
  padding: 16px;
  border-bottom: 1px solid #eee;
  margin-bottom: 40px;
  
  .back-link {
    span:hover {
      text-decoration: underline;
    }
  }
  
  .back-icon {
    margin-right: 5px;
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  
  ${media.minTablet`
    width: 70%;
  `}
  
  ${media.minDesktop`
    width: 50%;
    max-width: 600px;
  `}
`

export const Header = styled.div`
  .partners-heading {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: normal;
  }
  
  .partners-subhead {
    font-size: 16px;
    margin-bottom: 10px;
  }
`

export const PartnersListWrapper = styled.div`

`

export const PartnerListItem = styled.div`
  display: flex;
  border-top: 1px solid #95989a;
  padding: 20px 0;
  
  .partner-image {
    margin-right: 10px;
    
    img {
      width: 64px;
      height: auto;
    }
  }
`

export const PartnerDescription = styled.div`
  width: 100%;
  padding: 0 15px;
  
  .partner-desc-hd {
    font-size: 14px;
    line-height: 1.5;
    
    ${media.minTablet`
     font-size: 16px;
    `}
  }
  
  .description-header {
    position: relative;
    cursor: pointer;
  }
  
  .collapse-icon {
    position: absolute;
    font-size: 30px;
    bottom: -1em;
    right: 0;
  }
`

export const PartnerDetailWrapper = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  padding: 15px;
  color: rgb(5, 16, 57);
  
  ${media.minTablet`
     padding: 15px 50px;
  `}
  
  .partner-detail-summary {
    color: rgb(5, 16, 57);
  }
`

export const RestaurantWrapper = styled.div`
  margin-bottom: 20px;
  
  .resturant-details {
    list-style: none;
    padding: 0;
    
    li {
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 5px;
      line-height: 1.5;
      
      ${media.minTablet`
        font-size: 18px;
      `}
    }
  }
`
