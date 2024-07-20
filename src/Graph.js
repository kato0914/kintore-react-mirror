import React from 'react';
import './Graph.css';

function Graph() {
  return (
    <div className="iframe-container">
      <div className="reps">
        <iframe style={{width: '100%', height: '100px'}} seamless frameBorder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQa4bnnBeTteKahYkNTFLxj1A5_j3AzmAGSlCoJj510JD5vnyDf0KUZLx1wCMBMsQWLt-jLO2_HDIy/pubchart?oid=1948388960&amp;format=interactive"></iframe>
        <iframe style={{width: '100%', height: '100px'}} seamless frameBorder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQa4bnnBeTteKahYkNTFLxj1A5_j3AzmAGSlCoJj510JD5vnyDf0KUZLx1wCMBMsQWLt-jLO2_HDIy/pubchart?oid=641247490&amp;format=interactive"></iframe>
      </div>
      <iframe style={{width: '100%', height: '400px'}} seamless frameBorder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQa4bnnBeTteKahYkNTFLxj1A5_j3AzmAGSlCoJj510JD5vnyDf0KUZLx1wCMBMsQWLt-jLO2_HDIy/pubchart?oid=1635007465&amp;format=interactive"></iframe>
      <iframe style={{width: '100%', height: '400px'}} seamless frameBorder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQa4bnnBeTteKahYkNTFLxj1A5_j3AzmAGSlCoJj510JD5vnyDf0KUZLx1wCMBMsQWLt-jLO2_HDIy/pubchart?oid=69353676&amp;format=interactive"></iframe>
    </div>
  );
}

export default Graph;