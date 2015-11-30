//fix for IE7 and IE8
 $(function () {
     if (!$.support.placeholder) {
         $("[placeholder]").focus(function () {
             if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
         }).blur(function () {
             if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
         }).blur();

         $("[placeholder]").parents("form").submit(function () {
             $(this).find('[placeholder]').each(function() {
                 if ($(this).val() == $(this).attr("placeholder")) {
                     $(this).val("");
                 }
             });
         });
     }
 });