import reducer, * as generalDucks from '@/redux/ducks/general'

describe('Action:', () => {
  it('creates action to set general visible sidebar', () => {
    const expectAction = {
      type: generalDucks.GENERAL_VISIBLE_SIDEBAR_SET,
    }
    expect(generalDucks.generalVisibleSidebarSet()).toEqual(expectAction)
  })
})

describe('Reducer:', () => {
  it('handles action set general visible sidebar', () => {
    const action = {
      type: generalDucks.GENERAL_VISIBLE_SIDEBAR_SET,
    }
    const expectedState = {
      ...generalDucks.INITIAL_STATE,
      isVisibleSidebar: !generalDucks.INITIAL_STATE.isVisibleSidebar
    }
    expect(reducer(generalDucks.INITIAL_STATE, action)).toEqual(expectedState)
  })
})
