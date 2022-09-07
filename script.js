/*mcu phase tabs and content */

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e){
    removeBorder(); //at first, remove border from all tabs
    removeShow(); // at first, remove show from all tab content

    // console.log(this.id);
    this.classList.add('tab-border');

    //add class 'show' to the tab which one is clicked,,this.id refer to that id
    const tabContent = document.querySelector(`#${this.id}-content`);
    tabContent.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click',selectItem));

// mcu movie list

/* $(document).ready(function(){
    $('.drop-mcu-list').click(function(){
        $('.mcuList').slideToggle(500);
    })
}) */

const dropMcuListBtn = document.querySelector('.drop-mcu-list');
const mcuList = document.querySelector('.mcuList');

dropMcuListBtn.addEventListener('click',function(){
    mcuList.classList.toggle('show-mcu-list');
})