window.addEventListener('scroll',function(){
    const head=this.document.getElementById('menu');
    if(this.window.scrollY>0){
        head.classList.add('scrolled');
    }
    else{
        head.classList.remove('scrolled');
    }
});