let search =document.querySelector(".search");

let outerWidth=  $(".paragraf").innerWidth(); 


$(".position-fixed i").click(function(){
    let leftValue = $(".position-fixed").css("left"); 
  //   console.log(leftValue)
    if( leftValue == "0px")
    {
        $(this).parent().animate({left : `-${outerWidth}`,}, 1000)
      
    }
    else{
        $(this).parent().animate({left : `0px`,}, 1000)
    }
})
//----------------------Link Api-------------------------
let myData;
//--------------------------XML---------------------
    let xml = new XMLHttpRequest();
    xml.open("GET" , "https://www.themealdb.com/api/json/v1/1/categories.php");
    xml.send();
    xml.addEventListener("readystatechange" , function(){
       if(xml.readyState==4)
        {
            myData=JSON.parse (xml.response).categories
   //       console.log(myData)
            display()
        }
    })

// -------------------------For Loop XML----------------------
function display()
{
    let hasalah ="";
    for(let i=0 ; i<myData.length ; i++)
    {
       hasalah+=`<div class="col-md-4 mb-2 w-25">
       <div class="">
           <img class=" img-fluid w-100 " src="${myData[i].strCategoryThumb}">
         </div>
    </div>`
    }
    document.querySelector(".row").innerHTML=hasalah
}

//-------------------------------------------------------
$(".search").click(function(){
    $(".section").addClass("d-none");
})
function test(eInfo)
{
let apiSearch = new XMLHttpRequest();
apiSearch.open("GET" , `https://www.themealdb.com/api/json/v1/1/search.php?f=${eInfo}`);
apiSearch.send();
apiSearch.addEventListener("readystatechange" , function(){
   if(apiSearch.readyState==4)
    {
        dataSearch=JSON.parse(apiSearch.response).meals
        console.log(dataSearch)
        inputSearch()
    }
})
}

function inputSearch()
{
    let ma5zan= "";
for(let i=0 ; i<dataSearch.length ;i++)
{
    ma5zan+=`<div class="col-md-3">
    <div>
    <img class="img-fluid" src="${dataSearch[i].strMealThumb}">
    <p>${dataSearch[i].strMeal}</p>
    </div>
    </div>
    `

}
document.querySelector(".intSearch").innerHTML=ma5zan;
}

function inputKol(eInfo)
{
let dataXx = new XMLHttpRequest();
dataXx.open("GET" , `https://www.themealdb.com/api/json/v1/1/search.php?s=${eInfo}`);
dataXx.send();
dataXx.addEventListener("readystatechange" , function(){
   if(dataXx.readyState==4)
    {
        dataSearch=JSON.parse(dataXx.response).meals
        console.log(dataSearch)
       searchinputKol()
    }
})
}


function searchinputKol()
{
    let karateen= "";
for(let i=0 ; i<dataSearch.length ;i++)
{
    karateen+=`<div class="col-md-3">
    <div>
    <img class="img-fluid" src="${dataSearch[i].strMealThumb}">
    <p>${dataSearch[i].strMeal}</p>
    </div>
    </div>
    `

}
document.querySelector(".searchkol").innerHTML=karateen;
}

$(".catag").click(function(){
    $(".section").removeClass("d-none");
    $(".search").addClass("d-none")
})

//https://www.themealdb.com/api/json/v1/1/list.php?a=list
// ------------------------------Area--------------------------------

$(".search").click(function(){
    $(".section").addClass("d-none");
})



















function eare()
{

let apiEare = new XMLHttpRequest();
apiEare.open("GET" , `https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
apiEare.send();
apiEare.addEventListener("readystatechange" , function(){
   if(apiEare.readyState==4)
    {
        dataSearch=JSON.parse(apiEare.response).meals
   //     console.log(dataSearch)
        push()
    }
})
}
function push()
{
    let hasalah="";
    for(let i=0 ; i<dataSearch.length ; i++)
    {
        hasalah+=`
        <div class="col-md-4">
            <div>
        <i class="fa-solid fa-business-time fs-1"></i>
        <h1>${dataSearch[i].strArea}</h1>
            </div>
        </div>`
    }
    document.querySelector(".geteare").innerHTML=hasalah;
}






