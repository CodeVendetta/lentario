import { ERROR_MESSAGES } from '@/utils/msg';

export const validateForm = (formData) => {
    let errors = {};

    // Validasi Nama
    if ('nama' in formData) {
        if (!formData.nama?.trim()) {
            errors.nama = ERROR_MESSAGES.required('Nama');
        } else if (!/^[A-Za-z\s]+$/.test(formData.nama)) {
            errors.nama = ERROR_MESSAGES.invalidName;
        }
    }

    // Validasi NIM
    if ('nim' in formData) {
        if (!formData.nim?.trim()) {
            errors.nim = ERROR_MESSAGES.required('NIM');
        } else if (!/^\d{12}$/.test(formData.nim)) {
            errors.nim = ERROR_MESSAGES.invalidNim;
        }
    }

    // Validasi QTY
    if ('qty' in formData) {
        if (formData.qty <= 0) {
            errors.qty = ERROR_MESSAGES.required('Jumlah');
        } else if (isNaN(formData.qty) || Number(formData.qty) <= 0) {
            errors.qty = "Jumlah harus berupa angka positif.";
        }
    }

    // Validasi Email
    if ('email' in formData) {
        if (!formData.email?.trim()) {
            errors.email = ERROR_MESSAGES.required('Email');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = ERROR_MESSAGES.invalidEmail;
        }
    }

    // Validasi Select Option Prodi
    if ('option' in formData) {
        if (!formData.option || formData.option === '') {
            errors.option = ERROR_MESSAGES.required('Prodi');
        }
    }

    // Validasi Select Option Ruangan
    if ('ruang_id' in formData) {
        if (!formData.ruang_id || formData.ruang_id === '') {
            errors.ruang_id = ERROR_MESSAGES.required('Ruangan');
        }
    }

    // Validasi Password
    if ('password' in formData) {
        if (!formData.password?.trim()) {
            errors.password = ERROR_MESSAGES.required('Password');
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
            errors.password = ERROR_MESSAGES.invalidPassword;
        }
    }

    // Validasi Konfirmasi Password
    if ('confirmPassword' in formData) {
        if (!formData.confirmPassword?.trim()) {
            errors.confirmPassword = ERROR_MESSAGES.required('Konfirmasi Password');
        } else if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = ERROR_MESSAGES.passwordMismatch;
        }
    }

    // Validasi Tanggal Mulai
    if ('tgl_mulai' in formData) {
        if (!formData.tgl_mulai) {
            errors.tgl_mulai = ERROR_MESSAGES.startDateRequired;
        }
    }

    // Validasi Tanggal Selesai
    if ('tgl_selesai' in formData) {
        if (!formData.tgl_selesai) {
            errors.tgl_selesai = ERROR_MESSAGES.endDateRequired;
        }
    }

    // Validasi Rentang Tanggal
    if ('tgl_mulai' in formData && 'tgl_selesai' in formData) {
        if (formData.tgl_mulai && formData.tgl_selesai) {
            const start = new Date(formData.tgl_mulai);
            const end = new Date(formData.tgl_selesai);
            if (start > end) {
                errors.dateRange = ERROR_MESSAGES.dateRangeInvalid;
            }
        }
    }

    return errors;
};