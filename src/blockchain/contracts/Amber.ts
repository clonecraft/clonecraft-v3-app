import { caver, klaytn } from '../chain/klaytn'
import { amberCA } from '../chain/address'
import ERC20ABI from '../abi/ERC20.json'

async function balanceOfAmber() {
  const contract = new caver.klay.Contract(ERC20ABI, amberCA)
  const balance = await contract.methods.balanceOf(klaytn.selectedAddress).call()
  return balance
}

export { balanceOfAmber }