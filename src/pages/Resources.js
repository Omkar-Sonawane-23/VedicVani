import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import krishna from "../assets/resources/krishna.png";
import arjuna from "../assets/resources/arjuna.webp";
import bhisma from "../assets/resources/bhishma.jpeg";
import dhritarashtra from "../assets/resources/dhritharashtra.jpg";
import yudhishthira from "../assets/resources/Yudhishthira.webp";
import sanjaya from "../assets/resources/sanjaya.jpg";
import bhima from "../assets/resources/bhima.jpg";
import nakula from "../assets/resources/nakula.jpg";
import sahadeva from "../assets/resources/sahadeva.jpg";
import duryodhana from "../assets/resources/duryodhana.jpg";
import drona from "../assets/resources/drona.jpg";
import karna from "../assets/resources/karna.webp";
import duhshasana from "../assets/resources/duhshasana.jpg";
import vidura from "../assets/resources/vidura.jpg";
import gandhari from "../assets/resources/gandhari.jpg";
import kunti from "../assets/resources/kunti.jpg";
import shakuni from "../assets/resources/shakuni.jpg";
import ashwatthama from "../assets/resources/ashwatthama.png";
import abhimanyu from "../assets/resources/abhimanyu.jpg";
import subhadra from "../assets/resources/subhadra.jpg";



import book1 from "../assets/resources/Book1.jpg"; // Placeholder path
import book2 from "../assets/resources/Book2.jpg"; // Placeholder path
import book3 from "../assets/resources/Book3.jpg"; // Placeholder path

import "./resources.css"; // Import your CSS file here

