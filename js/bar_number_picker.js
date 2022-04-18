function barMove(){
  //console logs
  console.log(this.parentNode);
  console.log(this.parentNode.parentNode);
  console.log(this.parentNode.parentNode.children);
  console.log(this.parentNode.parentNode.children[0]);
  //
    this.parentNode.parentNode.children[0].innerHTML = this.children[0].innerHTML;
    this.parentNode.children[0].style.width = 100/(this.parentNode.children.length-3)*this.children[0].innerHTML+"%";
    this.parentNode.children[1].style.left = 100/(this.parentNode.children.length-3)*this.children[0].innerHTML+"%";
  }  
  
function createBarNumPicker(parentDiv, unitNumber){
    let display = document.createElement('div');
    display.classList.add('displayDiv');
    display.style.textAlign = 'center'
    display.innerHTML = '1';
    parentDiv.appendChild(display);
  
    let main = document.createElement('div');
    main.style.display = 'flex';
    main.style.cursor = 'pointer';
    main.style.height = '10px';
    main.style.width = '100%'; 
    main.style.borderRadius = '5px';
    main.style.backgroundColor = 'lightgray';
    main.style.position = 'relative';
    parentDiv.appendChild(main);
  
    let bar = document.createElement('div');
    bar.style.width = '0';
    bar.style.height = '10px';
    bar.style.position = 'absolute';
    bar.style.left = '0';
    bar.style.backgroundColor = '#507DF0';
    bar.style.borderRadius = '5px 0 0 5px';
    bar.style.pointerEvents = 'none';
    bar.style.transition = '0.5s';
    main.appendChild(bar);
  
    let barball = document.createElement('div');
    barball.style.width = '16px';
    barball.style.height = '16px';
    barball.style.borderRadius = '8px';
    barball.style.backgroundColor = '#3ac3dd';
    barball.style.position = 'absolute';
    barball.style.left = '0';
    barball.style.top = '-3px';
    barball.style.transition = '0.5s';
    barball.style.transform = 'translateX(-50%)';
    main.appendChild(barball);
  
    for(let iter=0; iter<=unitNumber; iter++)
      {
        let unit = document.createElement('div');
        unit.style.flex = '1';
        main.appendChild(unit);
        unit.onclick = barMove;
        let unitSpan = document.createElement('span');
        unitSpan.innerHTML = iter;
        unitSpan.style.display = 'none';
        unit.appendChild(unitSpan);
      }
  }
  
  function pickBarNum(parent){
    return parent.children[0].innerHTML;
  }