let c=console.log.bind()
let myReq=new XMLHttpRequest();
var Data;
myReq.open("Get","/Api.json",true);
myReq.onreadystatechange=function(){
    if(myReq.readyState==4&&myReq.status==200){
       Data=JSON.parse(myReq.responseText)
        c(Data[1][0].id)
        for(let i=0;i<Data[0].length;i++){
        let category=document.createElement("div");
        category.className="category";
        let categories=document.querySelector(".categories");
        categories.appendChild(category);
        let categoryName=document.createElement("h3");
        categoryName.innerHTML=Data[0][i][Object.keys(Data[0][i])][i].category
      //  console.log(Data[0][i]);
     

        let categoryImg=document.createElement("img");
        categoryImg.src=Data[0][i][Object.keys(Data[0][i])][0].image
        let link=document.createElement("a");
        link.href="./oneCategory.html?id="+i+"& name =" +Data[0][i][Object.keys(Data[0][i])][i].category;
        document.getElementById("ourCart").setAttribute("href","./myCart.html?id="+i+"& name =" +Data[0][i][Object.keys(Data[0][i])][i].category)
        link.innerHTML="<span>see more</span>";
        category.appendChild(categoryName);
        category.appendChild(categoryImg);
        category.appendChild(link);
        document.querySelector("#ourCart").href=`/cart.html`
            
        }
        for(let i=0;i<Data[1].length;i++){
            let supplyImg= document.createElement("img");
            supplyImg.src=Data[1][i].image;
            
            // supplyImg.setAttribute("class",'w-75')
            document.querySelector(".supplies-container").appendChild(supplyImg)
        }


}}

myReq.send();
let index=0
let addsArray=["01.jpg","02.jpg","03.jpg","04.jpg"]
function imgSliding(){
    if(index<addsArray.length){
        document.querySelector(".ads img").src=`/images/ads/${addsArray[index]}`;
                index++;
    } else{
        index=0;
    }
    
}
let handler=setInterval(imgSliding,3000)
document.querySelector(".next").addEventListener('click',()=>{
imgSliding();
})
document.querySelector(".prev").addEventListener('click',()=>{
    if(index>0.){
        document.querySelector(".ads img").src=`/images/ads/${addsArray[index]}`;
        index--;
    }else{
       index=addsArray.length-1;
 }       
})

document.getElementById("count").innerHTML=localStorage.getItem("count");