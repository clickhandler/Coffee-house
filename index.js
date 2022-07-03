let url = "https://masai-mock-api.herokuapp.com/coffee/menu";
let count=0;
async function getData() {
    try {

        let res = await fetch(url)
        let data = await res.json()
         console.log(data.menu)
         append(data.menu.data)


    } catch (Err) {
        console.log("Error 404")
    }
}
getData()



function append(Data) {
    
    Data.forEach(function(elem){

    
      let container = document.getElementById("menu");
  
      let div = document.createElement("div");
  
      let image = document.createElement("img");
      image.src = elem.image;
  
      let title = document.createElement("h5");
      title.innerText = `Tyep - ${elem.title}`
  
      const Price = document.createElement("p");
      Price.innerText =`Price - ${elem.price}`
  
      let btn = document.createElement("button");

      btn.innerText = "Add to bucket";
  
      btn.addEventListener("click", function () {
        Additem(elem);
      });
      div.append(image, title, Price, btn);
  
      container.append(div);

    })
    }
    let newData=[]
    function Additem(elem){
       
        count++
        console.log(count)
        document.getElementById("coffee_count").innerText=count
        newData.push(elem)
        localStorage.setItem("coffee",JSON.stringify(newData))


    }