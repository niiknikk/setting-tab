const container = document.querySelector('.container');
const content = document.querySelectorAll('.content');
const btnSetting = document.querySelectorAll('.btn-setting');

container.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    console.log(id);

    if(id){
        btnSetting.forEach((btn) => {
          
                btn.classList.remove('active');
                e.target.classList.add('active');
        });
        content.forEach( (content) =>{
            content.classList.remove('active');
            const contentId = document.getElementById(id)
            contentId.classList.add('active')
        })
    }
})