/* ═══════════════════════════════════════════════════════════
   NASMS – loans/loans.js
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderNav('loans');
  renderFooter();
});

let activeLoanName = '';

function openApplyModal(name) {
  activeLoanName = name;
  document.getElementById('modalTitle').textContent = 'Apply: ' + name;
  document.getElementById('applyModal').classList.add('open');
}
function closeApplyModal() {
  document.getElementById('applyModal').classList.remove('open');
}
function submitLoan() {
  const amount = document.getElementById('loanAmount').value;
  if (!amount || isNaN(amount) || Number(amount) < 1000) {
    alert('Please enter a valid loan amount.');
    return;
  }
  closeApplyModal();
  alert(`✅ Your application for "${activeLoanName}" (KES ${Number(amount).toLocaleString()}) has been submitted. You will receive feedback within 7–14 working days.`);
}

// Close modal on overlay click
document.getElementById('applyModal').addEventListener('click', function(e) {
  if (e.target === this) closeApplyModal();
});
