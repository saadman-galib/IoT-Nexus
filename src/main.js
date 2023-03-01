export function runJSAgain() {
    let heroTitle = document.querySelector(".hero-title h1");
    // document.querySelector('.about-p-1').style.transform = `translateY(-882px)`;
    console.log(heroTitle);
    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        heroTitle.style.transform = `translateY(${scroll * -1.0019}px)`;

        // console.log(scroll)
        // document.querySelector('.about-p-1').style.transform = `translateY(${(scroll - 782) * 2}px)`;
    });
}
