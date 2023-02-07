import { caver, klaytn } from '../chain/klaytn'
import { nectarCA } from '../chain/address'
import ERC20ABI from '../abi/ERC20.json'

async function balanceOfNectar() {
  const contract = new caver.klay.Contract(ERC20ABI, nectarCA)
  const balance = await contract.methods.balanceOf(klaytn.selectedAddress).call()
  return balance
}

export { balanceOfNectar }