import { cva } from 'class-variance-authority';
import { Error, Info, Success } from '../icons/SharedIcons';

const badgeStyle = cva(
	'flex items-center gap-3 text-xs sm:text-sm py-2 px-4 rounded',
	{
		variants: {
			intent: {
				info: 'bg-primary-200 text-primary-500',
				success: 'bg-success-200 text-success-700',
				error: 'bg-error-200 text-error',
			},
			size: {
				large: '',
				medium: '',
				small: '',
			},
		},
		defaultVariants: {
			intent: 'info',
			size: 'small',
		},
	},
);

const icons = [
	{
		id: 1,
		label: 'success',
		icon: <Success className="w-10 fill-success-700" />,
	},
	{
		id: 2,
		label: 'error',
		icon: <Error className="w-10 fill-error" />,
	},
	{
		id: 3,
		label: 'info',
		icon: <Info className="w-10 fill-primary-500" />,
	},
];

const Badge = ({ intent, size, label, ...props }) => {
	return (
		<div className={badgeStyle({ intent, size })} {...props}>
			{icons.filter((icon) => icon.label === intent)[0].icon}
			{label}
		</div>
	);
};

export default Badge;
