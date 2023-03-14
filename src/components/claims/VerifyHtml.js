import FetchRequest from 'components/auth/FetchRequest'
import Badge from 'components/common/Badge'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { download } from 'src/utils/downloadHtmlFile'
import errors from '../common/ErrorCodes'
import { VerifyLayout } from './VerifyLayout'

const VerifyHtml = ({ user }) => {
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

  const upLoadHtmlList = [
    {
      id: 1,
      content: (
        <UploadStep1
          claimID={claimCodes?.data?.html_file}
          user={user}
          downloadHtmlFile={download}
        />
      ),
    },
    {
      id: 2,
      content: <UploadStep2 user={user} />,
    },
    {
      id: 3,
      content: (
        <UploadStep3 claimID={claimCodes?.data?.html_file} user={user} />
      ),
    },
    {
      id: 4,
      content: <UploadStep4 user={user} />,
    },
  ]

  return (
    <>
      {error ? (
        <Badge intent="error" label={errors[error]} />
      ) : (
        <VerifyLayout list={upLoadHtmlList} user={user} type="html-file" />
      )}
    </>
  )
}

export const UploadStep1 = ({ claimID, downloadHtmlFile }) => {
  return (
    <div className="self-center">
      Download the{' '}
      <button
        type="button"
        className="text-links"
        onClick={downloadHtmlFile(claimID)}
      >
        HTML verification file
      </button>
      <span className="block">[{claimID}.html]</span>
    </div>
  )
}

export const UploadStep2 = ({ user }) => {
  return (
    <p className="self-center">
      Upload the file to{' '}
      <Link href={`https://${user?.website}/`} target={'_blank'}>
        https://{user?.website}
      </Link>{' '}
      root folder
    </p>
  )
}

export const UploadStep3 = ({ claimID, user }) => {
  return (
    <p>
      Confirm successful upload of the HTML file by going to{' '}
      <Link href={`https://${user?.website}/${claimID}.html`} target={'_blank'}>
        https://{user?.website}/{claimID}.html
      </Link>{' '}
      in your browser.
    </p>
  )
}

export const UploadStep4 = () => {
  return (
    <p className="self-center">
      Once you’ve uploaded the file, click on Verify domain
    </p>
  )
}

export default VerifyHtml
