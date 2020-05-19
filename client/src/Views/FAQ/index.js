import React, { Component } from 'react';
import './style.scss';

class index extends Component {
	render() {
		return (
			<div className="FAQ">
				<h1>Perguntas Frequentes</h1>
				<div class="clicker" tabindex="1">
					<h4>Até que dia posso pagar a mensalidade?</h4>
				</div>
				<div class="hiddendiv">
					<p>As mensalidades poderão ser pagas até dia 8 de cada mês.</p>
				</div>
				<div class="clicker" tabindex="1">
					<h4>Qual o horário do centro de estudos?</h4>
				</div>
				<div class="hiddendiv">
					<p>O horário do centro de estudos é das 9h às 19h30.</p>
				</div>
				<div class="clicker" tabindex="1">
					<h4>O centro de estudos está aberto nos feriados?</h4>
				</div>
				<div class="hiddendiv">
					<p>
						Não. O centro de estudos fecha aos fins de semana, nos feriados
						nacionais e no feriado do Barreiro.
					</p>
				</div>
				<div class="clicker" tabindex="1">
					<h4>O centro de estudos dispõe de serviço de carrinha?</h4>
				</div>
				<div class="hiddendiv">
					<p>
						Sim, no entanto, está sujeito a disponibilidade.
						<br />O Serviço de carrinha faz serviço de transporte entre a
						escola, casa e o centro de estudos. O serviço de carrinha é
						oferecido nas voltas que não abranjam levar ou ir buscar a casa.
					</p>
				</div>
			</div>
		);
	}
}

export default index;
