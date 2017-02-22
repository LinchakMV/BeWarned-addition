function readURL(input) {
    var type   = ['image/jpg','image/jpeg','image/png'];
    var width  = 300;
    var height = 300;
    var size   = 5242880; // bytes
    var file   = input.files[0];
    var prev   = document.getElementById('img_prev');
    function errMsg(x) {
        alert('Error: ' + x);
        prev.src = '';
        input.value = '';
    }
    if (type.indexOf(file.type) == -1) {
        errMsg('Incorrect type');
        return false;
    } else if (file.size > size) {
        errMsg('Large size');
        return false;
    } else {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            var img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                if (this.width >= width && this.height >= height) {
                    prev.src = this.src;
                } else {
                    errMsg('small Width/Height');
                }
            };
        };
    }
};

$(document).ready(function() {
   $('.custom-file-input').on('change', function() {
      realVal = $(this).val();
      lastIndex = realVal.lastIndexOf('\\') + 1;
      if(lastIndex !== -1) {
         realVal = realVal.substr(lastIndex);
         $(this).prev('.mask').find('.fileInputText').val(realVal);
      }
   });
});