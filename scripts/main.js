import { series } from "./data.js";
var seriesTabla = document.getElementById("series");
var promedioT = document.getElementById("promedio");
var Series = series;
mostrardatosTabla(Series);
promedioT.innerHTML = "".concat(average(Series));
console.log(series);
function mostrardatosTabla(Series) {
    for (var _i = 0, Series_1 = Series; _i < Series_1.length; _i++) {
        var serie = Series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            " <td scope=\"col\"> &nbsp ".concat(serie.id, " &nbsp </td>\n        <td scope=\"col\"> &nbsp ").concat(serie.Name, " &nbsp </td>\n        <td scope=\"col\" style='text-align:center'> &nbsp ").concat(serie.Chan, " &nbsp </td>\n        <td scope=\"col\" style='text-align:center'> &nbsp ").concat(serie.Seas, " &nbsp </td>");
        seriesTabla.appendChild(trElement);
    }
}
function average(Series) {
    var count = 0;
    var cant = 0;
    for (var _i = 0, Series_2 = Series; _i < Series_2.length; _i++) {
        var serie = Series_2[_i];
        count += serie.Seas;
        cant += 1;
    }
    var promedio = count / cant;
    console.log(promedio);
    return promedio;
}
