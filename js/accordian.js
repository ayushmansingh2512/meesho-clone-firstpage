// document.querySelectorAll('.accordian-wrapper').forEach((item) => {
//     item.addEventListener('click', function() {
//         const content = this.querySelector('.accordian-content');

//         // Toggle the content's visibility
//         if (content.style.display === "block") {
//             content.style.display = "none";
//         } else {
//             content.style.display = "block";
//         }

//         // Optionally, toggle the arrow direction (if using an icon)
//         const icon = this.querySelector('.fas');
//         if (icon.classList.contains('fa-angle-down')) {
//             icon.classList.remove('fa-angle-down');
//             icon.classList.add('fa-angle-up');
//         } else {
//             icon.classList.remove('fa-angle-up');
//             icon.classList.add('fa-angle-down');
//         }
//     });
// });



document.querySelectorAll('.accordian-wrapper').forEach((item) => {
    item.addEventListener('click', function() {
        const content = this.querySelector('.accordian-content');
        
        if(content.style.display === "block"){
            content.style.display ="none";

        }
        else{
            content.style.display = "block";
        }

        const icon = this.querySelector('.fas');{
            if (icon.classList.contains('fa-angle-down')){
                icon.classList.remove('fa-angle-down');
                icon.classList.add('fa-angle-up');
            }
            else{
                icon.classList.remove('fa-angle-up');
                icon.classList.add('fa-angle-down');
            }
        };


        });
});