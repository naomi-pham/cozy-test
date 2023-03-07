import { upLoadHtmlList } from '@/data/Data';
import { Button, CustomLink, ListNumber } from '../ui';

const VerifyHtml = () => {
	return <VerifyLayout list={upLoadHtmlList} />;
};

export const VerifyLayout = ({ list }) => {
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
			<Button intent="primary" size="medium" label="Verify domain" />
		</div>
	);
};

export default VerifyHtml;
