export const ERROR_MESSAGES = {
    required: (field) => `${field} tidak boleh kosong.`,
    invalidName: "Nama hanya boleh berisi huruf dan spasi.",
    invalidNim: "NIM harus berisi 12 digit angka.",
    invalidEmail: "Format email tidak valid.",
    invalidPassword: "Password minimal 8 karakter dengan kombinasi huruf besar, huruf kecil, angka, dan karakter khusus.",
    passwordMismatch: "Konfirmasi password tidak sesuai dengan password.",
    startDateRequired: "Tanggal mulai wajib diisi.",
    endDateRequired: "Tanggal selesai wajib diisi.",
    dateRangeInvalid: "Tanggal mulai harus sebelum tanggal selesai."
};
