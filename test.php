<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"/>
	<meta name="author" content="geoffdavis92"/>
	<meta name="keywords" content=""/>
	<title>Test PHP Page</title>
	<link rel="stylesheet" href="css/bootstrap.min.css"/>
	<link rel="stylesheet" href="css/theme.css"/>
</head>
<body>
	<header class="text-center">
		<h1 class="h1">Geoff Davis</h1>
		<nav class="center-block">
			<ul class="list list-unstyled list-inline">
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Portfolio</a></li>
				<li><a href="#">Resum&eacute;</a></li>
				<li><a href="#">Blog</a></li>
			</ul>
		</nav>
	</header>
	<div class="container">
		<div class="col-xs-2"></div>
		<div class="col-xs-8 main">
			<h2 class="h2 text-center">PHP Testing</h2>
			<h3 class="h3">PHP Commands</h3>
			<section id="commands">
			<h4 class="h4">echo</h4>
				<p id="php"><samp><?php
					echo "This is echo.";
				?></samp></p>
				<p class="exp">A simple <code>echo</code> command outputs code to the webpage.</p>
				<p class="exp"></p>
			<h4 class="h4">Strings <small>Output and Concatenation</small></h4>
				<p id="php"><samp><?php 
					echo "A simple string output.";
				?></samp></p>
				<p class="exp">String outputs use <code>echo</code> to output strings.</p>
				<p id="php"><samp><?php 
					echo "Sentence" . " " . "with" . " " . "concatenation" . "!";
				?></samp></p>
				<p class="exp">Strings can also be combined with other strings or PHP output using the <code>.</code> (period) operator, which is PHP's concatenation operator.</p>
			<h4 class="h4">CMD</h4>
			<p id="php"><samp><?php ?></samp></p>
			<p class="exp"></p>
			<h4 class="h4">CMD</h4>
			<p id="php"><samp><?php ?></samp></p>
			<p class="exp"></p>
			<h4 class="h4">CMD</h4>
			<p id="php"><samp><?php ?></samp></p>
			<p class="exp"></p>
			</section>
		</div>
		<div class="col-xs-2"></div>
	</div>
	<footer></footer>
</body>
</html>