
class product{

    constructor(_parent,_type,_id,_img,_explanation,_name,_text,_time){
        this.parent=_parent;
        this.id=_id;
        this.type=_type;
        this.img=_img;
        this.explanation=_explanation;

        this.name=_name;
        this.text=_text;
        this.time=_time;
       
    }

  
    render(){
        let myDiv=document.createElement("div")
        myDiv.className= "ohuDoo";
        document.querySelector(this.parent).append(myDiv);

        myDiv.innerHTML=`
        <h4> ${this.type} ${this.id}</h4>
         <img class="img" src="/project/public/images${this.img} " alt="${this.type} " > 
         <p>${this.explanation} </p>
        `
    }
    


}











