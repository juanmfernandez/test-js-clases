class Noticia{
	constructor(titulo, img, contenido){
		this.titulo = titulo;
		this.img = img;
		this.contenido = contenido;
	}

	darNoticia(){
		console.log(this.titulo, this.contenido);
		return("<img src=img/" + this.img + " class='bd-placeholder-img card-img-top'>" + "<h4>" + this.titulo + "</h4><p>" + this.contenido+"</p>")
	}
}

let newsArr = []
noticia1 = new Noticia("I like the body. I like to design everything to do with the body.", "1.jpg", "Lorem Ipsum is simply dummy text printing and typesetting industry. Lorem Ipsum is a standar");
noticia2 = new Noticia("Graphic design will save the world rigth after rock and rol does.", "2.jpg", "Lorem Ipsum is simply dummy text printing and typesetting industry. Lorem Ipsum is a standar");
noticia3 = new Noticia("Recognizing the need is the primary condition for design.", "3.jpg", "Lorem Ipsum is simply dummy text printing and typesetting industry. Lorem Ipsum is a standar");
noticia4 = new Noticia("At a meta level, design connects the dots betwen mere survival and humanism", "4.jpg", "Lorem Ipsum is simply dummy text printing and typesetting industry. Lorem Ipsum is a standar");

newsArr[0]=noticia1;
newsArr[1]=noticia2;
newsArr[2]=noticia3;
newsArr[3]=noticia4;

for (var i = newsArr.length - 1; i >= 0; i--) {
	//console.log(newsArr[i]);	
	let div = document.createElement('div');
    div.id = 'content';
    div.className = 'col-md-3 cd';
    div.innerHTML = newsArr[i].darNoticia();
    document.getElementById("resultado").appendChild(div);
}
