// function submitData() {
//     $("#form").submit(function(event) {
//         console.log($(this).serializeArray());
//         event.preventDefault();
//     });
// }
$(function() {
    var update = function() {
        $('#serializearray').text(
            JSON.stringify($('form').serializeArray()));
    };
    update();
    $('form').change(update);
});
