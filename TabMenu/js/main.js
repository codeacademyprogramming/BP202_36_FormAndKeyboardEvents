
let menuItem = document.querySelectorAll('.menu-list .menu-item');

menuItem.forEach(elem=>{
    elem.addEventListener('click',function(){
        let activeItem = document.querySelector('.menu-item.active');

        if(activeItem){
            activeItem.classList.remove('active');
        }
        this.classList.add('active');

        let activeTab = document.querySelector('.tab-item.active');
        if(activeTab){
            activeTab.classList.remove('active')
        }

        let tabId = this.getAttribute('data-tab');
        let selectedTab =  document.querySelector(tabId);
        selectedTab.classList.add('active')
    })
})