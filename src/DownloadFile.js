import React from 'react';

class DownloadFile extends React.Component {
  constructor(props) {
    super(props);
  }

  DownloadFile = (props) => {
    fetch(props.img).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'meme.png';
        a.click();
      });
    });
  };

  render() {
    return (
      <div id="container">
        <button onClick={this.DownloadFile}>Download Meme</button>
        <p />
      </div>
    );
  }
}

export default DownloadFile;
