export const Mail = ({ size = '24', fill = '#6E7E95', ...props }) => {
	return (
		<div>
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M15.95 21.575C15.8167 21.575 15.6917 21.5543 15.575 21.513C15.4583 21.4717 15.35 21.4007 15.25 21.3L12.4 18.45C12.2167 18.2667 12.125 18.0333 12.125 17.75C12.125 17.4667 12.2167 17.2333 12.4 17.05C12.5833 16.8667 12.8167 16.775 13.1 16.775C13.3833 16.775 13.6167 16.8667 13.8 17.05L15.95 19.2L20.9 14.25C21.0833 14.0667 21.3167 13.975 21.6 13.975C21.8833 13.975 22.1167 14.0667 22.3 14.25C22.4833 14.4333 22.575 14.6667 22.575 14.95C22.575 15.2333 22.4833 15.4667 22.3 15.65L16.65 21.3C16.55 21.4 16.4417 21.471 16.325 21.513C16.2083 21.555 16.0833 21.5757 15.95 21.575ZM4 6L12 11L20 6H4ZM4 20C3.45 20 2.979 19.804 2.587 19.412C2.195 19.02 1.99934 18.5493 2 18V6C2 5.45 2.196 4.979 2.588 4.587C2.98 4.195 3.45067 3.99934 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V10.35L21 11.35L20 12.35V8L12.525 12.675C12.4417 12.725 12.354 12.7627 12.262 12.788C12.17 12.8133 12.0827 12.8257 12 12.825C11.9167 12.825 11.829 12.8127 11.737 12.788C11.645 12.7633 11.5577 12.7257 11.475 12.675L4 8V18H9.15L11.15 20H4Z"
					fill={fill}
				/>
			</svg>
		</div>
	);
};

