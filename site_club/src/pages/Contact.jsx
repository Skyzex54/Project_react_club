import Formulaire from "../Components/formulaire_contact";

function Contact() {
  return (
    
    <div className="min-h-screen bg-gray-50 py-16 px-4">
 
      {/* titre o lteht */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">Contact Us</h1>
        <p className="text-slate-500 text-sm leading-relaxed">
          Have a question, suggestion, or just want to say hello? <br />
          We'd love to hear from you!
        </p>
      </div>
 
      {/* formulaire */}
      <Formulaire />
 
    </div>
  );
}
 
export default Contact;
