import { connect } from 'react-redux'
import StoresView from '../../components/StoresView'
import { fetchStores } from '../../modules/stores/actions'

function normalizeStoresList (partners) {
  const normalizedPartners = []

  for (const partner of partners) {
    const normalizedPartner = normalizedPartners.find(p => partner.brand_code === p.brand_code)

    if (!normalizedPartner) {
      normalizedPartners.push({
        brand_code: partner.brand_code,
        brand_name: partner.brand_code,
        description: partner.description,
        email: partner.email,
        logo_url: partner.logo_url,
        partner_id: partner.partner_id,
        _id: partner._id,
        restaurants: [{
          location: partner.location,
          roles: partner.roles,
          schedules: partner.schedules,
          side: partner.side,
          terminal_id: partner.terminal_id,
          username: partner.username
        }]
      })
    } else {
      normalizedPartner.restaurants.push({
        location: partner.location,
        roles: partner.roles,
        schedules: partner.schedules,
        side: partner.side,
        terminal_id: partner.terminal_id,
        username: partner.username
      })
    }
  }

  return normalizedPartners
}

const mapStateTopProps = (state) => ({
  partners: normalizeStoresList(state.stores.storesList.slice(1)),
  isFetchingStores: state.stores.isFetchingStores
})

const mapActionCreators = {
  fetchStores
}

export default connect(mapStateTopProps, mapActionCreators)(StoresView)
