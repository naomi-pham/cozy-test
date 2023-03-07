import { metaTagList } from '@/data/Data';
import { VerifyLayout } from './VerifyHtml';

const VerifyMetaTag = () => {
	return <VerifyLayout list={metaTagList} />;
};

export default VerifyMetaTag;
