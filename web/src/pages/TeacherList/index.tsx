import React, { useState, FormEvent } from 'react';

import './styles.css';

import searchIcon from '../../assets/images/icons/procurar.svg';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import InputBlock from '../../components/InputBlock';
import Select from '../../components/Select'; 

import api from '../../services/api';


function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function handleSearchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setTeachers(response.data);
  }


  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSearchTeachers}>
        <Select 
            name="subject" 
            label="Matéria" 
            value={subject}
            onChange={(e) => {setSubject(e.target.value)}}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Química', label: 'Química' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'História', label: 'História' },
              { value: 'Física', label: 'Física' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Literatura', label: 'Literatura' },
              { value: 'Redação', label: 'Redação' },
              { value: 'Geografia', label: 'Geografia' },
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da Semana" 
            value={week_day}
            onChange={(e) => {setWeekDay(e.target.value)}}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <InputBlock 
            type="time" 
            name="time" 
            label="Hora" 
            value={time}
            onChange={(e) => {setTime(e.target.value)}}
          />     
          <button type="submit">
            <img src={searchIcon} alt="Buscar"/>
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem key={teacher.id} teacher={teacher} />
          );
        })}
      </main>
    </div>
  );
}

export default TeacherList;