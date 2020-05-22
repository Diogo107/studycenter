import React from 'react';
import './style.scss';

function index(props) {
	return (
		<div className="Landing__Page">
			<section className="Company">
				<h1>Apresentação Geral</h1>
				<div className="Greetings">
					<div className="Left">
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
						src="https://image.flaticon.com/icons/png/512/2906/2906386.png"
						alt="Baby"
					/>
					<h4>
						A alimentação das crianças é de vital importância para um bom
						desenvolvimento e crescimento saudável e para a prevenção de várias
						doenças (tanto na infância como na vida adulta). No sentido de
						garantirmos a prática de uma alimentação equilibrada e adequada às
						necessidades nutricionais das nossas crianças, as refeições são
						confecionadas na creche, por uma cozinheira experiente, a partir de
						produtos alimentares criteriosamente selecionados e seguindo
						rigorosamente as normas do HACCP. O serviço de alimentação inclui o
						almoço.
					</h4>
				</div>
				<div class="hiddendiv">
					<p>Consultas de Psicologia</p>
				</div>
			</section>
			<section className="Berçário">
				<h1>Berçário</h1>
			</section>
			<section className="Creche">
				<h1>Creche - Sala das Joaninhas</h1>
			</section>
			<section className="Creche">
				<h1>Creche - Sala dos Golfinhos</h1>
			</section>
			<section className="Kindergarten">
				<h1>Jardim de Infância</h1>
			</section>
			<section className="Study__Center">
				<h1>Centro de Estudos</h1>
			</section>
			<section className="Carriage">
				<h1>Transporte</h1>
			</section>
			<section className="Kitchen">
				<h1>Cozinha</h1>
			</section>
			<section className="Managment">
				<h1>Direção</h1>
			</section>
			<section className="Prices">
				<h1>Preços</h1>
			</section>
			<section className="Contacts">
				<h1>Contactos</h1>
			</section>
		</div>
	);
}

export default index;
