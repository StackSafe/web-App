import React from 'react';
import styles from './Team.module.css';

const OurTeam = () => {
  const teamMembers = [
    { id: 1, name: 'Alia Dramé' , description: 'Front-end Developer', photo: '/alia.jpeg' },
    { id: 2, name: 'Alexis Toppé', description: 'Blockchain Developer', photo: '/alexis.jpeg' },
    { id: 3, name: 'Akli Ait-Ouméziane  ', description: 'Blockchain/Front-end Developer', photo: '/akli.jpeg' },
    { id: 4, name: 'Aymeric Fülop', description: 'Blockchain Developer', photo: '/aymeric.jpeg' },
  ];

  return (
    <div className={styles.content}>
        <p className={styles.introParagraph}>
        SafeStack is a passionate group of four engineering students and crypto enthusiasts who have come together to explore the world of blockchain and cryptocurrencies. Sharing the same experiences at Kryptosphere  and IP Paris, our team is committed to creating innovative solutions and staying at the forefront of the rapidly evolving crypto landscape. As lifelong learners, we strive to continuously enhance our knowledge and skills to better contribute to the growth and success of the SafeStack community.
      </p>
      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.teamMember}>
            <img className={styles.memberPhoto} src={member.photo} alt={member.name} />
            <h3 className={styles.memberName}>{member.name}</h3>
            <p className={styles.memberDescription}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
