var myPhotoViewArray = new Array();

class PhotoViewer
{

    constructor(title,image,author,date,description)
    {
        this.title = title;
        this.image = image;
        this.author = author;
        this.date = date;
        this.description = description;
    }

    toString()
    {
        return "Title: " + this.title;
        return "Image: " + this.image;
        return "Artist: " + this.author;
        return "Date: " + this.date;
        return "Description: " + this.description;
    }

    get theTitle()
    {
        return "Title: " + this.title;
    }
    get theImage()
    {
        return this.image;

    }
    get theAuthor()
    {
        return "Artist: " + this.author;
    }
    get theDate()
    {
        return "Date: " + this.date;
    }
    get theDescription()
    {
        return "Description: " + this.description;
    }

}

function initializeArray()
{

    var myPhotoViewer = new PhotoViewer("Hippopotamus and Performer",'images/photo1.jpeg',"Mary Ellen Mark","1989","A performer in india with her Hippo");
    var myPhotoViewer1 = new PhotoViewer("Man with Bees",'images/photo2.jpg',"Richard Avedon","1978","A man covered with bees");
    var myPhotoViewer2 = new PhotoViewer("Country Doctor",'images/photo3.jpg',"Eugene Smith", "1950","From photo essay about a country doctor");
    var myPhotoViewer3 = new PhotoViewer("Street Portrait",'images/photo5.jpg',"Vivian Maer","1956","A street portrait on the of a woman");
    var myPhotoViewer4 = new PhotoViewer("Stravinsky",'images/photo4.jpg',"Arnold Newman","1953","A portrait of the composer Stravinsky");
  myPhotoViewArray.push(myPhotoViewer);
  myPhotoViewArray.push(myPhotoViewer1);
  myPhotoViewArray.push(myPhotoViewer2);
  myPhotoViewArray.push(myPhotoViewer3);
  myPhotoViewArray.push(myPhotoViewer4);

}


function accessInformation()
{




  var randomViewArray = myPhotoViewArray[Math.floor(Math.random()*myPhotoViewArray.length)];

  document.getElementById("title").innerHTML = randomViewArray.theTitle;
  document.getElementById("image").src = randomViewArray.theImage;
  document.getElementById("author").innerHTML = randomViewArray.theAuthor;
  document.getElementById("date").innerHTML = randomViewArray.theDate;
  document.getElementById("description").innerHTML = randomViewArray.theDescription;

   console.log(randomViewArray);

}
