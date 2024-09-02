<template>

	<header>
		<nav>
			<a href="#">Inicio</a>
			<a href="#">Mercadito de Turmero</a>
			<a href="#">Descargar</a>
			<a href="#">Ubicacion</a>
		</nav>
		<section class="textos-header">
			<h1>Historia de Turmero</h1>
			<h2>Alcaldia de el Municipio Santiago Mariño</h2>
		</section>
		<div class="wave" style="height: 150px; overflow: hidden;">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none"
				style="height: 100%; width: 100%;">
				<path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
					style="stroke: none; fill: #fff;"></path>
			</svg>
    </div>
	</header>
	<section class="about section-padding">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-12 col-12">
					<div class="about-img">
						<img src="/imagenes/PedroDElia.png">
					</div>
				</div>
				<div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
					<div class="titulo">
						<h3>En Memoria del Profesor Pedro D'Elia (1963-2023)</h3>
						<p>Contribuyo a la comunidad turmereña a saber mas sobre los origenes de nuestro municipio</p>
					</div>
				</div>
			</div>
    </div>
    
	</section>
    

	<section class="general">
		<div class="general-1">
			<h2>Templo Masonico (Mercadito Campesino de Turmero)</h2>
			<p>
				A manera de ilustración, es necesario explicar; como se conectan los hechos más importantes del pasado,
				el cual se explican por si solas, en la cronología de la história. Para ello es necesario hacer otras
				preguntas: Cómo algunos elementos artisticos y Arquitectónico pueden convertirse simbolicamente en
				mensajes codificados?, Qué intención tiene dichas información? y Qué podría aportar dicha información a
				las futuras Generaciones?. Por supuesto ésto ayudará a comprender, los objetivos que buscaban los
				principales protagonistas de la Historia a mediados del Siglo XIX . Existe una Edificación al Estilo
				Republicano el cual está en la ciudad de Turmero y todos los conocen como el Mercado Popular o
				simplemente el Mercadito. Está situado en la calle Bolívar; pero antes de la Guerra de Independencia se
				llamaba calle la Candelaria. Está en el centro, cerca de la Catedral y al frente de la Plaza
				Santiago Mariño....
			</p>
			<a href="CONSTRUCCION DE UN TEMPLO MASONICO EN TURMERO Y LA CONEXION HISTORICA CON LA LEY DE ABOLICION DE LA ESCLAVITUD DEL 20 DE MARZO 1854.pdf"
				type="button" class="btn btn-primary">Leer Documento Completo</a>
		</div>
		<div>
			<img src="/imagenes/TemploMasonico.png" class="imagenCatedral">
		</div>
	</section>
	<section class="blog container">

		<h2>Oficina de Turismo</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illo nihil? Distinctio praesentium
			expedita tempora, commodi nulla enim non error fuga quasi, iste cupiditate, voluptas qui? Rerum perspiciatis
			totam nostrum?
		</p>

		<div class="blog-content">
			<div class="blog-1">
				<img src="/imagenes/perfil-0.jpg" alt="">
				<h3>Directora. Delia Torrealba</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>
			<div class="blog-1">
				<img src="/imagenes/perfil-0.jpg" alt="">
				<h3>Oficinista.
					Misleydi</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>
			<div class="blog-1">
				<img src="/imagenes/perfil-0.jpg" alt="">
				<h3>Oficinista.
					Kimberly</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>
		</div>
	</section>

	<footer class="footer">
		<div class="footer-content container">
			<div class="link">
				<h3>Contactos</h3>
				<ul>
					<li><a href="#">
							<p class="bi bi-geo-alt-fill"> Alcaldia de Turmero</p>
						</a></li>
					<li><a href="#">
							<p>Siguenos por: <i class="bi bi-instagram"></i><a href="#"> instagram</a></p>
						</a></li>
					<li><a href="#"></a>
						<p>Pagina desarrollada por: Andy Errada, Miguel D' Elias y Jose &copy; 2024</p>
					</li>
				</ul>
			</div>
    </div>
	</footer>


</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'open sans';
}

.contenedor {
    padding: 60px 0;
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
}

.titulo {
    color: #0a41b8;
    font-size: 30px;
    text-align: center;
    margin-bottom: 60px;
}

/* Header */

header {
    width: 100%;
    height: 600px;
    background: #0a41b8;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, hsla(221, 93%, 37%, 0.459), hsla(199, 74%, 65%, 0.664)), url(../imagenes/1005317_10200863563004155_1761832279_n.jpg);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, hsla(226, 89%, 49%, 0.459), hsla(203, 45%, 52%, 0.664)), url(../imagenes/1005317_10200863563004155_1761832279_n.jpg);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: cover;
    background-attachment: fixed;
    position: relative;
}

nav{
    text-align: right;
    padding: 30px 50px 0 0;
}

nav > a{
    color:#fff;
    font-weight: 300;
    text-decoration: none;
    margin-right: 10px;
}

nav > a:hover{
    text-decoration: underline;
}

header .textos-header{
	color: white;
    display: flex;
    height: 430px;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}


.general {
	display: flex;
}

.general-1 {
	width: 50%;
	padding: 100px 250px 100px 100px;
	background-color: #E1E2E6;
} 

.general-2 {
	background-image: url(Templo\ Masonico.png);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 50%; 
}

.general-3{
	background-image: url(Pedro_DElia.jpg);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
    width: 50%;
}

.contenedor-sobre-nosotros{
    display: flex;
    justify-content: space-evenly;
}

.sobre-nosotros .contenido-textos{
    width: 48%;
}
h2 {
	font-size: 55px;
	line-height: 70px;
	color: #323337;
	text-transform: uppercase;
	margin-bottom: 20px;
}

h4 {
	color: #000000;
	text-transform: uppercase;
}

p {
	font-size: 16px;
	color: #414247;
	margin: 25px 0 45px 0;
}

.blog {
	padding: 100px 0;
	text-align: center;
}

.blog-content {
	display: flex;
	justify-content: space-between;
}

.blog-1 {
	padding: 15px 55px;
}

.blog-1 img {
	width: 250px;
	border-radius: 15px;
	margin-bottom: 15px;
}

.blog-1 h3 {
	font-size: 25px;
	color: #323337;
}

.text-light {
	color: blue;
}

.footer {
	padding: 100px 0;
	background-color: #000000;
}

.footer-content {
	display: flex;
	justify-content: space-between;
}

.link h3 {
	font-size: 18px;
	color: #F9FAFC;
	margin-bottom: 15px;
}

.link p {
	font-size: 16px;
	color: #C5C5C5;
	display: block;
	margin-bottom: 15px;
}

@media(max-width:991px) {

	.general {
		flex-direction: column;
	}

	.general-1 {
		width: 100%;
		padding: 30px;
		text-align: center;
	}

	.general-2, .general-3 {
		display: none;
	}

	.blog {
		padding: 30px;
	}

	.blog-content {
		flex-direction: column;
	}

	.blog-1 {
		padding: 0;
	}

	.footer {
		padding: 30px;
	}

	.footer-content {
		flex-direction: column;
		text-align: center;
	}

}

.imagenCatedral{
	width: 100%;
	height: 100%;
	object-fit: cover;
}

</style>