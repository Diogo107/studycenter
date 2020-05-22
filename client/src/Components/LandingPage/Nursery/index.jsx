import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.scss';

function index(props) {
	return (
		<div className="Nursery__Section">
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://news.utexas.edu/wp-content/uploads/2018/12/Teacher-600x400-c-default.jpg"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://bbk12e1-cdn.myschoolcdn.com/21/photo/2016/01/orig_photo327070_3359796.jpg?w=1920"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdIo65jVfKwkTYK4f28jFLNsXDQ-0Y3d_l3tJFDVtPm_In5QLX&usqp=CAU"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default index;
