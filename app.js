const boxes = document.querySelectorAll(".box"); //querySelectorAll gives a nodelist that we can loop through

const checkBoxes = () => {
    const triggerBottom = window.innerHeight / 5 * 4 //this is the window height.. not counting the console
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top //.top to see where the top of that particular box is.. TOP OF THE NEXT BOX
        if (boxTop < triggerBottom) {
            box.classList.add("show")
        }else {
            box.classList.remove("show")
        }
    })
}
checkBoxes()
window.addEventListener('scroll', checkBoxes)

//You can also use Animate On Scroll library --- https://michalsnik.github.io/aos/