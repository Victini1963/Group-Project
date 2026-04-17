
var state = 
{
    
    i : 0, //body
    j : 0, //hair
    k : 0, //top
    l : 0, //bottom
    m : 0  //shoes
}

function nextbody()
{
    console.log(state.i);
    var body=document.getElementById("body");
    if(state.i===0)
    {
        body.setAttribute("class","body1");
        state.i++;
        console.log(state.i);
    }
    else if (state.i ===1)
    {
        body.setAttribute("class","body2");
        state.i++;
        console.log(state.i);
    }

     else if (state.i ===2)
    {
        body.setAttribute("class","body3");
        state.i++;
        console.log(state.i);
    }

       else if (state.i ===3)
    {
        body.setAttribute("class","body4");
        state.i++;
        console.log(state.i);
    }

       else if (state.i ===4)
    {
        body.setAttribute("class","body5");
        state.i++;
        console.log(state.i);
    }

       else if (state.i ===5)
    {
        body.setAttribute("class","body6");
        state.i++;
        console.log(state.i);
    }

      else if (state.i ===6)
    {
        body.setAttribute("class","body7");
        state.i=0;
    }
}

function nexthair()
{   
    console.log(state.j);
    var hair=document.getElementById("hair");
    if(state.j===0)
    {
        hair.setAttribute("class","hair1");
        state.j++;
        console.log(state.j);
    }
    else if (state.j ===1)
    {
        hair.setAttribute("class","hair2");
        state.j++;
        console.log(state.j);
    }
     else if (state.j ===2)
    {
        hair.setAttribute("class","hair3");   
        state.j++;
        console.log(state.j);
    }
      else if (state.j ===3)
    {
        hair.setAttribute("class","hair4");
        state.j++;
        console.log(state.j);
    }
      else if (state.j ===4)
    {
        hair.setAttribute("class","hair5");
        console.log(state.j);
        state.j=0;
    }
    
}


function nexttop()
{   
    console.log(state.k);
    var top=document.getElementById("top");
    if(state.k===0)
    {
        top.setAttribute("class","top1");
        state.k++;
        console.log(state.k);
    }
    else if (state.k ===1)
    {
        top.setAttribute("class","top2");
        state.k++;
        console.log(state.k);
    }
      else if (state.k ===2)
    {
        top.setAttribute("class","top3");
        state.k++;
        console.log(state.k);
    }
     else if (state.k ===3)
    {
        top.setAttribute("class","top4");
        state.k++;
        console.log(state.k);
    }
     else if (state.k ===4)
    {
        top.setAttribute("class","top5");
        state.k=0;
        console.log(state.k);
    }
}

function nextbottoms()
{   
    console.log(state.l);
    var bottoms=document.getElementById("bottoms");
    if(state.l===0)
    {
        bottoms.setAttribute("class","bottoms1");
        state.l++;
        console.log(state.l);
    }
    else if (state.l ===1)
    {
        bottoms.setAttribute("class","bottoms2");
        state.l++;
        console.log(state.l);
    }
     else if (state.l ===2)
    {
        bottoms.setAttribute("class","bottoms3"); 
        state.l++;  
        console.log(state.l);
    }
      else if (state.l ===3)
    {
        bottoms.setAttribute("class","bottoms4");   
        state.l++;  
        console.log(state.l);
    }
       else if (state.l ===4)
    {
        bottoms.setAttribute("class","bottoms5");   
        console.log(state.l);
        state.l=0;
    }
}

function nextshoes()
{   
    console.log(state.m);
    var shoes=document.getElementById("shoes");
    if(state.m===0)
    {
        shoes.setAttribute("class","shoes1");
        state.m++;
        console.log(state.m);
    }
     else if (state.m ===1)
    {
        shoes.setAttribute("class","shoes2");
        state.m++;
        console.log(state.m,);
    }
     else if (state.m ===2)
    {
        shoes.setAttribute("class","shoes3");   
        state.m++;
        console.log(state.m,);
    }
     else if (state.m ===3)
    {
        shoes.setAttribute("class","shoes4");   
        console.log(state.m);
        state.m=0;
    }
}




window.onload = init;
function init()
{
    state.i=0;
    state.j=0;
}

