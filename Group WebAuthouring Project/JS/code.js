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
        hair.setAttribute("class","hat slavka");
        state.i++;
        console.log(state.j);
    }
     else if (state.j ===2)
    {
        hair.setAttribute("class","hair_jade");
        state.i=0;
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
}




window.onload = init;
function init()
{
    state.i=0;
    state.j=0;
}

