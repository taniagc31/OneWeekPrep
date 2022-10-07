/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */ 
/* Si es entre 1:00 am a 11:00 AM , queda igual
* Si es medianoche cambiarlo a 00
* Si es de 1 a 12 pm, agregar 12 a cada hora
* 
*/

function timeConversion(s) {

    let lastDigits = s.substring(8);
    let hours =  s.substring(0,8);
    let times = hours.split(':');

    if ( lastDigits === "PM") {
        if (times[0] != "12") {
            times[0] = parseInt(times[0]) + 12;
        }
         }
        else {
            if (times[0] === "12") {
                times[0] = "00";
            }
        }
    
        return times.join(':');

}