export const FileUpload = ({ size = '24', fill = '#6E7E95', ...props }) => {
	return (
		<div>
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M11.5 20H5.5C5.23478 20 4.98043 19.8946 4.79289 19.7071C4.60536 19.5196 4.5 19.2652 4.5 19V5C4.5 4.73478 4.60536 4.48043 4.79289 4.29289C4.98043 4.10536 5.23478 4 5.5 4H10.5V7C10.5 7.79565 10.8161 8.55871 11.3787 9.12132C11.9413 9.68393 12.7044 10 13.5 10H16.5V15C16.5 15.2652 16.6054 15.5196 16.7929 15.7071C16.9804 15.8946 17.2348 16 17.5 16C17.7652 16 18.0196 15.8946 18.2071 15.7071C18.3946 15.5196 18.5 15.2652 18.5 15V8.94C18.4896 8.84813 18.4695 8.75763 18.44 8.67V8.58C18.3919 8.47718 18.3278 8.38267 18.25 8.3L12.25 2.3C12.1673 2.22222 12.0728 2.15808 11.97 2.11C11.9369 2.10421 11.9031 2.10421 11.87 2.11C11.7728 2.058 11.6683 2.02092 11.56 2H5.5C4.70435 2 3.94129 2.31607 3.37868 2.87868C2.81607 3.44129 2.5 4.20435 2.5 5V19C2.5 19.7956 2.81607 20.5587 3.37868 21.1213C3.94129 21.6839 4.70435 22 5.5 22H11.5C11.7652 22 12.0196 21.8946 12.2071 21.7071C12.3946 21.5196 12.5 21.2652 12.5 21C12.5 20.7348 12.3946 20.4804 12.2071 20.2929C12.0196 20.1054 11.7652 20 11.5 20ZM12.5 5.41L15.09 8H13.5C13.2348 8 12.9804 7.89464 12.7929 7.70711C12.6054 7.51957 12.5 7.26522 12.5 7V5.41ZM7.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13C14.5 12.7348 14.3946 12.4804 14.2071 12.2929C14.0196 12.1054 13.7652 12 13.5 12H7.5C7.23478 12 6.98043 12.1054 6.79289 12.2929C6.60536 12.4804 6.5 12.7348 6.5 13C6.5 13.2652 6.60536 13.5196 6.79289 13.7071C6.98043 13.8946 7.23478 14 7.5 14ZM11.5 16H7.5C7.23478 16 6.98043 16.1054 6.79289 16.2929C6.60536 16.4804 6.5 16.7348 6.5 17C6.5 17.2652 6.60536 17.5196 6.79289 17.7071C6.98043 17.8946 7.23478 18 7.5 18H11.5C11.7652 18 12.0196 17.8946 12.2071 17.7071C12.3946 17.5196 12.5 17.2652 12.5 17C12.5 16.7348 12.3946 16.4804 12.2071 16.2929C12.0196 16.1054 11.7652 16 11.5 16ZM7.5 10H8.5C8.76522 10 9.01957 9.89464 9.20711 9.70711C9.39464 9.51957 9.5 9.26522 9.5 9C9.5 8.73478 9.39464 8.48043 9.20711 8.29289C9.01957 8.10536 8.76522 8 8.5 8H7.5C7.23478 8 6.98043 8.10536 6.79289 8.29289C6.60536 8.48043 6.5 8.73478 6.5 9C6.5 9.26522 6.60536 9.51957 6.79289 9.70711C6.98043 9.89464 7.23478 10 7.5 10ZM21.21 16.29C21.117 16.1963 21.0064 16.1219 20.8846 16.0711C20.7627 16.0203 20.632 15.9942 20.5 15.9942C20.368 15.9942 20.2373 16.0203 20.1154 16.0711C19.9936 16.1219 19.883 16.1963 19.79 16.29L16.5 19.59L15.21 18.29C15.1168 18.1968 15.0061 18.1228 14.8842 18.0723C14.7624 18.0219 14.6319 17.9959 14.5 17.9959C14.3681 17.9959 14.2376 18.0219 14.1158 18.0723C13.9939 18.1228 13.8832 18.1968 13.79 18.29C13.6968 18.3832 13.6228 18.4939 13.5723 18.6158C13.5219 18.7376 13.4959 18.8681 13.4959 19C13.4959 19.1319 13.5219 19.2624 13.5723 19.3842C13.6228 19.5061 13.6968 19.6168 13.79 19.71L15.79 21.71C15.883 21.8037 15.9936 21.8781 16.1154 21.9289C16.2373 21.9797 16.368 22.0058 16.5 22.0058C16.632 22.0058 16.7627 21.9797 16.8846 21.9289C17.0064 21.8781 17.117 21.8037 17.21 21.71L21.21 17.71C21.3037 17.617 21.3781 17.5064 21.4289 17.3846C21.4797 17.2627 21.5058 17.132 21.5058 17C21.5058 16.868 21.4797 16.7373 21.4289 16.6154C21.3781 16.4936 21.3037 16.383 21.21 16.29Z"
					fill={fill}
				/>
			</svg>
		</div>
	);
};

export const MetaTag = ({ size = '24', fill = '#6E7E95', ...props }) => {
	return (
		<div>
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M8.825 12L10.3 10.525C10.5 10.325 10.6 10.0917 10.6 9.825C10.6 9.55833 10.5 9.325 10.3 9.125C10.1 8.925 9.86234 8.825 9.587 8.825C9.31167 8.825 9.07434 8.925 8.875 9.125L6.7 11.3C6.6 11.4 6.529 11.5083 6.487 11.625C6.445 11.7417 6.42434 11.8667 6.425 12C6.425 12.1333 6.44567 12.2583 6.487 12.375C6.52834 12.4917 6.59933 12.6 6.7 12.7L8.875 14.875C9.075 15.075 9.31267 15.175 9.588 15.175C9.86334 15.175 10.1007 15.075 10.3 14.875C10.5 14.675 10.6 14.4417 10.6 14.175C10.6 13.9083 10.5 13.675 10.3 13.475L8.825 12ZM15.175 12L13.7 13.475C13.5 13.675 13.4 13.9083 13.4 14.175C13.4 14.4417 13.5 14.675 13.7 14.875C13.9 15.075 14.1377 15.175 14.413 15.175C14.6883 15.175 14.9257 15.075 15.125 14.875L17.3 12.7C17.4 12.6 17.471 12.4917 17.513 12.375C17.555 12.2583 17.5757 12.1333 17.575 12C17.575 11.8667 17.554 11.7417 17.512 11.625C17.47 11.5083 17.3993 11.4 17.3 11.3L15.125 9.125C15.025 9.025 14.9123 8.95 14.787 8.9C14.6617 8.85 14.5367 8.825 14.412 8.825C14.2873 8.825 14.1623 8.85 14.037 8.9C13.9117 8.95 13.7993 9.025 13.7 9.125C13.5 9.325 13.4 9.55833 13.4 9.825C13.4 10.0917 13.5 10.325 13.7 10.525L15.175 12ZM5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H5ZM5 19H19V5H5V19Z"
					fill={fill}
				/>
			</svg>
		</div>
	);
};

