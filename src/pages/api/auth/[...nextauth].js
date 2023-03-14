import fetchRequest from 'components/auth/FetchRequest'
import errors from 'components/common/ErrorCodes'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const payload = {
            email: credentials.email,
            password: credentials.password,
          }

          const authResponse = await fetchRequest({
            method: 'POST',
            url: '/login',
            body: JSON.stringify(payload),
          })

          const user = await authResponse.json()

          if (!authResponse.ok) {
            throw Error(user.message)
          }

          if (authResponse.ok && user) {
            return user
          }

          return null
        } catch (error) {
          if (errors[error.message]) {
            throw Error(error.message)
          } else {
            throw Error('SERVER_ERROR')
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user, profile, isNewUser }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }

      if (user && user.data) {
        token.accessToken = user.data.token
      }

      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    },
  },
  pages: {
    signIn: '/auth',
    signUp: '/auth',
  },
  // Enable debug messages in the console if you are having problems
  debug: true,
})
