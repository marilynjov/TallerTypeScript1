import { Serie } from "./Serie.js";
import { series } from "./data.js";

let seriesTabla:HTMLElement = document.getElementById("series")!;
const promedioT:HTMLElement = document.getElementById("promedio")!;


let Series=series;

mostrardatosTabla(Series);
promedioT.innerHTML=`${average(Series)}`

console.log(series);

function mostrardatosTabla(Series:Serie[]):void{
    for(let serie of Series)
    {
        let trElement=document.createElement("tr");
        trElement.innerHTML=
        ` <td scope="col">${serie.id}</td>
        <td scope="col"> ${serie.Name} </td>
        <td scope="col" style='text-align:center'>${serie.Chan}</td>
        <td scope="col" style='text-align:center'>${serie.Seas}</td>`;

        seriesTabla.appendChild(trElement);

    }

}

function average(Series:Serie[]): number{
    let count:number = 0;
    let cant:number = 0;

    for(let serie of Series)
    {
        count+=serie.Seas;
        cant+=1;
    }

    const promedio = count/cant;
    console.log(promedio);
    return promedio;

}
