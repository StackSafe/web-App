import React from 'react';
import styles from './Team.module.css';

const OurTeam = () => {

        const teamMembers = [
          { id: 1, name: 'Alia Dramé', description: 'Front-end Developer', photo: '/alia.jpeg', linkedin: 'https://www.linkedin.com/in/alia-drame/' },
          { id: 2, name: 'Alexis Toppé', description: 'Blockchain Developer', photo: '/alexis.jpeg', linkedin: 'https://www.linkedin.com/in/alexis-toppe/' },
          { id: 3, name: 'Akli Ait-Ouméziane', description: 'Blockchain/Front-end Developer', photo: '/akli.jpeg', linkedin: 'https://www.linkedin.com/in/akli-ait-oumeziane/' },
          { id: 4, name: 'Aymeric Fülop', description: 'Blockchain Developer', photo: '/aymeric.jpeg', linkedin: 'https://www.linkedin.com/in/aymeric-f%C3%BCl%C3%B6p-30a78719a/' },
        ];
      
        return (
            <div className={styles.content}>
              <div className={styles.teamGrid}>
                {teamMembers.map((member) => (
                  <div key={member.id} className={styles.teamMember}>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <img className={styles.memberPhoto} src={member.photo} alt={member.name} />
                    </a>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberDescription}>{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );}
export default OurTeam;
