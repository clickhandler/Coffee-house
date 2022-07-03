let newData=JSON.parse(localStorage.getItem("coffee"))||[]
  appendData(newData)
//   console.log(newData)



  
  function appendData(newData){
    let sum=0
    newData.forEach(function(elem,index){
    sum=Number(sum+elem.price)
    
    let container = document.getElementById("bucket");
  let total=document.getElementById("total_amount")
  total.innerText=sum
      let div = document.createElement("div");
  
      let image = document.createElement("img");
      image.src = elem.image;
  
      let title = document.createElement("h3");
      title.innerText = elem.title;
  
      const Price = document.createElement("p");
      Price.innerText = elem.price
  
      let btn = document.createElement("button");
      btn.innerText = "Remove";
  
      


      btn.addEventListener("click", function () {
       removeItem(elem,index);
      });
      div.append(image, title, Price, btn);
  
      container.append(div);
      console.log(sum)
    })
  }
 
  function removeItem(elem,index){
     
    newData.splice(index,1)
  
    localStorage.setItem("coffee",JSON.stringify(newData))
    window.location.reload()
    // console.log(sum)
  }