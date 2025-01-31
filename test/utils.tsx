export const later = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))

export function patchCreateEvent(createEvent: any) {
  // patching createEvent
  for (let key in createEvent) {
    if (key.indexOf('pointer') === 0) {
      // @ts-ignore
      const fn = createEvent[key.replace('pointer', 'mouse')]
      if (!fn) continue
      // @ts-ignore
      createEvent[key] = function (type, { pointerId = 1, pointerType = 'mouse', ...rest } = {}) {
        const event = fn(type, rest)
        event.pointerId = pointerId
        event.pointerType = pointerType
        const eventType = event.type
        Object.defineProperty(event, 'type', {
          get: function () {
            return eventType.replace('mouse', 'pointer')
          }
        })
        return event
      }
    }
  }
}
