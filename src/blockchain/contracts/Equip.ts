import { caver, klaytn } from '../chain/klaytn'
import { equipCA } from '../chain/address'
import EquipABI from '../abi/ClonecraftEquip.json'

async function equip(v3Id: Number, assetTypes: Array<Number>) {
  const contract = new caver.klay.Contract(EquipABI, equipCA)
  const data = await contract.methods.equip(v3Id, assetTypes).send({
    from: klaytn.selectedAddress,
    gas: '2500000'
  })
  return data
}

async function getAssetType(assetIds: Array<any>) {
  const contract = new caver.klay.Contract(EquipABI, equipCA)
  const types = await contract.methods.getAssetType(assetIds).call()
  return types
}

async function v3AssetIdsFromAssetTypes(v3Id: Number, assetTypes: Array<any>) {
  const contract = new caver.klay.Contract(EquipABI, equipCA)
  const types = await contract.methods.v3AssetIdsFromAssetTypes(v3Id, assetTypes).call()
  return types
}

export { equip, getAssetType, v3AssetIdsFromAssetTypes }