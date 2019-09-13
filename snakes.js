function Snake(){
    this.x=0;
    this.y=0;
    this.xs=1;
    this.ys=0;
    this.total=1;
    this.tail=[];
    this.score=0;
    this.dir=function(x,y){
        this.xs=x;
        this.ys=y;
    }
    this.update=function(){
        if(this.total===this.tail.length){
            // console.log("a");
            for(var i=0;i<this.tail.length-1;i++){
                this.tail[i]=this.tail[i+1];
                // this.tail[i].y=this.tail[i+1].y;
                // console.log(this.tail[i].y+" "+this.tail[i+1].x)
            }            
        }
        // console.log(this.total+" "+this.tail.length);
        this.tail[this.total-1]=createVector(this.x,this.y);

        this.x=this.x+this.xs*scl;
        this.y+=this.ys*scl;
        this.x=constrain(this.x,0,width-scl);
        this.y=constrain(this.y,0,height-scl);
        
        
    }

    this.death=()=>{
        for(var i=1;i<this.tail.length;i++){
            var pos=this.tail[0];
            var d=dist(this.tail[i].x,this.tail[i].y,pos.x,pos.y)
            if(d<1){
                console.log("GAME OVER");
                this.total=0;
                this.tail=[];
            }
        }
    }

    this.show=function(){
        fill(255);
        // noScore();
        for(i=0;i<this.tail.length;i++){
            // fill(255);
            rect(this.tail[i].x,this.tail[i].y,scl,scl);
        }
        // console.log(this.tail.length);
        
        // rect(this.x,this.y,scl,scl);
    }
    this.eat=function(pos){
        var d=dist(this.x,this.y,pos.x*scl,pos.y*scl);
        // console.log(d);
        if(d<20){
            this.total++;this.score+=100;
            console.log("score="+this.score);
            // this.tail.length++;
            return true;
        }else
        return false;
    }

}

function keyPressed(){
    if(keyCode==UP_ARROW){
        if(s.ys==0)
        s.dir(0,-1);
    }
    else if(keyCode==DOWN_ARROW){
        if(s.ys==0)
        s.dir(0,1);
    }
    else if(keyCode==RIGHT_ARROW){
        if(s.xs==0)
        s.dir(1,0);
    }
    else if(keyCode==LEFT_ARROW){
        if(s.xs==0)
        s.dir(-1,0);
    } 
}
