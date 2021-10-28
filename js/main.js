const handleClick = () => {
    const btn = document.querySelectorAll('.button');
    btn.forEach(x => x.addEventListener('click', function() {
        console.log(this.innerText);
    }));
}
//handleClick();