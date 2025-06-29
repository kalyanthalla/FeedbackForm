# 🌟 Feedback Form Project

This is a modern, responsive, and accessible **Feedback Form** built using **HTML**, **CSS**, and **JavaScript**. It provides a smooth user experience with dark mode support, real-time input validation, and a unique submission method that allows users to submit the form by clicking anywhere on the page.

---

## ✨ Features

- 🎨 Clean and minimal design
- 🌙 Light / Dark mode toggle
- ✅ Input validation with clear error messages
- 📱 Responsive design for all screen sizes
- 🔔 Toast notification on successful submission
- 🧼 Auto-reset on submission to clear form fields
- 🖱️ Submit by clicking anywhere (no submit button)

---

## 🚀 Future Enhancement: Send Form Data to Email

This form currently runs entirely on the frontend and **does not** submit data to any backend or email address by default.

However, it can be easily integrated with third-party APIs or services to send form data to your email.

### 🔗 API Integration Suggestions

Below are some free and popular services you can connect with:

### ✅ [FormSubmit](https://formsubmit.co/)
Send form submissions directly to your email without any server code.

```html
<form action="https://formsubmit.co/your_email@example.com" method="POST">
  <input type="text" name="name" required>
  <!-- More inputs -->
</form>
