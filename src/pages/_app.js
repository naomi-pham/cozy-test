import 'styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <main className="font-graphik">
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}
