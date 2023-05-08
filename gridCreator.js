function createGird(grid,containerName){
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)` //these use grid to make rows and columns =
    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`    //what user chooses
    let gridNum = grid * grid; //multiplying by self to get full amount
    for(var i = 0; i< gridNum; i++){ //run amount times
    const container = document.querySelector(containerName);  //goes into container
    const content = document.createElement('div');  //creates divs called content
    content.classList.add('content'); //adds the content divs
    //various style stuff
    
    content.addEventListener('mouseover', mouseOver); //when mouse over goes to mouse over func
    
    function mouseOver(){
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        content.setAttribute("style", `background-color: ${randomColor};`) //changes background color in styles
        }                              //note to self template literals are very useful!
    
    container.appendChild(content);
    }
    }