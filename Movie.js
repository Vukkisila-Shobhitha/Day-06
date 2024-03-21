class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        if(rating == undefined)
        {
            this.rating="VG";
        }
        else
        {
            this.rating=rating;
        }
      }
    getVG(array){
            var result=[];
            for(var i=0;i<array.length;i++){
                if(array[i].rating=="VG")
                {
                    result.push(array[i]);
                }
            }
            return result;
       }
  }
  var movie1=new Movie("Mr.perfect","PVR","Bahubali");
  var movie2=new Movie("Jawan","AGS");
  var movie3=new Movie("The worst witch","MGS","Damsel");
  var movie4=new Movie("Yes Day","VR");
  var arr=[movie1,movie2,movie3,movie4];
  console.log(movie3.getVG(arr));