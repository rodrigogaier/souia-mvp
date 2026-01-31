(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const copyBtn = document.getElementById("copyBtn");
  const copyStatus = document.getElementById("copyStatus");
  const phone = "+55 48 98806-7700";

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(phone);
      if (copyStatus) copyStatus.textContent = "Número copiado ✅";
    } catch (e) {
      if (copyStatus) copyStatus.textContent = "Não consegui copiar automaticamente. Copie manualmente: " + phone;
    }
  }

  if (copyBtn) copyBtn.addEventListener("click", copyPhone);
})();

