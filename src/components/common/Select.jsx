import { Combobox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { IconCheck, IconChrevonUpDown } from './Icons'

const Select = React.forwardRef(({ data, value, error, ...props }, ref) => {
  const [query, setQuery] = useState('')

  const filteredData =
    query === ''
      ? data
      : data.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <Combobox {...props} ref={ref}>
      <div className="relative mt-1">
        <div
          className={`${
            error ? 'border-light-error-500' : 'border-light-neutral-500'
          } relative h-14 w-full cursor-default overflow-hidden rounded-md border bg-white py-4 text-left text-body-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-branding-primary-500`}
        >
          <Combobox.Input
            className="absolute inset-0 w-full border-none pl-4 pr-14 text-body-1 focus:outline-none"
            displayValue={(item) => item.name}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Select country"
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-4 text-light-neutral-600">
            <IconChrevonUpDown aria-hidden="true" />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-body-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {filteredData.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredData.map((item) => (
                <Combobox.Option
                  key={item.value}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? 'bg-branding-primary-500 text-white'
                        : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => {
                    return (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? 'text-white'
                                : 'text-branding-primary-500'
                            }`}
                          >
                            <IconCheck aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )
                  }}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
})

export default Select
