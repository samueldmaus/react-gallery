CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (250) NOT NULL,
	"description" VARCHAR (250) NOT NULL,
	"likes" INT DEFAULT '0'
);

INSERT INTO "gallery" ("path", "description")
VALUES ('images/darkknightrises.jpg', 'Batman: The Dark Knight Rises');

INSERT INTO "gallery" ("path", "description")
VALUES ('images/spiderman.jpg', 'Spider-Man: Into the Spider-Verse'),
('images/avengers_endgame.jpg', 'Marvels Avenger: Endgame'),
('images/inception.jpg', 'Inception'),
('images/ironman1.jpg', 'Iron-Man'),
('images/interstellar.jpg', 'Interstellar'),
('images/martian.jpg', 'The Martian'),
('images/jobs.jpg', 'Steve Jobs'),
('images/thelastjedi.jpg', 'Star Wars: The Last Jedi'),
('images/solo.jpg', 'Solo: A Star War Story'),
('images/guardians.jpg', 'Guardian of the Galaxy');