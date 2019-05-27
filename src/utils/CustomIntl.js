import browserLanguage from 'in-browser-language'
const userLang = browserLanguage.first(); 

const CustomIntl = (voucher, key) => {
  if(voucher.get('templateRef').get('resourcesLanguage') ){
    return voucher.get('templateRef').get('resourcesLanguage')[key][userLang] || voucher.get('templateRef').get('resourcesLanguage')[key]['en']  
  }else{
    return voucher.get('templateRef').get(key)
  }
};

export default CustomIntl;