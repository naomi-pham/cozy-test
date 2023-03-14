const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export async function fetchSession() {
  try {
    const res = await fetch('/api/auth/session')
    const session = await res.json()
    if (Object.keys(session).length) {
      return session
    }
    return null
  } catch (error) {
    console.log('🚀 ===== error:', error)
  }
}

const FetchRequest = async ({ url, method, body }) => {
  try {
    const defaultOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    const opts = { ...defaultOptions, url, method, body }

    // remove undefined key-value
    Object.keys(opts).forEach(
      (key) => opts[key] === undefined && delete opts[key]
    )

    // // Set auth token

    if (!opts.headers.Authorization) {
      const session = await fetchSession()
      if (session && session.accessToken) {
        opts.headers.Authorization = `Bearer ${session.accessToken}`
      }
    }

    const response = await fetch(`${BASE_URL}${url}`, opts)

    if (process.env.NODE_ENV !== 'production') {
      console.log(`fetchApi: ${BASE_URL}${url} ------------`, opts)
    }

    return response
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Call API Error: ', err)
    }
    // if (err?.response?.data) {
    //   return err?.response?.data
    // }
    // cb(err)
    // return Promise.reject(err)
  }
}

export default FetchRequest
