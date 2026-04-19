import React from 'react';
import { Calendar, Users, FileText, ExternalLink } from 'lucide-react';
import './MoreInfo.css';

const MoreInfo = () => {
  return (
    <div className="container page-shell page-shell--wide animate-fade-in">
      <div className="events-header">
        <h1 className="section-title">More <span className="text-gradient">Information</span></h1>
      </div>

      <div className="event-content-section">
        <h2><FileText size={24} className="text-gradient" /> Downloads</h2>
        <div className="resource-links">
          <a
            href="/brochure.pdf"
            target="_blank"
            rel="noreferrer"
            className="resource-link-card"
          >
            <div>
              <h3>Fest Brochure</h3>
              <p>Open the official brochure document.</p>
            </div>
            <ExternalLink size={20} />
          </a>
          <a
            href="/schedule.pdf"
            target="_blank"
            rel="noreferrer"
            className="resource-link-card"
          >
            <div>
              <h3>Fest Schedule</h3>
              <p>Open the detailed schedule document.</p>
            </div>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="event-content-section">
        <h2><Calendar size={24} className="text-gradient" /> Full Schedule Table</h2>
        <h3 className="section-subhead">Day 1: May 15, 2026</h3>
        <table className="more-info-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Events</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>08:00 AM - 08:00 PM</td><td>Hackathon</td></tr>
            <tr><td>10:00 AM onwards</td><td>Byte the Problem, DiGi World, Robo Race, Lens Race</td></tr>
            <tr><td>10:30 AM onwards</td><td>Knowledge Quest</td></tr>
            <tr><td>11:00 AM onwards</td><td>Science Exhibition</td></tr>
            <tr><td>11:30 AM onwards</td><td>Prompt to App, CAD War, Mehandi</td></tr>
            <tr><td>02:00 PM onwards</td><td>TradeQuest, Poster Presentation, Social Awareness Reels, Waste to Wear, Mandala Art</td></tr>
            <tr><td>03:00 PM onwards</td><td>Tech Quiz, Debate, Singing Competition</td></tr>
          </tbody>
        </table>

        <h3 className="section-subhead">Day 2: May 16, 2026</h3>
        <table className="more-info-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Events</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>08:30 AM onwards</td><td>Ramp Walk Competition</td></tr>
            <tr><td>10:00 AM onwards</td><td>Project Expo</td></tr>
            <tr><td>10:30 AM onwards</td><td>Dance Competition</td></tr>
            <tr><td>11:30 AM onwards</td><td>Bug Hunt</td></tr>
            <tr><td>01:30 PM onwards</td><td>Standup Comedy Competition</td></tr>
          </tbody>
        </table>
      </div>

      <div className="event-content-section">
        <h2><FileText size={24} className="text-gradient" /> Global Rules</h2>
        <div className="muted-copy">
          <p>1. Students must carry their valid college ID cards at all times.</p>
          <p>2. Decisions made by the judges and event coordinators are final and binding.</p>
          <p>3. Participants must adhere strictly to the time limits mentioned for all events.</p>
          <p>4. JNANOTHSAVA 2026 reserves the right to modify the schedule if necessary.</p>
        </div>
      </div>

      <div className="event-content-section" id="committees">
        <h2><Users size={24} className="text-gradient" /> Committees</h2>

        <div className="committee-grid">
          <div className="committee-card">
            <h3>Technical Committee</h3>
            <div className="committee-member">
              <span><strong>Dr. Gajendran M</strong></span>
              <a href="tel:9036251072" style={{ color: 'var(--color-secondary-light)' }}>9036251072</a>
            </div>
            <div className="committee-member">
              <span><strong>Dr. Sridevi M H</strong></span>
              <a href="tel:9538626926" style={{ color: 'var(--color-secondary-light)' }}>9538626926</a>
            </div>
          </div>

          <div className="committee-card">
            <h3>Cultural Committee</h3>
            <div className="committee-member">
              <span><strong>Dr. Swati K</strong></span>
              <a href="tel:8050604096" style={{ color: 'var(--color-secondary-light)' }}>8050604096</a>
            </div>
          </div>

          <div className="committee-card">
            <h3>Registration Committee</h3>
            <div className="committee-member">
              <span><strong>Dr. Archana K</strong></span>
              <a href="tel:9060867912" style={{ color: 'var(--color-secondary-light)' }}>9060867912</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
