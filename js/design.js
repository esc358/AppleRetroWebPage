//global navigation and footer
$(document).ready(function(){
  $(function(){//navigation
    $('#navigation-index').html('<div><a href ="./index.html"><img src="./img/logo.jpg" alt="logo website"></a></div><nav><ul><li><a href="index.html">Home</a></li><li><a href="./html/aboutus.html">About us</a></li><li><a href="./html/product.html">Product</a></li><li><a href="./html/contact.html">Contact</a></li></ul></nav>');
    $('#navigation-inner').html('<div><a href ="../index.html"><img src="../img/logo.jpg" alt="logo website"></a></div><nav><ul><li><a href="../index.html">Home</a></li><li><a href="aboutus.html">About us</a></li><li><a href="product.html">Product</a></li><li><a href="contact.html">Contact</a></li></ul></nav>');
  });

  $(function(){//footer
    $('#footer').html('<h4>Copyright © Apple Inc. All rights reserved.</h4>');
  });
});
