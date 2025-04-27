lucide.createIcons();

// Animation khi kéo
const sections = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 }
);
sections.forEach((section) => observer.observe(section));

// Scroll lên đầu
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("star").addEventListener("click", function () {
  const star = this.querySelector("i");
  star.classList.toggle("text-yellow-500"); // Chuyển thành sao vàng
  star.classList.toggle("text-gray-500"); // Quay lại màu xám nếu bấm lần nữa
});

// Xử lý sự kiện bấm vào tim
document.getElementById("heart").addEventListener("click", function () {
  const heart = this.querySelector("i");
  heart.classList.toggle("text-red-500"); // Chuyển thành tim đỏ
  heart.classList.toggle("text-gray-500"); // Quay lại màu xám nếu bấm lần nữa
});

window.addEventListener("load", function () {
  const welcomeMessage = document.getElementById("welcomeMessage");
  const funnyImage = document.getElementById("funnyImage");

  // Hiển thị chào mừng và hình ảnh sau khi trang tải
  setTimeout(function () {
    welcomeMessage.classList.add("show");
    funnyImage.classList.add("show");
  }, 500); // Chờ 500ms trước khi hiển thị

  // Ẩn thông báo chào mừng và hình ảnh sau 4s
  setTimeout(function () {
    welcomeMessage.classList.remove("show");
    funnyImage.classList.remove("show");
  }, 4500);
});

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hidden'); // Chuyển đổi giữa ẩn và hiện menu
});

// Hide loader after 2 seconds
// Hide loader after page is loaded
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.style.opacity = 0;  // Fade out the loader
    setTimeout(() => {
      loader.style.display = "none";  // Completely hide the loader
    }, 300); // Delay for the fade-out transition
  }, 2000); // 2 seconds delay before hiding
});
// lien he
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Lấy giá trị các trường form
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Kiểm tra tính hợp lệ
  if (!name || !phone || !email || !message) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  // Nếu hợp lệ, bạn có thể gửi dữ liệu đi (ví dụ: gửi qua email hoặc API)
  console.log("Form đã được gửi đi", { name, phone, email, message });

  // Reset form sau khi gửi thành công
  form.reset();
});

