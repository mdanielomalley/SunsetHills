function Sunset(){

    let buildings = [
    document.getElementById("b1").value,
    document.getElementById("b2").value,
    document.getElementById("b3").value,
    document.getElementById("b4").value,
    document.getElementById("b5").value,
    document.getElementById("b6").value]
    //first building can always see sunset
    let results = [];
    let currentTallest = 0;
    //for each building 
    for (let buildingCount = 0; buildingCount < buildings.length; buildingCount++) {
        
      
      // //assume no building is larger
        let bigger = true;
       
        if(currentTallest < buildings[buildingCount]){
          currentTallest = buildings[buildingCount];
          bigger = false;
          console.log(currentTallest);
        }
        
        //if there's a bigger building in front, view is blocked, otherwise view sunset
        bigger ?  results.push("Blocked Sunset") : results.push("View Sunset");
    }
  
    document.getElementById('o1').innerText = results[0];
    document.getElementById('o2').innerText = results[1];
    document.getElementById('o3').innerText = results[2];
    document.getElementById('o4').innerText = results[3];
    document.getElementById('o5').innerText = results[4];
    document.getElementById('o6').innerText = results[5];
  
  }
  
  function Demolish(){
    document.getElementById('b1').value = '';
    document.getElementById('b2').value = '';
    document.getElementById('b3').value = '';
    document.getElementById('b4').value = '';
    document.getElementById('b5').value = '';
    document.getElementById('b6').value = '';
  
    document.getElementById('o1').innerText = '';
    document.getElementById('o2').innerText = '';
    document.getElementById('o3').innerText = '';
    document.getElementById('o4').innerText = '';
    document.getElementById('o5').innerText = '';
    document.getElementById('o6').innerText = '';
  }
  
  
  