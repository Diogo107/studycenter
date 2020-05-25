import React from 'react';
import './style.scss';
//Components
import Nursery from './../../Components/LandingPage/Nursery';
import GoogleMapReact from 'google-map-react';

const Infantário = ({ text }) => (
	<div>
		<img
			src="https://www.ventos-traquinas.pt/index/images/apresentacao-geral/Logo_VT_RedondocomBorda@2x.png"
			style={{ width: '20px', height: '20px' }}
		/>
		{text}
	</div>
);
const CentroEstudos = ({ text }) => (
	<div>
		<img
			src="https://www.ventos-traquinas.pt/index/images/apresentacao-geral/Logo_VT_RedondocomBorda@2x.png"
			style={{ width: '20px', height: '20px' }}
		/>
		{text}
	</div>
);

function index(props) {
	window.addEventListener('scroll', (event) => {
		// important to know yposition of page => window.scrollY;
		let bottom = Math.round(window.innerHeight / 3);
		let top = 70 - window.innerHeight / 3;
		let width = '80px';
		let height = '80px';
		console.log(
			top,
			Math.round(
				document.getElementsByClassName('Nursery')[0].getBoundingClientRect()
					.top
			),
			bottom
		);
		if (
			document.getElementsByClassName('Nursery')[0].getBoundingClientRect()
				.top > top &&
			document.getElementsByClassName('Nursery')[0].getBoundingClientRect()
				.top < bottom
		) {
			let temp = document.getElementsByClassName('Nursery__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = width;
				temp[i].style.height = height;
			}
		} else {
			let temp = document.getElementsByClassName('Nursery__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = '30px';
				temp[i].style.height = '30px';
			}
		}
		if (
			document.getElementsByClassName('Ladybug')[0].getBoundingClientRect()
				.top > top &&
			document.getElementsByClassName('Ladybug')[0].getBoundingClientRect()
				.top < bottom
		) {
			let temp = document.getElementsByClassName('Ladybug__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = width;
				temp[i].style.height = height;
			}
		} else {
			let temp = document.getElementsByClassName('Ladybug__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = '30px';
				temp[i].style.height = '30px';
			}
		}
		if (
			document.getElementsByClassName('Dolphin')[0].getBoundingClientRect()
				.top > top &&
			document.getElementsByClassName('Dolphin')[0].getBoundingClientRect()
				.top < bottom
		) {
			let temp = document.getElementsByClassName('Dolphin__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = width;
				temp[i].style.height = height;
			}
		} else {
			let temp = document.getElementsByClassName('Dolphin__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = '30px';
				temp[i].style.height = '30px';
			}
		}
		if (
			document.getElementsByClassName('Kindergarden')[0].getBoundingClientRect()
				.top > top &&
			document.getElementsByClassName('Kindergarden')[0].getBoundingClientRect()
				.top < bottom
		) {
			let temp = document.getElementsByClassName('Kindergarden__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = width;
				temp[i].style.height = height;
			}
		} else {
			let temp = document.getElementsByClassName('Kindergarden__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = '30px';
				temp[i].style.height = '30px';
			}
		}
		if (
			document.getElementsByClassName('StudyCenter')[0].getBoundingClientRect()
				.top > top &&
			document.getElementsByClassName('StudyCenter')[0].getBoundingClientRect()
				.top < bottom
		) {
			let temp = document.getElementsByClassName('StudyCenter__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = width;
				temp[i].style.height = height;
			}
		} else {
			let temp = document.getElementsByClassName('StudyCenter__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = '30px';
				temp[i].style.height = '30px';
			}
		}
		if (
			document.getElementsByClassName('Carriage')[0].getBoundingClientRect()
				.top > top &&
			document.getElementsByClassName('Carriage')[0].getBoundingClientRect()
				.top < bottom
		) {
			let temp = document.getElementsByClassName('Carriage__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = width;
				temp[i].style.height = height;
			}
		} else {
			let temp = document.getElementsByClassName('Carriage__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = '30px';
				temp[i].style.height = '30px';
			}
		}
		if (
			document.getElementsByClassName('Kitchen')[0].getBoundingClientRect()
				.top > top &&
			document.getElementsByClassName('Kitchen')[0].getBoundingClientRect()
				.top < bottom
		) {
			let temp = document.getElementsByClassName('Kitchen__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = width;
				temp[i].style.height = height;
			}
		} else {
			let temp = document.getElementsByClassName('Kitchen__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = '30px';
				temp[i].style.height = '30px';
			}
		}
		if (
			document.getElementsByClassName('Management')[0].getBoundingClientRect()
				.top > top &&
			document.getElementsByClassName('Management')[0].getBoundingClientRect()
				.top < bottom
		) {
			let temp = document.getElementsByClassName('Management__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = width;
				temp[i].style.height = height;
			}
		} else {
			let temp = document.getElementsByClassName('Management__Team');
			for (let i = 0; i < temp.length; i++) {
				temp[i].style.width = '30px';
				temp[i].style.height = '30px';
			}
		}
	});
	let defaultProps = {
		center: {
			lat: 38.663996,
			lng: -9.052109,
		},
		zoom: 15,
	};

	return (
		<div className="Landing__Page">
			<div className="People__Left Table__hide">
				<img
					src="https://www.ventos-traquinas.pt/index/images/equipa/Denise-1.png"
					className="Management__Team StudyCenter__Team"
				/>
				<img
					src="https://www.ventos-traquinas.pt/index/images/equipa/Sa%CC%83o-2.png"
					className="Management__Team Ladybug__Team"
				/>
				<img
					src="https://www.ventos-traquinas.pt/index/images/equipa/Marta.png"
					className="Management__Team Dolphin__Team"
				/>
				<img
					src="https://www.ventos-traquinas.pt/instalacoes/images/instalacoes-bercario/Adelaide-1.png"
					className="Nursery__Team"
				/>
				<img
					src="https://www.ventos-traquinas.pt/instalacoes/images/instalacoes-bercario/Alexandra-2.png"
					className="Nursery__Team"
				/>
				<img
					src="https://www.ventos-traquinas.pt/instalacoes/images/instalacoes-12-24/Ca%CC%81tia.png"
					className="Ladybug__Team StudyCenter__Team"
				/>
				<img
					src="https://www.ventos-traquinas.pt/instalacoes/images/instalacoes-24-32/Paula-2.png"
					className="Dolphin__Team"
				/>
				<img
					src="https://www.ventos-traquinas.pt/instalacoes/images/instalacoes-ji/Vanessa-1.png"
					className="Kindergarden__Team"
				/>
				<img
					src="https://www.ventos-traquinas.pt/instalacoes/images/instalacoes-ce/Rafaela.png"
					className="StudyCenter__Team"
				/>
				<img
					src="https://www.ventos-traquinas.pt/servicos/images/servico-de-transporte/Miguel-1@2x.png"
					className="Carriage__Team"
				/>
				<img
					src="https://www.ventos-traquinas.pt/servicos/images/servico-de-transporte/Jorge-1@2x.png"
					className="Carriage__Team"
				/>
				<img
					src="https://www.ventos-traquinas.pt/servicos/images/servico-de-transporte/Ine%CC%82s-1@2x.png"
					className="Carriage__Team"
				/>
				<img
					src="https://www.ventos-traquinas.pt/servicos/images/servico-de-alimentacao/Leonor-1.png"
					className="Kitchen__Team"
				/>
			</div>
			<section className="Company">
				<h1>Apresentação Geral</h1>

				<div className="Greetings">
					<div className="Left Table__hide">
						<img src="https://www.ventos-traquinas.pt/index/images/apresentacao-geral/Logo_VT_RedondocomBorda@2x.png" />
					</div>
					<div className="Right">
						<p>
							Ventos Traquinas é uma instituição particular de educação e
							ensino, que integra as valências de Creche, Jardim de Infância e
							Centro de Estudos. As valências de Creche e Jardim de Infância
							estão situadas no Bairro Quinta da Fonte, lote 2, no Lavradio,
							concelho do Barreiro situando-se próximo da Escola Básica 2, 3
							Álvaro Velho, EB do 1ºC/JI nº2, lar de idosos e estação dos
							comboios. O Centro de Estudos está situado na Rua Samora Machel,
							17-A, na Baixa da Banheira, concelho da Moita, situando-se perto
							de um parque infantil, piscinas e campos de atividades diversas.
							Iniciou a sua atividade a 2 de Janeiro de 2017, com o propósito de
							continuar um projeto familiar que já conta com uma experiência de
							trinta anos na área da educação A experiência de todos aqueles que
							contribuíram para o desenvolvimento do projeto ao longo dos anos,
							permitem oferecer serviços que satisfazem todas as exigências dos
							pais, crianças e sempre com vista ao bem-estar dos mesmos.
						</p>
					</div>
				</div>
			</section>
			<section className="Downloads">
				<button>
					<img
						src="https://image.flaticon.com/icons/svg/810/810863.svg"
						alt="Download Ficha de Inscrição Infantário"
						style={{ width: '40px' }}
					/>
					<p>
						Descarregar Ficha de <br />
						Inscrição Infantário
					</p>
				</button>
				<button>
					<img
						src="https://image.flaticon.com/icons/svg/810/810863.svg"
						alt="Download Ficha de Inscrição Infantário"
						style={{ width: '40px' }}
					/>
					<p>
						Descarregar Ficha de <br />
						Inscrição Centro de Estudos
					</p>
				</button>
				<button>
					<img
						src="https://image.flaticon.com/icons/svg/810/810863.svg"
						alt="Download Ficha de Inscrição Infantário"
						style={{ width: '40px' }}
					/>
					<p>
						Descarregar Plano <br />
						Pedagógico
					</p>
				</button>
			</section>
			<section className="Services">
				<h1>Serviços</h1>
				<div class="clicker" tabindex="1">
					<img
						src="https://image.flaticon.com/icons/png/512/2917/2917570.png"
						alt="Baby"
					/>
					<h4>Berçário - 4 aos 12 meses</h4>
				</div>
				<div class="hiddendiv">
					<p>
						Onde se inicia a aquisição da marcha, uma exploração ativa dos
						objetos, e a ter consciência de si próprios e do seu corpo.
					</p>
				</div>
				<div class="clicker" tabindex="1">
					<img
						src="https://image.flaticon.com/icons/png/512/2627/2627308.png"
						alt="Baby"
					/>
					<h4>Creche - Sala das Joaninhas - 12 aos 24 meses</h4>
				</div>
				<div class="hiddendiv">
					<p>
						As crianças começam a adquirir maior autonomia física, aprendem a
						correr, subir, descer, saltar, vestir e despir
					</p>
				</div>
				<div class="clicker" tabindex="1">
					<img
						src="https://image.flaticon.com/icons/svg/1998/1998630.svg"
						alt="Baby"
					/>
					<h4>Creche - Sala dos Golfinhos - 24 aos 36 meses</h4>
				</div>
				<div class="hiddendiv">
					<p>
						Aqui as principais aquisições são a linguagem e a interação
						interpessoal
					</p>
				</div>
				<div class="clicker" tabindex="1">
					<img
						src="https://image.flaticon.com/icons/png/512/2924/2924163.png"
						alt="Baby"
					/>
					<h4>Jardim de Infância - 3 aos 6 anos</h4>
				</div>
				<div class="hiddendiv">
					<p>
						Aqui promove-se o desenvolvimento das crianças, num respeito
						contínuo pelos seus interesses, capacidades e ritmos individuais.
						Num ambiente educativo seguro, familiar e estimulante, incentiva-se
						a criança a experimentar e a descobrir o mundo que a rodeia, através
						do jogo e da brincadeira.
					</p>
				</div>
				<div class="clicker" tabindex="1">
					<img
						src="https://image.flaticon.com/icons/svg/2232/2232688.svg"
						alt="Baby"
					/>
					<h4>Centro de Estudos</h4>
				</div>
				<div class="hiddendiv">
					<p>
						Proporcionar aos encarregados de educação a confiança de ter um
						espaço onde deixar os seus educandos num local seguro, e criado à
						medida das suas necessidades educativas, onde são estimulados e
						acompanhados quer na realização TPC´s, quer nas interrupções
						escolares.
					</p>
				</div>
				<div class="clicker" tabindex="1">
					<img
						src="https://image.flaticon.com/icons/png/512/2906/2906386.png"
						alt="Baby"
					/>
					<h4>Consultório - A partir dos 3 anos</h4>
				</div>
				<div class="hiddendiv">
					<p>Consultas de Psicologia</p>
				</div>
				<div class="clicker" tabindex="1">
					<img
						src="https://image.flaticon.com/icons/svg/2926/2926410.svg"
						alt="Baby"
					/>
					<h4>Alimentação</h4>
				</div>
				<div class="hiddendiv">
					<p>
						A alimentação das crianças é de vital importância para um bom
						desenvolvimento e crescimento saudável e para a prevenção de várias
						doenças (tanto na infância como na vida adulta). No sentido de
						garantirmos a prática de uma alimentação equilibrada e adequada às
						necessidades nutricionais das nossas crianças, as refeições são
						confecionadas na creche, por uma cozinheira experiente, a partir de
						produtos alimentares criteriosamente selecionados e seguindo
						rigorosamente as normas do HACCP. O serviço de alimentação inclui o
						almoço.
					</p>
				</div>
				<div class="clicker" tabindex="1">
					<img
						src="https://image.flaticon.com/icons/svg/2949/2949776.svg"
						alt="Baby"
					/>
					<h4>Transporte</h4>
				</div>
				<div class="hiddendiv">
					<p>
						Viaturas preparadas para transportar os seus filhos sempre com total
						segurança.
					</p>
				</div>
			</section>
			<section className="Nursery">
				<h1>Berçário</h1>
				<Nursery />
			</section>
			<section className="Ladybug">
				<h1>Creche - Sala das Joaninhas</h1>
				<Nursery />
			</section>
			<section className="Dolphin">
				<h1>Creche - Sala dos Golfinhos</h1>
				<Nursery />
			</section>
			<section className="Kindergarden">
				<h1>Jardim de Infância</h1>
				<Nursery />
			</section>
			<section className="StudyCenter">
				<h1>Centro de Estudos</h1>
				<Nursery />
			</section>
			<section className="Carriage">
				<h1>Transporte</h1>
				<Nursery />
			</section>
			<section className="Kitchen">
				<h1>Cozinha</h1>
				<Nursery />
			</section>
			<section className="Management">
				<h1>Direção</h1>
				<Nursery />
			</section>
			<section className="Prices">
				<h3>Mensalidades desde 65€*</h3>
				<div>
					<div>
						<img src="https://www.ventos-traquinas.pt/servicos/images/centro-de-estudos/Chapeu%20Academico-cutout@2x.png" />
						<h5>Mensalidades</h5>
						<p>
							2 dias/semana - 65€ *<br />
							3 dias/semana - 85€ *<br />5 dias/semana - 100€ *
						</p>
					</div>
					<div>
						<img src="https://www.ventos-traquinas.pt/servicos/images/centro-de-estudos/Transporte@2x.jpg" />
						<h5>Transporte</h5>
						<p>
							De casa ao centro de estudos ou à escola. Sujeito a
							disponibilidade
						</p>
					</div>
					<div>
						<img src="https://www.ventos-traquinas.pt/servicos/images/centro-de-estudos/Talheres%20e%20Prato.jpg" />
						<h5>Refeição</h5>
						<p>
							Almoços - 35€/mês
							<br />
							Ao dia - 3,50€ /dia
						</p>
					</div>
				</div>
			</section>
			<section className="Contacts">
				<h1>Contactos</h1>
				<div>
					<div className="Left">
						<div>
							<img src="https://image.flaticon.com/icons/png/512/2933/2933294.png" />
							<a href="tel:967-551-142">
								<p>967 551 142</p>
							</a>
						</div>
						<div>
							<img src="https://image.flaticon.com/icons/svg/2920/2920101.svg" />
							<a href="mailto:geral@ventos-traquinas.pt">
								<p>geral@ventos-traquinas.pt</p>
							</a>
						</div>
						<div>
							<img src="https://image.flaticon.com/icons/svg/255/255315.svg" />
							<a href="https://www.facebook.com/ventos.traquinas">
								<p>/ventos.traquinas</p>
							</a>
						</div>
						<div>
							<img src="https://image.flaticon.com/icons/svg/684/684908.svg" />
							<a href="https://www.google.com/maps/place/Bairro+Quinta+da+Fonte+1,+Lavradio/@38.6623368,-9.057601,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0xd1936457af3fcb3:0x1e5b1fc736d8c5fa!2sVentos+Traquinas!8m2!3d38.6656211!4d-9.0470237!3m4!1s0xd1937b499135e7f:0xc0205921e55c1543!8m2!3d38.6622983!4d-9.0555092">
								<p>
									Bairro Quinta da Fonte, lote 2 <br />
									2835-304 Lavradio
								</p>
							</a>
						</div>
						<div>
							<img src="https://image.flaticon.com/icons/svg/684/684908.svg" />
							<a href="https://www.google.com/maps/place/Ventos+Traquinas/@38.6656211,-9.0492124,17z/data=!3m1!4b1!4m5!3m4!1s0xd1936457af3fcb3:0x1e5b1fc736d8c5fa!8m2!3d38.6656211!4d-9.0470237">
								<p>
									Rua Samora Machel, 17-A <br />
									2835-158 Baixa da Banheira
								</p>
							</a>
						</div>
					</div>
					<div className="Right">
						<div className="maps" style={{ height: '300px', width: '100%' }}>
							<GoogleMapReact
								bootstrapURLKeys={{
									key: 'AIzaSyDu1sb9-aIv5r5A1xPPFUW_vj5rVKu86F4',
								}}
								defaultCenter={defaultProps.center}
								defaultZoom={defaultProps.zoom}
							>
								<Infantário lat={38.66269} lng={-9.055328} text="Infantário" />
								<CentroEstudos
									lat={38.665847}
									lng={-9.046766}
									text="Centro Estudos"
								/>
							</GoogleMapReact>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default index;
