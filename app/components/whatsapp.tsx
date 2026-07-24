// ...existing code...
'use client';

export default function WhatsAppButton() {
  const phone = '946406605';
  const message = encodeURIComponent('Olá! Gostaria de saber mais.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      title="Abrir WhatsApp"
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        zIndex: 9999,
        textDecoration: 'none',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.75 11.75 0 0 0 12.06 0C5.48 0 .15 5.33.15 11.91c0 2.1.55 4.14 1.59 5.94L0 24l6.35-1.66a11.9 11.9 0 0 0 5.7 1.37h.01c6.58 0 11.92-5.34 11.92-11.91 0-3.18-1.24-6.16-3.46-8.32ZM12.06 21.7c-1.83 0-3.63-.49-5.2-1.42l-.37-.22-3.77.99 1-3.67-.24-.38a9.84 9.84 0 0 1-1.52-5.3c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.98 2.89a9.79 9.79 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.52-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.85 1.2 3.05.15.2 2.07 3.16 5.01 4.43.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.34Z" />
      </svg>
    </a>
  );
}