import React from 'react';
import './style.scss';
//import images
import one from './../../asset/images/evaluation/1.png';
import two from './../../asset/images/evaluation/2.png';
import three from './../../asset/images/evaluation/3.png';
import four from './../../asset/images/evaluation/4.png';
import five from './../../asset/images/evaluation/5.png';
import FullStar from './../../asset/images/evaluation/fullStar.png';
import EmptyStar from './../../asset/images/evaluation/emptyStar.png';

function index(props) {
	const behaviourStar = [];
	const achievementStar = [];

	for (let i = 0; i < 5; i++) {
		i < props.user.behaviour
			? behaviourStar.push(<img src={FullStar} />)
			: behaviourStar.push(<img src={EmptyStar} />);
	}
	for (let i = 0; i < 5; i++) {
		i < props.user.achievement
			? achievementStar.push(<img src={FullStar} />)
			: achievementStar.push(<img src={EmptyStar} />);
	}

	let smile = Math.round((props.user.behaviour + props.user.achievement) / 2);
	console.log('smile', smile);
	let selected = five;
	switch (smile) {
		case 5:
			selected = five;
			break;
		case 4:
			selected = four;
			break;
		case 3:
			selected = three;
			break;
		case 2:
			selected = two;
			break;
		case 1:
			selected = one;
			break;
	}
	return (
		<div className="Evaluation__Component">
			<div className="Left">
				<div className="Behaviour__Rating">
					Comportamento
					<div>{behaviourStar}</div>
				</div>
				<div className="Achievement__Rating">
					Aproveitamento
					<div>{achievementStar}</div>
				</div>
			</div>
			<div className="Image">
				<img src={selected} alt="temp" />
			</div>
		</div>
	);
}

export default index;
