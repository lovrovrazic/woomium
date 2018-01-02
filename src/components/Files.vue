<template>
<div>
    <header>
		<div class="all_wrap">
			<div class="logo_wrap">
				<img src="../assets/logo_main.png">
			</div>
			<div class="menu_wrap">
				<img src="../assets/menu.png">
			</div>
		</div>	
	</header>
	<section class="files_wrap">
		<ul>
			<p class="files_title">Choose files and folders for backing up to &lt;prej izbrana naprava&gt;</p>
			<li><input type="checkbox">My movies <img src="../assets/folder.png"></li>
			<li><input type="checkbox">My songs <img src="../assets/folder.png"></li>
			<li><input type="checkbox">disk_image_21122017.img <img src="../assets/file.png"></li>
			<li><input type="checkbox">Queens - Bohemian Rhapsody.mp3 <img src="../assets/song.png"></li>
		</ul>
	</section>
	<footer>
        <div class="proceed_all_wrap">
            <div class="proceed_text_wrap">
                <p>Proceed...</p>
            </div>
        </div>
	</footer>
</div>
</template>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

html, body {
	height: 100%;
	font-family: sans-serif;
}

header {
	height: 50px;
	border-bottom: 1px solid rgba(0,0,0,0.5);
	background: linear-gradient(rgba(0,0,0,0.01), rgba(0,0,0,0.2));
	box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
}

/*Start of header*/

.all_wrap {
	display: table;
	width: 100%;
	height: 100%;
}

.logo_wrap, .menu_wrap {
	display: table-cell;
	vertical-align: middle;
}

.logo_wrap {
	padding-left: 15px;
}

.menu_wrap {
	padding-right: 15px;
}

.menu_wrap img {
	display: block;
	float: right;
	height: 4%;
}

.logo_wrap img {
	display: block;
}

/*Start of list of files*/

.files_wrap {
	padding: 20px;
	opacity: 0.75;
}

.files_wrap ul {
	list-style: none;
}

.files_wrap ul li {
	margin-bottom: 10px;
}

.files_wrap img {
	margin-left: 10px;
}

.files_wrap input {
	margin-right: 20px;
}

.files_title {
	font-size: 14pt;
	margin-bottom: 12px;
}

.proceed_all_wrap {
	opacity: 0.75;
	padding: 20px;
}

.proceed_text_wrap {
	vertical-align: middle;
	display: inline-block;
}

footer {
	position: absolute;
	bottom: 0;
	right: 0;
}

a, li, .proceed_all_wrap {
	cursor: pointer;
}
</style>