import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { ArrowDown, FileUpload, Mail, MetaTag } from '../icons/ClaimIcons'
import VerifyEmail from './VerifyEmail'
import VerifyHtml from './VerifyHtml'
import VerifyMetaTag from './VerifyMetaTag'

const ClaimRows = ({ businessAccountHeight, user }) => {
  const verifyMethods = [
    {
      id: 1,
      title: 'Verify with a domain email',
      icon: <Mail />,
      content: <VerifyEmail user={user} />,
    },
    {
      id: 2,
      title: 'Verify with with file upload',
      icon: <FileUpload />,
      content: <VerifyHtml user={user} />,
    },
    {
      id: 3,
      title: 'Verify with with meta tag',
      icon: <MetaTag />,
      content: <VerifyMetaTag user={user} />,
    },
  ]

  return (
    <div
      className="mt-8 flex flex-col items-center space-y-6 py-2 lg:overflow-y-auto"
      style={{
        height: `calc(100% - ${businessAccountHeight + 40}px)`,
      }}
    >
      {verifyMethods.map((item) => (
        <Disclosure
          key={item.id}
          as="div"
          className="border-light-200 w-full border bg-light-neutral-200 sm:rounded-md"
        >
          {({ open }) => (
            <div>
              <Disclosure.Button className="flex w-full justify-between p-4">
                <div className="flex flex-wrap items-center gap-2">
                  {item.icon}
                  <h3 className="font-graphik-medium text-dark-neutral-600">
                    {item.title}
                  </h3>
                </div>
                <ArrowDown className={open ? 'rotate-180 transform' : ''} />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform opacity-0"
                enterTo="transform opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-6 pt-2">
                  {item.content}
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  )
}

export default ClaimRows
