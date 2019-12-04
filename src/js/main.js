// (function panel() {
//    const PanelInit = {
//      init(){
//         document.documentElement.classList.add('js-enabled');
//         this.panel = document.querySelectorAll('.open');
//         PanelInit.addEventListeners();
//      },
//      addEventListeners(){
//          document.this.panel.addEventListener('click', ()=>{
//              for (let i = 0; i < this.panel.length;i++){
//                      this.panel.classList.add('open')
//              }
//          })
//      }
//    };
//     PanelInit.init();
// }());


document.documentElement.classList.add('js-enabled');
let panel = document.querySelectorAll('.panel');

for (let i = 0; i < panel.length; i++){
        panel[i].addEventListener('click',()=>{
        if (panel[i].classList.contains('open')){
            panel[i].classList.remove('open');
        }else{
                panel[i].classList.add('open');
            }
        })
    }



