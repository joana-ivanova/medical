$(document).ready(function(){
$('td').hover(function() {
    var t = parseInt($(this).index()) + 1;
    $('td:nth-child(' + t + ')').addClass('highlighted');
	$('th:nth-child(' + t + ')').addClass('highlighted');
},
function() {
    var t = parseInt($(this).index()) + 1;
    $('td:nth-child(' + t + ')').removeClass('highlighted');
	$('th:nth-child(' + t + ')').removeClass('highlighted');
}),
$("#changePositionZ").click(function() {
		$(this).attr("src","images2/trueRight.png");
		$("#changePositionPerc").attr("src","images2/falseLeft.png");
}),
$("#changePositionPerc").click(function() {
		$(this).attr("src","images2/trueLeft.png");
		$("#changePositionZ").attr("src","images2/falseRight.png");
})
$("#changePositionMet").click(function() {
		$(this).attr("src","images2/trueRight.png");
		$("#changePositionEng").attr("src","images2/falseLeft.png");
}),
$("#changePositionEng").click(function() {
		$(this).attr("src","images2/trueLeft.png");
		$("#changePositionMet").attr("src","images2/falseRight.png");
})
$("#changePositionMedic").click(function() {
		$(this).attr("src","images2/trueLeft.png");
		$("#changePositionPatients").attr("src","images2/falseRight.png");
}),
$("#changePositionPatients").click(function() {
		$(this).attr("src","images2/trueRight.png");
		$("#changePositionMedic").attr("src","images2/falseLeft.png");
})
});
