const names = ["Daniel", "Gergö", "Josef", "Eriona"]

//Aufgabe: erstelle ein Array die mit allen Namen, die a/A enthalten

function getNamesWithA(arr){
    const result=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i].includes("a") || arr[i].includes("A")){
            result.push(arr[i])
        }
    }
    return result
}
console.log(getNamesWithA(names));

//filtermethode
const result = names.filter(el => el.toLowerCase().includes("a"))
console.log(result)