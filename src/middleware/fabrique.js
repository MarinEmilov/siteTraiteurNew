function Vegitarien(name,prix,type){
    this.name = name;
    this.prix = prix;
    this.type = type;
}

function Nonvegitarien(name,prix,type){
    this.name = name;
    this.prix = prix;
    this.type = type;
}



function RaipasFabrique()
{
    this.create = (name, prix, type) =>{
        switch(type)
        {
            case 1:
                return new Vegitarien(name,prix,type)
                break ;
                
            case 2:
                return new Nonvegitarien(name,prix,type)
        }
    }

}

function say()
{
    // console.log(this.name, this.prix, this.type)
}

const raipasFabrique = new RaipasFabrique()  
const raipas = []

raipas.push(raipasFabrique.create("Risoto", "10 $" , 1))
raipas.push(raipasFabrique.create("Risoto","15 $", 2))

raipas.forEach(raip =>{
    say.call(raip)
})
