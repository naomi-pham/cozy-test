import ErrorCodes from 'components/common/ErrorCodes'

const getErrorAndDisplay = (code) => {
  if (ErrorCodes[code]) return ErrorCodes[code]
  return ErrorCodes.SERVER_ERROR
}

export default getErrorAndDisplay