export const ArrowDown = ({ size = '24', fill = '#6E7E95', ...props }) => {
	return (
		<div>
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5.26169 8.25854C5.57905 7.94498 6.07531 7.91673 6.42527 8.17328L6.43284 8.17883L6.51863 8.252L11.8499 13.5191L17.1746 8.25854C17.4919 7.94499 17.9882 7.91673 18.3382 8.17328L18.3457 8.17883L18.4315 8.25201L18.4381 8.25854C18.7555 8.5721 18.7841 9.0624 18.5244 9.40817L18.5188 9.41565L18.4447 9.50041L12.4817 15.392C12.1643 15.7056 11.6681 15.7338 11.3181 15.4773L11.3105 15.4717L11.2247 15.3985L5.26169 9.50695C4.91277 9.16221 4.91277 8.60328 5.26169 8.25854Z"
					fill={fill}
				/>
			</svg>
		</div>
	);
};

export const ArrowUp = ({ size = '24', fill = '#6E7E95', ...props }) => {
	return (
		<div>
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5.26169 15.7415C5.57905 16.055 6.07531 16.0833 6.42527 15.8267L6.43284 15.8212L6.51863 15.748L11.8499 10.4809L17.1746 15.7415C17.4919 16.055 17.9882 16.0833 18.3382 15.8267L18.3457 15.8212L18.4315 15.748L18.4381 15.7415C18.7555 15.4279 18.7841 14.9376 18.5244 14.5918L18.5188 14.5843L18.4447 14.4996L12.4817 8.608C12.1643 8.29444 11.6681 8.26619 11.3181 8.52274L11.3105 8.52829L11.2247 8.60147L5.26169 14.4931C4.91277 14.8378 4.91277 15.3967 5.26169 15.7415Z"
					fill={fill}
				/>
			</svg>
		</div>
	);
};

export const User = ({ ...props }) => {
	return (
		<svg
			width="34"
			height="34"
			viewBox="0 0 34 34"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M17.0007 28.9997C12.834 28.9997 9.15065 26.8663 7.00065 23.6663C7.05065 20.333 13.6673 18.4997 17.0007 18.4997C20.334 18.4997 26.9507 20.333 27.0007 23.6663C25.8988 25.307 24.4104 26.6516 22.6666 27.5816C20.9228 28.5117 18.977 28.9987 17.0007 28.9997ZM17.0007 5.33301C18.3267 5.33301 19.5985 5.85979 20.5362 6.79747C21.4739 7.73516 22.0007 9.00693 22.0007 10.333C22.0007 11.6591 21.4739 12.9309 20.5362 13.8685C19.5985 14.8062 18.3267 15.333 17.0007 15.333C15.6746 15.333 14.4028 14.8062 13.4651 13.8685C12.5274 12.9309 12.0007 11.6591 12.0007 10.333C12.0007 9.00693 12.5274 7.73516 13.4651 6.79747C14.4028 5.85979 15.6746 5.33301 17.0007 5.33301ZM17.0007 0.333008C14.812 0.333008 12.6447 0.764104 10.6226 1.60168C8.6005 2.43926 6.76318 3.66692 5.21554 5.21456C2.08993 8.34017 0.333984 12.5794 0.333984 16.9997C0.333984 21.4199 2.08993 25.6592 5.21554 28.7848C6.76318 30.3324 8.6005 31.5601 10.6226 32.3977C12.6447 33.2352 14.812 33.6663 17.0007 33.6663C21.4209 33.6663 25.6602 31.9104 28.7858 28.7848C31.9114 25.6592 33.6673 21.4199 33.6673 16.9997C33.6673 7.78301 26.1673 0.333008 17.0007 0.333008Z"
				fill="#253858"
			/>
		</svg>
	);
};
