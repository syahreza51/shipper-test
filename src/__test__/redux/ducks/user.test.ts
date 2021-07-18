import reducer, * as userDucks from '@/redux/ducks/user'

const responseExample = [
  {
    dob: "1992-05-16T15:22:37.750Z",
    email: "clementine.andre@example.com",
    firstName: "Clémentine",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
    lastName: "Andre",
    phone: "06-03-10-71-15",
    username: "purplebutterfly199"
  }
]

describe('Action:', () => {
  it('creates action to fetch user', () => {
    const payload = 30
    const expectAction = {
      type: userDucks.USER_FETCH,
      payload
    }
    expect(userDucks.userFetch(payload)).toEqual(expectAction)
  })
  it('creates action to fetch user success', () => {
    const expectAction = {
      type: userDucks.USER_FETCH_SUCCESS,
      payload: responseExample
    }
    expect(userDucks.userFetchSuccess(responseExample)).toEqual(expectAction)
  })
  it('creates action to fetch user failed', () => {
    const expectAction = {
      type: userDucks.USER_FETCH_FAILED,
    }
    expect(userDucks.userFetchFailed()).toEqual(expectAction)
  })
})

describe('Reducer:', () => {
  it('handles action set general visible sidebar', () => {
    const payload = 30
    const action = {
      type: userDucks.USER_FETCH,
      payload
    }
    const expectedState = {
      ...userDucks.INITIAL_STATE,
      isLoading: true,
      totalResult: payload
    }
    expect(reducer(userDucks.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action set general visible sidebar success', () => {
    const action = {
      type: userDucks.USER_FETCH_SUCCESS,
      payload: responseExample
    }
    const expectedState = {
      ...userDucks.INITIAL_STATE,
      data: responseExample
    }
    expect(reducer(userDucks.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action set general visible sidebar failed', () => {
    const action = {
      type: userDucks.USER_FETCH_FAILED
    }
    const expectedState = {
      ...userDucks.INITIAL_STATE,
      isError: true
    }
    expect(reducer(userDucks.INITIAL_STATE, action)).toEqual(expectedState)
  })
})
