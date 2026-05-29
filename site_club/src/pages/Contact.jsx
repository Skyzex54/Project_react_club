import Formulaire from "../Components/formulaire_contact";
// La page Contact complète
function Contact() {
  return (
    // Fond blanc/gris clair comme dans la photo
    <div className="min-h-screen bg-slate-50 py-16 px-4">
 
      {/* Titre et sous-titre en haut au centre */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">Contact Us</h1>
        <p className="text-slate-500 text-sm leading-relaxed">
          Have a question, suggestion, or just want to say hello? <br />
          We'd love to hear from you!
        </p>
      </div>
 
      {/* Le formulaire — centré au milieu de la page */}
      <Formulaire />
 
    </div>
  );
}
 
export default Contact;
