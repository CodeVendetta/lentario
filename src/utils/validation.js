import { ERROR_MESSAGES } from '@/utils/msg';

export const validateForm = (formData) => {
    let errors = {};

    // Validasi Nama: hanya huruf dan karakter, tanpa angka
    if (!formData.nama.trim()) {
        errors.nama = ERROR_MESSAGES.required('Nama');
    } else if (!/^[A-Za-z\s]+$/.test(formData.nama)) {
        errors.nama = ERROR_MESSAGES.invalidName;
    }

    // Validasi NIM: harus 12 digit angka
    if (!formData.nim.trim()) {
        errors.nim = ERROR_MESSAGES.required('NIM');
    } else if (!/^\d{12}$/.test(formData.nim)) {
        errors.nim = ERROR_MESSAGES.invalidNim;
    }

    // Validasi Email: harus format email
    if (!formData.email.trim()) {
        errors.email = ERROR_MESSAGES.required('Email');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = ERROR_MESSAGES.invalidEmail;
    }

    // Validasi Select Option: tidak boleh kosong atau tidak dipilih
    if (!formData.option || formData.option === '') {
        errors.option = ERROR_MESSAGES.required('Prodi');
    }

    // Validasi Password: minimal 8 karakter, harus ada huruf besar, huruf kecil, angka, dan karakter khusus
    if (!formData.password.trim()) {
        errors.password = ERROR_MESSAGES.required('Password');
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
        errors.password = ERROR_MESSAGES.invalidPassword;
    }

    // Validasi Konfirmasi Password: harus sama dengan password
    if (!formData.confirmPassword.trim()) {
        errors.confirmPassword = ERROR_MESSAGES.required('Konfirmasi Password');
    } else if (formData.confirmPassword !== formData.password) {
        errors.confirmPassword = ERROR_MESSAGES.passwordMismatch;
    }

    return errors;
};
