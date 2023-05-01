import React, { useState } from 'react';
import BotCollection from './BotCollection';
import './YourBotArmy.css';

function YourBotArmy() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    if (!enlistedBots.includes(bot)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (bot) => {
    setEnlistedBots(enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id));
  };

  const removeEnlistedBot = (bot) => {
    setEnlistedBots(enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id));
  };

  return (
    <div className="YourBotArmy">
      <h1>Your Bot Army</h1>
      <div className="enlisted-bots">
        {enlistedBots.map((bot) => (
          <div className="bot-profile" key={bot.id} onClick={() => releaseBot(bot)}>
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
          </div>
        ))}
      </div>
      <BotCollection onEnlist={enlistBot} onRemove={removeEnlistedBot} />
    </div>
  );
}

export default YourBotArmy;
