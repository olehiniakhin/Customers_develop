let ua = navigator.userAgent;
let os;
let version;

let uaIndex;

// determine OS
if (ua.match(/iPad/i) || ua.match(/iPhone/i)) {
    os = 'iOS';
    uaIndex = ua.indexOf('OS ');
}
else if (ua.match(/Android/i)) {
    os = 'Android';
    uaIndex = ua.indexOf('Android ');
}
else {
    os = null;
}

// determine version
if (os === 'iOS' && uaIndex > -1) {
    version = ua.substr(uaIndex + 3, 3).replace('_', '.');
}
else if (os === 'Android' && uaIndex > -1) {
    os = ua.substr(uaIndex + 8, 3);
}
else {
    version = null;
}

export const getVersion = () => {
    return this.version;
}

export const getOs = () => {
    return os;
}

export const isMobile = () => {
    return os !== null
}

 const detector = {
    getVersion: getVersion(),
    getOs: getOs(),
    isMobile:isMobile()
  }

  export default detector;