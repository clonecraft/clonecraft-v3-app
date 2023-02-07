let klaytn: any
let caver: any

const connect = () => {
  if (window.klaytn === undefined) {
    alert('Please install Kaikas wallet')
    return false
  }
  klaytn = window.klaytn
  caver = window.caver
}

export {
  klaytn, caver, connect
}