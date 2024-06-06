document.addEventListener('DOMContentLoaded', function () {
    // Kiểm tra xem đã có thông tin người dùng được lưu trữ trong localStorage chưa
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        // Nếu có, lấy thông tin người dùng và chuyển đổi thành đối tượng JavaScript
        const userData = JSON.parse(storedUserData);
        
        // Lấy tên người dùng từ dữ liệu người dùng
        const loggedInUsername = userData.username;
        
        // Tìm thẻ <a> trong menu dropdown và thay đổi nội dung thành tên người dùng đăng nhập
        const dropdownToggle = document.querySelector('.nav-item.dropdown .tentaikhoan');
        if (dropdownToggle) {
            dropdownToggle.textContent = loggedInUsername;
            dropdownToggle.classList.remove('tentaikhoan');
            dropdownToggle.classList.add('nav-link', 'dropdown-toggle');
        }
    }
});
