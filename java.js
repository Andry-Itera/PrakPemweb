// mengambil element input sesuai dengan ID untuk digunakan dalam proses validasi
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// mendapatkan element feedback untuk menampilkan pesan apabila input tidak sesuai
const usernameFeedback = document.getElementById('usernameFeedback');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');
const confirmPasswordFeedback = document.getElementById('confirmPasswordFeedback');

// tambahkan event listener untuk fungsi validasi real time saat user mengetikan inputan
username.addEventListener('keyup', validateUsername);
email.addEventListener('change', validateEmail);
password.addEventListener('keyup', validatePassword);
confirmPassword.addEventListener('input', validateConfirmPassword);

// function untuk validasi pada username
function validateUsername() {
    const usernameValue = username.value;
    const usernamePattern = /^[a-zA-Z0-9]{5,20}$/;  // ketentuan username : 5-20 karakter, alfanumerik
    
    if (!usernamePattern.test(usernameValue)) {  // kondisi input apakah sesuai dengan ketentuannya
        usernameFeedback.innerText = 'Username terdiri dari 5-20 karakter dan alfanumerik.';
        usernameFeedback.style.display = 'block'; // pesan tampil jika input tidak valid
        return false;
    } else {
        usernameFeedback.style.display = 'none'; // pesan disembunyikan jika sesuai/valid
        return true;
    }
}

// function untuk validasi format email
function validateEmail() {
    const emailValue = email.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ketentuan email harus memakai @ serta . 
    
    if (!emailPattern.test(emailValue)) {
        emailFeedback.innerText = 'Masukkan format email yang valid.';
        emailFeedback.style.display = 'block';
        return false;
    } else {
        emailFeedback.style.display = 'none';
        return true;
    }
}

// function untuk validasi password
function validatePassword() {
    const passwordValue = password.value;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;  // ketentuan password : min 8 karakter, mengandung huruf dan angka
    
    if (!passwordPattern.test(passwordValue)) {
        passwordFeedback.innerText = 'Password berisi minimal 8 karakter, mencakup huruf dan angka.';
        passwordFeedback.style.display = 'block';
        return false;
    } else {
        passwordFeedback.style.display = 'none';
        return true;
    }
}

// function untuk validasi konfirmasi password sama dengan input password
function validateConfirmPassword() {
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;
    
    if (confirmPasswordValue !== passwordValue) {
        confirmPasswordFeedback.innerText = 'Konfirmasi password harus sama dengan password sebelumnya.';
        confirmPasswordFeedback.style.display = 'block';
        return false;
    } else {
        confirmPasswordFeedback.style.display = 'none';
        return true;
    }
}

// function untuk validasi saat submit form dan menyimpan hasil inputan 
function validateForm() {
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    // kondisi percabangan untuk memastikan semua inputan valid
    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        alert('Terima Kasih Pendaftaran Berhasil!');
        return true;
    } else {
        alert('Mohon periksa Kembali input Anda.');
        return false;
    }
}
