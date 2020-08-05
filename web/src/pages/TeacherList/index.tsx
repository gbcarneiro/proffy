import React from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const link = "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria: </label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  );
}

export default TeacherList;