const Avatar = ({ image, firstName, lastName, phone }) => {
	return (
		<figure>
			<img src={image} alt="photo" />
			<p>{firstName}</p>
			<p>{lastName}</p>
			{phone ? <p>{phone}</p> : null}
		</figure>
	);
};

export default Avatar;
