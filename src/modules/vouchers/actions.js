import Parse from "parse"


// Constants
export const FETCH_VOUCHER_REQUEST = 'FETCH_VOUCHER_REQUEST'
export const FETCH_VOUCHER_SUCCESS = 'FETCH_VOUCHER_SUCCESS'
export const FETCH_VOUCHER_FAILURE = 'FETCH_VOUCHER_FAILURE'

export const GENERATE_VOUCHER_REQUEST = 'GENERATE_VOUCHER_REQUEST'
export const GENERATE_VOUCHER_SUCCESS = 'GENERATE_VOUCHER_SUCCESS'
export const GENERATE_VOUCHER_FAILURE = 'GENERATE_VOUCHER_FAILURE'

export const UNLOCK_VOUCHER_REQUEST = 'UNLOCK_VOUCHER_REQUEST'
export const UNLOCK_VOUCHER_SUCCESS = 'UNLOCK_VOUCHER_SUCCESS'
export const UNLOCK_VOUCHER_FAILURE = 'UNLOCK_VOUCHER_FAILURE'

export const SEND_EMAIL_VOUCHER_REQUEST = 'SEND_EMAIL_VOUCHER_REQUEST'
export const SEND_EMAIL_VOUCHER_SUCCESS = 'SEND_EMAIL_VOUCHER_SUCCESS'
export const SEND_EMAIL_VOUCHER_FAILURE = 'SEND_EMAIL_VOUCHER_FAILURE'

export const UPDATE_VOUCHER = 'UPDATE_VOUCHER'
export const SET_VOUCHER_MODE = 'SET_VOUCHER_MODE'

export function getVoucherRequest() {
  return {
    type: FETCH_VOUCHER_REQUEST,
  }
}

export function getVoucherFailure (error) {
  return {
    type: FETCH_VOUCHER_FAILURE,
  }
}

export function setVoucherViewMode(data){
  return {
    type:SET_VOUCHER_MODE,
    payload:data
  }
}

export function getVoucherSuccess (voucher = {}) {
  return {
    type: FETCH_VOUCHER_SUCCESS,
    payload: voucher
  }
}


export function generateVoucherRequest() {
  return {
    type: GENERATE_VOUCHER_REQUEST,
  }
}

export function generateVoucherSuccess (token) {
  return {
    type: GENERATE_VOUCHER_SUCCESS,
    payload:token
  }
}

export function generateVoucherFailure (error) {
  return {
    type: GENERATE_VOUCHER_FAILURE,
    error: error
  }
}

export function updateVoucher (voucher = {}) {
  return {
    type: UPDATE_VOUCHER,
    payload: voucher
  }
}

export function unlockVoucherRequest() {
  return {
    type: UNLOCK_VOUCHER_REQUEST,
  }
}

export function unlockVoucherSuccess (payload) {
  return {
    type: UNLOCK_VOUCHER_SUCCESS,
    payload:payload
  }
}

export function unlockVoucherFailure (error) {
  return {
    type: UNLOCK_VOUCHER_FAILURE,
    error: error
  }
}

export function sendEmailRequest() {
  return {
    type: SEND_EMAIL_VOUCHER_REQUEST,
  }
}

export function sendEmailSuccess (payload) {
  return {
    type: SEND_EMAIL_VOUCHER_SUCCESS,
    payload:payload
  }
}

export function sendEmailFailure (error) {
  return {
    type: SEND_EMAIL_VOUCHER_FAILURE,
    error: error
  }
}


export const readVoucher = (token, templateId, mode, displayModal) => {
  
  return dispatch => {
  dispatch(getVoucherRequest())
  const Voucher = Parse.Object.extend('Voucher')
  const query = new Parse.Query(Voucher)

  query.equalTo("token", token)
  query.include("templateRef")

  let subscription = query.subscribe();

  subscription.on('open', () => {
    console.log('subscription opened');
   });

   subscription.on('error', (err) => {
    console.log('subscription err');
   });

   subscription.on('error', (error) => {
    console.log(error);
    });

   subscription.on('close', () => {
    console.log('subscription close');
   });

  subscription.on('update', voucher => {
    
    if(voucher.get('status') === 'consumed'){
      dispatch(updateVoucher(voucher))
      subscription.unsubscribe();
    }
  });
  
  if (!templateId) {

    Parse.Cloud.run("readVoucher", {token: token})
      .then(voucher => dispatch(getVoucherSuccess(voucher)))
      .catch(err => dispatch(getVoucherFailure(err)))
  }
  else {
    Parse.Cloud.run("readFakeVoucher", {fakeId: templateId})
      .then(voucher =>
         {
           dispatch(setVoucherViewMode({'mode':mode, 'displayModal':displayModal}))
           dispatch(getVoucherSuccess(voucher))
         })
      .catch(err => dispatch(getVoucherFailure(err)))
    }
  }
}

export const generateVoucher = (campaignId) => {
  return dispatch => {
    dispatch(generateVoucherRequest())
    Parse.Cloud.run("readRandomVoucher", {campaignId: campaignId})
    .then(token => dispatch(generateVoucherSuccess(token)))
    .catch(err => dispatch(generateVoucherFailure(err)))
  }
}

export const unlockVoucher = (email, token) => {
  return dispatch => {
    dispatch(unlockVoucherRequest())
    Parse.Cloud.run("unlockVoucher", { email: email, token:token })
    .then(token => dispatch(generateVoucherSuccess(token)))
    .catch(err => dispatch(unlockVoucherFailure(err)))
  }
}

export const sendEmail = (email, token) => {
  return dispatch => {
    dispatch(sendEmailRequest())
    Parse.Cloud.run("sendEmail", { email: email, token:token })
    .then(result => dispatch(sendEmailSuccess(result)))
    .catch(err => dispatch(sendEmailFailure(err)))
  }
}

export const addTransaction = ( token) => {
  return Parse.Cloud.run('addAnonymousTransaction', {token})
}