
async function lodeCategoriesData (){
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    const data = await res.json()
   categoriesBar(data)


}
// lode videos
const lodeVideosData = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideo(data.videos))
    .catch(err => console.log("error"))
    }
    
const categoriesBar = (data) => {
    const categoriesContainer = getElementById('categoriesContainer')
    data.categories.forEach(element => {
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
        <button class="btn  text-lg">${element.category}</button>
        `
        categoriesContainer.appendChild(btnDiv)
    });
}
lodeCategoriesData()

// display videos
const displayVideo = (videosData) => {
    const videosContainer = getElementById('videosContainer')
    
  
    videosData.forEach((element) => {
        const {thumbnail, title, authors, others  } = element
        const videoDiv = document.createElement('div')
         videoDiv.innerHTML = `
           <div class="card">
                  <div class="relative ">
                    <figure class="h-[300px] ">
                        <img class="w-full h-full object-cover"
                          src=${thumbnail}
                          alt="Shoes" />
                      </figure>
                      <div class="absolute bottom-2 right-4 bg-[#334155] text-white p-2">
                        <p>12465656</p>
                    </div>
                  </div>
                    <div class="flex items-start gap-3 py-4">
                        <div class="avatar">
                            <div class="w-14 rounded-full">
                              <img src=${authors[0].profile_picture} />
                            </div>
                          </div>
                        <div  class="text-start">
                            <h2 class="card-title font-bold">${title}</h2>
                            <p class="flex items-center justify-start gap-3" >${authors[0].profile_name} <spam>${authors[0].verified === true ?  ` <img class="w-5" src="./asset/icons8-verified-48.png" alt="">` : ''} </spam>
                                
                              </p>
                              <p>91k</p>
                          </div>
                    </div>
                  </div>
        `
        
   
        videosContainer.appendChild(videoDiv)

    })
}


lodeVideosData()




