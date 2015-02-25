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
			<h2 class="h2 text-center text-violet">PHP Testing</h2>
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
			<h4 class="h4">Arithmetic</h4>
				<p id="php"><samp><?php 
					echo "<span class='comment'>5 * 10 =</span>" . " " . 5 * 10;
				?></samp></p>
				<p class="exp">PHP can process and output arithmetic operations straight from the <code>echo</code> command. Here, we are mulitplying 5 and 10, and adding a string to show the operation.</p>
			<h4 class="h4">Variables</h4>
				<p id="php"><samp><?php 
					$myName = "Geoff Davis";
					$myAge = 22;
					echo "My name is " . $myName . " and I am " . $myAge . " years old.";
				?></samp></p>
				<p class="exp">Add variables to your code by using the <code>$</code> sign before a variable's name. <br>
				It uses the following syntaxt: <code>$variableName = "value";</code>.</p>
			<h4 class="h4">Misellaneous Coding Syntax <small>Comments and Semicolons</small></h4>
				<p id="php"><samp class="comment"><?php
					// This is a PHP comment
					echo "...";
				?></samp></p>
				<p class="exp">The above PHP comment is unrendered; instead we see a representation of what to put in the PHP tags. Use <code>//</code> at the beginning of the line to indicate that that line is a comment, and not to be parsed.</p>
				<p id="php"><samp><?php
					echo "\$name = geoffdavis92;";
				?></samp></p>
				<p class="exp">Also, the <code>;</code> (semicolon) character is used to end a line of code; it indicates that the processing should stop there.</p>
			</section>
			<h3 class="h3">Conditionals and Control Flow</h3>
			<section id="conditionals">
			<h4 class="h4">Comparison Operators</h4>
			<p id="php"><samp><?php 
				echo "<span class='comment'>5 > 10 >></span> FALSE";
			?></samp>
			<br>
			<samp><?php 
				echo "<span class='comment'>5 < 75 >></span> TRUE";
			?></samp>
			<br>
			<samp><?php 
				echo "<span class='comment'>10 >= 10 >></span> TRUE";
			?></samp>
			<br>
			<samp><?php 
				echo "<span class='comment'>6 <= 0 >></span> FALSE";
			?></samp>
			<br>
			<samp><?php 
				echo "<span class='comment'>0 == 0 >></span> TRUE";
			?></samp>
			<br>
			<samp><?php 
				echo "<span class='comment'>12 != 12 >></span> FALSE";
			?></samp>
			</p>
			<p class="exp">
			The following comparison operators are used to compare two numbers, variables, or other PHP statements. They will output <code>boolean</code> statements.
				<table class="table table-bordered ref">
					<tr>
						<th class="sans text-center" colspan="2"><b>PHP Comparison Operators</b></th>
					</tr>
					<tr>
						<td><code>&gt;</code></td>
						<td>Greater than</td>
					</tr>
					<tr>
						<td><code>&lt;</code></td>
						<td>Less than</td>
					</tr>
					<tr>
						<td><code>&gt;=</code></td>
						<td>Greater than or equal to</td>
					</tr>
					<tr>
						<td><code>&lt;&equals;</code></td>
						<td>Less than or equal to</td>
					</tr>
					<tr>
						<td><code>&equals;&equals;</code></td>
						<td>Equal to</td>
					</tr>
					<tr>
						<td><code>!&equals;</code></td>
						<td>Not equal to</td>
					</tr>
				</table>
			</p>
			<h4 class="h4">if Statements</h4>
			<p id="php"><samp><?php
				$age = 22;
				if($age > 16){
					echo "<span class='comment'>if($age > 16){</span><br><span class='comment'>echo \"</span>You are legal!\";<br><span class='comment'>}</span>";
				}
			?></samp></p>
			<p class="exp">If statements are more or less the same syntax and function as in Javascript.
<pre id="php" class="width-auto">
if($var1 > $var2){
   // do something;
}
</pre>
			</p>
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
	<footer>
		<a href="code.php"><button class="btn btn-info center-block">code.php</button></a>
	</footer>
</body>
</html>

<!--
	(h4.h4{CMD}+(p#php>samp{<?php ?>})+p.exp)*5
-->