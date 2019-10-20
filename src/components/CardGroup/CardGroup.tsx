import React from 'react';
import Card from '../Card/Card';

enum Cities {
	Nuuk = 'Nuuk, GL',
	Urubici = 'Urubici, BR',
	Nairobi = 'Nairobi, KE'
}

enum Size {
	Small = 0,
	Medium = 1,
	Large = 3
}

const CardGroup = () => (
	<>
		<Card city={Cities.Nuuk} size={Size.Medium} />
		<Card city={Cities.Urubici} size={Size.Large} />
		<Card city={Cities.Nairobi} size={Size.Medium} />
	</>
);

export default CardGroup;
