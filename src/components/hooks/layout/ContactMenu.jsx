import {
  ContactRound,
  Mail,
  Facebook,
  Twitter,
  Send,
  MessageSquare,
  Phone,
} from "lucide-react";

export default function ContactMenu({ isOpen, onClick }) {
  return (
    <div className="relative group">
      <div
        className="flex items-center cursor-pointer active:scale-95 transition-all w-10 h-10"
        onClick={onClick}
      >
        <div
          className={`p-5 py-10 ${
            isOpen ? "text-background bg-primaryLg" : "text-primary"
          }`}
        >
          <ContactRound />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-[40px] left-0 bg-primaryLg shadow-lg rounded-lg py-6 px-8 w-[250px] z-10 overflow-hidden animate-slide-up">
          <div className="flex flex-col gap-3">
            <a
              href="mailto:contact@mandiri.co.id"
              className="flex items-center text-left text-background text-[14px] hover:opacity-80"
            >
              <Mail className="mr-2" size={16} /> Email
            </a>

            <a
              href="#"
              className="flex items-center text-left text-background text-[14px] hover:opacity-80"
            >
              <Facebook className="mr-2" size={16} /> Facebook
            </a>

            <a
              href="#"
              className="flex items-center text-left text-background text-[14px] hover:opacity-80"
            >
              <Twitter className="mr-2" size={16} /> Twitter
            </a>

            <a
              href="#"
              className="flex items-center text-left text-background text-[14px] hover:opacity-80"
            >
              <Send className="mr-2" size={16} /> Telegram
            </a>

            <a
              href="#"
              className="flex items-center text-left text-background text-[14px] hover:opacity-80"
            >
              <MessageSquare className="mr-2" size={16} /> Hubungi Kami
            </a>

            <a
              href="tel:14000"
              className="flex items-center text-left text-background text-[14px] hover:opacity-80"
            >
              <Phone className="mr-2" size={16} /> Mandiri Call 14000
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
