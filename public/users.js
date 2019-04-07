$(()=>{
    let username=$('#username')    
        $('#btnuseradd').click(function(){
            adduser(
                username.val(),
                function(addeduser){
                    window.alert("added " + addeduser.name + "to databases")
                }
            )
        })
       
    })