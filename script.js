const jsonData = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];
  const maxAmount = jsonData.reduce((max, item) => Math.max(max, item.amount), 0);
const items=document.querySelectorAll(".item");
const itemsArray=[... items];
jsonData.forEach(function(value,index){
    console.log(index);
   const heightBar=value.amount*300/100;
   const day=value.day;
   const myBarElement=itemsArray[index].querySelector(".bar");
   const myPElement=itemsArray[index].querySelector("p");
    setTimeout(function(){
        myBarElement.style.height=`${heightBar}px`;
    myPElement.innerHTML=day;
    },1000);
    if(value.amount===maxAmount){
        myBarElement.style.backgroundColor='hsl(186, 34%, 60%)'
    }
    itemsArray[index].querySelector(".activeStat").classList.remove("hidden");
    myBarElement.addEventListener("mouseover",function(){
        myBarElement.style.opacity='0.7';
        // itemsArray[index].querySelector(".activeStat").classList.remove("hidden");
        itemsArray[index].querySelector(".activeStat").style.width="60px"
        itemsArray[index].querySelector(".activeStat").innerHTML=value.amount+"$";
    })
    myBarElement.addEventListener("mouseout",function(){
        myBarElement.style.opacity='1';
        itemsArray[index].querySelector(".activeStat").style.width="0px"
        itemsArray[index].querySelector(".activeStat").innerHTML='';

        // itemsArray[index].querySelector(".activeStat").classList.add("hidden");
        
    })
      
});


