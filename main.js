var student_array = [];
function submit() {
var name1 = document.getElementById("text_input_1").value;
var name2 = document.getElementById("text_input_2").value;
var name3 = document.getElementById("text_input_3").value;
var name4 = document.getElementById("text_input_4").value;
student_array.push(name1)
student_array.push(name2)
student_array.push(name3)
student_array.push(name4)
console.log(student_array)
document.getElementById("displayname").innerHTML=student_array;
document.getElementById("buttonsubmit").style.display="none"
document.getElementById("sortbutton").style.display="inline-block"
}
function sorting() {
student_array.sort();
console.log(student_array);
document.getElementById("displayname").innerHTML=student_array;
}