import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { widgets } from './widgets';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleWidgetClick = (widget) => {
    if (widget.url) {
      window.open(widget.url, '_blank', 'noopener,noreferrer');
    } else {
      console.log(`Widget ${widget.id} clicked but no URL provided`);
    }
  };

  const filteredWidgets = widgets.filter(widget => 
    widget.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    widget.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    widget.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <BrowserView>
        <div className="desktop-container">
          <h1 className="app-title">For Swift Students</h1>
          <p className="description-text">Here are Swift students communities from around the world.</p>
          <a 
            href="https://github.com/swiftstudents/swiftstudents?tab=readme-ov-file#-contributing"
            target="_blank" 
            rel="noopener noreferrer"
            className="add-community-link"
          >
            Click here to add a new community website
          </a>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search communities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="widgets-grid">
            {filteredWidgets.map((widget) => (
              <button
                key={widget.id}
                className="widget-button"
                onClick={() => handleWidgetClick(widget)}
              >
                <div className="widget-emoji">{widget.emoji}</div>
                <div className="widget-label">{widget.label}</div>
                <div className="widget-country">{widget.country}</div>
              </button>
            ))}
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile-container">
          <h1 className="app-title">For Swift Students</h1>
          <p className="description-text">Here are Swift students communities from around the world.</p>
          <a 
            href="https://github.com/swiftstudents/swiftstudents" 
            target="_blank" 
            rel="noopener noreferrer"
            className="add-community-link"
          >
            Click here to add a new community website
          </a>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search communities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="widgets-grid mobile">
            {filteredWidgets.map((widget) => (
              <button
                key={widget.id}
                className="widget-button mobile"
                onClick={() => handleWidgetClick(widget)}
              >
                <div className="widget-emoji">{widget.emoji}</div>
                <div className="widget-content">
                  <div className="widget-label">{widget.label}</div>
                  <div className="widget-country">{widget.country}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </MobileView>
    </div>
  );
}

export default App;
