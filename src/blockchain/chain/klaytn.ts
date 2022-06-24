// import Caver from 'caver-js'

let klaytn: any
let caver: any

const connect = () => {
  if (window.klaytn === undefined) {
    alert('Please install Kaikas wallet')
    return false
  }
  klaytn = window.klaytn
  caver = window.caver
  // caver = new Caver('https://api.bank.klaytn.net')
}

export {
  klaytn, caver, connect
}