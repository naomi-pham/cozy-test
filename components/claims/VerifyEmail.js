import { useState } from 'react';
import { Close } from '../icons/SharedIcons';
import { Button } from '../ui';
import Badge from '../ui/Badge';

const VerifyEmail = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSent, setIsSent] = useState(false);

	const [email, setEmail] = useState({
		domain: '',
		extension: 'just.engineer',
	});

	function handleEmail(e) {
		e.preventDefault();
		setIsSent(false);
		const { name, value } = e.target;
		setEmail({ ...email, [name]: value });
	}

	function handleSubmit() {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			setIsSent(true);
		}, 1000);
		console.log(`${email.domain}@${email.extension}`);
	}

	function deleteExtension() {
		setIsSent(false);
		setEmail({ ...email, extension: '' });
	}

	return (
		<div className="">
			<p>
				Enter the email address associated with{' '}
				<span className="font-500 text-light-700">demoweb.com</span>. We only
				use it to verify your domain ownership. You’ll still need{' '}
				<span className="font-500 text-light-700">johndoe@gmail.com</span> to
				log into your cozycot account
			</p>

			<div className="flex w-full flex-col items-center mt-6 gap-4 sm:flex-row sm:justify-between">
				<div className="flex flex-grow justify-center self-stretch rounded border border-light-300">
					<input
						type="text"
						value={email.domain}
						onChange={handleEmail}
						name="domain"
						className="w-full rounded-l p-2 pl-4 text-sm focus:outline-primary-400"
						placeholder="domain email"
					/>
					<div className="flex items-center px-1">
						<span>@</span>
						<input
							type="text"
							value={email.extension}
							onChange={handleEmail}
							name="extension"
							placeholder="extension"
							className={`w-full  min-w-[100px] bg-inherit text-sm focus:outline-none`}
						/>
						<button
							className="ml-1 text-sm disabled:opacity-50"
							onClick={deleteExtension}
							disabled={!email.extension}
						>
							<Close className="fill-light-600 disabled:fill-rose-400" />
						</button>
					</div>
				</div>

				<Button
					intent="primary"
					size="small"
					label={isSent ? 'Sent' : 'Send'}
					isLoading={isLoading}
					disabled={!email.domain || !email.extension || isSent}
					onClick={handleSubmit}
				/>
			</div>

			<div
				className={`transition-opacity duration-700 ease-in ${
					isSent ? 'opacity-1 mt-6' : 'opacity-0'
				}`}
			>
				{isSent && <Badge
					intent="success"
					label={`We’ve just sent a verification email to ${email.domain}@${email.extension}. If it's not there, please check your spam folder.`}
				/>}
			</div>
		</div>
	);
};

export default VerifyEmail;
