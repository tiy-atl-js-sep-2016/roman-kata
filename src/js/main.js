import $ from 'jquery';

function convertNum (event) {
  event.preventDefault();
  var decimalNum = $("#my-number").val();
  var romanNum = toRoman(decimalNum);
  $("#answer").html(romanNum);
}

$("#convert-num").click(convertNum);
