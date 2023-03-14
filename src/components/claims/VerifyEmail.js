import FetchRequest from 'components/auth/FetchRequest'
import Badge from 'components/common/Badge'
import Button from 'components/common/Button'
import Input from 'components/common/Input'
import { useState } from 'react'

import errors from '../common/ErrorCodes'

const VerifyEmail = ({ user }) => {
  // const { isLoading, error, isSent, postData, setIsSent } = usePostData(
  //   `users/claim-business/send-mail`
  // )

  // const [user, setUser] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isSent, setIsSent] = useState(false)

  const [email, setEmail] = useState({
    domain: '',
    extension: `${user?.website}`,
  })

  function handleEmail(e) {
    e.preventDefault()
    setIsSent(false)
    const { name, value } = e.target
    setEmail({ ...email, [name]: value })
  }

  function handleSubmit() {
    postUserEmail(`${email.domain}@${email.extension}`)
  }

  const postUserEmail = async (value) => {
    try {
      setLoading(true)
      const res = await FetchRequest({
        method: 'POST',
        url: 'users/claim-business/send-mail',
        body: value,
      })
      const data = await res.json()
      if (!res.ok) {
        return setError(res.message)
      }
      if (data.message === 'SUCCESS') {
        // setUser(data)
      }
    } catch (error) {
      return setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <p>
        Enter the email address associated with{' '}
        <span className="font-graphik-medium text-light-neutral-700">
          {user?.website}
        </span>
        . We only use it to verify your domain ownership. You’ll still need{' '}
        <span className="font-graphik-medium text-light-neutral-700">
          {user?.email}
        </span>{' '}
        to log into your cozycot account
      </p>

      <div className="mt-6 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex w-full flex-col space-y-2">
          <Input
            type="domain"
            name="domain"
            id="domain"
            size="medium"
            intent={error === 'PASS_NOT_MATCH' ? 'error' : 'primary'}
            onChange={handleEmail}
            placeholder="Domain email"
            hasSuffix
            suffix={<div className="text-right">@just.engineer</div>}
          />
        </div>

        <Button
          intent="primary"
          size="big"
          fontWeight="medium"
          isLoading={loading}
          disabled={!email.domain || !email.extension || isSent}
          onClick={handleSubmit}
          width="adapt"
        >
          {isSent ? 'Sent' : 'Send'}
        </Button>
      </div>

      <div
        className={`transition-opacity duration-700 ease-in ${
          isSent ? 'opacity-1 mt-6' : 'opacity-0'
        }`}
      >
        {isSent && (
          <Badge
            intent={error ? 'error' : 'info'}
            label={
              error
                ? errors[error]
                : `We’ve just sent a verification email to ${email.domain}@${email.extension}. If it's not there, please check your spam folder.`
            }
          />
        )}
      </div>
    </div>
  )
}

export default VerifyEmail
