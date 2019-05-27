import React, {Component} from 'react'
import { Dimmer, Loader, Container} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'


export default class VerifiyTokenPage extends Component {
  constructor() {
    super()
    this.state = {
      storesModalOpen: false
    }
  }

  componentDidMount() {
    
    const {email, token} = this.props.match.params
    this.props.unlockVoucher(email, token)
  }

  render() {
    
    const {token, error} = this.props
    if (token) {
      return (<Redirect to={'/'+token}/>)
    } else if(error){
     return (<Redirect to={'/'+404}/>)
    }
    return (
      <Container Padded>
        {<Dimmer inverted active>
          <Loader>
            Déblocage du coupon
            {/* <FormattedMessage id='messages.loading' defaultMessage={'Déblocage du coupon'}/> */}
          </Loader>
        </Dimmer>}
      </Container>
    )
  }
}