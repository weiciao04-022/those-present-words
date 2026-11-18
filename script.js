const annotationButtons = document.querySelectorAll(".annotation-toggle");

annotationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // 讀取按鈕對應的註解 id。
    const annotationId = button.getAttribute("aria-controls");
    const annotation = document.getElementById(annotationId);

    // 如果找不到對應註解，就不繼續執行。
    if (!annotation) {
      return;
    }

    // 依照目前狀態決定要展開或收起。
    const isOpen = button.getAttribute("aria-expanded") === "true";
    const nextState = !isOpen;

    // 更新 aria-expanded，讓輔助工具知道目前狀態。
    button.setAttribute("aria-expanded", nextState);

    // 切換 class，讓 CSS 控制註解與 icon 的視覺變化。
    button.classList.toggle("is-open", nextState);
    annotation.classList.toggle("is-open", nextState);
  });
});
