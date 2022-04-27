document.querySelector('#push').onclick = function(){
    if(document.querySelector('.inputbtn input').value.length==0){
        alert("Xetali giris cehdi")
    }
    else{
        document.querySelector('#tasks').innerHTML+=`<div class="task">
        <span id="taskname">
        ${document.querySelector('.inputbtn input').value}</span></div>`;
     

        // let siltask = document.querySelectorAll('.sil');

        // for (let i = 0; i < siltask.length; i++) {
        //     siltask[i].onclick = function(){
        //         this.parentNode.remove();
        //     }
        // }

        let tasks = document.querySelectorAll('#taskname');
        for (let i = 0; i < tasks.length; i++) {
           tasks[i].onclick = function(){
               this.classList.toggle('ugurlu')
           }
            
        }
        document.get('a').onclick = function() {
         document.write(" id elemeni isledi")
        }
        document.querySelector('.inputbtn input').value= "";
    }
}





