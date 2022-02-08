import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import * as useGetTopSongs from "../../hooks/useGetTopSongs";
import { Song } from "../../models/SongModel";

const songsMock: Song[] = [
  {
      "im:name": {
          "label": "Encanto (Original Motion Picture Soundtrack)"
      },
      "im:image": [
          {
              "label": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/94/4d/9a/944d9a8d-0549-f537-5706-5b083bd84a7d/21UM1IM38949.rgb.jpg/55x55bb.png",
              "attributes": {
                  "height": "55"
              }
          },
          {
              "label": "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/94/4d/9a/944d9a8d-0549-f537-5706-5b083bd84a7d/21UM1IM38949.rgb.jpg/60x60bb.png",
              "attributes": {
                  "height": "60"
              }
          },
          {
              "label": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/94/4d/9a/944d9a8d-0549-f537-5706-5b083bd84a7d/21UM1IM38949.rgb.jpg/170x170bb.png",
              "attributes": {
                  "height": "170"
              }
          }
      ],
      "im:itemCount": {
          "label": "44"
      },
      "im:price": {
          "label": "$7.99",
          "attributes": {
              "amount": "7.99",
              "currency": "USD"
          }
      },
      "im:contentType": {
          "im:contentType": {
              "attributes": {
                  "term": "Album",
                  "label": "Album"
              }
          },
          "attributes": {
              "term": "Music",
              "label": "Music"
          }
      },
      "rights": {
          "label": "℗ 2021 Walt Disney Records"
      },
      "title": {
          "label": "Encanto (Original Motion Picture Soundtrack) - Lin-Manuel Miranda, Germaine Franco, Stephanie Beatriz, Olga Merediz & Jessica Darrow"
      },
      "link": {
          "attributes": {
              "rel": "alternate",
              "type": "text/html",
              "href": "https://music.apple.com/us/album/encanto-original-motion-picture-soundtrack/1594677532?uo=2"
          }
      },
      "id": {
          "label": "https://music.apple.com/us/album/encanto-original-motion-picture-soundtrack/1594677532?uo=2",
          "attributes": {
              "im:id": "1594677532"
          }
      },
      "im:artist": {
          "label": "Lin-Manuel Miranda, Germaine Franco, Stephanie Beatriz, Olga Merediz & Jessica Darrow",
          "attributes": {
              "href": "https://music.apple.com/us/artist/lin-manuel-miranda/329027198?uo=2"
          }
      },
      "category": {
          "attributes": {
              "im:id": "1166",
              "term": "Musicals",
              "scheme": "https://music.apple.com/us/genre/music-soundtrack-musicals/id1166?uo=2",
              "label": "Musicals"
          }
      },
      "im:releaseDate": {
          "label": "2021-11-19T00:00:00-07:00",
          "attributes": {
              "label": "November 19, 2021"
          }
      }
  },
  {
      "im:name": {
          "label": "Rumours"
      },
      "im:image": [
          {
              "label": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/55x55bb.png",
              "attributes": {
                  "height": "55"
              }
          },
          {
              "label": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/60x60bb.png",
              "attributes": {
                  "height": "60"
              }
          },
          {
              "label": "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/170x170bb.png",
              "attributes": {
                  "height": "170"
              }
          }
      ],
      "im:itemCount": {
          "label": "11"
      },
      "im:price": {
          "label": "$6.99",
          "attributes": {
              "amount": "6.99",
              "currency": "USD"
          }
      },
      "im:contentType": {
          "im:contentType": {
              "attributes": {
                  "term": "Album",
                  "label": "Album"
              }
          },
          "attributes": {
              "term": "Music",
              "label": "Music"
          }
      },
      "rights": {
          "label": "℗ 2004 Warner Records Inc."
      },
      "title": {
          "label": "Rumours - Fleetwood Mac"
      },
      "link": {
          "attributes": {
              "rel": "alternate",
              "type": "text/html",
              "href": "https://music.apple.com/us/album/rumours/594061854?uo=2"
          }
      },
      "id": {
          "label": "https://music.apple.com/us/album/rumours/594061854?uo=2",
          "attributes": {
              "im:id": "594061854"
          }
      },
      "im:artist": {
          "label": "Fleetwood Mac",
          "attributes": {
              "href": "https://music.apple.com/us/artist/fleetwood-mac/158038?uo=2"
          }
      },
      "category": {
          "attributes": {
              "im:id": "21",
              "term": "Rock",
              "scheme": "https://music.apple.com/us/genre/music-rock/id21?uo=2",
              "label": "Rock"
          }
      },
      "im:releaseDate": {
          "label": "1977-02-04T00:00:00-07:00",
          "attributes": {
              "label": "February 4, 1977"
          }
      }
  },
  {
      "im:name": {
          "label": "30"
      },
      "im:image": [
          {
              "label": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/55x55bb.png",
              "attributes": {
                  "height": "55"
              }
          },
          {
              "label": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/60x60bb.png",
              "attributes": {
                  "height": "60"
              }
          },
          {
              "label": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/170x170bb.png",
              "attributes": {
                  "height": "170"
              }
          }
      ],
      "im:itemCount": {
          "label": "12"
      },
      "im:price": {
          "label": "$10.99",
          "attributes": {
              "amount": "10.99",
              "currency": "USD"
          }
      },
      "im:contentType": {
          "im:contentType": {
              "attributes": {
                  "term": "Album",
                  "label": "Album"
              }
          },
          "attributes": {
              "term": "Music",
              "label": "Music"
          }
      },
      "rights": {
          "label": "℗ 2021 Melted Stone under exclusive license to Columbia Records, a Division of Sony Music Entertainment"
      },
      "title": {
          "label": "30 - Adele"
      },
      "link": {
          "attributes": {
              "rel": "alternate",
              "type": "text/html",
              "href": "https://music.apple.com/us/album/30/1590035691?uo=2"
          }
      },
      "id": {
          "label": "https://music.apple.com/us/album/30/1590035691?uo=2",
          "attributes": {
              "im:id": "1590035691"
          }
      },
      "im:artist": {
          "label": "Adele",
          "attributes": {
              "href": "https://music.apple.com/us/artist/adele/262836961?uo=2"
          }
      },
      "category": {
          "attributes": {
              "im:id": "14",
              "term": "Pop",
              "scheme": "https://music.apple.com/us/genre/music-pop/id14?uo=2",
              "label": "Pop"
          }
      },
      "im:releaseDate": {
          "label": "2021-11-19T00:00:00-07:00",
          "attributes": {
              "label": "November 19, 2021"
          }
      }
  },
  {
      "im:name": {
          "label": "Sing 2 (Original Motion Picture Soundtrack)"
      },
      "im:image": [
          {
              "label": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c2/d2/6d/c2d26dcf-7e1b-ed4c-f598-f8dcb42b0f75/21UM1IM35664.rgb.jpg/55x55bb.png",
              "attributes": {
                  "height": "55"
              }
          },
          {
              "label": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/c2/d2/6d/c2d26dcf-7e1b-ed4c-f598-f8dcb42b0f75/21UM1IM35664.rgb.jpg/60x60bb.png",
              "attributes": {
                  "height": "60"
              }
          },
          {
              "label": "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/c2/d2/6d/c2d26dcf-7e1b-ed4c-f598-f8dcb42b0f75/21UM1IM35664.rgb.jpg/170x170bb.png",
              "attributes": {
                  "height": "170"
              }
          }
      ],
      "im:itemCount": {
          "label": "17"
      },
      "im:price": {
          "label": "$9.99",
          "attributes": {
              "amount": "9.99",
              "currency": "USD"
          }
      },
      "im:contentType": {
          "im:contentType": {
              "attributes": {
                  "term": "Album",
                  "label": "Album"
              }
          },
          "attributes": {
              "term": "Music",
              "label": "Music"
          }
      },
      "rights": {
          "label": "This Compilation ℗ 2021 Universal Pictures, a division of Universal City Studios LLC, under exclusive license to Republic Records, a division of UMG Recordings, Inc."
      },
      "title": {
          "label": "Sing 2 (Original Motion Picture Soundtrack) - Various Artists"
      },
      "link": {
          "attributes": {
              "rel": "alternate",
              "type": "text/html",
              "href": "https://music.apple.com/us/album/sing-2-original-motion-picture-soundtrack/1592745677?uo=2"
          }
      },
      "id": {
          "label": "https://music.apple.com/us/album/sing-2-original-motion-picture-soundtrack/1592745677?uo=2",
          "attributes": {
              "im:id": "1592745677"
          }
      },
      "im:artist": {
          "label": "Various Artists"
      },
      "category": {
          "attributes": {
              "im:id": "1166",
              "term": "Musicals",
              "scheme": "https://music.apple.com/us/genre/music-soundtrack-musicals/id1166?uo=2",
              "label": "Musicals"
          }
      },
      "im:releaseDate": {
          "label": "2021-12-17T00:00:00-07:00",
          "attributes": {
              "label": "December 17, 2021"
          }
      }
  },
]

