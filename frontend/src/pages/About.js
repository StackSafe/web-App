import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './About.module.css'; // Importez le fichier CSS

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.roundedRectangle}>
            <h1>About Dollar Cost Averaging</h1>
            <p className={styles.aboutText}>
              Dollar cost averaging (DCA) is an investment strategy that involves investing a fixed amount of money at regular intervals regardless of the asset's price. By doing so, investors can reduce the impact of market volatility and potentially achieve better long-term results.
            </p>
            <p className={styles.aboutText}>
              DCA is commonly used with stocks, mutual funds, and cryptocurrencies, where investors contribute a fixed amount on a monthly or quarterly basis. This approach allows investors to buy more shares when prices are low and fewer shares when prices are high, effectively averaging out the cost over time.
            </p>
          </div>
          <div className={styles.roundedRectangle}>
            <h2>Automating Dollar Cost Averaging</h2>
            <p className={styles.aboutText}>
              Automating the dollar cost averaging process can provide convenience and discipline to investors. By setting up automated contributions, investors can ensure consistent investments without the need for manual intervention. This can help eliminate emotional decision-making and timing the market, which are often detrimental to investment returns.
            </p>
            <p className={styles.aboutText}>
              There are various platforms and tools available that allow investors to automate dollar cost averaging. These platforms usually provide features such as scheduled recurring investments, portfolio rebalancing, and performance tracking. By leveraging automation, investors can focus on long-term goals and let the system handle the repetitive investment tasks.
            </p>
          </div>
          <div className={styles.roundedRectangle}>
            <h2>Benefits of Automating DCA</h2>
            <p className={styles.aboutText}>
              Automating dollar cost averaging offers several benefits, including:
            </p>
            <ul className={styles.bulletPoints}>
              <li>Consistency: Automated contributions ensure consistent investments, regardless of market conditions.</li>
              <li>Discipline: Removing the need for manual intervention helps investors stay disciplined and avoid emotional decision-making.</li>
              <li>Convenience: Automation eliminates the hassle of remembering and manually executing investment transactions.</li>
              <li>Time-saving: By automating the investment process, investors save time on repetitive tasks.</li>
              <li>Improved returns: DCA combined with automation can lead to better long-term investment returns due to consistent and disciplined investing.</li>
            </ul>
          </div>
          <div className={styles.roundedRectangle}>
            <p className={styles.aboutText}>
              It's important to note that dollar cost averaging, whether automated or not, does not guarantee profits or protect against losses. Market conditions can still impact investment performance.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
