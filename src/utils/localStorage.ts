export const getLocalStorage = (key: string) => localStorage.getItem(key)

interface SetLocalStorageParams {
  key: string
  value: string
}

export const setLocalStorage = ({ key, value }: SetLocalStorageParams) => {
  try {
    localStorage.setItem(key, value)
  } catch (e) {
    alert(`Cannot store ${key}`)
  }
}

export const removeLocalStorage = (key: string) => localStorage.removeItem(key)
