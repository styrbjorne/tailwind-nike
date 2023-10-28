const Button = ({ label, iconURL }) => {
	return (
		<button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>
			{label}
			<img
				src={iconURL}
				alt='Arrow right icon'
				className='ml-2 rounded-full'
				width={5}
				height={5}
			/>
		</button>
	);
};

export default Button;
