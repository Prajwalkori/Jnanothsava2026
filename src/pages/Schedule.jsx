import React from 'react';
import './Schedule.css';

const Schedule = () => {
  const scheduleData = {
    day1: [
      { time: '08:30 AM', event: 'Registration & Check-in', venue: 'Main Block' },
      { time: '09:30 AM', event: 'Inauguration Ceremony', venue: 'Auditorium' },
      { time: '11:00 AM', event: 'Knowledge Quest Prelims', venue: 'Seminar Hall A' },
      { time: '12:00 PM', event: 'Lunch Break', venue: 'Food Court' },
      { time: '02:00 PM', event: 'Robo Race', venue: 'Open Ground' },
      { time: '03:00 PM', event: 'Singing Competition', venue: 'Auditorium' },
    ],
    day2: [
      { time: '09:00 AM', event: 'Hackathon Starts', venue: 'CSE Lab 1 & 2' },
      { time: '10:00 AM', event: 'Byte the Problem & Trade Quest', venue: 'Lab 3 & Computer Center' },
      { time: '01:00 PM', event: 'Lunch Break', venue: 'Food Court' },
      { time: '04:00 PM', event: 'Dance Competition', venue: 'Main Stage' },
      { time: '07:30 PM', event: 'Valedictory & Prize Distribution', venue: 'Main Stage' },
    ]
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '6rem 1.5rem', maxWidth: '800px' }}>
      <h1 className="section-title">Fest <span className="text-gradient">Schedule</span></h1>

      <div className="schedule-section">
        <h2 className="schedule-day-title text-gradient">Day 1: May 15, 2026</h2>
        <div className="timeline">
          {scheduleData.day1.map((item, idx) => (
            <div key={idx} className="timeline-item glass-panel">
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-content">
                <h3>{item.event}</h3>
                <p>{item.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="schedule-section" style={{ marginTop: '4rem' }}>
        <h2 className="schedule-day-title text-gradient">Day 2: May 16, 2026</h2>
        <div className="timeline">
          {scheduleData.day2.map((item, idx) => (
            <div key={idx} className="timeline-item glass-panel">
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-content">
                <h3>{item.event}</h3>
                <p>{item.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Schedule;