const characters = [
  {
    imgSrc: krishna,
    altText: "Krishna",
    title: "Krishna",
    subtitle: "Charioteer and guide to Arjuna, and an incarnation of the god Vishnu.",
    text: "Delivers the teachings of the Gita, revealing profound spiritual and philosophical truths. He explains concepts such as Dharma (duty), Karma (action), and Bhakti (devotion), guiding Arjuna through his moral dilemma.",
    link: "https://en.wikipedia.org/wiki/Krishna"
  },
  {
    imgSrc: arjuna,
    altText: "Arjuna",
    title: "Arjuna",
    subtitle: "Prince and warrior of the Pandavas.",
    text: "The main recipient of Krishna’s teachings. Arjuna is a skilled archer and a central figure in the Mahabharata. His inner conflict about fighting in the war serves as the backdrop for the dialogue of the Gita.",
    link: "https://en.wikipedia.org/wiki/Arjuna"
  },
  {
    imgSrc: bhisma,
    altText: "Bhishma",
    title: "Bhishma",
    subtitle: "Grandfather of both Pandavas and Kauravas.",
    text: "Respected elder and formidable warrior, fighting for the Kauravas due to his vow of loyalty. Bhishma's adherence to his vows, even when they conflict with his sense of right and wrong, is a central theme in his character arc.",
    link: "https://en.wikipedia.org/wiki/Bhishma"
  },
  {
    imgSrc: dhritarashtra,
    altText: "Dhritarashtra",
    title: "Dhritarashtra",
    subtitle: "Blind king of the Kauravas.",
    text: "Father of the Kauravas; his blindness symbolizes his lack of insight and moral blindness. He is often depicted as being torn between his love for his sons and his knowledge of their wrongdoings.",
    link: "https://en.wikipedia.org/wiki/Dhritarashtra"
  },
  {
    imgSrc: sanjaya,
    altText: "Sanjaya",
    title: "Sanjaya",
    subtitle: "Narrator of the Gita and advisor to Dhritarashtra.",
    text: "Blessed with divine vision by the sage Vyasa, allowing him to narrate the events of the battlefield to the blind king. Sanjaya's narration provides an unbiased account of the battle and Krishna's discourse.",
    link: "https://en.wikipedia.org/wiki/Sanjaya"
  },
  {
    imgSrc: yudhishthira,
    altText: "Yudhishthira",
    title: "Yudhishthira",
    subtitle: "Eldest Pandava brother.",
    text: "Known for his unwavering commitment to truth and dharma. Yudhishthira's adherence to righteousness often puts him in difficult situations, but he remains a symbol of virtue throughout the Mahabharata.",
    link: "https://en.wikipedia.org/wiki/Yudhishthira"
  },
  {
    imgSrc: bhima,
    altText: "Bhima",
    title: "Bhima",
    subtitle: "Second Pandava brother.",
    text: "Known for his immense strength and voracious appetite. Bhima is a formidable warrior who plays a crucial role in the battles of the Mahabharata, especially in his confrontations with Duryodhana and other Kauravas.",
    link: "https://en.wikipedia.org/wiki/Bhima"
  },
  {
    imgSrc: nakula,
    altText: "Nakula",
    title: "Nakula",
    subtitle: "Fourth Pandava brother.",
    text: "Known for his handsome appearance and skills with horses. Nakula is also noted for his expertise in swordsmanship and his unwavering loyalty to his brothers.",
    link: "https://en.wikipedia.org/wiki/Nakula"
  },
  {
    imgSrc: sahadeva,
    altText: "Sahadeva",
    title: "Sahadeva",
    subtitle: "Youngest Pandava brother.",
    text: "Known for his wisdom and knowledge of astrology. Sahadeva is often depicted as a quiet but highly intelligent character, providing strategic advice and counsel.",
    link: "https://en.wikipedia.org/wiki/Sahadeva"
  },
  {
    imgSrc: duryodhana,
    altText: "Duryodhana",
    title: "Duryodhana",
    subtitle: "Eldest Kaurava brother and antagonist.",
    text: "Known for his enmity towards the Pandavas and desire for power. Duryodhana's ambition and refusal to share the kingdom lead to the great war of Kurukshetra. His character represents the darker aspects of ambition and pride.",
    link: "https://en.wikipedia.org/wiki/Duryodhana"
  },
  {
    imgSrc: drona,
    altText: "Drona",
    title: "Drona",
    subtitle: "Teacher of the Pandavas and Kauravas.",
    text: "Renowned warrior and mentor, bound by duty to fight for the Kauravas. Drona is a complex character who, despite his close relationship with the Pandavas, remains loyal to his obligations to the Kaurava throne.",
    link: "https://en.wikipedia.org/wiki/Drona"
  },
  {
    imgSrc: karna,
    altText: "Karna",
    title: "Karna",
    subtitle: "Warrior and friend of Duryodhana.",
    text: "Known for his loyalty to Duryodhana, despite being a Pandava by birth. Karna's life is marked by his struggle for recognition and his adherence to the values of friendship and loyalty, even at great personal cost.",
    link: "https://en.wikipedia.org/wiki/Karna"
  },
  {
    imgSrc: duhshasana,
    altText: "Duhshasana",
    title: "Duhshasana",
    subtitle: "Younger brother of Duryodhana.",
    text: "Notorious for his cruelty, particularly in his mistreatment of Draupadi. Duhshasana's actions exemplify the moral decline of the Kauravas and fuel the Pandavas' desire for justice.",
    link: "https://en.wikipedia.org/wiki/Dushasana"
  },
  {
    imgSrc: vidura,
    altText: "Vidura",
    title: "Vidura",
    subtitle: "Advisor to Dhritarashtra and uncle to the Pandavas and Kauravas.",
    text: "Known for his wisdom and righteousness. Vidura often serves as the moral compass of the story, offering sage advice and warnings that are frequently ignored by Dhritarashtra and the Kauravas.",
    link: "https://en.wikipedia.org/wiki/Vidura"
  },
  {
    imgSrc: gandhari,
    altText: "Gandhari",
    title: "Gandhari",
    subtitle: "Queen of the Kauravas and wife of Dhritarashtra.",
    text: "Mother of the Kauravas, who blindfolded herself out of loyalty to her husband. Gandhari's devotion and her eventual curse on Krishna after the war reflect her deep sorrow and the tragic consequences of the conflict.",
    link: "https://en.wikipedia.org/wiki/Gandhari"
  },
  {
    imgSrc: kunti,
    altText: "Kunti",
    title: "Kunti",
    subtitle: "Mother of the Pandavas.",
    text: "Known for her devotion and the sacrifices she made for her children. Kunti's strength and resilience are evident in her efforts to protect and guide her sons through numerous challenges.",
    link: "https://en.wikipedia.org/wiki/Kunti"
  },
  {
    imgSrc: shakuni,
    altText: "Shakuni",
    title: "Shakuni",
    subtitle: "Brother of Gandhari and uncle to the Kauravas.",
    text: "Mastermind behind many of the Kauravas' schemes against the Pandavas. Shakuni's cunning and manipulation are key factors in the escalation of the conflict between the two families.",
    link: "https://en.wikipedia.org/wiki/Shakuni"
  },
  {
    imgSrc: ashwatthama,
    altText: "Ashwatthama",
    title: "Ashwatthama",
    subtitle: "Son of Drona.",
    text: "Fierce warrior fighting for the Kauravas, known for his later acts of vengeance. Ashwatthama's character is marked by his loyalty to his father and his extreme actions after Drona's death, highlighting themes of revenge and the consequences of war.",
    link: "https://en.wikipedia.org/wiki/Ashwatthama"
  },
  {
    imgSrc: abhimanyu,
    altText: "Abhimanyu",
    title: "Abhimanyu",
    subtitle: "Son of Arjuna and Subhadra.",
    text: "Young and valiant warrior known for his bravery and tragic death in the war. Abhimanyu's heroism and the circumstances of his death serve as poignant reminders of the cost of conflict.",
    link: "https://en.wikipedia.org/wiki/Abhimanyu"
  },
  {
    imgSrc: subhadra,
    altText: "Subhadra",
    title: "Subhadra",
    subtitle: "Sister of Krishna and wife of Arjuna.",
    text: "Mother of Abhimanyu, representing the familial bonds and connections within the epic. Subhadra's role, though more peripheral, underscores the interconnectedness of the characters and their shared destinies.",
    link: "https://en.wikipedia.org/wiki/Subhadra"
  }
];

