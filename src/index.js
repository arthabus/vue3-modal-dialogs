'use strict'

import { create } from './create'
import DialogsWrapper from './wrapper'

export {
  create,
  DialogsWrapper
}

/** vue-modal-dialogs plugin installer */
export function install (Vue, options) {
  Vue.component('DialogsWrapper', DialogsWrapper)
}

export function makeDialog (...args) {
  if (process.env.NODE_ENV === 'development') {
    console.error('[vue-modal-dialogs] makeDialog function is deprecated. Use ModalDialogs.create instead.')
  }

  return create(...args)
}
