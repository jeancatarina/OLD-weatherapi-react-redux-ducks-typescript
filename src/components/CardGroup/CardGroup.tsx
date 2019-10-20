import React from 'react';
import Card from '../Card/Card';
import './style.scss';

enum Cities {
	Nuuk = 'Nuuk, GL',
	Urubici = 'Urubici, BR',
	Nairobi = 'Nairobi, KE'
}

enum Size {
	Medium,
	Large
}

const CardGroup = () => (
	<article id="CardGroup">
		<Card city={Cities.Nuuk} size={Size.Medium} />
		<Card city={Cities.Urubici} size={Size.Large} />
		<Card city={Cities.Nairobi} size={Size.Medium} />
	</article>
);

export default CardGroup;