const books = [
  {
    imgSrc: book1,
    altText: "Bhagavad Gita: A New Translation",
    title: "Bhagavad Gita: A New Translation",
    author: "Stephen Mitchell",
    text: "A modern translation of the Gita that retains the power and poetic beauty of the original text.",
    link: "https://www.amazon.com/dp/0609810340"
  },
  {
    imgSrc: book2,
    altText: "Bhagavad Gita As It Is",
    title: "Bhagavad Gita As It Is",
    author: "A.C. Bhaktivedanta Swami Prabhupada",
    text: "A comprehensive commentary on the Gita, presenting the teachings in the context of the Bhakti tradition.",
    link: "https://www.amazon.com/dp/089213285X"
  },
  {
    imgSrc: book3,
    altText: "The Essence of the Bhagavad Gita",
    title: "The Essence of the Bhagavad Gita",
    author: "Eknath Easwaran",
    text: "A readable and practical guide to the wisdom of the Gita, written by a respected teacher of meditation.",
    link: "https://www.amazon.com/dp/1586380192"
  }
];


export default function Resources() {
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  // Chunk the characters array into arrays of size 4
  const chunkedCharacters = chunkArray(characters, 4);
  // Chunk the books array into arrays of size 3 (or any other size you prefer)
  const chunkedBooks = chunkArray(books, 3);

  return (
    <>
    <h1>Characters</h1>
      <Container>
        {chunkedCharacters.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((character, columnIndex) => (
              <Col key={columnIndex}>
                <Card>
                  <Card.Body>
                    <Card.Img variant="top" src={character.imgSrc} alt={character.altText} />
                    <Card.Title>{character.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {character.subtitle}
                    </Card.Subtitle>
                    <Card.Text>
                      {character.text}
                    </Card.Text>
                    <Card.Link href={character.link} target="_blank" rel="noopener noreferrer">WIKIPEDIA</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Container>

      <h1>Books</h1>
      <Container>
        {chunkedBooks.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((book, columnIndex) => (
              <Col key={columnIndex}>
                <Card>
                  <Card.Body>
                    <Card.Img variant="top" src={book.imgSrc} alt={book.altText} />
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {book.author}
                    </Card.Subtitle>
                    <Card.Text>
                      {book.text}
                    </Card.Text>
                    <Card.Link href={book.link} target="_blank" rel="noopener noreferrer">BUY ON AMAZON</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </>
  );
}