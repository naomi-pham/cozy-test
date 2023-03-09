import { cva } from 'class-variance-authority';
import Spinner from './Spinner';

const buttonStyles = cva('w-fit flex items-center gap-2 focus:outline-primary-500', {
	variants: {
		intent: {
			primary:
				'bg-primary-500 hover:bg-primary-600 disabled:bg-light-500 active:bg-primary-700 text-light-25',
			secondary:
				'bg-light-200 hover:bg-light-300 text-light-800 disabled:bg-light-500 hover:text-light-900',
			outline:
				'ring ring-1 ring-light-300 text-light-800 disabled:bg-light-500 hover:text-light-900 hover:ring-primary-400 active:bg-primary-100',
		},
		size: {
			large: 'px-10 py-4 text-xl font-600 rounded-xl',
			medium: 'px-6 py-3 text-sm font-600 rounded-lg',
			small: 'px-5 py-2 text-sm font-500 rounded',
		},
	},
	defaultVariants: {
		intent: 'primary',
		size: 'large',
	},
});

const Button = ({ intent, size, label, isLoading, ...props }) => {
	return (
		<button className={buttonStyles({ intent, size })} {...props}>
			{isLoading && <Spinner />}
			{label}
		</button>
	);
};

export default Button;
