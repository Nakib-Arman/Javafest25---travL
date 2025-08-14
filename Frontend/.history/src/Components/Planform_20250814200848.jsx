import React, { useState } from 'react';
import '../CSS/Planform.css';

export default function Planform() {
  const [meetings, setMeetings] = useState([{ date: '', start: '', end: '', location: '' }]);
  const [freeTimes, setFreeTimes] = useState([{ date: '', start: '', end: '' }]);
  const [preferences, setPreferences] = useState({
    relaxing: false,
    tourist: false,
    cafes: false,
    parks: false
  });

  const handleMeetingChange = (index, field, value) => {
    const updated = [...meetings];
    updated[index][field] = value;
    setMeetings(updated);
  };

  const handleFreeTimeChange = (index, field, value) => {
    const updated = [...freeTimes];
    updated[index][field] = value;
    setFreeTimes(updated);
  };

  const addMeeting = () => setMeetings([...meetings, { date: '', start: '', end: '', location: '' }]);
  const addFreeTime = () => setFreeTimes([...freeTimes, { date: '', start: '', end: '' }]);

  const handlePreferenceChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { meetings, freeTimes, preferences };
    console.log('Submitted Schedule:', formData);
  };

  return (
    <div className=''
    <div className="schedule-wrapper">
      {/* LEFT COLUMN */}
      <div className="schedule-left">
        <img
          src="https://costar.brightspotcdn.com/dims4/default/ff5984b/2147483647/strip/true/crop/2100x1400+0+0/resize/2100x1400!/quality/100/?url=http%3A%2F%2Fcostar-brightspot.s3.us-east-1.amazonaws.com%2F5d%2Fa3%2F00d0da6c4143b3cfa9dd2f45a276%2F20220907-businesstravel-roundup.jpg"
          alt="Business Travel"
        />
        <h1>Make your plan for your next business trip now</h1>
      </div>

      {/* RIGHT COLUMN */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>Meetings</h3>
          {meetings.map((meeting, idx) => (
            <div className="meeting-row" key={idx}>
              <input type="date" value={meeting.date} onChange={(e) => handleMeetingChange(idx, 'date', e.target.value)} required />
              <input type="time" value={meeting.start} onChange={(e) => handleMeetingChange(idx, 'start', e.target.value)} required />
              <input type="time" value={meeting.end} onChange={(e) => handleMeetingChange(idx, 'end', e.target.value)} required />
              <input type="text" placeholder="Location / City" value={meeting.location} onChange={(e) => handleMeetingChange(idx, 'location', e.target.value)} required />
            </div>
          ))}
          <button type="button" onClick={addMeeting}>+ Add Meeting</button>

          <h3>Free Time Slots</h3>
          {freeTimes.map((slot, idx) => (
            <div className="free-row" key={idx}>
              <input type="date" value={slot.date} onChange={(e) => handleFreeTimeChange(idx, 'date', e.target.value)} required />
              <input type="time" value={slot.start} onChange={(e) => handleFreeTimeChange(idx, 'start', e.target.value)} required />
              <input type="time" value={slot.end} onChange={(e) => handleFreeTimeChange(idx, 'end', e.target.value)} required />
            </div>
          ))}
          <button type="button" onClick={addFreeTime}>+ Add Free Time Slot</button>

          <h3>Preferences</h3>
          <label>
            <input type="checkbox" name="relaxing" checked={preferences.relaxing} onChange={handlePreferenceChange} /> Relaxing Spots
          </label>
          <label>
            <input type="checkbox" name="tourist" checked={preferences.tourist} onChange={handlePreferenceChange} /> Tourist Spots
          </label>
          <label>
            <input type="checkbox" name="cafes" checked={preferences.cafes} onChange={handlePreferenceChange} /> Cafes / Restaurants
          </label>
          <label>
            <input type="checkbox" name="parks" checked={preferences.parks} onChange={handlePreferenceChange} /> Parks / Nature
          </label>

          <button type="submit">Submit Schedule</button>
        </form>
      </div>
    </div>
  );
}
