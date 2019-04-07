function fetchproducts(done){
    $.get('api/products',function(data){
        done(data)
    })
}
function fetchcarts(done){
  $.get('api/carts',function(data){
      done(data)
  })
}
function fetchusers(done){
  $.get('api/users',function(data){
      done(data)
  })
}
function addproduct(name,manuf,price,done){
  $.post('/api/products',{
    name:name,
    manufacturer:manuf,
    price:price
  },function(data){
    done(data)
  })
}
function addcart(name,manuf,price,done){
  $.post('/api/carts',{
    name:name,
    manufacturer:manuf,
    price:price
  },function(data){
    done(data)
  })
}
function adduser(name,done){
  $.post('/api/users',{
    name:name
  },function(data){
    done(data)
  })
}
function createproductcard(product){
  return $(` <div class="col-4 card mx-2 p-4">
  <h4 class="product-name">${product.name}</h4> 
  <div class="product-manufacturer">${product.manufacturer}</div>
  <div class="row"
     <div class="col m-3 p-3">
        <b>${product.price}</b>
        </div>

       <button class="btn btn-primary">BUY</button>
       <br>
       <button id="addtocart" class="btn btn-primary">ADD TO CARTS</button>
     </div>
</div>`)   
}
function createcartproduct(cart){
  return $(` <div class="col-4 card mx-2 p-4">
  <h4 class="product-name">${product.name}</h4> 
  <div class="product-manufacturer">${product.manufacturer}</div>
  <div class="row"
     <div class="col m-3 p-3">
        <b>${product.price}</b>
        </div>
         </div>
</div>`)   
}
function createusercard(user){
  return $(` <div class="col-4 card mx-2 p-4">
  <h4 class="user-name">${user.name}</h4>
</div>`)   
}