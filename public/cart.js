$(()=>{

$('#addtocart').click(function(){
    addcart(
        productname.val(),
        productmanufacturer.val(),
        productprice.val(),
        function(addedproduct){
            window.alert("added" + addedproduct.name + "to databases")
        }

    )
})
})