import React, { useState } from 'react';
import { download } from '../actions/downloadHtmlFile';
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
			isOpen: false,
		},
		{
			id: 2,
			title: 'File upload',
			icon: <FileUpload />,
			content: <VerifyHtml downloadHtmlFile={download} />,
			isOpen: false,
		},
		{
			id: 3,
			title: 'Meta tag',
			icon: <MetaTag />,
			content: <VerifyMetaTag />,
			isOpen: false,
		},
	];

	const [disclosure, setDisclosure] = useState(verifyMethods);

	const handleDisclosure = (id) => () => {
		setDisclosure(
			disclosure.map((item) =>
				item.id === id
					? { ...item, isOpen: !item.isOpen }
					: { ...item, isOpen: false },
			),
		);
	};

	return (
		<div className="mx-auto mt-10 max-w-3xl space-y-6">
			{disclosure?.map((item) => (
				<div
					key={item.id}
					className="rounded-md border border-light-200 bg-light-50"
				>
					<>
						<button
							className="flex w-full justify-between p-4"
							onClick={handleDisclosure(item.id)}
						>
							<div className="flex flex-wrap items-center gap-2">
								{item.icon}
								<h6>{item.title}</h6>
							</div>
							<ArrowDown
								className={`transition-transform duration-200 ${
									item.isOpen ? 'rotate-180 transform' : ''
								}`}
							/>
						</button>
						{item.isOpen && <div className="p-4 pb-6">{item.content}</div>}
					</>
				</div>
			))}
		</div>
	);
};

export default ClaimRows;
