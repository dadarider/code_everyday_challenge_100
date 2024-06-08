
let divtofs = document.querySelectorAll('.divtof')

divtofs.forEach(panel =>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses(){
    divtofs.forEach(panel =>{


        panel.classList.remove('active')
    })
}
