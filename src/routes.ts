import Main from './pages/main/index.svelte'
import V3Mint from './pages/v3mint/index.svelte'
import Equip from './pages/equip/index.svelte'
import Amber from './pages/amber/index.svelte'
import Nectar from './pages/nectar/index.svelte'
import NotFound from './pages/NotFound/index.svelte'

export default {
  '/': Main,
  '/omega-mint': V3Mint,
  '/equip': Equip,
  '/amber': Amber,
  '/nectar': Nectar,
  // Catch-all, must be last
  '*': NotFound,
}