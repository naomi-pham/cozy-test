import Image from 'next/image';
import { ArrowDown, User } from '../icons/ClaimIcons';
import ClaimRows from './ClaimRows';

const ClaimPageUI = () => {
	return (
		<main className="grid min-h-screen grid-cols-1 gap-x-4 gap-y-8 p-4 lg:grid-cols-2">
			<div className="relative h-96 overflow-hidden rounded-xl lg:h-full">
				<Image
					src="/claim-background.jpg"
					alt="cozy verify background"
					fill
					className="bg-transparent"
				/>
				<Image
					src="/authentication.svg"
					alt="authentication"
					width={800}
					height={600}
					className="absolute top-1/2 left-1/2 mx-auto w-8/12 -translate-y-1/2 -translate-x-1/2 bg-transparent outline sm:w-6/12 lg:w-9/12"
				/>
			</div>

			<div className="lg:p-6">
				<div className="flex flex-col items-center justify-center gap-6">
					<h3 className="text-center text-light-800">Verify your business</h3>
					<div className="flex w-full max-w-[280px] items-center justify-center gap-3 rounded-full border border-light-300 p-2 py-1">
						<User className="h-9 w-9" />
						<div className="flex-grow">
							<p className="font-500 leading-5 text-light-900">John Doe </p>
							<p className="block text-sm">Epix Studio</p>
						</div>
						<ArrowDown />
					</div>
				</div>

				<ClaimRows />
			</div>
		</main>
	);
};

export default ClaimPageUI;