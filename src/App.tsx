import React, { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import SVGList from './components/SVGList';
import { Volunteer, FormData } from './types/Volunteer';
import './App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sobre' | 'contato'>('sobre');
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

  const handleAddVolunteer = (formData: FormData) => {
    const newVolunteer: Volunteer = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      dataCadastro: new Date()
    };
    setVolunteers(prev => [...prev, newVolunteer]);
  };

  return (
    <div className="App">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="main-content">
        {activeTab === 'sobre' ? (
          <AboutUs />
        ) : (
          <div className="contact-section">
            <ContactForm onAddVolunteer={handleAddVolunteer} />
            {volunteers.length > 0 && <SVGList volunteers={volunteers} />}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;