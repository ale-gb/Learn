// Shared retrieval-practice quiz widget for the QFT teaching workspace.
// Two quiz types, driven entirely by data attributes so lessons stay markup-only:
//
// Free recall:
//   <div class="quiz" data-answer="pipe|separated|accepted answers">
//     <p class="quiz-prompt">...</p>
//     <input class="quiz-input" type="text">
//     <button class="quiz-check">Check</button>
//     <p class="quiz-feedback"></p>
//   </div>
//
// Multiple choice (give every option the same word/character count - no tells):
//   <div class="quiz quiz-mc" data-answer="b">
//     <p class="quiz-prompt">...</p>
//     <div class="quiz-options">
//       <button class="quiz-option" data-choice="a">...</button>
//       <button class="quiz-option" data-choice="b">...</button>
//     </div>
//     <p class="quiz-feedback"></p>
//   </div>

(function () {
  function normalize(s) {
    return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.,!?]$/, "");
  }

  function setFeedback(el, ok, msg) {
    el.textContent = msg;
    el.style.color = ok ? "var(--good)" : "var(--bad)";
  }

  function initFreeRecall(quiz) {
    const input = quiz.querySelector(".quiz-input");
    const button = quiz.querySelector(".quiz-check");
    const feedback = quiz.querySelector(".quiz-feedback");
    const accepted = quiz.dataset.answer.split("|").map(normalize);
    let attempts = 0;

    function check() {
      attempts += 1;
      const given = normalize(input.value);
      if (accepted.includes(given)) {
        setFeedback(feedback, true, "Correct.");
      } else if (attempts >= 2) {
        setFeedback(feedback, false, "Answer: " + quiz.dataset.answer.split("|")[0]);
      } else {
        setFeedback(feedback, false, "Not quite — try once more.");
      }
    }

    button.addEventListener("click", check);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); check(); }
    });
  }

  function initMultipleChoice(quiz) {
    const options = quiz.querySelectorAll(".quiz-option");
    const feedback = quiz.querySelector(".quiz-feedback");
    const correct = quiz.dataset.answer;
    let answered = false;

    options.forEach((opt) => {
      opt.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        options.forEach((o) => (o.disabled = true));
        if (opt.dataset.choice === correct) {
          opt.style.borderColor = "var(--good)";
          setFeedback(feedback, true, "Correct.");
        } else {
          opt.style.borderColor = "var(--bad)";
          quiz.querySelector('[data-choice="' + correct + '"]').style.borderColor = "var(--good)";
          setFeedback(feedback, false, "Not quite — the correct option is now highlighted.");
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".quiz").forEach((quiz) => {
      if (quiz.classList.contains("quiz-mc")) {
        initMultipleChoice(quiz);
      } else {
        initFreeRecall(quiz);
      }
    });
  });
})();
