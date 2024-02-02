const URL = "https://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector("#fact")
const btn = document.querySelector("#btn")

// Here we Async/Await so we create a asyc function so we wrap the 2 statements on asyc function .


//  let promise=fetch(URL); 
//  console.log(promise);

const getFacts = async () => {
    console.log("getting data........")
    // let promise= await fetch(URL); instead of promise we will write it response because in programming .Programming me hmain jo bhi cheez hmain return huti h voh hmaray pass respone huta h
    let response = await fetch(URL);  // instead of promise we will write it response because in programming .Programming me hmain jo bhi cheez hmain return huti h voh hmaray pass respone huta h
    // console.log(response.status); output is 200
    console.log(response);//JSON Format

    let data = await response.json();// return 2 promise 
    // console.log(data[0].text); this data is useable data 
    factPara.innerText = data[1].text;
};

// fetch data with promise chaining.....................Promise Chaining .then & .Catch
// function getFacts(){
//     fetch(URL).then((respnse)=>{
//        return respnse.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerText = data[1].text;
//     })
// }

btn.addEventListener("click", getFacts);
