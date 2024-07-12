function opener(){
    document.querySelector('.snb-wrap').classList.toggle('hi100');
    document.getElementById('spin').classList.toggle('spin_up');
}


let qus = document.querySelectorAll('.qus');
let aswh = document.querySelectorAll('.asw_h');

qus.forEach((qusItem, index) => {
  qusItem.addEventListener("click", () => {
    let panel = aswh[index];
    let isActive = qusItem.classList.toggle("active");

    aswh.forEach((aswhItem, idx) => {
      if (idx !== index) {
        aswhItem.style.maxHeight = null;
        qus[idx].classList.remove("active");
      }
    });
    
    if (isActive) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = null;
      }   
  });
});

let lst_start = document.querySelectorAll('.lst_fap_start')
let lst_faq = document.querySelectorAll('.lst_faq_wrap')
lst_start[0].classList.add('changeP')
lst_faq[0].classList.add('activeLis')

lst_start.forEach(function(list1, i){
  list1.addEventListener('click',function(){
    for(let j=0; j<lst_start.length; j++){
      lst_start[j].classList.remove('changeP')
      lst_faq[j].classList.remove('activeLis')
    }
    list1.classList.add('changeP')
    lst_faq[i].classList.add('activeLis')
  })
});

let chk_box = document.querySelectorAll('.chk-box')
let checkbox = document.querySelectorAll('.checkbox')

chk_box[1].classList.add('selected')


chk_box.forEach(function(selected, i){
  selected.addEventListener('click',function(){
        for(let j=0; j<chk_box.length; j++){
            chk_box[j].classList.remove('selected');
            
        }
        selected.classList.add('selected');
    })
})


