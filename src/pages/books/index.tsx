import api from "../../services/api";

import React, { useEffect, useState } from "react";
import { BookBox, Container, Content ,Title,MyImage,Paragraph,DateBook} from "./styles";
import Image from "next/image";

import axios from "axios";
import { NewModal } from "../../components/Modal";


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
      .get("/volumes?q=HARRY%20POTTER/items")
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
              <MyImage
                onClick={() =>
                  handleOpenNewModal(
                    book.selfLink,
                    book.volumeInfo?.imageLinks?.thumbnail ||
                      "./assets/404.jpg",
                    book.volumeInfo?.description || "sem descri????o"
                  )
                }
                key={book.id}
                id={book.id}
                src={
                  book.volumeInfo?.imageLinks?.thumbnail || "./assets/404.jpg"
                }
              />
            );
          })}{" "}
        </BookBox>
      </Content>
      <NewModal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <Image src={currentImgBook} width="128" height="171" />
        <Title>{currentBook.volumeInfo.title}</Title>
        <DateBook>
          {new Intl.DateTimeFormat("pt-br").format(new Date(currentDate))}
        </DateBook>
        <Paragraph>{currentDescription}</Paragraph>
      </NewModal>
    </Container>
  );
}
/*<Image src={currentImgBook}/ > */
