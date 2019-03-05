$(function(){
  var $width = $('#width'),
      $heigth = $('#height'),
      $jisuan = $('#jisuan'),
      $perimeter = $ ('#perimeter'),
      $arear = $('#arear');
  $jisuan.click(function(){
  var l = Number($heigth.val()),
      w = Number($width.val());
  var p = (l+w)*2,
      a = l * w;
      $perimeter.val(p),
      $arear.val(a);
  })
});
