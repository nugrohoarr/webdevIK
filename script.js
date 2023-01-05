// Collapsibles
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  // ketika class collapsible di click, jalankan:
  coll[i].addEventListener("click", function() {
    removeCollapseClass();
    // tambahkan class active didalam tag class collapsible
    this.classList.toggle("active");

    // tambahkan style display didalam tag element selanjutnya
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// fungsi untuk menghilangkan collapse sebelumnya
function removeCollapseClass() {
  for (let i = 0; i < coll.length; i++) {
    coll[i].classList.remove("active");
    coll[i].nextElementSibling.style.display = "none";
  }
}