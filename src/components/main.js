class Cardnews extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build(){
        //Construindo 
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");
        //Parte descritiva do artigo
        const CardLeft = document.createElement("div");
        CardLeft.setAttribute("class","card-left");

        const nome = document.createElement("h2");
        nome.textContent =this.getAttribute("nome");

        const desc = document.createElement("p");
        desc.textContent = this.getAttribute("desc");
        

        const valor = document.createElement("span");
        valor.textContent = this.getAttribute("valor");


        CardLeft.appendChild(nome)
        CardLeft.appendChild(desc)
        CardLeft.appendChild(valor)
        
        //Parte ilustrativa do artigo
        const CardRight =document.createElement("div");
        CardRight.setAttribute("class","card-right");

        const img = document.createElement("img")
        img.src = this.getAttribute("photo"); 

        CardRight.appendChild(img)

        //Definindo hierarquia(Colocando as div filhas dentro da div pai )
        componentRoot.appendChild(CardLeft);
        componentRoot.appendChild(CardRight);

        return componentRoot;
    }
    //Colocando estilo no nossos elementos 
    style(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            display: flex;
            justify-content: space-between;
            margin:15px;
            padding-bottom:10px;
        }
        h2{
            font-size: 18px;
            margin-top: 15px;
            margin-bottom: 3px;
            max-width: calc(100% - 20px);
            font-weight: 500;
        }

        p{
            color:#888;
        }

        img {
            width: 125px;
            height: 125px;
            display: inline-block;
            border-radius: 10px;
            -o-object-fit: cover;
            object-fit: cover;
        }
        .card-left {
            width: 500px;
        }
        `;

        return style;
    }
}

customElements.define("card-news", Cardnews);