$(function(){
    var str = '#len'; //incrementby1
    $(document).ready(function(){
      var i,stop;
      i = 1;
      stop = 4; //num elements
      setInterval(function(){
        if (i > stop) {
          return;
        }
        $('$len' + (i++)).toggleClass('bounce')
      }, 500)
    });
  });