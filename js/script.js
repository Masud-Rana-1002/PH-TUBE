
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
    
    const verifiedUser = getElementById('verifiedUser')
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
                            <p class="flex items-center justify-start gap-3" >${authors[0].profile_name} 
                             <svg id="verifiedUser" class="w-8  text-[#2568EF]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                 </svg>
                                
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




