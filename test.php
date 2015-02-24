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
			<h2 class="h2">Welcome</h2>
			<p><?php
				echo "This is PHP. It is a server-side script that outputs upon render.";
				echo "<br/><code>It can render <abbr title='HyperText Markup Language'><b>HTML</b></abbr> on output as well!</code>";
			?>
			</p>
		</div>
		<div class="col-xs-2"></div>
	</div>
	<footer></footer>
</body>
</html>