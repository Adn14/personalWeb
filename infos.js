
var sectionTitle = ["Personal Summary", "What I Like To Do", "My Achievements", "What I Like The Most", "My Contact Info"];

var about = "My name is Adn, I am an IT undergraduate with passion in software engineering and machine learning. Obtained various soft skill and hard skill through numerous projects, events, and organizations (Google DSC & Google Developer Group).<br><br>I have 2 sis and a cat. I am single currently casually looking for partner<br><br> You can add me at facebook maybe, Just search 'Adn Agung', would be glad to get to know about you as well :)";

var hobi = "In my leisure time I usually play with my computers. Not just play 'play', I surf the net to gain knowledges and find something cool. There I learn about a lot of things including programming, general knowledges, etc. I love reading and having a discussion with people while drinking a coffee.<br><br> Aside from Net surf, I draw. I draw in anime style mostly to express my artistic side :3";

var achievement = "I have achieved various things in my college life. I led some team to participate in competitions. I have joined several organization that promotes humanism values like Gusdurian and philosophical discussion community where we learn and try to improve our surroundings.<br><br> Coolest achievement I have ever got is that I was selected as DSC Lead for my campus. So much knowledges and experiences I got from that moment.";

var love = "I love Gundam the most as an entertainment, both as video game or anime. But I do love movies and TV series as well, my favorites are Star Trek, Interstellar, True Detective, and Silicon Valley.<br><br> As for something to learn, I am really interested in learning about Artficial Intelligence (please contact me if you do as well). Favorite philosopher? Nietzche. Prettiest person I have ever known? Mbak Hena from Dicoding <3";

var contactInfo = "E-mail : aragungadn1414@gmail.com<br><br>Facebook : adn.agung1<br><br>LinkedIn : adn-agung";

var imgIndexPos = 0;

var imgPath = ['adn.jpg', 'adn2.jpg', 'adn3.jpg', 'adn4.jpg'];

function nextPic(){
	if (imgIndexPos < 3) {
		imgIndexPos+=1;
	} else{
		imgIndexPos = 0;
	}
	document.getElementById("main-pic").src = "images/" + imgPath[imgIndexPos];
	console.log(imgPath[imgIndexPos]);

}

function abt(){
	document.getElementById("sub-title").innerHTML = sectionTitle[0];
	document.getElementById("details-pic").src = "images/adn-pp.jpg";
	document.getElementById("details-text").innerHTML = about;
	gotoBottom();
}

function hobby(){
	document.getElementById("sub-title").innerHTML = sectionTitle[1];
	document.getElementById("details-pic").src = "images/reading.jpg";
	document.getElementById("details-text").innerHTML = hobi;
	gotoBottom();
}

function achv(){
	document.getElementById("sub-title").innerHTML = sectionTitle[2];
	document.getElementById("details-pic").src = "images/dsc.jpg";
	document.getElementById("details-text").innerHTML = achievement;
	gotoBottom();
}

function fav(){
	document.getElementById("sub-title").innerHTML = sectionTitle[3];
	document.getElementById("details-pic").src = "images/gundam.gif";
	document.getElementById("details-text").innerHTML = love;
	gotoBottom();
}

function contact() {
	document.getElementById("sub-title").innerHTML = sectionTitle[4];
	document.getElementById("details-pic").src = "images/adn-cont.jpg";
	document.getElementById("details-text").innerHTML = contactInfo;
	gotoBottom();
}

function gotoBottom(){
	document.getElementById("info-details").style.display = "block";
	window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
}

function closeInfo(){
	document.getElementById("info-details").style.display = "none";
	window.scrollTo(0, 0);
	console.log('close');
}