import React, { useState, useEffect } from 'react';
import './BotCollection.css';

function BotCollection({ onEnlist }) {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    async function fetchBots() {
      const response = await fetch("http://localhost:5000/bots");
      const data = await response.json();
      setBots(data);
    }
    fetchBots();
  }, []);

  const enlist = (bot) => {
    onEnlist(bot);
    setEnlistedBots([...enlistedBots, bot.id]);
  };

  const discharge = async (botId) => {
    const response = await fetch(`http://localhost:5000/bots/${botId}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      setBots(bots.filter(bot => bot.id !== botId));
    }
  };

  const isEnlisted = (bot) => {
    return enlistedBots.includes(bot.id);
  };

  return (
    <div className="BotCollection">
      <h1>Bots Collection</h1>
      <div className="bot-collection">
        {bots.map((bot) => (
          <div className="bot-profile" key={bot.id}>
            <img
              src={bot.avatar_url}
              className="bot-avatar"
              alt={bot.name}
            />
            <h2 className="bot-name">{bot.name}</h2>
            <p className="bot-catchphrase">{bot.catchphrase}</p>
            <div className="bot-stats">
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Bot Class: {bot.bot_class}</p>
            </div>
            <button disabled={isEnlisted(bot)} onClick={() => enlist(bot)}>
              {isEnlisted(bot) ? "Enlisted" : "Enlist"}
            </button>
            <button onClick={() => discharge(bot.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
