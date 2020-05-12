import React from 'react';
import './style.scss';
//import images
import smile from './../../asset/images/evaluation/smileys.png';
import FullStar from './../../asset/images/evaluation/fullStar.png';
import EmptyStar from './../../asset/images/evaluation/emptyStar.png';

function index(props) {
	return (
		<div className="Evaluation__Component">
			<div className="Left">
				<div className="Behaviour__Rating">
					Comportamento
					<div>
						<img src={FullStar} />
						<img src={FullStar} />
						<img src={FullStar} />
						<img src={FullStar} />
						<img src={FullStar} />
					</div>
				</div>
				<div className="Achievement__Rating">
					Aproveitamento
					<div>
						<img src={FullStar} />
						<img src={FullStar} />
						<img src={FullStar} />
						<img src={FullStar} />
						<img src={EmptyStar} />
					</div>
				</div>
			</div>
			<div className="Image">
				<img src={smile} alt="temp" />
			</div>
		</div>
	);
}

export default index;