test("If songs are loading, spinner is visible", () => {
  jest
    .spyOn(useGetTopSongs, "useGetTopSongs")
    .mockReturnValue({ loading: true, songs: [], error: false });
  render(<App />);

  const spinner = screen.getByRole("spinner");

  expect(spinner).toBeVisible();
});

test("If songs are failed to load and error occured, error message should be visible", () => {
  jest
    .spyOn(useGetTopSongs, "useGetTopSongs")
    .mockReturnValue({ loading: false, songs: [], error: true });
  render(<App />);

  const errorMessage = screen.getByText("Error occured while fetching data, please try again later.");

  expect(errorMessage).toBeVisible();
});

test("If songs are loaded, songs list should be visible", () => {
  jest
    .spyOn(useGetTopSongs, "useGetTopSongs")
    .mockReturnValue({ loading: false, songs: songsMock, error: false });
  render(<App />);

  const song1Title = screen.getByText("Encanto (Original Motion Picture Soundtrack)");
  const song1Autor = screen.getByText("Lin-Manuel Miranda, Germaine Franco, Stephanie Beatriz, Olga Merediz & Jessica Darrow");

  const song2Title = screen.getByText("Rumours");
  const song2Autor = screen.getByText("Fleetwood Mac");

  expect(song1Title).toBeVisible();
  expect(song1Autor).toBeVisible();

  expect(song2Title).toBeVisible();
  expect(song2Autor).toBeVisible();
});

test("If Favorite Albums tab is pressed and there are no favorite albums, message should be shown", () => {
  jest
    .spyOn(useGetTopSongs, "useGetTopSongs")
    .mockReturnValue({ loading: false, songs: songsMock, error: false });
  render(<App />);

  const favoriteTab = screen.getByTestId("favorite");

  fireEvent.click(favoriteTab);

  const noFavoriteAlbumsMessage = screen.getByText("There are no favorite albums");

  expect(noFavoriteAlbumsMessage).toBeVisible();
});

test("If category filter button is pressed, only songs with selected category should be visible", () => {
  jest
    .spyOn(useGetTopSongs, "useGetTopSongs")
    .mockReturnValue({ loading: false, songs: songsMock, error: false });
  render(<App />);

  const rockCategoryButton = screen.getAllByText("Rock")[0];

  fireEvent.click(rockCategoryButton);

  const elementsWithTextPop = screen.getAllByText("Pop");

  expect(elementsWithTextPop).toHaveLength(1);
  expect(elementsWithTextPop[0].tagName).toBe("BUTTON");
});

