
async function lodeCategoriesData (){
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    const data = await res.json()
   categoriesBar(data)


}

function times(time){

  const hr = parseInt(time / 3600)
  const min = (time % 3600)
  const mins = parseInt(min / 60)
  const sec = min % 60
return `${hr} h ${mins} m ${sec} s`
}
// lode videos
const lodeVideosData = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideo(data.videos))
    .catch(err => console.log("error"))
    }
 const lodeCategoriVideo = (id) =>{
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then((res) => res.json())
  .then((data) => displayVideo(data.category))
  .catch(err => console.log("error"))
 }
const categoriesBar = (data) => {
    const categoriesContainer = getElementById('categoriesContainer')
    data.categories.forEach(element => {
        const btnDiv = document.createElement('button')
        btnDiv.classList = 'btn text-lg'
        btnDiv.innerText = element.category
        btnDiv.onclick = ()=>{
          lodeCategoriVideo(element.category_id)
        }
        
        categoriesContainer.appendChild(btnDiv)
      
    });
}
lodeCategoriesData()

// display videos
const displayVideo = (videosData) => {
    const videosContainer = getElementById('videosContainer')
    if(videosData.length == 0){
      videosContainer.classList.remove('grid')
      videosContainer.innerHTML =`
      <div class="hero bg-base-200 min-h-screen">
                <div class="hero-content text-center">
                  <div class="max-w-md flex flex-col justify-center items-center gap-6">
                    <img class="w-[150px]" src="./asset/Icon.png" alt="">
                    <h1 class="text-5xl font-bold">Oops!! Sorry, There is no content here</h1>
                    
                  </div>
                </div>
              </div>
      `
      return
    }
    videosContainer.classList.add('grid')
  videosContainer.innerHTML = ''
    videosData.forEach((element) => {
      let x = document.getElementById("x")
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
      <div id="x" class="absolute bottom-2 right-4 p-2">
      ${others.posted_date?.length == 0 ? "" : `<spam class="bg-[#334155] p-2  text-white ">${times(others.posted_date)}</spam>`}
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



