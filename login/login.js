document.addEventListener('DOMContentLoaded', () => {
  renderNav('login');
  renderFooter();

  const form    = document.getElementById('loginForm');
  const btn     = document.getElementById('loginBtn');
  const idInput = document.getElementById('identifier');
  const pwInput = document.getElementById('password');

  // ─── Validation helpers ───
  function setError(fieldId, msg) {
    const el = document.getElementById('err-' + fieldId);
    const input = document.getElementById(fieldId);
    if (el) el.textContent = msg;
    if (input) input.classList.toggle('input-error', !!msg);
  }

  function validateForm() {
    let valid = true;

    const id = idInput.value.trim();
    if (!id) {
      setError('identifier', 'Email or phone number is required.');
      valid = false;
    } else if (!/^(\+?\d{9,15}|[^\s@]+@[^\s@]+\.[^\s@]+)$/.test(id)) {
      setError('identifier', 'Enter a valid email or phone number.');
      valid = false;
    } else {
      setError('identifier', '');
    }

    const pw = pwInput.value;
    if (!pw) {
      setError('password', 'Password is required.');
      valid = false;
    } else if (pw.length < 6) {
      setError('password', 'Password must be at least 6 characters.');
      valid = false;
    } else {
      setError('password', '');
    }

    return valid;
  }

  // ─── Submit ───
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate async login
    btn.classList.add('loading');
    btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Signing in…';

    setTimeout(() => {
      btn.classList.remove('loading');
      btn.innerHTML = '<i class="fa fa-sign-in-alt"></i> Sign In';
      // Redirect to dashboard on success
      window.location.href = '../dashboard/index.html';
    }, 1200);
  });

  // ─── Clear errors on type ───
  idInput.addEventListener('input', () => setError('identifier', ''));
  pwInput.addEventListener('input', () => setError('password', ''));
});

// ─── Password visibility toggle ───
function togglePassword() {
  const input   = document.getElementById('password');
  const icon    = document.getElementById('eyeIcon');
  const isHidden = input.type === 'password';
  input.type    = isHidden ? 'text' : 'password';
  icon.className = isHidden ? 'fa fa-eye-slash' : 'fa fa-eye';
}
