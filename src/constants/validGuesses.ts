import { CONFIG } from './config'

export const VALIDGUESSES = [
   'cat',
  "dog",
  'rat',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
