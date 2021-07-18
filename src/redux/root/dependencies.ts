import api from '@/utils/api'
import * as localStorage from '@/utils/localStorage'

const dependencies = {
  api,
  localStorage
}

export type EpicDependencies = typeof dependencies

export default dependencies
