import { RecognizersMap } from '../recognizers/Recognizer'
import ScrollRecognizer from '../recognizers/ScrollRecognizer'
import { UseScrollConfig, Handler } from '../types'
import { buildScrollConfig } from './buildConfig'
import useRecognizers from './useRecognizers'

/**
 * Scroll hook.
 *
 * @param handler - the function fired every time the scroll gesture updates
 * @param [config={}] - the config object including generic options and scroll options
 */
export function useScroll<Config = UseScrollConfig>(handler: Handler<'scroll'>, config: Config | {} = {}) {
  return useRecognizers<Config>({ scroll: handler }, buildScrollConfig(config))
}

RecognizersMap.set('scroll', ScrollRecognizer)
