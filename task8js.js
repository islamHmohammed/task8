var isdisplayedUser=false;
var searchText;

const getUser=(searchText)=>{
fetch('https://api.github.com/users/'+searchText)
  .then(
      response => response.json(),
      )
  .then(data =>{
       if(data['name']!=null){
         if(isdisplayedUser==false){
           //add new user
           isdisplayedUser==false
           imgSrc=data['avatar_url'];
           $(".result-container").append("<div class='style-div'>"
                                          +"<img class='style-img' src="+imgSrc+">"
                                          +"<p class='name-style'>"+data['name']+"</p>"
                                          +"<p class='name-style'>"+data['followers']+"</p>"
                                          +"<div class='name-style'>"+data['following']+"</div>"
                                          +"</div>");
          }
         else{
           var pos= $('.style-div').offset().top
            $("html, body").animate({ scrollTop: $(document).height()-pos});
         }
      }
      else{
        userSearched.pop(searchText);
      }
  }
  )
}
 
function search()
{ 
  searchText= $("#search-text").val();
  for(var i =0;i<userSearched.length;i++){
    if(searchText==userSearched[i]){
      isdisplayedUser=true;
      $("#search-text").val("");
      break;
    }
  }
  if(i==userSearched.length){
    isdisplayedUser=false;
    userSearched.push(searchText);
    $("#search-text").val("");
    console.log(userSearched);
  }
  getUser (searchText);
 }