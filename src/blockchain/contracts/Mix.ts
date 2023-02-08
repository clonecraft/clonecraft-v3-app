import { caver, klaytn } from '../chain/klaytn'
import { mixCA } from '../chain/address'
import ERC20ABI from '../abi/ERC20.json'

async function balanceOfMix() {
  const contract = new caver.klay.Contract(ERC20ABI, mixCA)
  const balance = await contract.methods.balanceOf(klaytn.selectedAddress).call()
  return balance
}

export { balanceOfMix }