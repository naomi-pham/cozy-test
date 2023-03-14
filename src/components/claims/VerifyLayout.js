import FetchRequest from 'components/auth/FetchRequest'
import Badge from 'components/common/Badge'
import Button from 'components/common/Button'
import CustomLink from 'components/common/CustomLink'
import ListNumber from 'components/common/ListNumber'
import { useState } from 'react'
import errors from '../common/ErrorCodes'

export const VerifyLayout = ({ list, type, user }) => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleClaimID() {
    postClaimCodes()
  }

  const postClaimCodes = async () => {
    try {
      setLoading(true)
      const res = await FetchRequest({
        method: 'POST',
        url: `/users/claim-business/${type}`,
      })
      const data = await res.json()
      if (!res.ok) {
        return setError(res.message)
      }
      if (data.message === 'SUCCESS') {
        console.log('success')
      }
    } catch (error) {
      return setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="space-y-6">
        <p>
          Verify that you own{' '}
          <span className="tex-light-700 font-500">{user?.website}</span> by
          adding a meta tag to your home page. You’ll need access to your
          website’s HTML code. We always use a secure connection (HTTPS) when
          verifying domains.
        </p>
        <CustomLink href="/" size="small" label="Learn more" />
        <div className="flex flex-col gap-6">
          {list.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-start gap-4 sm:flex-nowrap"
            >
              <ListNumber number={item.id} />
              <>{item.content}</>
            </div>
          ))}
        </div>
        <Button
          intent="primary"
          size="medium"
          onClick={handleClaimID}
          isLoading={loading}
        >
          Verify domain
        </Button>
      </div>

      <div
        className={`transition-opacity duration-700 ease-in ${
          error ? 'opacity-1 mt-6' : 'opacity-0'
        }`}
      >
        {error && (
          <Badge
            intent={error ? 'error' : 'info'}
            label={error ? errors[error] : `Your domain is verified`}
          />
        )}
      </div>
    </>
  )
}
