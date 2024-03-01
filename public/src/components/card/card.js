class card extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({mode: 'open'})
	}
}

connectedCallBack(){
    this.render();
};

static get observedAttributes(){
  return ['image','title', 'description', 'value','inStock','materials', 'sizesAvailable', 'brand','origin' ];
}


attributeChangedCallback(propName, oldValue, newValue){
  this[propName]=newValue;
  this.render();
}

render(){
  this.ShadowRoot.innerHTML=`
  <link rel="stylesheet" href="./src/components/card/card.css">

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


  `;
}

customElements.define(`card-card`, card);
export default card;