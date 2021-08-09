import api from "../../services/api";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import { BookBox, Container, Content } from "./styles";

import axios from "axios";

export default function Home() {
  const [currentDescription, setCurrentDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentImgBook, setCurrentImgBook] = useState("");
  const [currentBook, setCurrentBook] = useState({
    id: String,
    volumeInfo: {
      title: String,
      publisher: String,
      publishedDate: Date,
    },
  });
  const [currentDate, setCurrentDate] = useState(Date);

  async function handleOpenNewModal(
    id: string,
    img: string,
    description: string
  ) {
    await currentBookModal(id);
    setCurrentImgBook(img);
    setCurrentDescription(description);
    setIsOpen(true);
  }
  async function currentBookModal(selfLinkBook: string) {
    const apiBook = axios.create({
      baseURL: selfLinkBook,
    });
    await apiBook
      .get("")
      .then((response) => {
        setCurrentBook(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("ops" + err);
      });

    setCurrentDate(currentBook.volumeInfo.publishedDate);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  const [books, setBooks] = useState({ items: [] });
  useEffect(() => {
    api
      .get("/items")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => {
        console.error("ops" + err);
      });
  }, []);

  return (
    <Container>
      <Content>
        <BookBox>
          {books.items.map((book) => {
            return (
              <img
                onClick={() =>
                  handleOpenNewModal(
                    book.selfLink,
                    book.volumeInfo?.imageLinks?.thumbnail ||
                      "./assets/404.jpg",
                    book.volumeInfo?.description || "sem descrição"
                  )
                }
                key={book.id}
                id={book.id}
                src={
                  book.volumeInfo?.imageLinks?.thumbnail || "./assets/404.jpg"
                }
              />
            );
          })}
        </BookBox>
      </Content>
      <Modal
        isOpen={isOpen}
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
      >
        <button onClick={handleCloseModal} className="react-modal-closed">
          X
        </button>
        <img src={currentImgBook} className="react-modal-book" />
        <h1>{currentBook.volumeInfo.title}</h1>
        <h2>
          {new Intl.DateTimeFormat("pt-br").format(new Date(currentDate))}
        </h2>
        <p>{currentDescription}</p>
      </Modal>
    </Container>
  );
}
