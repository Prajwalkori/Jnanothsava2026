import React from 'react';
import { eventsData } from '../data/events';
import EventCard from '../components/EventCard';
import './Events.css';

const Events = () => {
  const categories = ['Technical', 'Management', 'Cultural'];

  return (
    <div className="container animate-fade-in" style={{ padding: '6rem 1.5rem' }}>
      <div className="events-header">
        <h1 className="section-title">Fest <span className="text-gradient">Events</span></h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Discover the wide array of events. Compete with the best and leave your mark.
        </p>
      </div>

      {categories.map(category => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="events-grid">
            {eventsData
              .filter(e => e.category === category)
              .map(event => (
                <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
export default Events;
