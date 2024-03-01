import data as component from `./data/data.js`;
import * as component from `./components/indexpadre`;
class app-conteiner extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({mode: 'open'})
	}
}
connectedCallBack(){
  this.render();
}
render(){
this.shadowRoot.innerHTML = `<card-card>

<section>
<h1> BERSHKA </h1>
</section>

<h2>$Top Sellers</h2>

<section class=> 
<Image src = ${this.Image}></Image>
<h2>${this.title}</h2>
<p>${this.description}</p>

<div>
  <h2>Materials:${this.value} </h2>
  <h2>Materials:${this.inStock} </h2>
</div>

<p>More details > </p>

</section>

<section class= >
<h2>Materials:${this.materials}</h2>
<h2>Sizes Available:${this.sizesAvailable} </h2>
<h2>Brand:${this.brand} </h2>
<h2>Origin:${this.origin} </h2>

</card-card>
`
}

customElements.define(`card-card`, card);
    export default card;