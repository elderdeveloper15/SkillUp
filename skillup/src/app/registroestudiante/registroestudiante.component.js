document.addEventListener("DOMContentLoaded", function() {
    const profilePictureInput = document.getElementById('profile-picture');
    const profilePictureImg = document.getElementById('profile-picture-img');
  
    profilePictureInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.addEventListener('load', function() {
                profilePictureImg.src = reader.result;
            });
            reader.readAsDataURL(file);
        }
    });
  });
