import React from 'react';

function ProgramsSection() {
  return (
    <section id="programs">
      <h2>Our Programs</h2>
      <div className="programs-container">
        <div className="program">
          <h3>Community Support</h3>
          <p>Providing essential resources, like food and shelter, to help individuals and families facing difficult circumstances.</p>
        </div>
        <div className="program">
          <h3>Health & Wellness</h3>
          <p>Offering wellness workshops, medical assistance, and mental health support for underserved communities.</p>
        </div>
        <div className="program">
          <h3>Education & Empowerment</h3>
          <p>Empowering individuals through educational programs, skill-building, and career guidance to foster self-sufficiency.</p>
        </div>
        {/* Donation Section for M-Pesa */}
        <div className="program donation">
          <h3>Support Our Cause</h3>
          <p>Your donation helps us continue our mission of providing resources and support to communities in need. Join us in making a difference by donating via M-Pesa.</p>
          <p><strong>M-Pesa Paybill Number:</strong> 123456</p>
          <p><strong>Account Number:</strong> 0123456789</p>
          <button onClick={() => window.location.href = 'tel:+254123456789'}>Donate via M-Pesa</button>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
