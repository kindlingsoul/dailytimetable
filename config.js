/*
  config.js — your private Firebase keys, kept separate from
  daily-timetable.html on purpose so they're never mixed into the
  main app file.

  HOW TO FILL THIS IN
  --------------------
  1. In your Firebase project: Project settings (gear icon) >
     General tab > "Your apps" > the web app you registered >
     you'll see a firebaseConfig object there.
  2. Copy each value into the matching field below, replacing the
     placeholder text (keep the quote marks).
  3. Save this file in the SAME folder as daily-timetable.html —
     the app loads it automatically via <script src="config.js">.

  KEEPING IT PRIVATE
  -------------------
  If you're uploading this project to GitHub and the repo is
  public, add a line that just says "config.js" to a .gitignore
  file in the same folder (a starter one is included) — that
  keeps this file out of the repo entirely. If your repo is
  private, this step isn't necessary.

  Note: these values aren't a password — Firebase's own docs say
  it's normal for them to appear in client-side code. The actual
  privacy of your data comes from the Firestore security rule set
  up in daily-timetable.html's setup instructions (only your own
  signed-in account can read or write your data). Separating this
  file is just about keeping things tidy, not a security fix.
*/

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDNbG4sF2BsM_f9vPE_gu4qbO5hFiQaQe8",
  authDomain: "dailytimetable-2e439.firebaseapp.com",
  projectId: "dailytimetable-2e439",
  storageBucket: "dailytimetable-2e439.firebasestorage.app",
  messagingSenderId: "1074403387756",
  appId: "1:1074403387756:web:2d755d64b68aed96a4ab49"
};
