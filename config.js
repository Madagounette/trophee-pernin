/* =====================================================================
   Trophée Pernin — configuration Firebase
   ---------------------------------------------------------------------
   Projet : trophee-pernin (compte c.pernin9@gmail.com)
   Base de données : Cloud Firestore, emplacement eur3 (Europe)

   Ces clés identifient le projet ; elles ne sont pas des secrets.
   La protection vient des règles de sécurité Firestore et des comptes
   e-mail / mot de passe créés dans Firebase Authentication.
   ===================================================================== */

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyApLyZbttOuFg39mQSOjfWtD_ljCmF7s6M",
  authDomain: "trophee-pernin.firebaseapp.com",
  projectId: "trophee-pernin",
  storageBucket: "trophee-pernin.firebasestorage.app",
  messagingSenderId: "499732566903",
  appId: "1:499732566903:web:5cc8050e26b48d49ab4772",

  /* Où les données sont rangées dans Firestore. À laisser tel quel. */
  collection: "familles",
  document: "pernin",

  /* Le nom affiché en haut de l'application : « Trophée Pernin ».
     Laisse vide sur une installation neuve : l'assistant le demandera. */
  famille: "Pernin"
};
