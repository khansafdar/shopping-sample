$(()=>{
    let userList=$('#user-list')
    fetchusers(function(users){
        userList.empty()
        for(user of users){
            userList.append(createusercard(user))
        }
    })
})
