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
//   {
//     text: "In which of the following cases will Overflow be applied?",
//     image: "images/question-image-1.png",
//     answers: [
//       { text: "A Digimon with an ACE card as the top card being placed under another Digimon/Tamer on the field.", correct: false, explanation: "Moving from/to under another card on the field does not cause Overflow, this is because Overflow states 'the field or under a card' as 2 safe areas for Overflow." },
//       { text: "A Digimon in the breeding area with an ACE digivolution card being moved to the battle area.", correct: false, explanation: "The ACE card did not move from being under a card to anywhere else, so no Overflow." },
//       { text: "A Digimon with an ACE card as the top card being De-digivolved.", correct: true, explanation: "De-digivolving a Digimon causes the top card to be trashed, so the ACE card moves from the battle area to the trash, causing Overflow." },
//       { text: "A Digimon with an ACE card as the top card Digivolving into a non-ACE card.", correct: false, explanation: "When Digivolving, the ACE card goes directly from being the top card on the field, to being under a card on the field, so Overflow is applied." },
//     ],
//   },
  {
    text: "Your Digimon was De-digivolved resulting in this stack. What happens next?",
    image: "images/question-image-2.png",
    answers: [
      { text: "The Digimon will be placed in the trash, this doesn't count as deletion or being removed from the battle area.", correct: true, explanation: "According to the rules, Digimon with no DP value are placed in the trash, this does not count as being removed from the battle area." },
      { text: "The Digimon will be deleted by the rules. The inheritable effect cannot be activated.", correct: false, explanation: "Digimon with no DP value are placed in the trash, not deleted." },
      { text: "The Digimon will be deleted by the rules. The inheritable effect can be activated to try to save it but it will still be deleted.", correct: false, explanation: "The inheritable effect cannot be activated because the Digimon is not considered as removed from the battle area." },
      { text: "The Digimon will be deleted by the rules. The inheritable effect can be activated and the Digimon will survive the effect and remain in the battle area.", correct: false, explanation: "Digimon with no DP value cannot exist in the battle area." },
    ],
  },
];
