import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container page-shell page-shell--narrow animate-fade-in">
      <h1 className="section-title">Get In <span className="text-gradient">Touch</span></h1>
      
      <div className="info-grid">
        
        <div className="content-panel content-panel--padded" style={{ textAlign: 'center' }}>
          <MapPin size={40} className="text-gradient" style={{ margin: '0 auto 1rem' }} />
          <h3>Address</h3>
          <p className="muted-copy" style={{ marginTop: '0.5rem' }}>
            Sharnbasva University,<br />
            Kalaburagi
          </p>
        </div>

        <div className="content-panel content-panel--padded" style={{ textAlign: 'center' }}>
          <Phone size={40} className="text-gradient" style={{ margin: '0 auto 1rem' }} />
          <h3>Phone</h3>
          <p className="muted-copy" style={{ marginTop: '0.5rem' }}>
            +91 98765 43210<br />
            +91 91234 56789
          </p>
        </div>

      </div>
    </div>
  );
};
export default Contact;
