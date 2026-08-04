// ============================================================
// QUESTIONS DATA
// ------------------------------------------------------------
// Edit this file to add/remove/change questions. No other file
// needs to change.
//
// Each question looks like this:
//
// {
//   text: "The question shown at the top",
//   image: "images/your-file.png",   // optional, leave "" if no image
//   answers: [
//     { text: "Answer A", correct: false, explanation: "Why this is wrong." },
//     { text: "Answer B", correct: true,  explanation: "Why this is correct." },
//     { text: "Answer C", correct: false, explanation: "Why this is wrong." },
//     { text: "Answer D", correct: false, explanation: "Why this is wrong." },
//   ]
// }
//
// - You can have 2, 3 or 4 answers per question.
// - Exactly one answer per question should have correct: true.
// - To swap an image, just drop the new file into the "images"
//   folder and update the "image" path here.
// ============================================================

const QUESTIONS = [
  {
    text: "In which of the following cases will Overflow be applied?",
    image: "images/question-image-1.png",
    answers: [
      { text: "A Digimon with an ACE card as the top card being placed under another Digimon/Tamer on the field.", correct: false, explanation: "Moving from/to under another card on the field does not cause Overflow, this is because Overflow states 'the field or under a card' as 2 safe areas for Overflow." },
      { text: "A Digimon in the breeding area with an ACE digivolution card being moved to the battle area.", correct: false, explanation: "The ACE card did not move from being under a card to anywhere else, so no Overflow." },
      { text: "A Digimon with an ACE card as the top card being De-digivolved.", correct: true, explanation: "De-digivolving a Digimon causes the top card to be trashed, so the ACE card moves from the battle area to the trash, causing Overflow." },
      { text: "A Digimon with an ACE card as the top card Digivolving into a non-ACE card.", correct: false, explanation: "When Digivolving, the ACE card goes directly from being the top card on the field, to being under a card on the field, so Overflow is applied." },
    ],
  },
  {
    text: "What happens when two creatures with equal power battle?",
    image: "images/question2.png",
    answers: [
      { text: "Both survive", correct: false, explanation: "Equal power still means each deals enough damage to destroy the other." },
      { text: "Both are destroyed", correct: true, explanation: "Correct! When power is equal, both creatures deal lethal damage to each other and are destroyed." },
      { text: "The attacker wins", correct: false, explanation: "There's no attacker bonus in a standard battle." },
      { text: "The defender wins", correct: false, explanation: "There's no defender bonus in a standard battle." },
    ],
  },
  {
    text: "Can you play a card during your opponent's turn?",
    image: "images/question3.png",
    answers: [
      { text: "Never", correct: false, explanation: "Some cards are specifically designed to be played on your opponent's turn." },
      { text: "Only instant/quick cards", correct: true, explanation: "Correct! Cards marked as instant or quick-play can be used any time, including your opponent's turn." },
      { text: "Only if you're losing", correct: false, explanation: "Timing isn't based on the game state, it's based on the card type." },
      { text: "Only during their draw step", correct: false, explanation: "Instant-speed cards can be played at almost any point, not just during the draw step." },
    ],
  },
];
