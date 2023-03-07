import { useState } from 'react';
import { Button } from '../ui';

const VerifyEmail = () => {
	const [value, setValue] = useState('');

	function handleChange(e) {
		e.preventDefault();
		setValue(e.target.value);
	}

	function handleSubmit(e) {
		if (e.key === 'Enter') {
			setValue('');
			console.log(e.target.value);
		}
	}

	return (
		<div className="space-y-6">
			<p>
				Enter the email address associated with{' '}
				<span className="font-500 text-light-700">demoweb.com</span>. We only
				use it to verify your domain ownership. You’ll still need{' '}
				<span className="font-500 text-light-700">johndoe@gmail.com</span> to
				log into your cozycot account
			</p>

			<div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-between">
				<div className="flex flex-grow justify-center self-stretch rounded border border-light-300">
					<input
						type="text"
						value={value}
						onChange={handleChange}
						onKeyDown={handleSubmit}
						className="w-full rounded-l p-2 pl-4 text-sm focus:outline-primary-400"
						placeholder="domain email"
					/>

					<div className="self-center px-4 text-sm">@demoweb.com</div>
				</div>

				<Button intent="primary" size="small" label="Send" />
			</div>
		</div>
	);
};

export default VerifyEmail;
