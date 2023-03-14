import FetchRequest from 'components/auth/FetchRequest'
import Badge from 'components/common/Badge'
import Button from 'components/common/Button'
import { useEffect, useState } from 'react'
import errors from '../common/ErrorCodes'

import { VerifyLayout } from './VerifyLayout'

const VerifyMetaTag = () => {
  const [claimCodes, setClaimCodes] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getClaimCodes()
  }, [])

  const getClaimCodes = async () => {
    try {
      setLoading(true)
      const res = await FetchRequest({
        method: 'GET',
        url: '/users/claim-business/claim-codes',
      })
      const data = await res.json()
      if (!res.ok) {
        return setError(res.message)
      }
      if (data.message === 'SUCCESS') {
        setClaimCodes(data)
      }
    } catch (error) {
      console.log(error)
      return setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const metaTagList = [
    {
      id: 1,
      content: <MetaStep1 claimID={claimCodes?.data?.html_file} />,
    },
    {
      id: 2,
      content: <MetaStep2 />,
    },
  ]

  return (
    <>
      {error ? (
        <Badge intent="error" label={errors[error]} />
      ) : (
        <VerifyLayout list={metaTagList} type="meta-tag" />
      )}
    </>
  )
}

export const MetaStep1 = ({ claimID }) => {
  const [isCopied, setIsCopied] = useState(false)
  const scriptToCopy = `<meta
    name="cozycot-one-time-domain-verification-id"
    content="cozycot-one-time-domain-verification-id"
  />`

  function handleCopy() {
    navigator.clipboard.writeText(scriptToCopy)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  return (
    <div>
      <p>
        Copy the meta tag below and paste it in the HTML code of your site’s
        home page. It should go in the {`<head>`} section, before the first{' '}
        {`<body>`} section
      </p>

      <div className="xs:flex-row relative mt-2 flex w-full flex-col items-center gap-4 rounded-lg bg-light-neutral-300 p-4">
        <p>
          {`<meta
            name="cozycot-one-time-domain-verification-id"
            content="${claimID}"
          />`}
        </p>

        <Button intent="primary" size="small" onClick={handleCopy}>
          {isCopied ? 'Copied' : 'Copy'}
        </Button>
      </div>
    </div>
  )
}

export const MetaStep2 = () => {
  return <p className="self-center">Click on Verify domain</p>
}

export default VerifyMetaTag
