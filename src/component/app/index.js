import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import { db } from '../../../firebase-init';
import './app.css';

export default class Scrabble extends Component {
  state = { data: '' };

  componentDidMount() {
    db.ref(`/${moment().endOf('day')}`).on('value', (snap) => {
      this.setState({ data: snap.val() });
    });
  }

  change = (e) => {
    db.ref(`/${moment().endOf('day')}`).set(e.target.value);
    this.setState({ data: e.target.value });
  };

  render() {
    const { change } = this;
    return (
      <main className="board">
        <textarea onChange={change} className="section-one" />
        <section className="section-two">
          <ReactMarkdown className="section-two" source={this.state.data} />
        </section>
      </main>
    );
  }
}
