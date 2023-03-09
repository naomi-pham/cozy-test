import { upLoadHtmlList } from '@/data/Data';
import { useState } from 'react';
import { Button, CustomLink, ListNumber } from '../ui';

const VerifyHtml = ({ downloadHtmlFile }) => {
	return (
		<div>
			<VerifyLayout list={upLoadHtmlList} />
			<button className="border p-4" onClick={downloadHtmlFile('text')}>
				Download HTML
			</button>
		</div>
	);
};

export const VerifyLayout = ({ list }) => {
	const [isLoading, setIsLoading] = useState(false);

	function handleClick() {
		setIsLoading(true);
	}

	return (
		<div className="space-y-8">
			<CustomLink href="/" size="small" label="Learn more" />
			<div className="space-y-6">
				{list.map((item) => (
					<div
						key={item.id}
						className="flex flex-wrap items-center gap-4 sm:flex-nowrap"
					>
						<div>
							<ListNumber number={item.id} />
						</div>
						<div className="">{item.content}</div>
					</div>
				))}
			</div>
			<Button
				intent="primary"
				size="medium"
				label="Verify domain"
				isLoading={isLoading}
				onClick={handleClick}
			/>
		</div>
	);
};

export default VerifyHtml;
