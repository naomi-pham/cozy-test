import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ArrowDown, FileUpload, Mail, MetaTag } from '../icons/ClaimIcons';
import VerifyEmail from './VerifyEmail';
import VerifyHtml from './VerifyHtml';
import VerifyMetaTag from './VerifyMetaTag';

const ClaimRows = () => {
	const verifyMethods = [
		{
			id: 1,
			title: 'Verify with a domain email',
			icon: <Mail />,
			content: <VerifyEmail />,
		},
		{
			id: 2,
			title: 'File upload',
			icon: <FileUpload />,
			content: <VerifyHtml />,
		},
		{
			id: 3,
			title: 'Meta tag',
			icon: <MetaTag />,
			content: <VerifyMetaTag />,
		},
	];

	return (
		<div className="mt-10 space-y-6">
			{verifyMethods.map((item) => (
				<Disclosure
					key={item.id}
					as="div"
					className="mx-auto max-w-3xl rounded-md border border-light-200 bg-light-50 p-4"
				>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between">
								<div className="flex flex-wrap items-center gap-2 font-500 text-dark-600">
									<span>{item.icon}</span>
									<span>{item.title}</span>
								</div>
								<ArrowDown className={open ? 'rotate-180 transform' : ''} />
							</Disclosure.Button>
							<Disclosure.Panel className="my-2 mt-6">
								{item.content}
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			))}
		</div>
	);
};

export default ClaimRows;
