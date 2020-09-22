import React, { useState } from 'react';
import './App.css';
import DownloadFile from './DownloadFile';

function App() {
  const [memeChoice, setMemeChoice] = useState('tenguy');
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');

  function handleSubmitTop(e) {
    setTop(e.currentTarget.value);
  }

  function handleSubmitBottom(e) {
    setBottom(e.currentTarget.value);
  }

  fetch('https://api.memegen.link/images/')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log('ERROR'));

  const memeNames = [
    'tenguy',
    'afraid',
    'apcr',
    'older',
    'aag',
    'atis',
    'tried',
    'biw',
    'stew',
    'blb',
    'bihw',
    'kermit',
    'bd',
    'ch',
    'cbg',
    'wonka',
    'cb',
    'gandalf',
    'keanu',
    'cryingfloor',
    'dsm',
    'disastergirl',
    'live',
    'ants',
    'doge',
    'trump',
    'drake',
    'ermg',
    'facepalm',
    'feelsgood',
    'firsttry',
    'fwp',
    'fa',
    'fbf',
    'fmr',
    'fry',
    'ggg',
    'grumpycat',
    'harold',
    'hipster',
    'icanhas',
    'crazypills',
    'mw',
    'noidea',
    'regret',
    'boat',
    'hagrid',
    'sohappy',
    'captain',
    'bender',
    'inigo',
    'iw',
    'ackbar',
    'happening',
    'joker',
    'ive',
    'jd',
    'll',
    'lrv',
    'leo',
    'away',
    'morpheus',
    'mb',
    'badchoice',
    'mini-keanu',
    'mmm',
    'spongebob',
    'soup-nazi',
    'jetpack',
    'imsorry',
    'red',
    'mordor',
    'oprah',
    'oag',
    'remembers',
    'persian',
    'philosoraptor',
    'jw',
    'patrick',
    'rollsafe',
    'sad-obama',
    'sad-clinton',
    'sadfrog',
    'sad-bush',
    'sad-biden',
    'sad-boehner',
    'saltbae',
    'sarcasticbear',
    'dwight',
    'sb',
    'ss',
    'soa',
    'sf',
    'dodgson',
    'money',
    'snek',
    'sk',
    'sohot',
    'nice',
    'awesome-awkward',
    'awesome',
    'awkward-awesome',
    'awkward',
    'stop-it',
    'fetch',
    'success',
    'scc',
    'ski',
    'aint-got-time',
    'officespace',
    'interesting',
    'toohigh',
    'bs',
    'fine',
    'sparta',
    'ugandanknuck',
    'puffin',
    'whatyear',
    'center',
    'both',
    'winter',
    'xy',
    'buzz',
    'yodawg',
    'yuno',
    'yallgot',
    'gears',
    'bad',
    'elf',
    'chosen',
  ];

  const link = 'https://api.memegen.link/images/';

  const img = `${link}${memeChoice}/${top}/${bottom}/.png?watermark=none`;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Our React Meme Generator</h1>

        {/* /* Dropdown Menu */}
        <label>Create your own meme right here!</label>
        <br></br>

        <form>
          <label>
            First pick a picture: <br></br>
            <select
              value={memeChoice}
              onChange={(e) => {
                setMemeChoice(e.currentTarget.value);
              }}
            >
              {' '}
              {memeNames.map(function (item, index) {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </label>
        </form>

        <img className="meme" src={img} alt="a random Meme" />

        <p>
          <h3>Then choose your text:</h3>
          <label>Top </label>
          <br></br>

          <input value={top} onChange={handleSubmitTop}></input>
          <br></br>
          <br />
          <label>Bottom </label>
          <br></br>
          <input onChange={handleSubmitBottom}></input>
        </p>
        <p>
          <DownloadFile img={img} />
        </p>
      </header>
    </div>
  );
}

export default App;
